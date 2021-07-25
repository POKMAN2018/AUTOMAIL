var http = require("http");
var fs = require("fs");
var url = require("url");
var input = require('prompt-sync')();

var user = input("enter email target: ");
var count = input("enter your count: ");


/*http.createServer(function (req,res) {
  var link = url.parse(req.url,true);
  //console.log(link);
  var name = "."+link.pathname;
  fs.readFile(name,function(err,data) {
    if (err) {
      res.writeHead(200,{"content-type":"text/html"});
      res.end("404 Not Found");
    }else {
      res.writeHead(200,{"content-type":"text/html"});
      res.write(data);
      res.end();
    }
    });
}).listen(8080,console.log("start at port 8080 "));*/

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hackerdog555@gmail.com',
    pass: 'lion4333'
  }
});

var mailOptions = {
  from: 'hackerdog555@gmail.com',
  to: user,
  subject: 'KUY',
  text: 'spammer time hahaha'
};




//looop

for (var i = 0;i < count; i++) {
  if (i<count) {
    loop();
    
  }
}



function loop() {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + user+' VALUE: '+i);
    }
  });
}
