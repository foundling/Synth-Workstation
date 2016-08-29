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
                keys: new Keys(),
                keyboard: new Keys().toKeyboard(4, 2)
            }, 
            events: {
            }

        });
    }
);
