const thatLayer = thisComp.layer('CircleMain');

const thisRect = thisLayer.sourceRectAtTime(time);
const thatRect = thatLayer.sourceRectAtTime(time);

const pointThisCenter = thisLayer.toComp([thisRect.left + thisRect.width / 2, thisRect.top + thisRect.height / 2]);
const pointText = thatLayer.toComp([thatRect.left + thatRect.width / 2 - thisRect.width / 2 - 80 - 20 - 30, thatRect.top + thatRect.height / 2]);

this.value - (pointThisCenter - pointText);