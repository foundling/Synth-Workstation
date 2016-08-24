steal(

    'can',
    './synth_library.stache!',
    './synth_library.less!',

    function(

        can,
        synthLibraryTemplate

    ) {

        return can.Component.extend({

            tag: 'app-synth-library',
            template: synthLibraryTemplate,
            viewModel: {
                modules: []
            }

        }); 

    }
); 
