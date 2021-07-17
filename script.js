let video = document.getElementById("video1")

function retroceder () {

  video.currentTime -= 10

}
function avancar () {

  video.currentTime += 10

}
function diminuir_vel () {

  video.playbackRate -= 0.1

}
function aumentar_vel () {

  video.playbackRate += 0.1

}
function play () {

  video.play();

}
function stop () {

  video.pause()
  video.currentTime = 0
}





// ========== AULA 01 E 02 ====================

// let image = document.getElementById('like')

// image.addEventListener('click', function () {
//   image.setAttribute('src', 'images/deslike.jpg')
// })

// let lista = document.getElementById('lista')

// lista.dataset.n = '10'

// let num = parseInt(lista.dataset.n)

// console.log()

// let conteudo = ''

// for (let i = 0; i < num; i++) {
//   conteudo += '<li>' + i + '</li>'
// }

// lista.innerHTML = conteudo
