steal(

    'can',

    './components/workstation/workstation.js',
    './components/synth_library/synth_library.js',
    './components/synth/synth.js',
    './components/main.stache!',
    './components/style.less!',

    function(

        can,
        workstation, synthLibrary, synth,
        appTemplate

    ) {
        var tpl = appTemplate();
        $('#app').append(tpl);
    }
);
