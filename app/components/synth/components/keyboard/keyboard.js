steal(

    'can',

    './models/keys.js',
    './keyboard.stache!',
    './keyboard.less!',

    function(

        can,
        Keys, keyboardTemplate, keyboardStyles

    ) {

        var keys = new Keys();
        var keyboard = keys.toKeyboard(4, 2);

        return can.Component.extend({

            tag: 'synth-keyboard',
            template: keyboardTemplate,
            viewModel: {
                define: {
                    keys: {
                        value: keys
                    },
                    keyboard: {
                        value: keyboard
                    }
                }
            }, 
            events: {
                'inserted': function() { 
                    console.log(this.viewModel.attr('keyboard')); 
                },
                '.synth-keyboard-key onmousedown': function(el, ev) {
                }
            }

        });
    }
);
