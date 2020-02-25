const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    volume: 0.35,
    fixed: true,
    order: 'random',
    audio: 
    [
      {
        name: 'Final Masquerade (Acoustic Version)',
        artist: 'Silent Sunrise',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/Silent%20Sunrise%20-%20Final%20Masquerade%20%28Acoustic%20Version%29.mp3',
        cover: 'http://p2.music.126.net/Mev5f7xIE46dg21Gdyh0yQ==/17867063951749416.jpg?param=300y300',
      },
      {
        name: 'アイデンティティ',
        artist: 'いきものがかり',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/%E3%81%84%E3%81%8D%E3%82%82%E3%81%AE%E3%81%8C%E3%81%8B%E3%82%8A%20-%20%E3%82%A2%E3%82%A4%E3%83%87%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%20%281%29.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R800x800M000001D21mP3ai50p_1.jpg?max_age=2592000',
      },
      {
        name: '再生',
        artist: 'Perfume',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/Perfume%20-%20%E5%86%8D%E7%94%9F.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000FTmPL4Jh3VT_1.jpg?max_age=2592000',
      },
      {
        name: '不協和音',
        artist: '欅坂46',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/%E6%AC%85%E5%9D%8246%20-%20%E4%B8%8D%E5%8D%94%E5%92%8C%E9%9F%B3.mp3',
        cover: 'http://p2.music.126.net/54E-jxN-h5PQSkQ_GHr69w==/19023750184019596.jpg?param=300y300',
      },
      {
        name: 'シンクロニシティ',
        artist: '乃木坂46',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/%E4%B9%83%E6%9C%A8%E5%9D%8246%20-%20%E3%82%B7%E3%83%B3%E3%82%AF%E3%83%AD%E3%83%8B%E3%82%B7%E3%83%86%E3%82%A3.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001hAqUU2Vhr7W_1.jpg?max_age=2592000',
      },
      {
        name: 'キラメキ',
        artist: 'wacci',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/wacci%20-%20%E3%82%AD%E3%83%A9%E3%83%A1%E3%82%AD.mp3',
        cover: 'http://p2.music.126.net/U7n8mmSSjws9c7SzSswT_g==/2544269908190764.jpg?param=300y300',
      },
      {
        name: 'ハルカトオク',
        artist: 'saya',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/saya%20-%20%E3%83%8F%E3%83%AB%E3%82%AB%E3%83%88%E3%82%AA%E3%82%AF.mp3',
        cover: 'http://p1.music.126.net/h_ZLk1JkF5PLir6nAF4cTA==/109951163156112751.jpg?param=300y300',
      },
      {
        name: '光',
        artist: '水瀬いのり',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E5%85%89.mp3',
        cover: 'http://p2.music.126.net/ZLMlr_87qdHYLxJ128-tlg==/109951164458989291.jpg?param=300y300',
      },
      {
        name: 'Innocent flower',
        artist: '水瀬いのり',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20Innocent%20flower.mp3',
        cover: 'http://p1.music.126.net/l6ugT-W8kVywTzgW5p7Pjw==/109951163386653469.jpg?param=300y300',
      },
      {
        name: 'これからも。',
        artist: '水瀬いのり',
        url: 'http://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/2020-w04/%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A%20-%20%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%82%82%E3%80%82.mp3',
        cover: 'http://p2.music.126.net/X4uoT9sIHmyGphl1EWYbTw==/109951163313911355.jpg?param=300y300',
      },
      {
        name: 'AM11:00',
        artist: '高橋李依',
        url: 'https://pinmingblog.oss-cn-hongkong.aliyuncs.com/playlist/%E9%AB%98%E6%A9%8B%E6%9D%8E%E4%BE%9D%20-%20AM11.00.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fF2LY0HyduM_2.jpg?max_age=2592000',
      }]
});
