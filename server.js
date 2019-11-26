const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const axios = require('axios');

const service = require("./_service");

const app = express();


app.use(express.static('./dist/UI'));

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/deleteFile', (req,res) => {
    service.deleteFile(req.body.path);
    res.json();
});

app.post('/uploadFile', (req,res) => {
    let name = service.uploadFile(req.files['uploads']);

    let admins = req.body.amails.split(',');
    admins.forEach(email => {
        service.sendNotifyAdmin(name, email, req.body);
    });
    service.sendNotifyUser(req.body);

    res.json({path: name});
});

app.post('/sendMessage', (req,res) => {
    let admins = req.body.amails.split(',');
    admins.forEach(email => {
        service.sendMessageAdmin(email, req.body);
    });
    service.sendMessageUser(req.body);
    
    res.json();
});

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname,'/dist/UI/index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('app working on http://localhost:8080 port'));