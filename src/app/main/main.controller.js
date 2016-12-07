(function() {
    'use strict';

    angular
        .module('angularKaarousel')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log) {
        var vm = this;

        vm.hideFirstSlide = hideFirstSlide;

        vm.data = [{
            'key': 'angular',
            'title': 'AngularJS',
            'url': 'https://angularjs.org/',
            'description': 'HTML enhanced for web apps!',
            'logo': 'angular.png'
        }, {
            'key': 'browsersync',
            'title': 'BrowserSync',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'browsersync.png'
        },
        {
            'key': 'gulp',
            'title': 'GulpJS',
            'url': 'http://gulpjs.com/',
            'description': 'The streaming build system.',
            'logo': 'gulp.png'
        }, {
            'key': 'jasmine',
            'title': 'Jasmine',
            'url': 'http://jasmine.github.io/',
            'description': 'Behavior-Driven JavaScript.',
            'logo': 'jasmine.png'
        }, {
            'key': 'karma',
            'title': 'Karma',
            'url': 'http://karma-runner.github.io/',
            'description': 'Spectacular Test Runner for JavaScript.',
            'logo': 'karma.png'
        }, {
            'key': 'protractor',
            'title': 'Protractor',
            'url': 'https://github.com/angular/protractor',
            'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
            'logo': 'protractor.png'
        }, {
            'key': 'jquery',
            'title': 'jQuery',
            'url': 'http://jquery.com/',
            'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
            'logo': 'jquery.jpg'
        },{
            'key': 'angular',
            'title': 'AngularJS',
            'url': 'https://angularjs.org/',
            'description': 'HTML enhanced for web apps!',
            'logo': 'angular.png'
        }, {
            'key': 'browsersync',
            'title': 'BrowserSync',
            'url': 'http://browsersync.io/',
            'description': 'Time-saving synchronised browser testing.',
            'logo': 'browsersync.png'
        }, {
            'key': 'gulp',
            'title': 'GulpJS',
            'url': 'http://gulpjs.com/',
            'description': 'The streaming build system.',
            'logo': 'gulp.png'
        }, {
            'key': 'jasmine',
            'title': 'Jasmine',
            'url': 'http://jasmine.github.io/',
            'description': 'Behavior-Driven JavaScript.',
            'logo': 'jasmine.png'
        }, {
            'key': 'karma',
            'title': 'Karma',
            'url': 'http://karma-runner.github.io/',
            'description': 'Spectacular Test Runner for JavaScript.',
            'logo': 'karma.png'
        }, {
            'key': 'protractor',
            'title': 'Protractor',
            'url': 'https://github.com/angular/protractor',
            'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
            'logo': 'protractor.png'
        }, {
            'key': 'jquery',
            'title': 'jQuery',
            'url': 'http://jquery.com/',
            'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
            'logo': 'jquery.jpg'
        }];

        vm.directions = [{id: 1, name: 'horizontal'}, {id: 2, name: 'vertical'}];
        vm.animations = [{id: 1, name: 'slide'}, {id: 2, name: 'fade'}];

        vm.options = {

            displayed: 5,
            perSlide: 3,
            autoplay: true,
            pauseOnHover: true,

            centerActive: true,
            stopAfterAction: false,
            timeInterval: 2000,
            transitionDuration: 800,

            hideNav: false,
            hidePager: false,
            navOnHover: false,
            pagerOnHover: false,
            sync: null,

            swipable: true,
            expand: true,
            loop: true,
            direction: 'horizontal',
            animation: 'slide',
            minWidth: null,
            alwaysFill: true,

            beforeSlide: function () {
                // $log.info('before slide callback');
            },
            afterSlide: function () {
                $log.info('after slide callback');
            }

        };

        vm.hideFirst = false;

        function hideFirstSlide () {
            vm.hideFirst = !vm.hideFirst;
        }

    }
})();
