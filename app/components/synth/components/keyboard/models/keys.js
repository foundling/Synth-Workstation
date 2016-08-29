steal(

    'scale-maker/lib/scaleMaker.js',
    './note.js',

    function(scaleMaker, Note) {

        /*
         * returns a hash with api like keys['A'][0].name 
         * keys also has method that generates a linear range of keys 
         */

        return function() {

            var noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
            var levels = [0,1,2,3,4,5,6,7,8];
            var keys = [];

            keys.dictionary = {}, /* api:  keys['A#'][0].name */
            keys.keyboard = null; /* [ { name: 'A0' ... }, { name: 'A#0' } ... ] */

            noteNames.forEach(noteName => {
                keys.dictionary[noteName] = levels.map(level => {
                    return new Note(noteName, level);
                });
            });

            keys.toKeyboard = function(startLevel, octaves) {

                var combinedScales;
                var lastKey;
                var scaleByOctaves = levels.slice(startLevel, startLevel + octaves).map(level => {

                    return noteNames.map(noteName => {

                        return new Note(noteName, level);

                    });

                });

                combinedScales = [].concat.apply([], scaleByOctaves);
                lastKey = combinedScales[combinedScales.length - 1];
                // add final note to make first and last key same pitch, diff octave
                combinedScales.push( new Note('C', lastKey.level + 1) );

                return combinedScales;
            };

            return keys;
        };
    }
);
