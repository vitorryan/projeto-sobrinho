function pesquisar()
{
    var valorinput = document.getElementById('nomea').value
    document.getElementById('animalnome').innerHTML = valorinput
    var img = document.getElementById('foto')

    if (valorinput == "vaca")
    {
        document.getElementById('animalnome').innerHTML = '&#x1F404'
        img.src = '/source/img/vaca.png'
    } else if (valorinput == "cachorro") {
        document.getElementById('animalnome').innerHTML = '&#x1F415'
        img.src = '/source/img/cachorro.jpg'
    } else if (valorinput == "gato") {
        document.getElementById('animalnome').innerHTML = '&#x1F408'
        img.src = '/source/img/gato.jpg'
    } else if (valorinput == "aguia") {
        document.getElementById('animalnome').innerHTML = '&#x1F985'
        img.src = '/source/img/aguia.jpg'
    } else if (valorinput == "cavalo") {
        document.getElementById('animalnome').innerHTML = '&#x1F40E'
        img.src = '/source/img/cavalo.jpg'
    } else if (valorinput == "cobra") {
        document.getElementById('animalnome').innerHTML = '&#x1F40D'
        img.src = '/source/img/cobra.jpg'
    } else if (valorinput == "coelho") {
        document.getElementById('animalnome').innerHTML = '&#x1F407'
        img.src = '/source/img/coelho.jpg'
    } else if (valorinput == "elefante") {
        document.getElementById('animalnome').innerHTML = '&#x1F418'
        img.src = '/source/img/elefante.jpg'
    } else if (valorinput == "galinha") {
        document.getElementById('animalnome').innerHTML = '&#x1F413'
        img.src = '/source/img/galinha.jpg'
    } else if (valorinput == "girafa") {
        document.getElementById('animalnome').innerHTML = '&#x1F992'
        img.src = '/source/img/girafa.jpg'
    } else if (valorinput == "javali") {
        document.getElementById('animalnome').innerHTML = '&#x1F417'
        img.src = '/source/img/javali.jpg'
    } else if (valorinput == "leão") {
        document.getElementById('animalnome').innerHTML = '&#x1F981'
        img.src = '/source/img/leao.jpg'
    } else if (valorinput == "lobo") {
        document.getElementById('animalnome').innerHTML = '&#x1F43A'
        img.src = '/source/img/lobo.jpg'
    } else if (valorinput == "macaco") {
        document.getElementById('animalnome').innerHTML = '&#x1F412'
        img.src = '/source/img/macaco.jpg'
    } else if (valorinput == "urso panda") {
        document.getElementById('animalnome').innerHTML = '&#x1F43C'
        img.src = '/source/img/panda.jpg'
    } else if (valorinput == "pato") {
        document.getElementById('animalnome').innerHTML = '&#x1F986'
        img.src = '/source/img/pato.jpg'
    } else if (valorinput == "urso polar") {
        document.getElementById('animalnome').innerHTML = '&#x1F43B &#x200D &#x2744 &#xFE0F'
        img.src = '/source/img/polar.jpg'
    } else if (valorinput == "porco") {
        document.getElementById('animalnome').innerHTML = '&#x1F416'
        img.src = '/source/img/porco.jpg'
    } else if (valorinput == "raposa") {
        document.getElementById('animalnome').innerHTML = '&#x1F98A'
        img.src = '/source/img/raposa.jpg'
    } else if (valorinput == "sapo") {
        document.getElementById('animalnome').innerHTML = '&#x1F438'
        img.src = '/source/img/sapo.jpg'
    } else if (valorinput == "tigre") {
        document.getElementById('animalnome').innerHTML = '&#x1F405'
        img.src = '/source/img/tigre.jpg'
    } else if (valorinput == "urso") {
        document.getElementById('animalnome').innerHTML = '&#x1F43B'
        img.src = '/source/img/urso.jpg'
    }

}
