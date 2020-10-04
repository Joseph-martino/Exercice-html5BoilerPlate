function createDiv(container, className) {
  const myDiv = document.createElement("div");

  if (className) {
    myDiv.className = className;
  }

  if (container) {
    container.appendChild(myDiv);
  } else {
    document.body.appendChild(myDiv);
  }

  return myDiv; // ici c'est la valeur contenue dans la constante qui est retournee et non la constante elle-même
}

const div = createDiv(); // ici j'assigne LA VALEUR DE RETOUR de la fonction (return myDiv) et non la fonction elle-même!!
createDiv(div, "kugk kjghk");
//ici, en argument, j'ai div,qui correspond au paramètre container = la valeur de l'arguemnt div est assigné au paramètre container.
// comme il n'y a pas de second argument (correspondant au paramètre className) alors cet argument vaut undefined
// La fonction va creer un div qu'elle assignera à myDiv
// la condition du if correspond à classname, comme className est undefined alors la condition vaut false donc l'instruction dans le bloc du if n'est PAS exécuté.
//Ensuite, on passe sur le second if, qui est le if container. L'argument div correspond au paramètre container
// comme container n'est PAS undefined alors la condition du if vaut true, on entre donc dans le if, et l'instruction appendChild s'éxécute sur le container passé en argument, ici div
//Enfin, myDiv est retourné

// Pour ajouter plusieurs classes, je peux en écrire plusieurs à condtion de les séparer par un espace.
