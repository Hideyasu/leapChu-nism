function setPlay(time, note) {
    synth.triggerAttackRelease(note, '8n', time);
}

var melodyList = [
  'C3', 'D3', 'E3', 'F3',
  'G3', 'A3', 'B3', 'C4'
];
var c4 = "C4";
var C_chord = [c4, 'E4', 'G4'];
var D_chord = ['D4', 'F4', 'A4'];
var G_chord = ['B3', 'D4', 'E4'];

var chordMelody = [
  ['0:0:2', C_chord]
];

var synth = new Tone.SimpleSynth().toMaster();
//synth.triggerAttackRelease('C5', '2n');
var melody = new Tone.Sequence(setPlay, chordMelody).start();
Tone.Transport.start();
