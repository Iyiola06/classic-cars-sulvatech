#!/bin/bash
sed -i 's/ \/80//g' app/stories/page.tsx
sed -i 's/text-foreground\/80 /text-white\/80 /g' app/stories/page.tsx
sed -i 's/text-foreground\/80/text-white\/80/g' app/stories/page.tsx
sed -i 's/<p className="font-medium leading-relaxed/<p className="text-white\/80 font-medium leading-relaxed/g' app/stories/page.tsx
