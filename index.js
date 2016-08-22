steal(

    'can',

    './components/workstation/workstation.js',
    './components/synth_library/synth_library.js',
    './template.stache!',
    './style.less!',

    function(
        can,
        workstation, synthLibrary,
        appTemplate

    ) {
        var tpl = appTemplate();
        $('#app').append(tpl);
    }
);
