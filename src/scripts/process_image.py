
from PIL import Image
import sys
import os
import pillow_avif

def process_image(input_path, output_path):
    """
    Takes a PNG or AVIF file, fills the sides to obtain a square image with a white background,
    and then resizes the image to 600x600.
    """
    try:
        # Open the input image
        img = Image.open(input_path)

        # Get original dimensions
        width, height = img.size

        # Determine the size of the new square image
        new_size = max(width, height)

        # Create a new white background image
        new_img = Image.new("RGB", (new_size, new_size), (255, 255, 255))

        # Paste the original image onto the center of the new image
        paste_x = (new_size - width) // 2
        paste_y = (new_size - height) // 2
        new_img.paste(img, (paste_x, paste_y), img if img.mode == 'RGBA' else None)

        # Resize the image to 600x600
        final_img = new_img.resize((600, 600), Image.LANCZOS)

        # Save the processed image
        final_img.save(output_path)
        print(f"Image saved to {output_path}")

    except FileNotFoundError:
        print(f"Error: The file '{input_path}' was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python process_image.py <input_folder> <output_folder>")
        sys.exit(1)

    input_folder = sys.argv[1]
    output_folder = sys.argv[2]

    if not os.path.isdir(input_folder):
        print(f"Error: Input folder '{input_folder}' not found.")
        sys.exit(1)

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        if filename.lower().endswith((".png", ".avif")):
            input_path = os.path.join(input_folder, filename)
            output_filename, _ = os.path.splitext(filename)
            output_path = os.path.join(output_folder, f"{output_filename}_600x600.png")
            process_image(input_path, output_path)
