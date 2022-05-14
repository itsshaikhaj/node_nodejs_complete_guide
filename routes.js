const fs = require('fs');

const requestHandler = (req, res) => {
    let url = req.url;
    let method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"></input>');
        res.write('<button type="submit" >Click me!</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk :', chunk);
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody :', parsedBody);
            let message = parsedBody.split('=')[0];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello World</title></head>');
    res.write('<body>');
    res.write('<h1>Hello World</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;