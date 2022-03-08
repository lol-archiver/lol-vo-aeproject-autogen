/* global $side */

const rect = thisLayer.sourceRectAtTime(time);

const padding = 20;

const right = 340;
const bottom = 40;

if($side == 'right') {
	[
		thisComp.width - rect.width + 0.5 - (padding + right),
		thisComp.height - rect.height + 5 - padding - bottom
	];
}
else {
	[
		(padding + right),
		thisComp.height - rect.height + 5 - padding - bottom
	];
}