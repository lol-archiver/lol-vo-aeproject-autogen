/* global $bottomMark */

const rect = thisLayer.sourceRectAtTime(time);

const padding = 40;

const left = 240;
const bottom = 30;

[
	padding + left,
	thisComp.height - rect.height + 5 - padding - bottom - $bottomMark
];