const thatLayer = thisComp.layer(5);

const thisRect = thisLayer.sourceRectAtTime(time);
const thatRect = thatLayer.sourceRectAtTime(time);

const pointThisCenter = thisLayer.toComp([thisRect.left + thisRect.width / 2, thisRect.top + thisRect.height / 2]);
const pointThat = thatLayer.toComp([thatRect.left + thatRect.width / 2 + 50, thatRect.top + thatRect.height / 2 + 50]);

this.value - (pointThisCenter - pointThat);