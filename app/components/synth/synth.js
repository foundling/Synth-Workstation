steal(

    'can',
    './synth.stache!',
    './synth.less!',
    './components/keyboard/keyboard.js',


    function(

        can,
        synthTemplate,
        synthStyle,
        synthKeyboard

    ) {

        return can.Component.extend({

            tag: 'app-synth',
            template: synthTemplate,
            viewModel: {
                patch: null,
            },
            events: {
                'inserted': function() {
                    console.log('synth inserted');
                }
            }

        }); 

    }
); 
