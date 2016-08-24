steal(

    'can',

    function(

        can

    ) {

        return can.Component.extend({

            tag: 'app-synth',
            template: '',
            viewModel: null,
            events: {
                'inserted': function() {
                    console.log('synth inserted');
                }
            }

        }); 

    }
); 
