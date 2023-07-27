/// <reference types="types-for-adobe/AfterEffects/22.0"/>


/** 整数 */
type Integer = number
/** 持续时间 */
type Duration = number
/** 视频参数 */
type FilePath = string
/** 目录路径 */
type DirectoryPath = string


/**
 * 视频参数
 */
interface VideoParam {
	/** 各种持续时间 */
	readonly duration: {
		/** 每句台词之间的间隔时长 */
		readonly interval: Duration
		/** 片头持续时间 */
		readonly opener: Duration
		/** 片尾持续时间 */
		readonly ending: Duration
		/** 空台词默认持续时间 */
		readonly extendLine: Duration
	}

	/** 简单工程（用于快速生成预览） */
	readonly simple: boolean,
	/** 不添加音频文件（用于快速生成预览） */
	readonly mute: boolean,
	/**
	 * 台词范围
	 * @example
	 * [1, 4] // 从第1句开始，从第4句结束
	 */
	readonly range: [
		/** 开始 */
		Integer,
		/** 结束 */
		Integer
	],
	/** 视频宽度 */
	readonly width: number
	/** 视频高度 */
	readonly height: number

	/** 各种持续时间 */
	readonly size: {
		/** 台词字体大小 */
		readonly fontLine: number
		/** 备注字体大小 */
		readonly fontMark: number
		/** 台词内间隔 */
		readonly paddingLine: number
		/** 备注内间隔 */
		readonly paddingMark: number
		/** 台词字体行距 */
		readonly heightLeading: number
	}
}





/**
 * 视频配置
 */
interface C {
	/**
	 * 英雄或皮肤的`slot`。六位数字，前三位为`英雄`ID，后三位为`皮肤`ID
	 * @example
	 * "025026": 至尊魔女 莫甘娜
	 */
	readonly slot: string
	/**
	 * 视频的各种参数
	 */
	readonly video: VideoParam

	readonly dirExtract: DirectoryPath
	readonly dirDictation: DirectoryPath
	readonly dirRaw: DirectoryPath
	readonly dirSplashes: DirectoryPath
	readonly dirAutogen: DirectoryPath
	readonly dirExpression: DirectoryPath
	readonly dirAudio: DirectoryPath
	readonly fileLog: FilePath
	readonly fileBGM: FilePath
	readonly fileWaterMark: FilePath
	readonly fileHead: FilePath
	readonly fileSplash: FilePath
	readonly fileDictation: FilePath


	/** 视频宽度（自动生成） */
	readonly widthVideo: number
	/** 视频高度（自动生成） */
	readonly heightVideo: number
	/** 视频是否横屏（自动生成）依据：C.widthVideo > C.heightVideo */
	readonly isLandscape: boolean
	/** 视频像素比例（自动生成） */
	readonly pixelAspect: 1
	/** 视频帧率（自动生成） */
	readonly frameRate: 60



	// readonly screens: object[]
	/**
	 * Loads and evaluates a file.
	 * @param file The file to load.
	 * @param timeout An optional timeout in milliseconds.
	 */
	// evalFile(file: File, timeout?: number): any
}
declare const C: C
