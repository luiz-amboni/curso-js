function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var  imagem = ''

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 12) {
                imagem = 'foto-bebe-m.png'
            }else if (idade < 18) {
                imagem = 'foto-jovem-m.png'
            }else  if (idade < 50) {
                imagem = 'foto-adulto-m.png'
            }else {
                imagem = 'foto-idoso-m.png'
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >= 0 && idade < 12) {
                imagem = 'foto-bebe-f.png'
            }else if (idade < 18) {
                imagem = 'foto-jovem-f.png'
            }else  if (idade < 50) {
                imagem = 'foto-adulto-f.png'
            }else {
                imagem = 'foto-idoso-f.png'
            }
        }
        img.setAttribute('src', imagem)
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}