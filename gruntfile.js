
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        watch: {
            api: {
                files: ['apis/**','statics/**'],
                options: {
                    livereload: true
                }
            }
        },

        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    ext: 'md,js'
                }
            }
        },

        concurrent: {
            tasks: ['nodemon', 'watch:api'],
            options: {
                logConcurrentOutput: true
            }
        }
    })
    grunt.registerTask('default', ['concurrent'])
}