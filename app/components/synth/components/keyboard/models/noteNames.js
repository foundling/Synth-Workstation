var noteNames = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#'
];

var levels = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];

var result = noteNames.map(note => {
    return levels.map(level => {
        return note + level
    });
});

console.log(result);
