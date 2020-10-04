function createElt(tagName, container, className, attributeArray) {
  let myElement;

  if (tagName) {
    // si je passe undefined, "", 0, null et fase cela vaut ==> false d'où le fait de passer l'une de ces valeurs en paramètres renverra false et exécutera de ce fait le else
    myElement = document.createElement(tagName);
  } else {
    myElement = document.createElement("div");
  }

  if (container) {
    container.appendChild(myElement);
  } else {
    document.body.appendChild(myElement);
  }

  if (className) {
    myElement.className = className;
  }

  if (attributeArray) {
    for (let i = 0; i < attributeArray.length; i++) {
      myElement.setAttribute(attributeArray[i][0], attributeArray[i][1]);
    }

    //myElement.setAttribute(attributeName, attributeValue);
  }

  return myElement;
}
/*
// creation de plusieurs tagName
function createElts(tagName, nb) {
  const array = [];
  for (let i = 0; i <= nb; i++) {
    const element = createElement(tagName);
    array.push(element);
  }
  return array;
}
*/

// i want one attribute named michel with value bg and another attribute name joseph with value bg
createElt("span", undefined, "logo", [
  ["michel", "bg"],
  ["joseph", "bg"],
]);

const tableau = [1, 2, 3];

// in the object toto, add a property named jojo which is a function which returns the string banana
// now, call this function and display banana in the console
const toto = {
  plop: "dfgserg",
  jojo: function () {
    return "banana";
  },
};

//console.log(toto.jojo());

const michel = toto.jojo;
//console.log(michel());

function testArray(attributeArray) {
  /*
   0 1 2 3 4 5 6  ...  array.length - 1
  [ | | | | | | | ... |                ] 
  */
  for (let i = 0; i < attributeArray.length; i++) {
    const name = attributeArray[i][0];
    const value = attributeArray[i][1];
    console.log(name, value);
  }
}

const tab = [
  ["michel", "bg"],
  ["joseph", "bg"],
];

/*
   0     0        1      1    0        1
  [  ["michel", "bg"]  ,    ["joseph", "bg"],  ] 
*/

testArray(tab);
