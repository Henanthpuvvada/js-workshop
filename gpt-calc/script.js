document.addEventListener('DOMContentLoaded', function() {
    function createElement(type, className, parent) {
        const element = document.createElement(type);
        if (className) element.className = className;
        if (parent) parent.appendChild(element);
        return element;
    }
    
    function createButton(value, className, parent, onClick) {
        const button = document.createElement('input');
        button.type = 'button';
        button.value = value;
        if (className) button.className = className;
        button.addEventListener('click', onClick);
        parent.appendChild(button);
        return button;
    }
    
    function handleButtonClick(value, displayInput) {
        if (value === 'ac') {
            displayInput.value = '';
        } else if (value === 'de') {
            displayInput.value = displayInput.value.slice(0, -1);
        } else if (value === '=') {
            try {
                displayInput.value = eval(displayInput.value);
            } catch (e) {
                displayInput.value = 'Error';
            }
        } else {
            displayInput.value += value;
        }\
    }

    const container = createElement('div', 'container', document.body);
    const calculator = createElement('div', 'calculator', container);
    const form = createElement('form', null, calculator);
    
    const displayDiv = createElement('div', 'display', form);
    const displayInput = createElement('input', null, displayDiv);
    displayInput.type = 'text';
    displayInput.name = 'display';

    const buttons = [
        ['ac', 'de', '.', '/'],
        ['1', '2', '3', '+'],
        ['4', '5', '6', '-'],
        ['7', '8', '9', '*'],
        ['00', '0', '=', '']
    ];

    buttons.forEach(function(row) {
        const rowDiv = createElement('div', null, form);
        row.forEach(function(value) {
            if (value) {
                createButton(value, value === '=' ? 'equal' : '', rowDiv, function() {
                    handleButtonClick(value, displayInput);
                });
            }
        });
    });

    displayInput.value = '';
});
