// var http = require('http');
var fs = require('fs');

const getFile = (request, response) => { 
    readFile('input.txt', (err, res) => {
        if (err) {
            if (err.code === 'ENOENT') response.statusCode = 404;
            else response.statusCode = 500;
            response.write(err.message);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write(res.toString());
            response.end();
        }
    })
}

// const postToFile = (request, response) => {
//     request.pipe(fs.createWriteStream('./input.txt'))
//     .on('close', () => {
//         response.write('post success');
//         response.end()
//     })
// }

// const FileRoutes = {
//     '/file' : {
//         'GET': getFile,
//         'POST': postToFile
//     }, 
// }

// const databaseRoutes = {
//     'database': {
//         'GET': '',
//         'POST': ''
//     }
// }

// const combinedRoutes = {...FileRoutes, ...databaseRoutes}

// const router = (request, response) => {
//     const {url, method} = request
//     combinedRoutes[url][method](request, response);
// }



// const requestHandler = (request, response) => {
//     router(request, response)
//     // if (request.url === '/file' && request.method === 'GET') {
//     //     readFile('input.txt', (err, res) => {
//     //         if (err) {
//     //             if (err.code === 'ENOENT') response.statusCode = 404;
//     //             else response.statusCode = 500;
//     //             response.write(err.message);
//     //             response.end();
//     //         } else {
//     //             response.writeHead(200, { 'Content-Type': 'text/plain' });
//     //             response.write(res.toString());
//     //             response.end();
//     //         }
//     //     })
//     // }
//     // else if (request.url === '/file' && request.method === 'POST') {
//     //     request.pipe(fs.createWriteStream('./input.txt'))
//     //         .on('close', () => {
//     //             response.write('post success');
//     //             response.end()
//     //         })
//     // }
//     // else {
//     //     // response.writeHead(404, {'Content-Type': 'text/plain'});
//     //     response.end();
//     // }
// };
// const server = http.createServer(requestHandler);
// server.listen(3080, () => {
//     console.log("server is running....");
// });

// module.exports = {requestHandler, server};

const readFile = (fileName, cb) => {
    fs.readFile(fileName, 'utf8', (err, contents) => {
        if (err) {
            cb(err);
        } else {
            cb(null, contents.toString());
        }
    });
}

module.exports = {
   readFile,
   getFile 
}