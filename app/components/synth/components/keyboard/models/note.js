steal(

    'node_modules/scale-maker/lib/scaleMaker.js',

    function(scaleMaker) {

    var Note = function(noteName, level) {
        return {
            name:   noteName + level,
            level:  level,
            hertz:  scaleMaker.getNote(noteName + level)
        };
    };

    return Note;

});
