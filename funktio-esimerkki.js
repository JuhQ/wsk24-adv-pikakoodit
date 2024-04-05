function funktionNimi() {
  // ...
  return 1 + 1
}

const toinenFunktio = function() {
  // ...
  return 1 + 1
}

const funktionNimi2 = () => {
  // ..
  return 1 + 1
}

const funktionNimi3 = () => 1 + 1

const createUser = (name) => {name}

let muuttuja;
if(arvo === true) {
  muuttuja = 1;
} else {
  muuttuja = 2;
}

// ternary
let muuttuja2 = arvo === true ? 1 : 2;


let muuttuja3 = 2;
if(arvo === true) {
  muuttuja3 = 1;
}

window?.print?.()

if (window && window.print) {
  window.print()
}

const nimi = objekti?.arvo.henkilo?.nimi


// coalescing operator
// ternary version
let muuttuja4 = arvo !== null ? arvo : 'default arvo';

// coalescing versio
let muuttuja5 = arvo ?? 'default arvo'


const funktio0 = ({arvo, toinen, kolmas}) => 1 +1


funktio0({arvo: 1, toinen: 5, kolmas: 100, juha: "haloo", flunssa: "buu"})

const props = {arvo: 1, toinen: 5, kolmas: 100, juha: "haloo", flunssa: "buu"}

const {arvo, toinen, kolmas} = props


const uusiMuuttuja = {
  ...props,
  arvo: 2
}

const uusiMuuttuja2 = {
  arvo: props.arvo,
  toinen: props.toinen,
  kolmas: props.kolmas,
  juha: props.juha,
  flunssa: props.flunssa,
  arvo: 2
}



const uusiMuuttuja3 = {
  ...props,
  ...uusiMuuttuja,
  ...uusiMuuttuja2,
  ...window,
  arvo: 2
}
