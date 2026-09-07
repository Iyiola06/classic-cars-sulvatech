#!/bin/bash
# Replaces text-foreground with text-white in hero sections (usually the first section of a page)

# Specifically for app/page.tsx
sed -i 's/text-foreground\/90 md:text-foreground\/60/text-white\/90/g' app/page.tsx
sed -i 's/text-foreground\/90 md:text-foreground\/70/text-white\/90/g' app/page.tsx
sed -i '/<h1 / s/className="/className="text-white /' app/page.tsx
sed -i 's/from-background\/95 via-background\/70 to-background\/95/from-[#050505]\/95 via-[#050505]\/70 to-[#050505]\/95/g' app/page.tsx
sed -i 's/from-background\/95 via-background\/40/from-[#050505]\/95 via-[#050505]\/40/g' app/page.tsx
sed -i 's/from-background\/90 via-transparent/from-[#050505]\/90 via-transparent/g' app/page.tsx

# app/partners/page.tsx
sed -i 's/dark:text-white//g' app/partners/page.tsx
sed -i 's/dark:text-white\/70//g' app/partners/page.tsx
sed -i 's/text-foreground\/70/text-white\/70/g' app/partners/page.tsx
sed -i '/<h1 / s/className="/className="text-white /' app/partners/page.tsx
sed -i 's/from-background\/95 via-background\/70/from-[#050505]\/95 via-[#050505]\/70/g' app/partners/page.tsx

# app/community/page.tsx
sed -i '/<h1 / s/className="/className="text-white /' app/community/page.tsx
sed -i 's/text-foreground\/60/text-white\/80/g' app/community/page.tsx
sed -i 's/from-background\/95 via-background\/70 to-background\/30/from-[#050505]\/95 via-[#050505]\/70 to-[#050505]\/30/g' app/community/page.tsx
sed -i 's/from-background via-transparent/from-[#050505] via-transparent/g' app/community/page.tsx

# app/archive/page.tsx
sed -i '/<h1 / s/className="/className="text-white /' app/archive/page.tsx
sed -i 's/text-foreground\/70/text-white\/80/g' app/archive/page.tsx
sed -i 's/from-background\/95 via-background\/70 to-background\/30/from-[#050505]\/95 via-[#050505]\/70 to-[#050505]\/30/g' app/archive/page.tsx
sed -i 's/from-background via-transparent/from-[#050505] via-transparent/g' app/archive/page.tsx

# app/stories/page.tsx
sed -i '/<h1 / s/className="/className="text-white /' app/stories/page.tsx
sed -i 's/dark:text-white//g' app/stories/page.tsx
sed -i 's/text-foreground\/50/text-white\/60/g' app/stories/page.tsx
sed -i 's/dark:text-white\/80//g' app/stories/page.tsx
sed -i 's/from-background\/95 via-background\/70/from-[#050505]\/95 via-[#050505]\/70/g' app/stories/page.tsx

