const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

//per poter stampare il valore del quarto insegnante vado ad utilizzarela variabile teachers e sapendo che si parte a contare da 0 vado ad utilizzare il numero 3
const fourthTeacher = teachers[3];

//il valore che viene stampato in console è Phil
console.log(fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

//vado ad utilizzare splice perchè va ad aggiungere o rimuovere elementi
//visto che l'insegnante da sostituire è il quinto, andando in ordine, l'insegnante nella lista è il quarto
//dobbiamo poi eliminare un elemento
//bisogna sostituire 'Patrick'

teachers.splice(4, 1, 'Patrick');
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

//per poter rimuovere l'ultimo elementovado ad utilizzare pop e non c'è bisogno di inserire alcun elemento tra le parentesi
const lastTeacher = teachers.pop();
console.log(lastTeacher);
console.log(teachers)

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

//per poter rimuovere il primo elemento vado ad utilizzare shift e non c'è bisogno di inserire alcun elemento tra le parentesi
const firstTeacher = teachers.shift();
console.log(firstTeacher)
console.log(teachers)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

//per poter aggiungere un insegnante vado ad utilizzare push e inserire l'elemento tra le parentesi
teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;