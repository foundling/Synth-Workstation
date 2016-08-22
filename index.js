steal(

    'can',
    './workstation/workstation.js',
    './app_template.stache!',
    './base.less!',

    function(
        can,
        workstation,
        appTemplate

    ) {
        var tpl = appTemplate();
        $('#app').append(tpl);
    }
);
