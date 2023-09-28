document.getElementById('p1').style.color = 'blue';

const para = document.createElement('p');

/**
 * createTextNode je metoda DOM (Document Object Model) koja se koristi u JavaScriptu za stvaranje novog teksta čvora (text node) u HTML dokumentu. Text node predstavlja tekstualni sadržaj unutar HTML elemenata. Ova metoda je posebno korisna kada želite dodati ili ažurirati tekstualni sadržaj unutar HTML elemenata.
 */
const node = document.createTextNode('Am I new here? Yes I am!');

/**
 * appendChild je metoda DOM (Document Object Model) koja se koristi u JavaScriptu za dodavanje čvora (elementa) kao djeteta drugog čvora. Ova metoda omogućava manipulaciju strukturom HTML dokumenta tako da možete dodavati nove elemente u postojeće HTML elemente.
 */
para.appendChild(node);

const element = document.getElementById('div1');
element.appendChild(para);

const p2 = document.getElementById('p2');
p2.remove();

let h1 = document.querySelector('h1');
/**
 * Svojstvo innerText je svojstvo DOM (Document Object Model) elementa u JavaScriptu koje omogućava pristup i manipulaciju vidljivim tekstualnim sadržajem unutar tog elementa. 
 * Čitanje teksta: Možete koristiti innerText za čitanje teksta unutar odabranog elementa. 
 * Promjena teksta: Možete koristiti innerText za postavljanje novog teksta unutar elementa. Na primjer:
 * Ignorira stilove: innerText uzima u obzir CSS stilove, što znači da neće vratiti tekst koji je sakriven CSS pravilima (na primjer, display: none).
 * Brine o bijelim prostorima: innerText obraća pažnju na bijele prostore (razmake, nove linije) i obrađuje ih u skladu s prikazanim tekstom.
 */
h1.innerText = 'Hello, class.';

document.querySelector('#div2').innerHTML = '<h1>I just added me here.</h1>'
