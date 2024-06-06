const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  volume: 0.15,
  fixed: true,
  order: 'random',
  lrcType: 3,
  audio:
    [
      {
        name: "Miracles",
        artist: "Coldplay",
        url: "https://oss.pm-z.tech/playlist/2020-w22/1.mp3",
        cover: "https://p1.music.126.net/JpsUkt18Cc4JFWDZCEaAQw==/6672936070254338.jpg",
        lrc: "https://oss.pm-z.tech/playlist/lyric/1.lrc"
      },
      { name: "風に吹かれて", artist: "福原遥", url: "https://oss.pm-z.tech/playlist/2020-w22/2.mp3", cover: "https://p1.music.126.net/cxyDxf87QzcIfBbnYa6wRw==/109951164964358004.jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/2.lrc" },
      { name: "ねぇ", artist: "藤田麻衣子", url: "https://oss.pm-z.tech/playlist/2020-w22/3.mp3", cover: "https://p1.music.126.net/aoMyWkObH_fhWrGmdaY5hw==/109951164330841905.jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/3.lrc" },
      { name: "メルト (10th ANNIVERSARY MIX)", artist: "ryo × やなぎなぎ", url: "https://oss.pm-z.tech/playlist/2020-w22/4.mp3", cover: "https://p2.music.126.net/n5czYyPjzmqB4cTL_UnkuA==/109951163091446747.jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/4.lrc" },
      { name: "ユキトキ", artist: "やなぎなぎ", url: "https://oss.pm-z.tech/playlist/2020-w22/5.mp3", cover: "https://p1.music.126.net/1f9MDrTEVwX2GbVzugxG3Q==/109951163534510883.jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/5.lrc" },
      { name: "Hello Alone", artist: "早見沙織 / 東山奈央", url: "https://oss.pm-z.tech/playlist/2020-w22/6.mp3", cover: "https://pic.xiami.net/images/album/img97/82497/10660895771395395971.png?x-oss-process=image/quality,q_80/format,jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/6.lrc" },
      { name: "エブリデイワールド", artist: "早見沙織 / 東山奈央", url: "https://oss.pm-z.tech/playlist/2020-w22/7.mp3", cover: "https://pic.xiami.net/images/album/img97/82497/17316604801431660480.jpg?x-oss-process=image/resize,limit_0,m_fill,s_410/quality,q_80/format,jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/7.lrc" },
      { name: "願いは光になって", artist: "スタァライト九九組", url: "https://oss.pm-z.tech/playlist/2020-w22/8.mp3", cover: "https://pic.xiami.net/images/album/img0/62500/21028505731505869624.jpg?x-oss-process=image/resize,limit_0,m_fill,s_410/quality,q_80/format,jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/8.lrc" },
      { name: "staple stable", artist: "斎藤千和", url: "https://oss.pm-z.tech/playlist/2020-w22/9.mp3", cover: "https://pic.xiami.net/images/album/img10/65910/4368501392275584.jpg?x-oss-process=image/quality,q_80/format,jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/9.lrc" },
      { name: "君の知らない物語", artist: "supercell", url: "https://oss.pm-z.tech/playlist/2020-w22/10.mp3", cover: "https://pic.xiami.net/images/album/img45/63845/3413101376709142.jpg?x-oss-process=image/quality,q_80/format,jpg", lrc: "https://oss.pm-z.tech/playlist/lyric/10.lrc" },
      {
        name: 'AM11:00',
        artist: '高橋李依',
        url: 'https://oss.pm-z.tech/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fF2LY0HyduM_2.jpg?max_age=2592000',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/11.lrc'
      }]
});

const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
  if (!ap.list.audios[index].theme) {
    xhr.onload = function () {
      let coverUrl = URL.createObjectURL(this.response);
      image.onload = function () {
        let color = colorThief.getColor(image);
        ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        URL.revokeObjectURL(coverUrl)
      };
      image.src = coverUrl;
    }
    xhr.open('GET', ap.list.audios[index].cover, true);
    xhr.responseType = 'blob';
    xhr.send();
  }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
  setTheme(index);
});