const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    volume: 0.35,
    fixed: true,
    order: 'random',
    audio: 
    [
      {
        name: 'アイネクライネ',
        artist: '吉岡聖恵',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/%E5%90%89%E5%B2%A1%E8%81%96%E6%81%B5%20-%20%E3%82%A2%E3%82%A4%E3%83%8D%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8D.mp3',
        cover: 'http://p1.music.126.net/dhGz-U2dj2IZlAZ5c6Zu1g==/109951163622405701.jpg?param=300y300',
      },
      {
        name: '桜流星群',
        artist: 'H△G',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/H%E2%96%B3G%20-%20%E6%A1%9C%E6%B5%81%E6%98%9F%E7%BE%A4.mp3',
        cover: 'http://p2.music.126.net/ICvLFoYTHDte37HXSLp2uQ==/109951163957080988.jpg?param=300y300',
      },
      {
        name: '宵待ち花火 -Another Version-',
        artist: 'H△G',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/H%E2%96%B3G%20-%20%E5%AE%B5%E5%BE%85%E3%81%A1%E8%8A%B1%E7%81%AB%20-Another%20Version-.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003HjMSY14Pfec_1.jpg?max_age=2592000',
      },
      {
        name: 'はじめましての気持ちを',
        artist: 'daoko',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/daoko%20-%20%E3%81%AF%E3%81%98%E3%82%81%E3%81%BE%E3%81%97%E3%81%A6%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%92.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001SBfLj3CBdDN.jpg?max_age=2592000',
      },
      {
        name: 'Joy',
        artist: 'Bastille',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/Bastille%20-%20Joy.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002ds8cs2L1uc2.jpg?max_age=2592000',
      },
      {
        name: 'Rocket Fuel (feat. De La Soul)',
        artist: 'DJ Shadow',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/DJ%20Shadow%2CDe%20La%20Soul%20-%20Rocket%20Fuel.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004aJ8nx1n2sX9_1.jpg?max_age=2592000',
      },
      {
        name: 'One Last Time',
        artist: 'Westlife',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/Westlife%20-%20One%20Last%20Time.mp3',
        cover: 'http://p2.music.126.net/fnQYZ_br1GLTMm5sPaE7Yg==/109951164488918286.jpg?param=300y300',
      },
      {
        name: '大丈夫 (Movie edit)',
        artist: 'RADWIMPS',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/RADWIMPS%20-%20%E5%A4%A7%E4%B8%88%E5%A4%AB%20%28Movie%20edit%29_192k.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000015gSHW3trz0x_1.jpg?max_age=2592000',
      },
      {
        name: 'オーダーメイド',
        artist: 'RADWIMPS',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/RADWIMPS%20-%20%E3%82%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89.mp3',
        cover: 'http://p2.music.126.net/bO7bKhF52n98g28ZyYr0Ug==/109951163043099143.jpg?param=300y300',
      },
      {
        name: 'キセキ',
        artist: '高橋李依',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20%E3%82%AD%E3%82%BB%E3%82%AD_192k.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001GCe4t47dO7p_1.jpg?max_age=2592000',
      },
      {
        name: 'AM11:00',
        artist: '高橋李依',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
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