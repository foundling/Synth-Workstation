steal(

    'can',

    './models/presets.js',

    './preset_window.stache!',
    './preset_window.less!',

    function(

        can,
        synthPresets, 
        presetWindowView 

    ) {
        can.Component.extend({

            tag: 'preset-window',
            template: presetWindowView,  
            viewModel: {
                define: {
                    presetIndex: {
                        value: null,
                        get: function() {
                            return this;
                        },
                        set: function(offset) {
                            return this + offset;
                        }
                    },
                    preset: {
                        value: null,
                        get: function() {
                            return this;
                        },
                        set: function(index) {
                            var index = this.attr('presetIndex');
                            return synthPresets[index]; 
                        }
                    }
                }
            }, 
            events: {
                'inserted': function() {
                    console.log('preset window inserted!');
                },
            }

        });
    }
);
