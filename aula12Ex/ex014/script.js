function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <12 ) {
        img.src = 'manha.png'  
        document.body.style.background = '#55b2f5' 
    } else if (hora >= 12 && hora <18) {
        img.src = 'tarde.png'
        document.body.style.background = '#fe7b01'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1b2b58'
    }
}

