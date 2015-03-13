module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    encoding: {
      options: {
        encoding: 'UTF8'
      },
      files: {
        src: ['dist/*html']
      }
    },

    bake: {
      build: {
        options: {
          content: "locales/en_us.json",
          section: "en"
        },
        files: {
          "dist/index.html": "pages/index.html"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bake');
  grunt.registerTask('default', ['bake']);
};
