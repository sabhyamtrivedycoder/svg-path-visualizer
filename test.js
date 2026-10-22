const assert = require('assert');
const { countPathCommands } = require('./app.js');
console.log('🧪 Testing SVG Path Scope...');
assert(countPathCommands('M 10 10 L 20 20 Z') === 3, '3 SVG commands counted');
console.log('✅ SVG Path Scope test passed!');
