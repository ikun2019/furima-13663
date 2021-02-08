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

      // 画像が表示されたら削除ボタンを作成する
      const createDeleteBtn = document.createElement('input');
      createDeleteBtn.setAttribute('class', "delete_btn");
      createDeleteBtn.setAttribute('id', `${i}`);
      createDeleteBtn.setAttribute('type', 'button');
      createDeleteBtn.setAttribute('value', "delete");
      console.log(`削除ボタンのid: ${createDeleteBtn.id}`);

      // 生成したdivの中にimgタグとinputタグを入れてブラウザに表示
      createDiv.appendChild(createImg);
      createDiv.appendChild(createDeleteBtn);
      createDiv.appendChild(createNextInput);
      ImageList.appendChild(createDiv);
      
      // 削除ボタンがクリックされたらcreateDivとcreateDeleteBtnが削除される
      const deleteBtns = document.querySelectorAll('.delete_btn');
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', () => {
          if (document.querySelectorAll('.image_box').length >= 1) {
            const ImageBox = document.querySelector(`#image_box_${deleteBtn.id}`);
            ImageBox.remove();
          } else {
            const ImageBox = document.querySelector(`#image_box_${deleteBtn.id}`);
            ImageBox.remove();
            // ImageList.innerHTML = <%= f.file_field :images, name: 'item[images][]', id: 'image_file_0', class: 'hidden input-image' %>
            ImageList.insertAdjacentHTML('afterbegin', '<input name="item[images][]" id="image_file_0" class="hidden input-image" type="file">');
          }
        });
      });

      // labelが次にクリックされたらcreateHTMLをもう一度発生させる
        createNextInput.addEventListener('change', (e) => {
          file = e.target.files[0];
          blob = window.URL.createObjectURL(file);
          i++;
          createHTML(blob);
        });
    };//createHTML
    
    //最初の画像をURLに変換させてcreateHTML関数に渡す
    document.querySelector('#image_file_0').addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createHTML(blob);
    });
  })//DOMContentLoaded

  
}//外枠
