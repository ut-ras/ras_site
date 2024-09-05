import os

# Define the function to process the Markdown file
def process_md_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    new_lines = []
    in_front_matter = False  # Flag to track if we are in front matter section

    for line in lines:
        if line.startswith("---"):
            if not in_front_matter:
                in_front_matter = True  # Start of front matter
            else:
                in_front_matter = False  # End of front matter
            continue  # Skip the lines with '---'
        
        if in_front_matter:
            if line.startswith("layout:"):
                continue  # Skip the "layout" line
            elif line.startswith("title:"):
                new_lines.append(f"# {line.replace('title: ', '').strip()}\n")
            elif line.startswith("shorttitle:"):
                new_lines.append(f"## {line.replace('shorttitle: ', '').strip()}\n")
            elif line.startswith("imagepath:"):
                new_lines.append(f"## {line.strip()}\n")
        else:
            new_lines.append(line)

    # Write the processed content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(new_lines)


# Main function to loop through files in the current directory
def process_markdown_files():
    current_dir = os.getcwd()  # Get the current directory

    for filename in os.listdir(current_dir):
        if filename.endswith(".md"):
            file_path = os.path.join(current_dir, filename)
            process_md_file(file_path)
            print(f"Processed {filename}")

# Run the function to process the Markdown files
if __name__ == "__main__":
    process_markdown_files()
