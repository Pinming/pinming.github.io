const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    volume: 0.15,
    fixed: true,
    order: 'random',
    lrcType: 3,
    audio: 
    [
      {
        name: 'Tomorrow will be fine',
        artist: 'Sodagreen',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/Sodagreen%20-%20Tomorrow%20will%20be%20fine.mp3',
        cover: 'https://p2.music.126.net/76Hpk_9ot2h2dozv5JbbYA==/109951164737016168.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/1.lrc'
      },
      {
        name: '夏恋慕 feat. 春茶',
        artist: 'コバソロ',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/kobasolo%2C%E6%98%A5%E8%8C%B6%20-%20%E5%A4%8F%E6%81%8B%E6%85%95.mp3',
        cover: 'https://p2.music.126.net/KdIoAAKck0vEKw8JEyIdwA==/109951163747709192.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/2.lrc'
      },
      {
        name: 'Calling',
        artist: 'HoneyComeBear',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/HoneyComeBear%20-%20Calling.mp3',
        cover: 'https://p1.music.126.net/1TJKmU2G68LF6ofg0Zq94Q==/109951164055614269.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/3.lrc'
      },
      {
        name: '太陽は見上げる人を選ばない',
        artist: '欅坂46',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/%E6%AC%85%E5%9D%8246%20-%20%E5%A4%AA%E9%99%BD%E3%81%AF%E8%A6%8B%E4%B8%8A%E3%81%92%E3%82%8B%E4%BA%BA%E3%82%92%E9%81%B8%E3%81%B0%E3%81%AA%E3%81%84.mp3',
        cover: 'https://p2.music.126.net/LI4PLldrWYxO0piHhvIGyQ==/109951164418368532.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/4.lrc'
      },
      {
        name: 'センチメンタルクライシス',
        artist: 'halca',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/halca%20-%20%E3%82%BB%E3%83%B3%E3%83%81%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AB%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%B7%E3%82%B9.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001DbhSX46msF7_1.jpg?max_age=2592000',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/5.lrc'
      },
      {
        name: 'アルペジオ',
        artist: '水瀬いのり',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E3%82%A2%E3%83%AB%E3%83%9A%E3%82%B8%E3%82%AA.mp3',
        cover: 'https://p2.music.126.net/X4uoT9sIHmyGphl1EWYbTw==/109951163313911355.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/6.lrc'
      },
      {
        name: 'MELODY FLAG',
        artist: '水瀬いのり',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20MELODY%20FLAG.mp3',
        cover: 'https://p1.music.126.net/kkVMlWzfhQ10tSjhEcQIIg==/109951163352030362.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/7.lrc'
      },
      {
        name: '春待ちクローバー',
        artist: 'M・A・O',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/M%E3%83%BBA%E3%83%BBO%20-%20%E6%98%A5%E5%BE%85%E3%81%A1%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BC.mp3',
        cover: 'https://p2.music.126.net/C7_lX3H8rLnA3E3Vph2-Qg==/18578447976309782.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/8.lrc'
      },
      {
        name: '青空モーニンググローリー',
        artist: 'M・A・O',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/M%E3%83%BBA%E3%83%BBO%20-%20%E9%9D%92%E7%A9%BA%E3%83%A2%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%BC.mp3',
        cover: 'https://p2.music.126.net/Vo45GRF_VMbZwlDHMY-k-w==/109951163427597673.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/9.lrc'
      },
      {
        name: 'ポプラと僕らのヒストリー',
        artist: '高橋李依',
        url: 'https://oss.pm-z.tech/playlist/2020-w13/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20%E3%83%9D%E3%83%97%E3%83%A9%E3%81%A8%E5%83%95%E3%82%89%E3%81%AE%E3%83%92%E3%82%B9%E3%83%88%E3%83%AA%E3%83%BC.mp3',
        cover: 'https://p1.music.126.net/crAe_B8qH-ghn_YXjaCftw==/109951163512223031.jpg?param=300y300',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/10.lrc'
      },
      {
        name: 'AM11:00',
        artist: '高橋李依',
        url: 'https://oss.pm-z.tech/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fF2LY0HyduM_2.jpg?max_age=2592000',
        lrc: 'https://oss.pm-z.tech/playlist/2020-w13/lyric/11.lrc'
      }]
});
