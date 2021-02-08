if (document.URL.match(/item/)) {
  document.addEventListener("DOMContentLoaded", () => {
    // メイン画像のsrcを取得
    const mainImage = document.getElementById('item-box-img');
    
    // サムネイル画像をクリックしたらイベント発火
    const thumbnailImage = document.querySelectorAll(".thumbnail");
    // メイン画像になっているサムネイルにcurrentクラスを付ける
    thumbnailImage[0].classList.add('current');

    thumbnailImage.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        const thumbnailSRC = thumbnail.src
        mainImage.setAttribute('src', thumbnailSRC)
        
        // currentのクラスが付いている画像からcurrentクラスを外す
        const currentImage = document.getElementsByClassName('current');
        currentImage[0].classList.remove('current');
        thumbnail.classList.add('current');
        
        // ふわっとフェードアウト、ふわっとフェードイン機能
        
      });
    });
  });
};
