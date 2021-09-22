const padding = 40;

const textLayer = thisComp.layer('Event');
const textRect = textLayer.sourceRectAtTime(time);
const boxWidth = textRect.width + padding * 2;
const boxHeight = textRect.height + padding * 2;

[boxWidth + 70, boxHeight];