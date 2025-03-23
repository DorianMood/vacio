#/bin/bash

for file in *.mp4; do
  ffmpeg -i "$file" -vf "scale=min(iw\,1920):-2" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 192k "${file%.mp4}.webm"
done
