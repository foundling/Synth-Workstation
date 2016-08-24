steal(

    'can',

    './components/workstation/workstation.js',
    './components/synth_library/synth_library.js',
    './components/synth/synth.js',

    './main.stache!',
    './style.less!',

    function(

        can,
        workstation, synthLibrary, synth,
        appTemplate

    ) {
        var tpl = appTemplate();
        $('#app').append(tpl);
    }
);
