const path = require('path');
const matchers =
[
    // Covers GCC and clang style errors
    'generic.json',
    // cppcheck default output (non-xml)
    'cppcheck.json',
    'clang-tidy.json',
    // Basically a copy of generic.json, except that it looks at clazy warnings specifically
    'clazy.json',
    'msvc.json'
]

for(const matcher of matchers)
    console.log('::add-matcher::' + path.join(__dirname, matcher));
