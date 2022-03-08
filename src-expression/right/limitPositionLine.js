/* global $side$, $bottom$, $bottomMark$ */


const rect = thisLayer.sourceRectAtTime(time);

const padding = 40;

const right = $side$;
const bottom = $bottom$;


[
	thisComp.width - rect.width + 0.5 - (padding + right),
	thisComp.height - rect.height + 5 - padding - bottom - $bottomMark$
];