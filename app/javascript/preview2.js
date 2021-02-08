if (document.URL.match(/new/) || document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', function() {
    const ImageList = document.querySelector('#image-list');
    var i = 0;

    //createHTMLの関数定義
    const createHTML = (blob) => {
      //imageを入れるImageBoxの数を数える
      const imageBox_length = document.querySelectorAll('.image_box').length;
      console.log(`div.imageBoxの数: ${imageBox_length}`) // 後で削除

      //imgをいれるためのdivを生成
        const createDiv = document.createElement('div');
        createDiv.setAttribute('class', 'image_box');
        createDiv.setAttribute('id', `image_box_${i}`);
        console.log(`divのid: ${createDiv.id}`) // 後で削除
        //imgタグの生成
        const createImg = document.createElement('img');
        createImg.setAttribute('class', 'item_image');
        createImg.setAttribute('id', `item_image_${i}`);
        createImg.setAttribute('src', blob);
        console.log(`imgのid: ${createImg.id}` )// 後で削除

        // 次の画像のためのinputタグを生成
        const createNextInput = document.createElement('input');
        createNextInput.setAttribute('class', "hidden input-image");
        createNextInput.setAttribute('id', `image_file_${i + 1}`)
        // createNextInput.setAttribute('name', 'item[images][]');
        createNextInput.setAttribute('type', 'file');
        console.log(`次のinputのid: ${createNextInput.id}`) // 後で削除
        //labelのfor属性を次のinputに変更していく
        const label = document.querySelector('#form-image');
        label.setAttribute('for', `image_file_${i + 1}`);
        console.log(`labelのfor属性の値: ${label.getAttribute('for')}`) // 後で削除

      if (Number(imageBox_length) <= 1) {
        display();
        deleteButton();
        createNextInput.prop('disabled', true);
        labelClick();
      } else if (Number(imageBox_length) == 2) {
        createNextInput.remove();
        label.removeAttribute('for');
        createDiv.appendChild(createImg);
        ImageList.appendChild(createDiv);
        deleteButton();
        alert('画像は3枚まで投稿可能です。これ以上投稿する場合はどれか削除してください。')
      } else {
        createNextInput.remove();
        label.removeAttribute('for');
        alert('2回目画像は3枚まで投稿可能です。これ以上投稿する場合はどれか削除してください。')
      }

      // 生成したdivの中にimgタグとinputタグを入れてブラウザに表示
      function display() {
        createDiv.appendChild(createImg);
        createDiv.appendChild(createNextInput);
        ImageList.appendChild(createDiv);
      }
      // 画像が表示されたら削除ボタンを作成する
      function deleteButton() {
        const createLi = document.createElement('li');
        const createDeleteBtn = document.createElement('input');
        createDeleteBtn.setAttribute('class', "delete_btn");
        createDeleteBtn.setAttribute('id', `delete_btn_${i}`);
        createDeleteBtn.setAttribute('type', 'button');
        createDeleteBtn.setAttribute('value', "削除");
        console.log(`削除ボタンのid: ${createDeleteBtn.id}`);
        // 削除ボタンを生成する
        const deleteBtnBox = document.querySelector('#btn-box');
        createLi.appendChild(createDeleteBtn);
        deleteBtnBox.appendChild(createLi);
        // 削除ボタンがクリックされたらcreateDivとcreateDeleteBtnが削除される
        createDeleteBtn.addEventListener('click', () => {
          console.log(`削除ボタン${createDeleteBtn.id}がクリックされた`) //後で削除
          createDiv.remove();
          createDeleteBtn.remove();
          createHTML();
        });
        return createDeleteBtn;
      }
      // labelが次にクリックされたらcreateHTMLをもう一度発生させる
      function labelClick() {
        createNextInput.addEventListener('change', (e) => {
          file = e.target.files[0];
          blob = window.URL.createObjectURL(file);
          i++;
          createHTML(blob);
        });
      }
    };//createHTML
    
    //最初の画像をURLに変換させてcreateHTML関数に渡す
    document.querySelector('#image_file_0').addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createHTML(blob);
    });
  })//DOMContentLoaded
}//外枠