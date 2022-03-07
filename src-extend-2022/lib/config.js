/** @type {C} */
this.C = JSON.parse(ReadFile(PATH_CONFIG));
this.I = JSON.parse(ReadFile(PATH_INFO));


C.widthVideo = C.video.width;
C.heightVideo = C.video.height;
// [C.widthVideo, C.heightVideo] = [C.heightVideo, C.widthVideo];
C.isLandscape = C.widthVideo > C.heightVideo;
C.pixelAspect = 1;
C.frameRate = 60;


this.D = {
	interval: C.video.duration.interval,
	title: C.video.duration.title,
	credit: C.video.duration.credit,
};