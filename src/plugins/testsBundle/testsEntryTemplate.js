
module.exports = require('lodash').template(
`
/**
 * Test entry file
 *
 * This is programatically created and updated, do not modify
 *
 * context: <%= JSON.stringify(env.context) %>
 * includes code from:
<%

env.pluginInfo.sort().forEach(function (plugin, i) {
  if (i > 0) print('\\n');
  print(' *  - ' + plugin);
});

%>
 *
 */

window.__KBN__ = {
  vars: {
    kbnIndex: '.kibana',
    esShardTimeout: 1500
  }
};

require('ui/testHarness');
<%

bundle.modules.forEach(function (id, i) {
  if (i > 0) print('\\n');
  print(\`require('\${id.replace(/\\\\/g, '\\\\\\\\')}');\`);
});

%>
require('ui/testHarness').bootstrap(/* go! */);

`
);
