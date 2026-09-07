import os
import re

def clean_classes(match):
    classes = match.group(1).split()
    # Remove all text- sizes
    clean = [c for c in classes if not c.startswith('text-') and not c.startswith('sm:text-') and not c.startswith('md:text-') and not c.startswith('lg:text-') and not c.startswith('xl:text-')]
    
    # We want to infer the intended size based on the highest size found in the mess.
    # Actually, we can just replace based on the file and line, but it's easier to just look at the highest value
    # But it's probably easier to just do a smart regex replace on the python side.
    
    # Let's extract the "largest" size
    sizes_str = " ".join([c for c in classes if 'text-' in c])
    
    if 'text-[110px]' in sizes_str or 'text-[96px]' in sizes_str or 'text-[88px]' in sizes_str or 'text-[80px]' in sizes_str or 'text-[72px]' in sizes_str:
        clean.append('text-4xl md:text-6xl lg:text-[80px]')
    elif 'text-8xl' in sizes_str:
        clean.append('text-4xl md:text-6xl lg:text-8xl')
    elif 'text-7xl' in sizes_str:
        clean.append('text-3xl md:text-5xl lg:text-7xl')
    elif 'text-6xl' in sizes_str:
        clean.append('text-3xl md:text-4xl lg:text-6xl')
    elif 'text-5xl' in sizes_str:
        clean.append('text-2xl md:text-4xl lg:text-5xl')
    elif 'text-4xl' in sizes_str:
        clean.append('text-xl md:text-2xl lg:text-4xl')
    elif 'text-3xl' in sizes_str:
        clean.append('text-xl md:text-2xl lg:text-3xl')
    elif 'text-2xl' in sizes_str:
        clean.append('text-lg md:text-xl lg:text-2xl')
    else:
        clean.extend([c for c in classes if 'text-' in c]) # Keep originals if no large text
        
    return f'className="{" ".join(clean)}"'

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            new_content = re.sub(r'className="([^"]+)"', clean_classes, content)
            
            with open(filepath, 'w') as f:
                f.write(new_content)
