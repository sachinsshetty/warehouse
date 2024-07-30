Pre processing 


We pre process fruits and vegetables using SAM and SAM  using prompts to find Region of Interest.

Next we use llava/moondream to identify if the segmented image contains fresh or stale items.

This helps to improve the efficiency of VLM that works on a low resolution image .