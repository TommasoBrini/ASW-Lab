const http = require('http');

http.get('http://localhost:8080', (res) => {
    let data = '';

    console.log('statusCode: ', res.statusCode);
    console.log('headers: ', res.headers);

    res.on('data', (chunk) => {
        data += chunk;
        console.log('chunk: ' + chunk);
    });
    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.log('Error: ' + err.message);
});
