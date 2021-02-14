if (document.URL.match(/new/)) {
  document.addEventListener('DOMContentLoaded', () => {
    const ImageList = document.querySelector('#image-list');
    let i = 0;

    // createHTMLの関数
    const createHTML = (blob) => {
      // imgタグを入れるImageBoxの数を数える
      const imageBox_length = document.querySelectorAll('.image_box').length;
      console.log(`div.image_boxの数: ${imageBox_length}`);

      // imgを入れるためのdiv.image_boxを生成
      const createImageBox = document.createElement('div');
      createImageBox.setAttribute('class', 'image_box');
      createImageBox.setAttribute('id', `image_box_${i}`);
      console.log(`divタグのid: ${createImageBox.id}`);

      // imgタグの生成
      const createImg = document.createElement('img');
      createImg.setAttribute('class', 'item_image');
      createImg.setAttribute('id', `item_image_${i}`);
      createImg.setAttribute('src', blob);
      console.log(`imgタグのid: ${createImg.id}`);

      // 画像が表示されたら削除ボタンを生成
      const createDeleteBtn = document.createElement('input');
      createDeleteBtn.setAttribute('class', "delete_btn");
      createDeleteBtn.setAttribute('id', `${i}`);
      createDeleteBtn.setAttribute('type', 'button');
      createDeleteBtn.setAttribute('value', "Delete");
      console.log(`削除ボタンのid: ${createDeleteBtn.id}`);

      // div.image_boxの中にimgタグと削除ボタンを入れてブラウザで表示
      createImageBox.appendChild(createImg);
      createImageBox.appendChild(createDeleteBtn);
      ImageList.appendChild(createImageBox);

      // 次の画像投稿のためのinputタグを生成
      const createNextInput = document.createElement('input');
      createNextInput.setAttribute('class', "hidden input-image");
      createNextInput.setAttribute('id', `image_file_${i + 1}`)
      createNextInput.setAttribute('name', 'item[images][]');
      createNextInput.setAttribute('type', 'file');
      console.log(`次のinputのid: ${createNextInput.id}`) // 後で削除
      //labelのfor属性を次のinputに変更していく
      const label = document.querySelector('#form-image');
      label.setAttribute('for', `image_file_${i + 1}`);
      console.log(`labelのfor属性の値: ${label.getAttribute('for')}`) // 後で削除
      // inputタグをdiv#image_listに入れる
      ImageList.appendChild(createNextInput);

      // 削除ボタンがクリックされたらcreateImgBoxとcreateDeleteBtnが削除される

      createDeleteBtn.addEventListener('click', () => {
        const img_tag = document.querySelector(`#item_image_${createDeleteBtn.id}`);
        img_tag.remove();
        createDeleteBtn.remove();
        const imgBox = document.querySelector(`#image_box_${createDeleteBtn.id}`);
        imgBox.remove();
        const inputTag = document.querySelector(`#image_file_${createDeleteBtn.id}`);
        inputTag.remove();
      });

      // labelが次にクリックされたらcreateHTMLを発生させる
      createNextInput.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);
        i++;
        createHTML(blob);
      });
    }; //createHTML



    // 最初の画像をURLに変換してcreateHTMLに渡す
    document.querySelector('#image_file_0').addEventListener('change', (e) => {
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      createHTML(blob);
    });
  });
};