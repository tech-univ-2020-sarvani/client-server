const http = require('http');
const fs = require ('fs')
const {readFile, getFile} = require('./server');

// describe('The function getRequest', () => {
//     it('should return one if the router is /1', () => {
//         const options = {
//             'method': 'POST',
//             'hostname': '127.0.0.1',
//             'port': 3080,
//             'path': '/file',
//             'headers': {
//                 'Content-Type': 'application/json'
//             },
//             'maxRedirects': 20
//         };

//         var req = http.request(options, function (res) {
//             var chunks = [];

//             res.on("data", function (chunk) {
//                 chunks.push(chunk);
//             });

//             res.on("end", function (chunk) {
//                 var body = Buffer.concat(chunks);
//                 expect(body.name).toBe('mini');
//             });

//             res.on("error", function (error) {
//                 console.error(error);
//             });
//         });
//         req.end();
        
//         //done();
//     });
// });

describe ('getFile Controller', ()=> {
    it ('should call the response object with a status code of 404', ()=>{
        const responseMock = {
            write: jest.fn(),
            end: jest.fn(),
        }

        const readMock = jest.spyOn(fs, 'readFile');
        const error = {
            code: 'ENOENT',
            message: 'message'
        }
        readMock.mockImplementation((file, opts, cb)=>cb(error, null))
        getFile(null, responseMock);
        expect(responseMock.write).toHaveBeenCalledWith('message')
        expect(responseMock.statusCode).toEqual(404);
    })
})