#!/bin/bash

# Check if the directory is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

# Assign the directory to a variable
directory=$1

# Use find to locate all .jsx files and rename them to .tsx
find "$directory" -type f -name "*.jsx" | while read -r file; do
  new_file="${file%.jsx}.tsx"
  mv "$file" "$new_file"
  echo "Renamed $file to $new_file"
done

echo "All .jsx files have been renamed to .tsx"
