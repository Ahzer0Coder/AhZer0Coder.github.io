import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
  {
    id: 1,
    title: "الشيخ محمود ايوب",
    artist: ".",
    cover: "assets/music/cover/dazbee.webp",
    url: "assets/music/url/dazbee.mp3",
    duration: 0,
  },
  {
    id: 2,
    title: "القارئ جعفر السعدي",
    artist: ".",
    cover: "assets/music/cover/hitori.webp",
    url: "assets/music/url/hitori.mp3",
    duration: 240,
  },
  {
    id: 3,
    title: "الشيخ مشاري العفاسي",
    artist: ".",
    cover: "assets/music/cover/xryx.webp",
    url: "assets/music/url/xryx.mp3",
    duration: 180,
  },
  {
    id: 4,
    title: "مش فاكر اسمه",
    artist: ".",
    cover: "assets/music/cover/cl.webp",
    url: "assets/music/url/cl.mp3",
    duration: 200,
  },
];

export const DEFAULT_SONG: Song = {
  title: "Sample Song",
  artist: "Sample Artist",
  cover: "/favicon/favicon.ico",
  url: "",
  duration: 0,
  id: 0,
};

export const DEFAULT_METING_API =
  "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
