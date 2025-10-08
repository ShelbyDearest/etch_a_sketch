document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flex-container');
    const resetContainer = document.getElementById('resetBtn');
    const newContainer = document.getElementById('newBtn');

        let size = 16;

    resetContainer.addEventListener("click", () => {
        const cells = document.querySelectorAll('.flex_cell');
        cells.forEach(cell => { cell.style.backgroundColor = ''; }); });
       
    newContainer.addEventListener("click", () => { 
        let user_input = parseInt(prompt("Please enter a number between 10-100.")); 
            if (user_input >= 10 && user_input <= 100) {
            size = user_input;
            createContainer(size); }
            else { parseInt(prompt("Incorrect. Please enter an integer between 10 and 100.")); } }); 

    function createContainer(size) {

        if (!container) return;

        container.innerHTML = '';

        let cell_size = `calc(100% / ${size})`;

        for (let i = 0; i < size * size ; i++) {
            const flex_cell = document.createElement('div');
            flex_cell.classList.add('flex_cell');
            flex_cell.style.flexBasis = cell_size; 
            flex_cell.style.height = cell_size; 

            flex_cell.addEventListener("mouseover", () => {
                flex_cell.style.backgroundColor = 'dodgerblue'; });

            container.appendChild(flex_cell); };
        };

            createContainer(size); }); 