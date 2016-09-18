var drakov = require('drakov');

var argv = {
    sourceFiles: './apis/**/*.md',
    serverPort: 3333,
    staticPaths: [
        './statics'
    ],
    stealthmode: true,
    method: ['DELETE','OPTIONS']
};


drakov.run(argv, function(){

});
