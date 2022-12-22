// set important variables for grid painting field

const gridContainer = document.getElementById('gridContainer')

// set function to create a 16x16 grid of divs

function createGridOfDiv(row, col){
    gridContainer.style.setProperty('--grid-row', row);
    gridContainer.style.setProperty('--grid-col', col);
    for(i = 0; i < (row * col); i++){
        let div = document.createElement('div');
        div.innerText = (i+1);
        div.style.border = '1px solid grey';
        div.style.color = 'white'
        
        gridContainer.appendChild(div),className = 'gridElement';
       
    }

}

createGridOfDiv(16, 16);



// set important variables for input field to change size of the painting field

const input = document.getElementById('changegridSizeInput')
const button = document.getElementById('buttonForChange')
const errorMessage = document.getElementById('errorParagraph')


// set function to display error message when input.value > 100 || input.value <= 0

function errorMsg(){
    const val = input.value;
    console.log(val)
    if(val >= 101){
        errorMessage.innerText = 'error. your input must be 100 or less'
    } else if(val <= 0){
        errorMessage.innerText = 'error. your input must be greater than 0'
    }

}

// set a function that adjusts the grid size to the input



