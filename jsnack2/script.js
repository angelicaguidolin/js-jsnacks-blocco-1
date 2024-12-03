//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e 
//comunicagli se può partecipare o no alla festa.
const grandeGastby = [ 'Nathan','Ed','Fabio','Phil','Carlo', 'Lewis','Luca']

const urName= prompt("inserisci il tuo nome")

if(grandeGastby === urName ){
    alert("sei stato invitato")
} else{
    alert("non sei nella lista")
}





/*if(grandeGastby.includes(urName)){
    alert("Sei nella lista")
} else{
    alert("non sei nella lista")
}*/
