steal(

    'can',
    './synth_template.stache!',

    function(

        can,
        synthTemplate

    ) {

        return can.Component.extend({

            tag: 'app-synth',
            template: synthTemplate

        }); 

    }
); 
