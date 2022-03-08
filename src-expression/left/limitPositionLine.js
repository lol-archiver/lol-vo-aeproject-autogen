/* global $bottomMark */

const rect = thisLayer.sourceRectAtTime(time);

const padding = 40;

const left = 340;
const bottom = 70;

[
	padding + left,
	thisComp.height - rect.height + 5 - padding - bottom - $bottomMark
];