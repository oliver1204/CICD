let http = require('http');
let users = [
  {
    id: 1,
    name: 'hz',
  },
  {
    id: 2,
    name: 'hzo',
  },
  {
    id: 2,
    name: 'hzo2',
  },
];
let server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users));
  } else {
    res.end('NOT FUND');
  }
});
server.listen(3000, () => {
  console.log('服务已经启动');
});
