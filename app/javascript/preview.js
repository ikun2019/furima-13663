if (document.URL.match(/new/) || document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', function() {
    const ImageList = document.getElementById('image-list');
    let i = 0;

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
      const imageElement = document.createElement('div')
      imageElement.setAttribute('class', "image-element")
      let imageElementNum = document.querySelectorAll('.image-element').length
      console.log(imageElementNum)

      if (imageElementNum <= 2) {
      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)
      blobImage.setAttribute('class', "item-image")
      blobImage.setAttribute('id', `item_image_${imageElementNum}`)

      // ファイル選択ボタンを生成
        const inputHTML = document.createElement('input')
        inputHTML.setAttribute('id', `item_images_${imageElementNum + 1}`)
        inputHTML.setAttribute('name', 'item[images][]')
        inputHTML.setAttribute('type', 'file')
        inputHTML.setAttribute('class', "hidden")
    
      // labelのfor属性の変更
        const labelFor = document.getElementById('form-image')
        labelFor.setAttribute('for', `item_images_${imageElementNum + 1}`)

        // 生成したHTMLの要素をブラウザに表示させる
        imageElement.appendChild(blobImage)
        imageElement.appendChild(inputHTML)
        ImageList.appendChild(imageElement)
      
      //画像が投稿されたらカメラの写真を削除
      const camera = document.getElementById('camera');
      camera.setAttribute('class','hidden');

      //画像が投稿されたら新たな削除用inputタグを生成する
      const btns = document.querySelector('.btns');
      const li = document.createElement('li');
      const inputDeleteBtn = document.createElement('input');
      inputDeleteBtn.setAttribute('type','button');
      inputDeleteBtn.setAttribute('value', "削除");
      inputDeleteBtn.setAttribute('class', 'btn')
      inputDeleteBtn.setAttribute('id', `image_delete_${imageElementNum}`)
      
      inputDeleteBtn.setAttribute('id', `${i}`)
      li.appendChild(inputDeleteBtn);
      btns.appendChild(li);
      i++;
      }

      // 削除ボタンの起動を実装
      const deleteBtns = document.querySelectorAll('.delete_btn')
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', () => {
          // imgタグを削除
          const deleteImageElement = document.getElementById(`item_image_${deleteBtn.id}`)
          deleteImageElement.parentNode.remove()
          // 削除ボタンを削除
          // deleteBtn.remove()
        })
      })

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob)
      })
    }

    document.getElementById('item_images_0').addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createImageHTML(blob)
    });
  });
};