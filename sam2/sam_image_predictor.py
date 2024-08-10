import cv2
import torch
import numpy as np
import supervision as sv
from PIL import Image
from sam2.sam2_image_predictor import SAM2ImagePredictor

# environment settings
# use bfloat16
torch.autocast(device_type="cuda", dtype=torch.bfloat16).__enter__()

if torch.cuda.get_device_properties(0).major >= 8:
    # turn on tfloat32 for Ampere GPUs (https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices)
    torch.backends.cuda.matmul.allow_tf32 = True
    torch.backends.cudnn.allow_tf32 = True

# build SAM2 image predictor


sam2_predictor = SAM2ImagePredictor.from_pretrained("facebook/sam2-hiera-tiny")

img_path = 'truck.jpg'

image = Image.open(img_path)

sam2_predictor.set_image(np.array(image.convert("RGB")))




# Results is a list of dict with the following structure:
results = [
    {
        'scores': tensor([0.7969, 0.6469, 0.6002, 0.4220], device='cuda:0'), 
        'labels': ['car', 'tire', 'tire', 'tire'], 
        'boxes': tensor([[  89.3244,  278.6940, 1710.3505,  851.5143],
                        [1392.4701,  554.4064, 1628.6133,  777.5872],
                        [ 436.1182,  621.8940,  676.5255,  851.6897],
                        [1236.0990,  688.3547, 1400.2427,  753.1256]], device='cuda:0')
    }
]


# get the box prompt for SAM 2
input_boxes = results[0]["boxes"].cpu().numpy()

masks, scores, logits = sam2_predictor.predict(
    point_coords=None,
    point_labels=None,
    box=input_boxes,
    multimask_output=False,
)


"""
Post-process the output of the model to get the masks, scores, and logits for visualization
"""
# convert the shape to (n, H, W)
if masks.ndim == 3:
    masks = masks[None]
    scores = scores[None]
    logits = logits[None]
elif masks.ndim == 4:
    masks = masks.squeeze(1)


confidences = results[0]["scores"].cpu().numpy().tolist()
class_names = results[0]["labels"]

labels = [
    f"{class_name} {confidence:.2f}"
    for class_name, confidence
    in zip(class_names, confidences)
]

"""
Visualize image with supervision useful API
"""
img = cv2.imread(img_path)
detections = sv.Detections(
    xyxy=input_boxes,  # (n, 4)
    mask=masks,  # (n, h, w)
)

box_annotator = sv.BoxAnnotator()
annotated_frame = box_annotator.annotate(scene=img.copy(), detections=detections, labels=labels)
cv2.imwrite("groundingdino_annotated_image.jpg", annotated_frame)

mask_annotator = sv.MaskAnnotator()
annotated_frame = mask_annotator.annotate(scene=annotated_frame, detections=detections)
cv2.imwrite("grounded_sam2_annotated_image_with_mask.jpg", annotated_frame)