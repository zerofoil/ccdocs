# replacer.py
# Replacer tool to efficiently replace text in documentation

find = ""
replace = ""

import os
total = 0

for path, _, files in os.walk("docs"):
    if path.contains("/.") continue
    for file in files:
        filepath = os.path.join(path, file)
        with open(filepath, "r", encoding="utf-8") as this:
            text = this.read()
        if find in text:
            text = text.replace(find, replace)
            with open(filepath, "w", encoding="utf-8") as this:
                this.write(text)
            
            total += 1

print(f"Successfully replaced text in {total} files.")