#!/bin/bash
sed -i 's/hover:bg-white hover:text-black transition-colors text-foreground hover:bg-foreground hover:text-background/hover:bg-foreground hover:text-background transition-colors text-foreground/g' app/garage/page.tsx
