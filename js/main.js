window.onload = function() {
    var ingles = document.getElementById('ingles')
    ingles.style.display = 'none'
}

function english() {

    var castellano = document.getElementsByClassName('castellano')
    var ingles = document.getElementsByClassName('ingles')
    castellano.style.display = 'none'
    ingles.style.display = 'block'

}