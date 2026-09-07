#!/bin/bash
# app/archive/page.tsx
sed -i 's/text-white\/60/text-foreground\/60/g' app/archive/page.tsx
sed -i 's/text-white\/80/text-foreground\/80/g' app/archive/page.tsx
sed -i 's/text-white\/70/text-foreground\/70/g' app/archive/page.tsx
sed -i 's/group-hover:text-white\/90/group-hover:text-foreground\/90/g' app/archive/page.tsx
sed -i 's/group-hover:text-white\/80/group-hover:text-foreground\/80/g' app/archive/page.tsx
# Re-apply to hero only
sed -i '60,75 s/text-foreground\/60/text-white\/60/g' app/archive/page.tsx
sed -i '60,75 s/text-foreground\/80/text-white\/80/g' app/archive/page.tsx

# app/stories/page.tsx
sed -i 's/text-white\/60/text-foreground\/60/g' app/stories/page.tsx
sed -i 's/text-white\/80/text-foreground\/80/g' app/stories/page.tsx
# Re-apply to hero only
sed -i '65,80 s/text-foreground\/60/text-white\/60/g' app/stories/page.tsx
sed -i '65,80 s/text-foreground\/80/text-white\/80/g' app/stories/page.tsx

# app/community/page.tsx
sed -i 's/text-white\/80/text-foreground\/80/g' app/community/page.tsx
sed -i 's/text-white\/60/text-foreground\/60/g' app/community/page.tsx
# Re-apply to hero only
sed -i '25,40 s/text-foreground\/80/text-white\/80/g' app/community/page.tsx
sed -i '25,40 s/text-foreground\/60/text-white\/60/g' app/community/page.tsx

# app/partners/page.tsx
sed -i 's/text-white\/70/text-foreground\/70/g' app/partners/page.tsx
sed -i 's/text-white\/60/text-foreground\/60/g' app/partners/page.tsx
# Re-apply to hero only
sed -i '65,85 s/text-foreground\/70/text-white\/70/g' app/partners/page.tsx

