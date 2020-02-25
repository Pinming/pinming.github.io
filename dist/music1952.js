const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    volume: 0.35,
    fixed: true,
    order: 'random',
    audio: 
    [
      {
        name: '17 岁',
        artist: '刘德华',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/30%2017%E6%AD%B2_40448.m4a',
        cover: 'http://p1.music.126.net/JbyQqEiwE3olLJilhgte9Q==/57174604656680.jpg?param=300y300',
      },
      {
        name: 'Everywhere We Go (Feat. 應采兒）',
        artist: '陳冠希 / MC仁 / 厨房仔',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/%E9%99%88%E5%86%A0%E5%B8%8C%20-%20Everywhere%20We%20Go%20%28feat.%20%E5%BA%94%E9%87%87%E5%84%BF%29.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001A6yV80rgJxL.jpg?max_age=2592000',
      },
      {
        name: '冬大过年',
        artist: '东山少爷',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/%E4%B8%9C%E5%B1%B1%E5%B0%91%E7%88%B7%20-%20%E5%86%AC%E5%A4%A7%E8%BF%87%E5%B9%B4.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000zxAn13WnmCT.jpg?max_age=2592000',
      },
      {
        name: '白日',
        artist: 'RADWIMPS',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/RADWIMPS%20-%20%E7%99%BD%E6%97%A5.mp3',
        cover: 'http://p1.music.126.net/tu9aCD5RNXkuoVexuSCT8Q==/5808719929586511.jpg?param=300y300',
      },
      {
        name: 'One Step',
        artist: '水瀬いのり / 花澤香菜 / 井口裕香 / 早見沙織',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%2C%E8%8A%B1%E6%BE%A4%E9%A6%99%E8%8F%9C%2C%E4%BA%95%E5%8F%A3%E8%A3%95%E9%A6%99%20-%20One%20Step.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000011bbDX1L2BGC.jpg?max_age=2592000',
      },
      {
        name: '水彩メモリー',
        artist: '水瀬いのり',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E6%B0%B4%E5%BD%A9%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003mKGAa1hoNgk_1.jpg?max_age=2592000',
      },
      {
        name: 'サーチライトと月灯り',
        artist: '水瀬いのり',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E3%82%B5%E3%83%BC%E3%83%81%E3%83%A9%E3%82%A4%E3%83%88%E3%81%A8%E6%9C%88%E7%81%AF%E3%82%8A.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004KR4MG36L0oR.jpg?max_age=2592000',
      },
      {
        name: '僕を見つけて',
        artist: 'fhána',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/fh%C3%A1na%20%28%E3%83%95%E3%82%A1%E3%83%8A%29%20-%20%E5%83%95%E3%82%92%E8%A6%8B%E3%81%A4%E3%81%91%E3%81%A6%20%5Bmqms2%5D.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004Wg1LA2GFUvn.jpg?max_age=2592000',
      },
      {
        name: 'CROSSING STORIES',
        artist: 'Animelo Summer Live',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/01.%20CROSSING%20STORIES.mp3',
        cover: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/resize_image.jpg',
      },
      {
        name: '粉雪',
        artist: '高橋李依',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2019-w52/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20%E7%B2%89%E9%9B%AA.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001GCe4t47dO7p_1.jpg?max_age=2592000',
      },
      {
        name: 'AM11:00',
        artist: '高橋李依',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fF2LY0HyduM_2.jpg?max_age=2592000',
      }]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});