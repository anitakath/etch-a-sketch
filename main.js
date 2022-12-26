// set important variables for grid painting field

let theGrid = document.getElementById('theGrid')

// CREATE GRID that takes a variable 

function createGrid(a){

   // remove already existing divs at first
    let squares = theGrid.querySelectorAll('div')
    squares.forEach((div) => div.remove());

    // declare the desired number of rows and columns
    theGrid.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
    theGrid.style.gridTemplateRows = `repeat(${a}, 1fr)`;


    // set a variable that calculates width & height from a, so we can declare it in our for loop
    let amount = a * a;


    // loop through the desired number of divs, create the divs and attach them to theGrid

    for(let i = 0; i < amount; i++){
      let div = document.createElement('div');
      div.addEventListener('mouseover', () => {
          div.style.backgroundColor = 'black';
      });


      //a bit of styling so that we can distinguish the divs from each other

      // div.style.border = '1px solid black'
      //div.innerText = i+1 
      //div.style.color = 'red'
      theGrid.appendChild(div)
 
    }
}

/* createGrid(100);*/




// use the general formula to create a specific grid
// add the specified formula to your buttons, so users can change the size of the grid by clicking the buttons
// style the active button so that the user knows which large button he is on
const ten = document.querySelector('.ten')
const twenty = document.querySelector('.twenty')
const seventy = document.querySelector('.seventy')
let tenToActive = document.getElementById('tenToActive')
let twentyToActive = document.getElementById('twentyToActive')
let seventyToActive = document.getElementById('seventyToActive')

ten.addEventListener('click', ()=>{
    twentyToActive.classList.remove('active')
    seventyToActive.classList.remove('active')
    tenToActive.classList.add('active')

    createGrid(10);
})

twenty.addEventListener('click', ()=>{
    tenToActive.classList.remove('active')
    seventyToActive.classList.remove('active')
    twentyToActive.classList.add('active')
    createGrid(20);
})

seventy.addEventListener('click', ()=>{
    tenToActive.classList.remove('active')
    twentyToActive.classList.remove('active')
    seventyToActive.classList.add('active')
    createGrid(70);
})



// put an eventlistener on our delete button
// delete all divs from theGrid, when the delete button is clicked

const deleteBtn = document.querySelector('.circleDelete')

deleteBtn.addEventListener('click', ()=>{
    tenToActive.classList.remove('active')
    twentyToActive.classList.remove('active')
    seventyToActive.classList.remove('active')
    let squares = theGrid.querySelectorAll('div')
    squares.forEach((div) => div.remove());

})













// declare an eventlistener on the colorbrush, so when it is clicked the input type=color appears

const colorPicker = document.getElementById('color')
const circleColor = document.querySelector('.circleColor')
/*
colorPicker.style.visibility = 'hidden'

circleColor.addEventListener('click', () =>{
    colorPicker.style.visibility = 'visible'
})*/









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

