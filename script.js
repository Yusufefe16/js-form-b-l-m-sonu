let userFormDOM = document.querySelector('#userForm')  //form id sini queryselector ile userFormDOM a atadık
userFormDOM.addEventListener('submit', formHandler) // submit butonuna basarsak formHandler fonksiyonunu çalıştırmasını istedik
const alertDOM = document.querySelector('#alert')  // alert id sini queryselector ile alertDOM a atadık


const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;


function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "" //kullanıcı adını sıfırladık
        SCORE.value = "" // not bilgisini sıfırladık

        //fonksiyon sorunsuz çalışırsa bu alerti tetikle
        alertDOM.innerHTML = alertFunction(
            "İşlem başarılı",
            "Bilgiler Güncellendi!",
            "success"
            )
        }
    //fonksiyon sorunsuz çalışmazsa bu alerti tetikle
    else{
        alertDOM.innerHTML = alertFunction(
            "HATA",
            "Eksik Bilgi Girdiniz!",
            "danger"
            )
        }
    
}

let userListDOM = document.querySelector('#userList') // list id sini queryselector ile userListDOM a atadık



// burada listgroup a li elementi ekliyoruz 
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}