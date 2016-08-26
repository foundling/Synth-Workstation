steal(

    'can',
    './models/keys.js',
    './keyboard.stache!',
    './keyboard.less!',

    function(

        can,
        Keys,
        keyboardTemplate,
        keyboardStyles

    ) {
        can.Component.extend({

            tag: 'synth-keyboard',
            template: keyboardTemplate,
            viewModel: {
                keys: new Keys('A4', 25) 
            }, 
            events: {
                'inserted': function() {
                    console.log('Synth keyboard inserted.');
                    console.log(this.viewModel);
                }
            }

        });
    }
);
