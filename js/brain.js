const chatId = -1001721257302
const token = '5212586189:AAH7U2ne6xkIL_Wzg4CJITiPdpm0COaEjsY'

async function messageSender(name, surname, phone){
    try {
        //validation
    if(name.value.length < 2 || name.value.length > 20) throw new Error("Неверный ввод имени!")
    if(surname.value.length < 2 || surname.value.length > 20) throw new Error("Неверный ввод фамилии!")
    if(!(/^\+998(9[01345789]|6[125679]|7[01234569]|33)[0-9]{7}$/.test(phone.value))) throw new Error("Неверный номер мобильного телефона! пример: +998999999999")
    
        // message
    const message = `Mijoz:%0A - <b>Ism:</b> <i>${name.value}</i>%0A - <b>Familiya:</b> <i>${surname.value}</i>%0A - <b>Telefon raqam:</b> <i>${phone.value}</i>`
    
        //sending a message to the chat
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`)
    alert("Ваша заявка отправлена!")
    window.location = '/'
    } catch (error) {
        alert(error.message)
    }
    
}

form.onsubmit = (e) => {
    e.preventDefault();
    messageSender(fname, lname, mnumber)
}

formModal.onsubmit = (e) => {
    e.preventDefault();
    messageSender(fnameModal, lnameModal, mnumberModal)
}