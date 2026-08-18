import os
import re

root_dir = r"c:\Users\Rohan\.gemini\antigravity\scratch\eic_redesign"
pattern = re.compile(r'620614', re.IGNORECASE)
replacement = 'ea1012'

for subdir, dirs, files in os.walk(root_dir):
    # skip node_modules and .next
    if 'node_modules' in dirs:
        dirs.remove('node_modules')
    if '.next' in dirs:
        dirs.remove('.next')
    if '.git' in dirs:
        dirs.remove('.git')
        
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js', '.css')):
            filepath = os.path.join(subdir, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if pattern.search(content):
                    new_content = pattern.sub(replacement, content)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {filepath}")
            except Exception as e:
                print(f"Error reading {filepath}: {e}")
