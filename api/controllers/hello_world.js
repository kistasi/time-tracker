const util = require('util');

module.exports = {
  hello: hello
};

function hello(req, res) {
  const name = req.query.name || 'stranger';
  const hello = util.format('Hello, %s!', name);

  res.json(hello);
}
