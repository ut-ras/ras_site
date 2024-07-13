from PIL import Image
import os

def invert_black_to_white(image_path):
    # Open the image
    image = Image.open(image_path).convert("RGBA")
    pixels = image.load()

    # Convert black pixels to white
    for y in range(image.size[1]):
        for x in range(image.size[0]):
            if pixels[x, y] == (0, 0, 0, 255):  # Check if pixel is black
                pixels[x, y] = (255, 255, 255, 255)  # Change to white

    # Save the image with _inverted suffix
    base_name, ext = os.path.splitext(image_path)
    new_image_path = f"{base_name}_inverted{ext}"
    image.save(new_image_path)

    print(f"Saved inverted image as: {new_image_path}")

# Example usage
image_path = "./logo.png"
invert_black_to_white(image_path)
