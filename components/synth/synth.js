steal(

    'can',
    './synth.stache!',
    './synth.less!',

    function(

        can,
        synthTemplate

    ) {

        return can.Component.extend({

            tag: 'app-synth',
            template: synthTemplate,
            viewModel: null,
            events: {
                'inserted': function() {
                    console.log('synth inserted');
                }
            }

        }); 

    }
); 
