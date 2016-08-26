steal(

    'can',
    './models/keys.js',
    './keyboard.stache!',
    './keyboard.less!',

    function(

        can,
        keys,
        keyboardTemplate,
        keyboardStyles

    ) {
        can.Component.extend({

            tag: 'synth-keyboard',
            template: keyboardTemplate,
            viewModel: {
                keys: keys
            }, 
            events: {
                'inserted': function() {
                    console.log('Synth keyboard inserted.');
                    console.log(this.viewModel.keys['A'][0]['name']);
                }
            }

        });
    }
);
