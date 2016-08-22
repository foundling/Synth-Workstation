steal(

    'can',

    './components/synth/models/presets.js',
    './preset_window.stache!',
    './preset_window.less!',

    function(

        can,
        presets,
        presetWindow

    ) {
        can.Component.extend({

            tag: 'preset-window',
            template: presetWindow,  
            viewModel: {
                presets: presets,
                presetName: presets.attr('0.name')
            }, 
            events: {
                'inserted': function() {
                    console.log('inserted preset window');
                },
                '.next click': function() {
                    
                }, 
                '.previous click': function() {
                    
                } 
            }

        });
    }
);
