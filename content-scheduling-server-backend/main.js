const express = require("express");
const formidable = require('formidable');
const fs = require('fs');
const mv = require('mv');
const path = require('path');

const app = express();
const port = 8000;

app.use(function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
});

app.get("/getAvailableFiles", (req, res) => {
    var files = [];
    const folderPath = "./Static/Videos/";
    fs.readdirSync(folderPath).forEach(file => {
        console.log(file);
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        files.push({
            name: file,
            size: stats.size,
            dateModified: stats.mtime.getTime(),
        });
    });

    const sortedFiles = files.sort((a, b) => b.dateModified - a.dateModified);

    console.log("Return Json");
    res.json(sortedFiles);
    res.end();
});

app.post('/fileupload', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = './Static/Videos/' + files.filetoupload.originalFilename;
        mv(oldpath, newpath, function (err) {
            if (err) {
                console.log('Err:', err);
                res.json({
                    "Message": "Something Went Wrong",
                    "Error": err,
                });
                res.end();
            }
            res.json({
                "Message": "File Uploaded Successfully",
            });
            res.end();
        });
    });
});

app.get("/provideSchedule", (req, res) => {
    console.log(req.query);
    var obj = {
        "jey": "Value",
    }
    res.end(JSON.stringify(obj));
});

app.listen(port, () => {
    console.log("listening to the port: " + port);
});