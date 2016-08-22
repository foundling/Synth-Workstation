steal(

    'can',

    './workstation.js',
    './app_template.stache!',
    './base.less!',

    function(
        can,

        workstation,
        appTemplate

    ) {
        return function init() {

            var tpl = appTemplate();
            $('#app').append(tpl);

        };
    }
);
