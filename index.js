const path = require('path');
const matchers = ['compiler.json']

for(const matcher of matchers)
    console.log('::add-matcher::' + path.join(__dirname, matcher));
