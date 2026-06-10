import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true, // 启用音乐播放器功能
	showFloatingPlayer: true, // 显示悬浮播放器 UI
	floatingEntryMode: "default", // 悬浮入口模式："default" 为独立悬浮播放器，"fab" 为集成到通用 FAB 组
	mode: "local", // 使用本地/Release 文件
	meting_api:
		"https://meting.mysqil.com/api?server=:server&type=:type&id=:id&auth=:auth&r=:r", // Meting API 地址
	id: "14164869977", // 歌单ID
	server: "netease", // 音乐源服务器：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐
	type: "playlist", // 播单类型
};
