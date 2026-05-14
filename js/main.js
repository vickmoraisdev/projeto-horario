function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var horaAtual = data.getHours()
    var minutoAtual = data.getMinutes()

    if (horaAtual == 1){
        msg.innerHTML = `Agora são ${horaAtual}:${minutoAtual} hora.`
    } else{
        msg.innerHTML = `Agora são ${horaAtual}:${minutoAtual} horas.`
    }

    if (horaAtual >= 0 && horaAtual < 12){
        img.src = 'imagens/ftmanha.png'
        document.body.style.backgroundColor = 'rgb(195, 139, 82)'
    } else if (horaAtual >= 12 && horaAtual < 18){
        img.src = 'imagens/fttarde.png'
        document.body.style.backgroundColor = 'rgb(171, 165, 94)'
    } else{
        img.src = 'imagens/ftnoite.png'
        document.body.style.backgroundColor = 'rgb(58, 65, 76)'
    }
}

setInterval(carregar, 1000)