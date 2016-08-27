steal(

    'scale-maker/lib/scaleMaker.js',

    function(scaleMaker) {

        /*
         * returns a hash with api like keys['A'][0].name 
         * keys also has method that generates a linear range of keys 
         */

        var keys = {};
        var noteNames = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
        var levels = [0,1,2,3,4,5,6,7,8];

        noteNames.forEach(noteName => {

            keys[noteName] = levels.map(level => {

                return {
                    name: noteName + level,
                    hertz: scaleMaker.getNote(noteName + level) 
                };

            });

        });

        keys.toKeyboard = function(startLevel, octaves) {

            var scaleByOctaves = levels.slice(startLevel, startLevel + octaves).map(level => {

                return noteNames.map(noteName => {

                    return {
                        name: noteName + level,
                        hertz: scaleMaker.getNote(noteName + level) 
                    };

                });

            });

            return [].concat.apply([], scaleByOctaves);
        };

        console.log(keys.toKeyboard(4, 2));
        console.log(keys);
        return keys;

    }
);
