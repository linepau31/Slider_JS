const imgs = document.querySelectorAll('.cont-slides img'); // prend toutes les images
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0; 

suivant.addEventListener('click', slideSuivante); // click sur le bouton droit = slide suivant

function slideSuivante(){

    if(index < 2){  // l'image est inférieur à 2

        imgs[index].classList.remove('active'); // enlève l'opacity = 0, l'active
        index++;
        imgs[index].classList.add('active'); // on lui remet la classe active, opacity = 0

    }
    else if (index === 2) { // l'image est strictement égale à 2

        imgs[index].classList.remove('active'); // enlève
        index = 0;
        imgs[index].classList.add('active'); // retourne à la 1ére image

    }

    for(i = 0; i < cercles.length; i++){

        if(cercles[i].getAttribute('data-clic') - 1 === index){
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');
        }

    }

}


precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){

    if(index > 0){ // si j'ai déjà clic sur d'autre image

        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');

    }
    else if (index === 0) { // image 0, image 3, image 2

        imgs[index].classList.remove('active');
        index = 2;
        imgs[index].classList.add('active');

    }
    for(i = 0; i < cercles.length; i++){ // actualiser les rond par rapport à l'index de l'img

        if(cercles[i].getAttribute('data-clic') - 1 === index){  // actualiser les ronds
            cercles[i].classList.add('active-cercle'); // ajoute active pour suivre l'actualisation
        } 
	else {
            cercles[i].classList.remove('active-cercle'); // enlève la classe active
        }

    }
}
document.addEventListener('keydown', keyPressed)

function keyPressed(e){ // pour le clavier

    if(e.keyCode === 37){ // la touche gauche
        slidePrecedente();
    } 
    else if (e.keyCode === 39) { // la touche droite
        slideSuivante();
    }

}


// Cercles 
cercles.forEach(cercle => { // pour chaque cercle, btn

    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++) { // dès qu'on clic
            cercles[i].classList.remove('active-cercle'); // ça enlève la classe, netoie
        }
        this.classList.add('active-cercle'); // on lui rajoute la classe active

        imgs[index].classList.remove('active'); // on fais disparaitre l'image ou on été
        index = this.getAttribute('data-clic') - 1; 
        imgs[index].classList.add('active'); // on met la new image
    })

})