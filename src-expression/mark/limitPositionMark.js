/* global $sider$, $side$, $bottom$, */

const rect = thisLayer.sourceRectAtTime(time);

const padding = 40;

const right = $side$;
const bottom = $bottom$;

if($sider$ == 'right') {
	[
		// rect.width,
		thisComp.width - rect.width + 0.5 - (padding + right),
		thisComp.height - rect.height - bottom
	];
}
else {
	[
		(padding + right),
		thisComp.height - rect.height - bottom
	];
}