const requestHandler = (req, res) => {
    url = req.url;
    method = req.method;

    // rotta /
    if (url === '/') {
        res.write(`
            <html>
            <head><title>Enter Message</title></head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>`);
        return res.end();
    }

    // rotta /message
    if(url === '/message' && method === 'POST') {
       //ricevere il messaggio e stamparlo in console
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const message = body.split('=')[1];
            console.log("message: ", message);
            res.end();
        });
        
    }

}

exports.handler = requestHandler;
