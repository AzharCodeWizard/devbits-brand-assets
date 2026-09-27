const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { filename, data } = JSON.parse(body);
        const base64Data = data.replace(/^data:image\/jpeg;base64,/, '');
        fs.writeFileSync(filename, base64Data, 'base64');
        console.log(`Saved ${filename}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', filename }));
      } catch (e) {
        res.writeHead(500);
        res.end(e.message);
      }
    });
  }
});

server.listen(9876, () => {
  console.log('Save server listening on port 9876');
});
