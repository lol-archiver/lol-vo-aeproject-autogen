const thatLayer = thisComp.layer(1);

const thisRect = thisLayer.sourceRectAtTime(time);
const thatRect = thatLayer.sourceRectAtTime(time);

const pointThisCenter = thisLayer.toComp([thisRect.left + thisRect.width / 2, thisRect.top + thisRect.height / 2]);
const pointText = thatLayer.toComp([thatRect.left + thatRect.width / 2, thatRect.top + thatRect.height / 2 - 35]);

this.value - (pointThisCenter - pointText);