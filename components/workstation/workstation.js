steal(

    'can',
    'can/view/stache/stache.js',
    './workstation.stache!',
    './workstation.less!',

    function(

        can,
        stache,
        workstationTemplate

    ) {

        return can.Component.extend({
            tag: 'app-workstation',
            template: workstationTemplate,
            viewModel: null,
            events: {
                'inserted': function () {
                    console.log('workstation component inserted');
                },
                
            }
        });

    }
);
