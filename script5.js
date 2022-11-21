const container = document.querySelector('.container')
const errorText = document.querySelector('.errorText')

if(JSON.parse(localStorage.getItem("lastImages"))) {
    FillImages(JSON.parse(localStorage.getItem("lastImages")))
}

function sendRequest() {
    const limit = document.querySelector('.limit').value
    const page = document.querySelector('.page').value

    if((limit>10  limit < 1) && (page>10  page < 1)) {
        errorText.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
    }
    else{
        if(limit>10  limit < 1) {
            errorText.textContent = 'Лимит вне диапазона от 1 до 10'
        }
        else{
            if(page<1  page > 10) {
                errorText.textContent = 'Номер страницы вне диапазона от 1 до 10'
            }
            else {
                errorText.textContent = ''
                fetch('https://picsum.photos/v2/list?page=%27+ page +'&limit=' + limit)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        FillImages(data)
                        localStorage.setItem("lastImages", JSON.stringify(data));
                    })
            }
        }
    }
}

function FillImages(data) {
    container.innerHTML = ''
    for (let i=0; i<data.length; i++) {
        container.innerHTML += '<img src="' + data[i].download_url + '">'
    }
}