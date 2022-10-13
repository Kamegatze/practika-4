const controls = document.querySelector('#controls');
const buttons = document.querySelector('#buttons');
let flexContainer = document.querySelector('#flexContainer');


// обработчик нажатия Add Item и Remove Item
buttons.addEventListener('click', (e) => {
    if(e.target.tagName !== 'BUTTON') return;
    else {
        const { btn } = e.target.dataset;
        if(btn === 'addBtn') {
            const lengthFlexItem = document.querySelectorAll('.flex-item').length;
            if(lengthFlexItem + 1 < 7) {
                const newItem = document.createElement('div');

                newItem.className = 'flex-item';

                newItem.textContent = lengthFlexItem + 1;

                flexContainer.append(newItem);
            }
        }
        else if(btn === 'removeBtn') {
            const indexLast = document.querySelectorAll('.flex-item').length;

            if(indexLast > 1) {
                const itemToRemove = document.querySelectorAll('.flex-item')[indexLast - 1];
                itemToRemove.remove();
            }
        }
    }
});

// изменеие состояния flexbox и выбор всех элементов или одного
controls.addEventListener('change', (e) => {
        const prop = e.target.id;

        const value = e.target.value;

        if (e.target.parentElement.id === 'flexContainerProps') {
            flexContainer.style[prop] = value;
        }
        else {
            const selectedItem = document.querySelector('.selected');
            selectedItem.style[prop] = value;
        }
});

flexContainer.addEventListener('click', (e) => {
   if(e.target.className !== 'flex-item' || e.target.classList.contains('selected')) {return;}

   if(document.querySelector('.selected') !== null) {
       document.querySelector('.selected').classList.remove('selected');
   }

   e.target.classList.add('selected');

    const getStyle = (property, element = e.target) =>
        getComputedStyle(element).getPropertyValue(property);

    getStyle('order', flexContainer);
    getStyle('flex-grow', flexContainer);
    getStyle('flex-shrink', flexContainer);
    getStyle('align-self', flexContainer);
});
