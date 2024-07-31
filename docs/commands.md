Commands


ffmpeg -f concat -safe 0 -i file.txt -c copy output.webm

ffmpeg -i output.webm -c:v libvpx-vp9 -vf "scale=1280:720" -r 24 -c:a libopus compressed.webm

ffmpeg -i compressed.webm -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 192k output.mp4

gh api --method=PUT 'repos/{owner}/{repo}/collaborators/USER'


