module.exports = function(grunt) {
    var libs = [
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/requirejs/require.js'
    ];
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            //options: {
            // define a string to put between each file in the concatenated output
            //  separator: ''
            //},
            dist: {
                // the files to concatenate
                src: ['js/controllers/*.js'],
                // the location of the resulting JS file
                dest: 'dest/<%= pkg.name %>.js'
                /*files:[
                 {src:['src/demoApp.js'], dest: 'dist/a.js'},
                 {src:['srcindex.js'], dest: 'dest/b.js'},
                 ]*/
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dest/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js',
                files:{
                    //'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        jshint: {
            //all: ['grunt.js', 'src/*.js'],
            //deploy: ['dist/demoApp.js'],
            options: {
                curly: true, //大括号包裹，即不能使用这种代码：
                eqeqeq: true, // 对于简单类型，使用===和!==，而不是==和!=
                newcap: true, //对于首字母大写的函数（声明的类），强制使用new
                noarg: true, //禁用arguments.caller和arguments.callee
                sub: true,  //对于属性使用aaa.bbb而不是aaa['bbb']
                undef: true, //查找所有未定义变量
                boss: true, //找类似与if(a = 0)这样的代码
                node: true //指定运行环境为node.js
            },
            //beforeconcat: ['src/demoApp.js', 'src/index.js'],
            //afterconcat: ['dist/concat.js'],
            globals: {
                exports: true,
                jQuery: true,
                console: true,
                module: true
            }
        },
        requirejs: {
            // global config
            options: {
                baseUrl: "components",
                mainConfigFile: "components/main.js",
                name: 'main',
                findNestedDependencies: true,
                waitSeconds: 200
            },
            prod: {
                options: {
                    out: "build/components/main.js",
                    paths: {
                        'angular':'empty:',
                        'uiRouter': 'empty:'
                    }
                }
            }
        },
        copy:{
            main:{
                files:[
                    {expand: true, src: ['index.html'], dest: 'build/', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    {expand: true, src: ['components/**/*.html', '!components/*.js', '!components/**/*.js'], dest: 'build/'},

                    //move libs
                    {expand:true, src:libs, dest: 'build/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // this would be run by typing "grunt test" on the command line
    //grunt.registerTask('test', ['jshint', 'qunit']);

    // Default task(s).
    grunt.registerTask('default', [ 'concat', 'uglify']);
    grunt.registerTask('prod', [ 'requirejs:prod', 'copy']);
};