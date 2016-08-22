steal(

    'can',
    './synth_library.stache!',
    './synth_library.less!',

    function(

        can,
        synthTemplate

    ) {

        return can.Component.extend({

            tag: 'app-synth-library',
            template: synthTemplate

        }); 

    }
); 
