const path = require('path');
const fs = require('fs');
const rimraf = require("rimraf");
const Email = require('email-templates');

const pathDir = path.resolve('dist/UI/assets');

exports.uploadFile = file => {
    return uploadFile(file);
}

function uploadFile(file) {
    let result = pathDir + '/' + getRandomInt() + file.name;
    if (!fs.existsSync(result)){
        file.mv(result, error => {
            if(error) console.log(error); 
            else console.log('file saved!');
        });
    }
    return result;
}

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100000));
}

exports.deleteFile = name => {
    rimraf.sync(path.resolve(name));
    console.log('file deleted!');
}

exports.sendNotifyUser = function (data) {
  const email = new Email({
      send: true,       // <---- Question
      preview: false,   // <---- Question
      juice: true,
      message: {
        from: 'romjay77@gmail.com'
      },
      transport: {
      //jsonTransport: true,  // <---- Question
      secure: true,
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'romjay77@gmail.com',
        pass: 'raman1234anaeB'
      }},
      htmlToText: false, // <---- Question
      textOnly: false,   // <---- Question
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.resolve('emails/foruser'),
          images: true 
        }
      },
      views: {
        options: {
          extension: 'ejs' 
        }
    }
  });
        
    email.send({
    template: 'foruser',
    message: {
      to: data.email,
      attachments: [
        {
          filename: 'bck.png',
          path: '../UI/dist/UI/assets/bck.png',
          cid: 'bck.png'
        }]
      },
    locals: {
      fullname: data.fullname
    }})
    .then(console.log("Email sent!"))
    .catch(console.error);
};

exports.sendMessageUser = function (data) {
  const email = new Email({
      send: true,       // <---- Question
      preview: false,   // <---- Question
      juice: true,
      message: {
        from: 'romjay77@gmail.com'
      },
      transport: {
      //jsonTransport: true,  // <---- Question
      secure: true,
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'romjay77@gmail.com',
        pass: 'raman1234anaeB'
      }},
      htmlToText: false, // <---- Question
      textOnly: false,   // <---- Question
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.resolve('emails/forusermessage'),
          images: true 
        }
      },
      views: {
        options: {
          extension: 'ejs' 
        }
    }
  });
        
    email.send({
    template: 'forusermessage',
    message: {
      to: data.email,
      attachments: [
        {
          filename: 'bck.png',
          path: '../UI/dist/UI/assets/bck.png',
          cid: 'bck.png'
        }]
      },
    locals: {
      fullname: data.fullname
    }})
    .then(console.log("Email sent!"))
    .catch(console.error);
};

exports.sendNotifyAdmin = function (file, adminmail, data) {
  const email = new Email({
    send: true,       // <---- Question
    preview: false,   // <---- Question
    juice: true,
    message: {
      from: 'romjay77@gmail.com'
    },
    transport: {
    //jsonTransport: true,  // <---- Question
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'romjay77@gmail.com',
      pass: 'raman1234anaeB'
    }},
    htmlToText: false, // <---- Question
    textOnly: false,   // <---- Question
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: path.resolve('emails/foradmin'),
        images: true 
      }
    },
    views: {
      options: {
        extension: 'ejs' 
      }
  }
});
      
  email.send({
  template: 'foradmin',
  message: {
    to: adminmail,
    attachments: [
      {
        filename: data.filename,
        content: fs.createReadStream(file)
      },
      {
        filename: 'bck.png',
        path: '../UI/dist/UI/assets/bck.png',
        cid: 'bck.png'
      }]
    },
  locals: {
    fullname: data.fullname,
    email: data.email,
    description: data.description
  }})
  .then(console.log("Email sent!"))
  .catch(console.error);
};

exports.sendMessageAdmin = function (adminmail, data) {
  const email = new Email({
    send: true,       // <---- Question
    preview: false,   // <---- Question
    juice: true,
    message: {
      from: 'romjay77@gmail.com'
    },
    transport: {
    // jsonTransport: true,  // <---- Question
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'romjay77@gmail.com',
      pass: 'raman1234anaeB'
    }},
    htmlToText: false, // <---- Question
    textOnly: false,   // <---- Question
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: path.resolve('emails/foradminmessage'),
        images: true 
      }
    },
    views: {
      options: {
        extension: 'ejs' 
      }
  }
});
      
  email.send({
  template: 'foradminmessage',
  message: {
    to: adminmail,
    attachments: [
      {
        filename: 'bck.png',
        path: '../UI/dist/UI/assets/bck.png',
        cid: 'bck.png'
      }]
    },
  locals: {
    fullname: data.fullname,
    email: data.email,
    message: data.message
  }})
  .then(console.log("Email sent!"))
  .catch(console.error);
};