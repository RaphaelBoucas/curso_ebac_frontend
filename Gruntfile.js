module.exports = function(grunt) {

    
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
       target: {
        files: {
            'dist/scripts/main.min.js': 'src/scripts/main.js'            
        }
       }
      },
      less: {
        development: {
          options: {
            paths: ['src/styles/']
          },
          files: {
            'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        }     
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    
  
    
        
    grunt.registerTask('default', ['less', 'htmlmin', 'uglify']);
  
  };