steal(

    'scale-maker/lib/scaleMaker.js',

    function(scaleMaker) {

    var keys = {};
    var noteNames = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    var levels = [0,1,2,3,4,5,6,7,8];

    noteNames.map(note => {

        keys[note] = levels.map(level => {
            return {
                name: note + level,
                hertz: scaleMaker.getNote(note + level) 
                
            };
        });

    });

    return keys;

});
