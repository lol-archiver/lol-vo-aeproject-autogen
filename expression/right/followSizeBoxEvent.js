const margin = 40;

const textLayer = thisComp.layer('Event');
const textRect = textLayer.sourceRectAtTime(time);
const boxWidth = textRect.width + margin * 2;
const boxHeight = textRect.height + margin * 2;

[boxWidth + 40, boxHeight];