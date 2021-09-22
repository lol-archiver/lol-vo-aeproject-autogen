const padding = 40;

const thatLayer = thisComp.layer(1);

const thatRect = thatLayer.sourceRectAtTime(time);
const width = thatRect.width + padding * 2;
const height = thatRect.height + padding * 2;

[width, height + 70];