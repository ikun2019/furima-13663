if (document.URL.match(/edit/)) {
  document.addEventListener('DOMContentLoaded', () => {
    const imgBoxes = document.querySelectorAll('.image_box');
    const itemId = document.querySelector('#image-list').getAttribute('data-itemId')

    imgBoxes.forEach((imgBox) => {
      // const itemId = imgBox.getAttribute('data-itemId')
      const imgId = imgBox.getAttribute('data-imgId');
      // 削除ボタンを作成
      const deleteBtnHTML = `<input type="button" class="delete_btn" value="Delete" data-imageId=${imgId}>`
      imgBox.insertAdjacentHTML("beforeend",deleteBtnHTML)
      // 削除ボタンの挙動を実装
      const deleteBtns = document.querySelectorAll('.delete_btn');
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector(`#image_box_${deleteBtn.getAttribute('data-imageId')}`).remove()
        });
      });
    });

    const XHR = new XMLHttpRequest();
    XHR.open("PATCH",`/items/${itemId}`, true);
    XHR.responseType = "json";
    XHR.send();

    XHR.onload= () => {
      const item = XHR.response.item;
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;   
      }
    };
  });// DOMContentLoaded
};