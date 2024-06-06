const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  volume: 0.15,
  fixed: true,
  order: 'random',
  lrcType: 3,
  audio: [
    {
      'name': '我的地盘',
      'artist': '周杰伦',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/1.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000003DFRzD192KKD_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/1.lrc'
    },
    {
      'name': '千山万水',
      'artist': '周杰伦',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/2.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000001bA5lD30v3ir_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/2.lrc'
    },
    {
      'name': '就是爱你',
      'artist': '陶喆',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/3.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000003ofGzS3C23Ow_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/3.lrc'
    },
    {
      'name': '点一把火炬',
      'artist': '林俊杰',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/4.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000002g6zv02X7SNi_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/4.lrc'
    },
    {
      'name': '距离',
      'artist': '林俊杰',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/5.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000000y5gq7449K9I_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/5.lrc'
    },
    {
      'name': '人生海海 (Live)',
      'artist': '五月天',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/6.mp3',
      'cover':
          'https://qpic.y.qq.com/music_cover/lI3oesUNbM5pQftjTiaenKd3xiaqqY2AdjJahuesN8UTQtn4NicLeY4FA/600?n=1',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/6.lrc'
    },
    {
      'name': '倔强',
      'artist': '五月天',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/7.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000002plCgA0zOyYF_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/7.lrc'
    },
    {
      'name': '知足',
      'artist': '五月天',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/8.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M0000006MmDz4Hl2Ud_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/8.lrc'
    },
    {
      'name': '群青',
      'artist': 'YOASOBI',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/9.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M000000Dy9HS1TLM8S_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/9.lrc'
    },
    {
      'name': 'RGB',
      'artist': 'YOASOBI',
      'url': 'https://oss.pm-z.tech/playlist/2022-t01/10.mp3',
      'cover':
          'https://y.qq.com/music/photo_new/T002R300x300M0000008XOOp0nijj3_1.jpg?max_age=2592000',
      'lrc': 'https://oss.pm-z.tech/playlist/lyric/10.lrc'
    },
    {
      'name': 'AM11:00',
      'artist': '高橋李依',
      'url':
          'https://oss.pm-z.tech/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
      'cover':
          'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fF2LY0HyduM_2.jpg',
      'lrc': 'https://oss.pm-z.tech/playlist/2020-w13/lyric/11.lrc'
    }
  ]
});
