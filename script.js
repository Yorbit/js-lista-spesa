const listItem = [
    'Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta'
]

const toshopItem = document.getElementById('list');

let index = 0;

while (index < listItem.length) {

    const newItem = document.createElement('li');

    newItem.classList.add('padding');

    toshopItem.append(newItem);

    newItem.innerHTML = (listItem[index]);

    index++;
}

// ! CICLO FOR PROVA \\
// for (let index = 0; index < listItem.length; index++) {
        
//     const newItem = document.createElement('li');

//     newItem.classList.add('padding');

//     toshopItem.append(newItem);

//     newItem.innerHTML = (listItem[index]);
// }
// CICLO FOR \\