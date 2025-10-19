#!/usr/bin/env nu

export def main [] {
  ls
  | get name
  | path parse
  | where extension == "mp4"
  | each {|f|
      ffmpeg -i $"($f.stem).mp4" -map_metadata -1 -c:v libvpx-vp9 -b:v 0 -crf 30 -cpu-used 2 -row-mt 1 -tile-columns 2 -c:a libopus -b:a 128k $"($f.stem).webm"
  }
}
