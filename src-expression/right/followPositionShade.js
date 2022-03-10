const thatLayer = thisComp.layer('Line');

const thisRect = thisLayer.sourceRectAtTime(time);
const thatRect = thatLayer.sourceRectAtTime(time);

const pointThisCenter = thisLayer.toComp([thisRect.left + thisRect.width / 2, thisRect.top + thisRect.height / 2]);
const pointText = thatLayer.toComp([thatRect.left - 40 + thisRect.width / 2, thatRect.top + thatRect.height + 40 - thisRect.height / 2]);

this.value - (pointThisCenter - pointText);