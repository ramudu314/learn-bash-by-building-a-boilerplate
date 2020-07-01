const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    const correctArgument = lastCommand[1] === 'LICENSE-MIT' || lastCommand[1] === './LICENSE-MIT';
    assert(lastCommand[0] === 'more' && correctArgument && cwd === '/home/strove/project/freeCodeCamp/node_modules/has');
  });
});

// solution