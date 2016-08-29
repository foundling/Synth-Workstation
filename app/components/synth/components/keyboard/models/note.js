steal(

    'node_modules/scale-maker/lib/scaleMaker.js',
    './../../../components/oscillator.js

    function(
        scaleMaker,
        Oscillator
    ) {

        return function Note(noteName, octave) {

            freqInHertz = scaleMaker.getNote(noteName + octave); 

            return {
                name:   noteName + octave,
                octave: octave,
                hertz:  freqInHertz,
                tone:   new Oscillator({

                    frequency:  freqInHertz,
                    type:       'square'

                }),
            };
        };

});
