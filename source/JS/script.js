function pesquisar()
{
    var valorinput = document.getElementById('nomea').value
    document.getElementById('animalnome').innerHTML = valorinput
    var img = document.getElementById('foto')

    if (valorinput == "vaca")
    {
        document.getElementById('animalnome').innerHTML = "Vaca"
        img.src = '/source/img/vaca.png'
    } else if (valorinput == "cachorro") {
        document.getElementById('animalnome').innerHTML = "Cachorro"
        img.src = '/source/img/cachorro.jpg'
    }
}
