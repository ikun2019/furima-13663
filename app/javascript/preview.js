if (document.URL.match(/new/) || document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', function() {
    const ImageList = document.getElementById('image-list');

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
      const imageElement = document.createElement('div')
      imageElement.setAttribute('class', "image-element")
      let imageElementNum = document.querySelectorAll('.image-element').length

      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)
      blobImage.setAttribute('class', "item-image")

      // ファイル選択ボタンを生成
      const inputHTML = document.createElement('input')
      inputHTML.setAttribute('id', `item_images_${imageElementNum}`)
      inputHTML.setAttribute('name', 'item[images][]')
      inputHTML.setAttribute('type', 'file')
      inputHTML.setAttribute('class', "hidden")

      // 制限枚数を3枚までにするために4つ目のinputタグを無効化
      if (inputHTML.getAttribute('id') == "item_images_2") {
        inputHTML.disabled = true;
        imageElement.appendChild(blobImage)
        ImageList.appendChild(imageElement)
        alert('画像の投稿は3枚でです。他の画像を投稿する場合はいずれかの写真を削除してください。')
      }
    
      // labelのfor属性の変更
      const labelFor = document.getElementById('form-image')
      labelFor.setAttribute('for', `item_images_${imageElementNum}`)
    
      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement)
  

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob)
      })
    }

    document.getElementById('item_images').addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createImageHTML(blob)
    });
  });
};