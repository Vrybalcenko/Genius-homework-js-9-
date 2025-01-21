// Домашнє завдання
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// document.getElementById('hider').onclick = function() {
//       document.getElementById('text').hidden = true;
// }
    

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.


// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// for (let li of tree.querySelectorAll('li')) {
//       let span = document.createElement('span');
//       li.prepend(span);
//       span.append(span.nextSibling); 
//     }

//     tree.onclick = function(event) {

//       if (event.target.tagName != 'SPAN') {
//         return;
//       }

//       let childrenContainer = event.target.parentNode.querySelector('ul');
//       if (!childrenContainer) return;

//       childrenContainer.hidden = !childrenContainer.hidden;
//     }