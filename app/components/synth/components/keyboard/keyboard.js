steal(

    'can',
    './models/keys.js',
    './keyboard.stache!',
    './keyboard.less!',

    function(

        can,
        allKeys,
        keyboardTemplate,
        keyboardStyles

    ) {
        can.Component.extend({

            tag: 'synth-keyboard',
            template: keyboardTemplate,
            viewModel: {
                allKeys: allKeys,
                range: 25,

                define: {
                    octave: {
                        value: 0,
                    }, 
                    viewableKeys: {
                        value: this.allKeys.slice(44, 44 + 25),
                        set: function(start, stop) {
                            return this.allKeys.slice(start, start + this.range);  
                        },
                    }
                }
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
