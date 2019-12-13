module.exports = function(grunt){
  grunt.initConfig({
    watch: {
      files: 'assets/main.scss',
      tasks: ['sass']
    },
    sass: {
      dev: {
        options: {
          noCache: true,
          sourcemap: 'none',
          style: 'expanded'
        },
        files: {
          'assets/main.css' : 'assets/main.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'assets/main.css',
            'index.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};