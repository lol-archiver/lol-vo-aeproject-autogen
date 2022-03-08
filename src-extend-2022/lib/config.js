/** @type {C} */
this.C = JSON.parse(ReadFile(PATH_CONFIG));
this.I = JSON.parse(ReadFile(PATH_INFO));
this.I.offsetsSplash = JSON.parse(ReadFile(`${C.dirAutogen}/reso/splash-offset.json`));


C.widthVideo = C.video.width;
C.heightVideo = C.video.height;
// [C.widthVideo, C.heightVideo] = [C.heightVideo, C.widthVideo];
C.isLandscape = C.widthVideo > C.heightVideo;
C.pixelAspect = 1;
C.frameRate = 60;


if(!C.isLandscape) {
	C.video.size.fontLine -= 16;
	C.video.size.fontMark -= 16;
	C.video.size.paddingLine -= 16;
	C.video.size.paddingMark -= 16;
}

$.writeln('isLandscape: ' + C.isLandscape);


this.D = {
	interval: C.video.duration.interval,
	opener: C.video.duration.opener,
	ending: C.video.duration.ending,
};