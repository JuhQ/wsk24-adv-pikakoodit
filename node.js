
const objekti = {arvo: {}}

const nimi = objekti?.arvo?.henkilo?.nimi

let nimi2;
if(objekti && objekti.arvo && objekti.arvo.henkilo && objekti.arvo.henkilo.nimi) {
  nimi2 = objekti.arvo.henkilo.nimi
}

console.log("nimi", nimi)

const a = [{b: {c: 'arvo'}}]

const arvo = a?.[0]?.b?.c

let arvo2;
if(a && a[0] && a[0].b && a[0].b.c) {
  arvo2 = a[0].b.c
}