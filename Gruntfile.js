// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // Tasks
    sass: {
      // Begin Sass Plugin
      dist: {
        options: {
          sourcemap: "none",
          loadPath: [
            "wp-content/themes/chemond/css/src/", "wp-content/themes/chemond/css/src/partials/"
          ],
          style: "expanded"
        },
        files: {
          "wp-content/themes/chemond/css/dist/main.css": "wp-content/themes/chemond/css/src/style.scss"
        }
      }
    },
    postcss: {
      // Begin Post CSS Plugin
      options: {
        map: false,
        processors: [require("autoprefixer")({browsers: ["last 10 versions"]})]
      },
      dist: {
        src: "wp-content/themes/chemond/css/dist/main.css"
      }
    },
    cssmin: {
      // Begin CSS Minify Plugin
      target: {
        files: {
          "wp-content/themes/chemond/css/dist/main.min.css": "wp-content/themes/chemond/css/dist/main.css"
        }
      }
    },
    watch: {
      // Compile everything into one task with Watch Plugin
      css: {
        files: "**/*.scss",
        tasks: ["sass", "postcss", "cssmin"]
      }
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Register Grunt tasks
  grunt.registerTask("default", ["watch"]);
};
