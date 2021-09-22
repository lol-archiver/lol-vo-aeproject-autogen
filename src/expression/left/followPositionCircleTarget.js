const thatLayer = thisComp.layer('CircleMain');

const thisRect = thisLayer.sourceRectAtTime(time);
const thatRect = thatLayer.sourceRectAtTime(time);

const pointThisCenter = thisLayer.toComp([thisRect.left + thisRect.width / 2, thisRect.top + thisRect.height / 2]);
const pointThat = thatLayer.toComp([thatRect.left - 14, thatRect.top]);

this.value - (pointThisCenter - pointThat);