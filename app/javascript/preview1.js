if (document.URL.match(/new/) || document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', () => {
    // 画像を表示する親となる箱を指定
    const ImageList = document.getElementById('image-list');

    // createImageHTMLの関数定義
    const createImageHTML = (blob) => {
      // imageを入れるImageBoxの数を数える
      const imageBox_length = document.querySelectorAll('.image_box').length
      console.log(`div.imageBoxの数: ${imageBox_length}`) // 後で削除
      // 画像が3枚になったらimageBox字体作成しないようにする
      if (imageBox_length <= 1) {
      // 画像を入れるためのdivを作成 <div class="image_box" id="image_box_0"></div>
      const imageBox = document.createElement('div');
      imageBox.setAttribute('class', "image_box");
      imageBox.setAttribute('id', `image_box_${imageBox_length}`);
      console.log(`divのid: ${imageBox.id}`) // 後で削除
      // imageBoxに入れるimgタグの生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('class', "item-image")
      blobImage.setAttribute('id', `item_image_${imageBox_length}`);
      console.log(`imgのid: ${blobImage.id}`) // 後で削除
      console.log(imageBox_length)
      // 次の投稿画像のためのinputタグを生成
      const nextInput = document.createElement('input');
      console.log(nextInput)
      nextInput.setAttribute('id', `image_file_${imageBox_length + 1}`)
      nextInput.setAttribute('name', 'item[images][]');
      nextInput.setAttribute('type', 'file');
      nextInput.setAttribute('class', "hidden");
      console.log(`次のinputのid: ${nextInput.id}`) // 後で削除
      
      // labelのfor属性を次のinputに変更していく
      const labelFor = document.getElementById('form-image');
      labelFor.setAttribute('for', `image_file_${imageBox_length + 1}`);
      console.log(`labelのfor属性の値: ${labelFor.getAttribute('for')}`) // 後で削除
      
      // 生成したdivの中にimgを入れてブラウザに表示
      imageBox.appendChild(nextInput);
      imageBox.appendChild(blobImage);
      ImageList.appendChild(imageBox);
      
      // 画像が投稿されたら削除ボタンを作成するようにす
      const li = document.createElement('li');
      const createDeleteBtn = document.createElement('input');
      createDeleteBtn.setAttribute('id', `${imageBox_length}`);
      createDeleteBtn.setAttribute('class', "delete_btn");
      createDeleteBtn.setAttribute('type', 'button');
      createDeleteBtn.setAttribute('value', "削除");
      console.log(`削除ボタンのid: ${createDeleteBtn.id}`);
      // 削除ボタンを入れる場所の取得
      const btnBox = document.querySelector('#btn-box');
      li.appendChild(createDeleteBtn);
      btnBox.appendChild(li);

      // 次のinputがクリックされたらcreateImageHTMLの作業をもう一度発生させる
      nextInput.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        createImageHTML(blob);
      })
    }
      // 削除ボタンがクリックされたら画像が削除される
      createDeleteBtn.addEventListener('click', () => {
        console.log(`${createDeleteBtn.id}がクリックされた`)
        imageBox.remove()
        createDeleteBtn.remove()
        imageBox_length - 1;
      })
    }

    // 最初の画像をURLに変換させてcreateImageHTMLに送信
    document.getElementById('image_file_0').addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createImageHTML(blob);
    })
  }

    
  });
};