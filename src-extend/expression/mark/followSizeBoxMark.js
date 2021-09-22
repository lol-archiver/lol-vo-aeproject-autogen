const padding = 20;

const thatLayer = thisComp.layer('Mark');

const thatRect = thatLayer.sourceRectAtTime(time);
const width = thatRect.width + padding * 2;
const height = thatRect.height + padding * 2;

[width, height];