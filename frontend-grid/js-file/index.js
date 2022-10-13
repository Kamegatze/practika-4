const controls = document.querySelector('#controls');
const buttons = document.querySelector('#buttons');
let gridContainer = document.querySelector('#gridContainer');


// обработчик нажатия Add Item и Remove Item
buttons.addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') return;
    else {
        const { btn } = e.target.dataset;
        if(btn === 'addBtn') {
            const lengthGridItem = document.querySelectorAll('.grid-item').length;
            if(lengthGridItem + 1 < 10) {
                const newItem = document.createElement('div');

                newItem.className = 'grid-item';

                newItem.textContent = lengthGridItem + 1;

                gridContainer.append(newItem);
            }
        }
        else if(btn === 'removeBtn') {
            const indexLast = document.querySelectorAll('.grid-item').length;

            if(indexLast > 1) {
                const itemToRemove = document.querySelectorAll('.grid-item')[indexLast - 1];
                itemToRemove.remove();
            }
        }
    }
});

//обработка select
controls.addEventListener('change', (e) => {

    const prop = e.target.id;

    const value = e.target.value;

    if (e.target.parentElement.id === 'gridContainerProps') {

        gridContainer.style[prop] = value;
    }
    else {
        const selectedItem = document.querySelector('.selected');
        selectedItem.style[prop] = value;
    }
});

//
gridContainer.addEventListener('click', (e) => {
    if(e.target.className !== 'grid-item' || e.target.classList.contains('selected')) {return;}

    if(document.querySelector('.selected') !== null) {
        document.querySelector('.selected').classList.remove('selected');
    }

    e.target.classList.add('selected');

    //const getStyle = (property, element = e.target) =>
   //     getComputedStyle(element).getPropertyValue(property);

    //getStyle('order', gridContainer);
    //getStyle('flex-grow', gridContainer);
    //getStyle('flex-shrink', gridContainer);
    //getStyle('align-self', gridContainer);
});