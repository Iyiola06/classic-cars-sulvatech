#!/bin/bash
sed -i 's/!bg-background\/20/!bg-foreground\/10/g' app/garage/page.tsx
sed -i 's/fill-white text-white/fill-foreground text-foreground/g' app/garage/page.tsx
sed -i 's/text-white hover:text-black/text-foreground hover:bg-foreground hover:text-background/g' app/garage/page.tsx
sed -i 's/hover:text-white hover:border-red-500 transition-colors text-white hover:text-white/hover:text-white hover:border-red-500 transition-colors text-foreground hover:text-white/g' app/garage/page.tsx
