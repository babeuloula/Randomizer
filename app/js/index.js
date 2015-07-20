// NODE JS
var Path      = require('path');
var fs        = require('fs');





// INIT
var drop = document.getElementById('dropZone');
drop.ondragover = function() {
    this.className = "hover";
    return false;
};
drop.ondragleave = function() {
    this.className = "";
    return false;
};
drop.ondrop = function(e) {
    e.preventDefault();
    jQuery('body').css('cursor', 'progress');

    var files = [];
    for(var i = 0; i < e.dataTransfer.files.length; i++) {
        files.push(e.dataTransfer.files[i].path);
    }

    var ramdom = shuffle(files);

    for(var j = 0; j < ramdom.length; j++) {
        var file = ramdom[j];
        var extention = Path.extname(file);
        var filename = Path.basename(file, extention);
        var newFilename = sha1(filename + uniqid('_'));
        newFilename = newFilename.substr(0, 12) + j;
        var dirname = Path.dirname(file);

        fs.renameSync(file, dirname + Path.sep + newFilename + extention);
    }

    jQuery('body').css('cursor', 'default');

    var audio = new Audio('sound/finish.ogg');
    audio.volume = 0.2;
    audio.play();

    drop.className = "";
};