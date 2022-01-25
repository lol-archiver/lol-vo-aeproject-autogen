// @include 'json2.js';
// @include 'init.js';
// @include 'ensure.js';


// @include 'part/addOpener.js';

D.full = 60;
T.compMain.duration = D.full;
T.compMain.openInViewer();

P.addOpener();

// var img1 = compMain.layers[1];
// var img2 = compMain.layers[2];
// var s1 = img1.scale;
// var s2 = img2.scale;
// img2.scale.setInterpolationTypeAtKey(1, KeyframeInterpolationType.BEZIER);
// img2.scale.setInterpolationTypeAtKey(2, KeyframeInterpolationType.BEZIER);

// var easeOut = new KeyframeEase(0, 75);
// s2.setTemporalEaseAtKey(1, s2.keyInTemporalEase(1), [easeOut, easeOut, easeOut]);
// s2.setTemporalEaseAtKey(2, [easeOut, easeOut, easeOut], s2.keyOutTemporalEase(2));

// debugger;