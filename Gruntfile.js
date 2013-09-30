/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
   concat: {
      css: {
        src: ['public/css/bootstrap.min.css', 'public/css/bootstrap-datepicker.css', 'public/css/base.css'],
        dest: 'public/css/all.css'
      },      
      js: {
        src: ['public/js/jquery.min.js', 'public/js/angular.min.js', 'public/js/bootstrap.min.js', 'public/js/angular-strap.min.js', 'public/js/bootstrap-datepicker.js', 'public/js/functions.js', 'public/js/base.js', 'public/js/app.js'],
        dest: 'public/js/all.js'
      }
    },
    cssmin: {
      combine: {
        files: {
          'public/css/all.css': 'public/css/all.css'
        }
      }
    },    
    uglify: {
      js: {
        src: 'public/js/all.js',
        dest: 'public/js/all.js'
      }
    },  
    watch: {
      css: {
        files: 'public/css/*.css',
        tasks: ['concat', 'cssmin']
      },
      js: {
        files: 'public/js/*.js',
        tasks: ['concat', 'uglify']
      },
      livereload: {
        files: ['public/*.html','public/css/*.css','public/js/*.js'],
        options: { 
          livereload: true 
        },
      }           
    }   
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);

};
