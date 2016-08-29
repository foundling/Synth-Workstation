steal(

    'can',

    /* components */
    './components/keyboard/keyboard.js',
    './components/preset_window/preset_window.js',

    /* assets for this module */
    './synth.stache',
    './synth.less!',

    function(

        can,
        synthKeyboard,
        presetWindow,
        synthView, synthStyle 

    ) {

        return can.Component.extend({

            tag: 'app-synth',
            template: synthView,
            viewModel: {
                patch: null,
            },
            events: {
                'inserted': function() {
                    console.log(synthView);
                }
            }

        }); 

    }
); 
