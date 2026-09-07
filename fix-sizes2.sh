#!/bin/bash
# Remove the negative lookbehinds, use simpler matching

find app -type f -name "*.tsx" -exec sed -i -E 's/text-4xl md:text-5xl/text-3xl md:text-5xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-5xl md:text-6xl/text-3xl md:text-6xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-5xl md:text-7xl/text-3xl md:text-7xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-4xl sm:text-5xl md:text-7xl/text-3xl sm:text-4xl md:text-7xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-3xl md:text-5xl/text-2xl md:text-5xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-4xl sm:text-5xl md:text-\[88px\]/text-3xl sm:text-4xl md:text-\[88px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-4xl sm:text-5xl md:text-8xl/text-3xl sm:text-4xl md:text-8xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-4xl md:text-6xl/text-3xl md:text-6xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[52px\] md:text-\[88px\]/text-3xl sm:text-4xl md:text-\[88px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[56px\] md:text-\[96px\]/text-3xl sm:text-4xl md:text-\[96px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[60px\] md:text-\[110px\]/text-3xl sm:text-4xl md:text-\[110px\]/g' {} +

# Let's fix isolated 5xl and 4xl by just making them 3xl or 2xl on mobile and keeping the larger size for md:
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-5xl([^"]*)"/className="\1text-3xl md:text-5xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-4xl([^"]*)"/className="\1text-2xl md:text-4xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-6xl([^"]*)"/className="\1text-3xl md:text-6xl\2"/g' {} +

# Clean up redundant prefixes if they occurred
find app -type f -name "*.tsx" -exec sed -i -E 's/text-2xl md:text-4xl md:/text-2xl md:/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-3xl md:text-5xl md:/text-3xl md:/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-3xl md:text-6xl md:/text-3xl md:/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9]xl sm:text-[0-9]xl md:text-[0-9]xl md:/text-2xl md:/g' {} +
