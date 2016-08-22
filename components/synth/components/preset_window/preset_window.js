steal(

    'can',
    'preset_window.stache!',

    function(

        can,
        presetWindow

    ) {
        can.Component.extend({

            tag: 'preset-window',
            template: presetWindow  
            viewModel: {
            }, 
            events: {
                'inserted': function() {
                    console.log('inserted preset window');
                }
            }

        });
    }
);
