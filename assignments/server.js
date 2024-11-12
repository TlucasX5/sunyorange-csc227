const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

function rootHander(req, res, parsedUrl) {
    const page = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>My First Web Server</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is my first web server</p>
    </body>
    </html> `;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(page);
}

function timePage(req, res, parsedUrl) {
    const page = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Time</title>
    </head>
    <body>
        <h1>Current Time</h1>
        <p id="clock"></p>
        <script>
            document.getElementById("clock").innerText = new Date().toTimeString();
        </script>
    </body>
    </html> `;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(page);
}

function echoValApiHandler(req, res, parsedUrl) {
    const v = parsedUrl.query.val;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ val: v }));
}

function addNumsApiHandler(req, res, parsedUrl) {
    const aa = parsedUrl.query.a;
    const bb = parsedUrl.query.b;
    const n1 = Number(aa);
    const n2 = Number(bb);
    const sum = n1 + n2; 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({a: n1, b: n2, res: sum}));
}

function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/") {
        rootHander(req, res, parsedUrl);
    } else if (parsedUrl.pathname === "/time") {
        timePage(req, res, parsedUrl); 
    } else if (parsedUrl.pathname === "/api/echoVal") {
        echoValApiHandler(req, res, parsedUrl);
    } else if (parsedUrl.pathname === "/api/addNums") {
        addNumsApiHandler(req, res, parsedUrl);
    } else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
}
const server = http.createServer(handleRequest);
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});