// function createElt(
//   tagName,
//   container,
//   className,
//   attributeName,
//   attributeValue,
// ) {
//   // let myElement; // on met un let car on va modifier la valeur
//   // // ATTENTION: On peut déclarer une variable sans RIEN LUI AFFECTER, elle renverra undefined

//   // if (tagName) {
//   //   myElement = document.createElement(tagName);
//   // } else {
//   //   myElement = document.createElement("div");
//   // }
//    OU en utilisant les opérateurs ternaires :    const myElement = document.createElement(tagName ? tagName : "div");

//   if (className) {
//     myElement.className = className;
//   }

//   if (attributeName && attributeValue) {
//     myElement.setAttribute(attributeName, attributeValue);
//   }

//   if (container) {
//     container.appendChild(myElement);
//   } else {
//     document.body.appendChild(myElement);
//   }

//   return myElement; // Après un return on sort de la fonction, donc si le return est avant la fin de celle-ci, la fonction ne va pas jusqu'à la fin
// }

// const div = createElt(undefined, undefined, "container");
// createElt(undefined, div, "site-header clearfix", "role", "banner");

// const obj = {
//   toto: -1,
//   nested: {
//     tata: 36,
//     sum: function (a, b) {
//       return a + b;
//     },
//   },
// };
// const { toto, nested } = obj;
// console.log(toto);
// console.log(nested.sum(1, 2));

/**
 * create element with given tag
 * @param {*} parameters
 */
function createElt(parameters) {
  const myElement = document.createElement(
    parameters.tagName ? parameters.tagName : "div"
  );

  if (parameters.className) {
    myElement.className = parameters.className;
  }

  if (parameters.attributeName && parameters.attributeValue) {
    myElement.setAttribute(parameters.attributeName, parameters.attributeValue);
  }

  if (parameters.container) {
    parameters.container.appendChild(myElement);
  } else {
    document.body.appendChild(myElement);
  }

  return myElement; // Après un return on sort de la fonction, donc si le return est avant la fin de celle-ci, la fonction ne va pas jusqu'à la fin
}

const div = createElt({
  className: "container",
});
createElt({
  tagName: "p",
  className: "paragraph",
  attributeName: "role",
  attributeValue: "Michel",
});

// the function should display the object if the type of the parameter is object
// otherwise, it should display unsupported type
// how do you check the type of the variable/parameter?

// now, instead of displaying the object, display all its properties keys, without adding parameter
function test(p) {
  if (typeof p === "object") {
    const keys = Object.keys(p);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      console.log(key, p[key]);
    }
  } else {
    console.log("unsupported type");
  }
  return p;
}

// test(1); // param number
// test(true); // param true
// test(typeof p); // param string

const name = {
  titi: "ramdom string",
  embedded: {
    plop: false,
  },
  arr: [1, false],
};

const v = "titi";

console.log(name.titi);
console.log(name["titi"]); // MEME CHOSE POUR LES TROIS
console.log(name[v]);

// console.log(name.titi);
// console.log(name["titi"]);

// console.log(name.arr[1]);
// console.log(name["arr"]);

//test(name);

/*
function test(p) {
  if (typeof p === "object") {
    const keys = Object.keys(p);
    for (let i = 0; i < keys.length - 1; i++) {
      console.log(keys[i]);
    }
  } else {
    console.log("unsupported type");
  }
  return p;
}

p => name
typeof p => "object"   
typeof p === "object" => true
Object.keys(p) =>  ["titi", "embedded", "arr"]

i = 0
keys.length - 1 => 2
i < keys.length - 1 => true
keys[i] => "titi"

i++ => i = 1

i = 1
keys.length - 1 => 2
i < keys.length - 1 => true
keys[i] => "embedded"

i++ => i = 2

i = 2
keys.length - 1 => 2
i < keys.length - 1 => false


*/

// param object with one property named titi with a random string value
// and another property named embedded which is an object with one boolean property named plop with value false
// and one last property named arr which is an array with values 1 and false

// const t = [];
// t.push(2);
// t.push(false);
// t.push("bonjour");
// t.push({
//   bonjour: "salut",
//   nombre: 1,
// });
// t.push([3, 4, 5]);

// console.log(t[4][2]);

//console.log(t);
//console.log(t[t.length - 1]);
//console.log(t[3]["bonjour"]);

// function objectTest() {
//   return { plop: "yoho" };
// }
// const sfdget = { plop: "yoho" };
// const sgs = [{ plop: "yoho" }];

// console.log({ plop: "yoho" }.plop);
// console.log(objectTest().plop);
// console.log(sfdget.plop);
// console.log(sgs[0].plop);
