#!/bin/bash
# Find and replace large text sizes to be responsive starting at a smaller base

# text-[52px], text-[56px], text-[60px], text-[72px], text-[80px], text-[88px], text-[96px], text-[110px] -> sm/md prefixes where missing or scaling base
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[52px\] md:text-\[88px\]/text-4xl sm:text-5xl md:text-\[88px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[60px\] md:text-\[110px\]/text-4xl sm:text-6xl md:text-\[110px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[56px\] md:text-\[96px\]/text-4xl sm:text-6xl md:text-\[96px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-\[52px\] md:text-\[72px\]/text-4xl sm:text-5xl md:text-\[72px\]/g' {} +

# text-6xl -> text-4xl sm:text-5xl md:text-6xl
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-6xl([^"]*)"/className="\1text-4xl sm:text-5xl md:text-6xl\2"/g' {} +

# Replace text-5xl when not already prefixed with md: or lg:
# We need to be careful with regex here, easier to just do common patterns
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-5xl md:text-6xl([^"]*)"/className="\1text-3xl sm:text-4xl md:text-5xl lg:text-6xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-5xl md:text-7xl([^"]*)"/className="\1text-3xl sm:text-4xl md:text-5xl lg:text-7xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-4xl md:text-5xl([^"]*)"/className="\1text-2xl sm:text-3xl md:text-4xl lg:text-5xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-3xl md:text-5xl([^"]*)"/className="\1text-2xl sm:text-3xl md:text-4xl lg:text-5xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*)text-3xl md:text-4xl([^"]*)"/className="\1text-2xl sm:text-3xl md:text-4xl\2"/g' {} +

# For isolated sizes
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*(?<!:))text-5xl([^"]*)"/className="\1text-3xl sm:text-4xl md:text-5xl\2"/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/className="([^"]*(?<!:))text-4xl([^"]*)"/className="\1text-2xl sm:text-3xl md:text-4xl\2"/g' {} +

# Ensure text-[80px] has smaller prefixes if naked (happens on some headers)
find app -type f -name "*.tsx" -exec sed -i -E 's/text-5xl md:text-7xl lg:text-\[80px\]/text-3xl sm:text-4xl md:text-6xl lg:text-\[80px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-4xl sm:text-5xl md:text-7xl lg:text-\[80px\]/text-3xl sm:text-4xl md:text-6xl lg:text-\[80px\]/g' {} +

