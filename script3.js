const container = document.querySelector('.container');
const errorText = document.querySelector('.yuyu');
function getImage() {
    let inputValue = Number(document.querySelector('.riri').value);
    if (Number.isInteger(inputValue) && !isNaN(inputValue) && inputValue>0 && inputValue<11) {
        xhr.open("get", " https://picsum.photos/v2/list?limit=" + inputValue, true);
        xhr.send() ;
        errorText.textContent =''
    }
    else {
        errorText.textContent = 'число вне диапазона от 1 до 10';
    }
}

const xhr = new XMLHttpRequest();

xhr.onload = ()=> {
    const image = JSON.parse(xhr.response);
  for (let i=0; i<image.length; i++) {
    container.innerHTML += '<img src="' + image[i].download_url + '" width="' + image[i].width + '" heigth="' + image[i].heigth +'">'
  }
};

xhr.onerror = function() {
  console.log('Ошибка запроса');
};


