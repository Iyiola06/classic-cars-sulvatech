#!/bin/bash
# Find and replace the messy classnames created by the bad sed commands
# Just resetting them to clean sizes

find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-\[88px\]/text-3xl md:text-5xl lg:text-\[88px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-\[110px\]/text-4xl md:text-6xl lg:text-\[110px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-\[96px\]/text-4xl md:text-6xl lg:text-\[96px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-\[72px\]/text-3xl md:text-5xl lg:text-\[72px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-\[80px\]/text-3xl md:text-5xl lg:text-\[80px\]/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-8xl/text-4xl md:text-6xl lg:text-8xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-7xl/text-3xl md:text-5xl lg:text-7xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-6xl/text-3xl md:text-5xl lg:text-6xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-5xl/text-2xl md:text-4xl lg:text-5xl/g' {} +
find app -type f -name "*.tsx" -exec sed -i -E 's/text-[0-9a-z: ]*md:text-4xl/text-xl md:text-3xl lg:text-4xl/g' {} +

# Specific fix for the home page header the user complained about
find app/page.tsx -exec sed -i -E 's/text-[0-9a-z: ]*lg:text-6xl/text-3xl md:text-5xl lg:text-6xl/g' {} +
