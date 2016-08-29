steal(function() {

    var Oscillator = function(params) { 
        if (!params) {
            throw new Error('No parameters supplied to oscillator constructor');
        }
        this.params = params;
    }; 

    Oscillator.prototype.init = function() {

        this.context = context;
        this.osc = osc;
        this.gain = gain;
        var AudioContext = ( 
            window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext 
        );

        if (! AudioContext) {
            throw new Error('No audio context available in your browser.');
        }

        this.context = new AudioContext();

        /* osc initializations */
        this.osc = context.createOscillator();
        this.osc.type = this.params.type;
        this.osc.frequency.value = params.frequency;

        /* gain initializations */
        this.gain = context.createGain();
        this.gain.level = 0;

        /* Connections */
        this.osc.connect(this.gain);
        this.gain.connect(this.context.destination);

        /* start osc */
        this.osc.start(0);
    };

    Oscillator.prototype.play = function(volume){ 
        this.osc.gain = volume;
    };

    Oscillator.prototype.stop = function (){
        this.osc.gain = 0;
    };

    return Oscillator;
});
