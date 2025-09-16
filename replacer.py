# replacer.py
# Replacer tool to efficiently replace text in documentation

find = ""
replace = ""

import os
total = 0

for path, _, files in os.walk("docs"):
    if "/." in path: continue
    for file in files:
        if ".md" not in file: continue
        filepath = os.path.join(path, file)
        with open(filepath, "r", encoding="utf-8") as this:
            try:
                text = this.read()
            except Exception:
                print(f"Error at: {filepath}")
        if find in text:
            if replace != "":
                text = text.replace(find, replace)
            else:
                print(f"Found | {filepath}")
            with open(filepath, "w", encoding="utf-8") as this:
                this.write(text)
            total += 1

print(f"Successfully replaced text in {total} files.")