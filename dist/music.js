const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    volume: 0.35,
    fixed: true,
    order: 'random',
    audio: 
    [
      {
        name: '爱情公寓',
        artist: '爱情公寓全体',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/%E7%BE%A4%E6%98%9F%20-%20%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93.mp3',
        cover: 'https://p2.music.126.net/CrPfLVU881-kSrab_HxuoA==/644313813916636.jpg?param=300y300',
      },
      {
        name: '暖光',
        artist: 'ACEMAX-RED',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/ACEMAX-RED%20-%20%E6%9A%96%E5%85%89.mp3',
        cover: 'https://p2.music.126.net/wAmAfpCrlJ1mZUQzQL7dRQ==/18627925999690215.jpg?param=300y300',
      },
      {
        name: 'Flight of Dreams',
        artist: 'X-Ray Dog',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/X-Ray%20Dog%20-%20Flight%20Of%20Dreams.mp3',
        cover: 'https://p2.music.126.net/9Ck1luGzDt0gL8byomrq-w==/693791837169757.jpg?param=300y300',
      },
      {
        name: 'Riding the Light',
        artist: 'Really Slow Motion',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/Epic%20Soul%20Factory%2CCesc%20Vil%C3%A0%2CFran%20Soto%20-%20Riding%20the%20Light.mp3',
        cover: 'https://p1.music.126.net/JtxQrPWKNPWRk9lHlX3KFw==/3263350515511114.jpg?param=300y300',
      },
      {
        name: 'future base',
        artist: 'Kizuna AI',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/Kizuna%20AI%20-%20future%20base.mp3',
        cover: 'https://p2.music.126.net/gGAuGAYRY8xXurBACZ70DA==/109951163625926676.jpg?param=300y300',
      },
      {
        name: 'PARADOX',
        artist: '雨宮天',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/%E9%9B%A8%E5%AE%AE%E5%A4%A9%20-%20PARADOX.mp3',
        cover: 'https://p1.music.126.net/YSpu50YaxWzsQR74wJVVKw==/109951164616217167.jpg?param=300y300',
      },
      {
        name: 'チューリングラブ (feat. Sou)',
        artist: 'ナナヲアカリ',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/%E3%83%8A%E3%83%8A%E3%83%B2%E3%82%A2%E3%82%AB%E3%83%AA%2CSou%20-%20%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%A9%E3%83%96.mp3',
        cover: 'https://p2.music.126.net/5QtPTM6bVAonfu0TeRvAlw==/109951164645180369.jpg?param=300y300',
      },
      {
        name: 'まっすぐに、トウメイに。',
        artist: '水瀬いのり',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90%E3%81%AB%E3%80%81%E3%83%88%E3%82%A6%E3%83%A1%E3%82%A4%E3%81%AB%E3%80%82.mp3',
        cover: 'https://p1.music.126.net/StIBkGpDjsfCAvdsTbc9-Q==/109951164174972539.jpg?param=300y300',
      },
      {
        name: '渋谷川',
        artist: '欅坂46',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/%E6%AC%85%E5%9D%8246%20-%20%E6%B8%8B%E8%B0%B7%E5%B7%9D.mp3',
        cover: 'https://p1.music.126.net/geWSzhnJttpOUDIPGEo2vQ==/18602637231797619.jpg?param=300y300',
      },
      {
        name: '優しい詩。',
        artist: 'RSP',
        url: 'https://oss.pm-z.tech/playlist/2020-w06/RSP%20-%20%E5%84%AA%E3%81%97%E3%81%84%E8%A9%A9%E3%80%82.mp3',
        cover: 'https://p4.music.126.net/rGcJTTr1KmwhLFPesBkc0A==/5929666208707370.jpg?param=300y300',
      },
      {
        name: 'AM11:00',
        artist: '高橋李依',
        url: 'https://oss.pm-z.tech/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fF2LY0HyduM_2.jpg?max_age=2592000',
      }]
});
