Demo

We have implemented Phase 1 of our project.

Phase 1 -Food Inspector

Using AI for Vision we can detect if fruits/vegetables are rotten. The system can take queries to return total loss, total damaged
from day/week/month and notify user on which boxes have to be replaced.

We use Open Source code and weights running local machine for privacy. This sytem can be installed one existing machine, we 
recommend using a PC with GPU/Graphics Processing unit for fast analysis.

Phase 2 
Involves processing CCTV videos over large period of tume. To build a time-series map related to efficiency of supermarker/warehouse.

- Algorithm
  - Dynamic video stream sampler - Reduce computation cost
    - We start the pipleine by using Frame every 30 secs from CCTV stream
    - Each frame is then filtered by CV feature algorithm for difference in Pixel invariant to light
    - For each accepted Frame, we update Real-time mmap using VLM equipped algorithm.
    - Based on the footfall/traffic we can increase/decrease the schedule of Image capture(30 secs).
    - During peak hours, calcuated from front-door CCTV we reduce the duration and in off-peak hours we increase the duration.
    - The system pauses itself during closed time to eliminate unnecessart computation. This reduced power consumpation compared to 24x7 system/

  - Anonymizer  - Privacy by design 
    - Copy the CCTV video into system.
    - blur faces and rewrite image for input pipeline
    - Delete the copied video.
    - Privacy by design, easy to use with available CV library, without decreasing efficiency of proposed system.



- Video Creation

ffmpeg -f concat -safe 0 -i file.txt -c copy output.webm

ffmpeg -i output.webm -c:v libvpx-vp9 -vf "scale=1280:720" -r 24 -c:a libopus compressed.webm

ffmpeg -i compressed.webm -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 192k output.mp4

