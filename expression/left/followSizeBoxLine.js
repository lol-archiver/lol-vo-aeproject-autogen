const margin = 40;

const thatLayer = thisComp.layer(1);

const thatRect = thatLayer.sourceRectAtTime(time);
const width = thatRect.width + margin * 2;
const height = thatRect.height + margin * 2;

[width, height + 70];