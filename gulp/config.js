var isDevelopment = process.env.NODE_ENV === 'development';
var dest = isDevelopment ? "./.tmp/build" : "./build";
var src = './app/javascripts';

module.exports = {
    isDevelopment: isDevelopment,

    browserSync: {
        proxy: "localhost:8081",
        open: false,
        files: [
            dest + "/**/**",
            "./.tmp/**/**.html",
            "./.tmp/**/**.css",
            "!" + dest + "/**.map"
        ]
    },

    browserify: {

        // Enable source maps
        debug: true,

        extensions: ['.jsx', '.js'],

        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app.js',
            dest: dest,
            outputName: 'app.js'
        }, {
            entries: src + '/plugins/plugin.js',
            dest: dest,
            outputName: 'plugin.js'
        }]
    },

    jest: {
        scriptPreprocessor: './specs/support/preprocessor.js',
        unmockedModulePathPatterns: [
            'node_modules/react'
        ],
        testDirectoryName: 'specs',
        testPathIgnorePatterns: [
            'node_modules',
            'specs/support'
        ],
        moduleFileExtensions: [
            'js', 'json', 'jsx'
        ]
    },

    jade: {
        dest: "./.tmp/",
        src: "./app/**.jade"
    }
};
