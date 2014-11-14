module.exports = function(grunt) {

    // Tasks
    grunt.initConfig({
        jshint: {
            all: ['app/js/fonctions.js', 'app/js/index.js']
        }
    });




    // Process
    grunt.registerTask('default', [
        'jshint'
    ]);




    // Require
    grunt.loadNpmTasks('grunt-contrib-jshint');
}