steal(

    'can',
    './workstation/workstation.js',
    './template.stache!',
    './style.less!',

    function(
        can,
        workstation,
        appTemplate

    ) {
        var tpl = appTemplate();
        $('#app').append(tpl);
    }
);
