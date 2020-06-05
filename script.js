
//first, create calculator object

const calculator = {
    _display: document.getElementById('display'),  //this will be the property that will be updated as buttons are pushed
    _buttons: {
        _numbers: [ zero, one, two, three, four, five, six, seven, eight, nine, decimal],  
        _operators: [add, subtract, multiply, divide, clear, equals],    
    },
    _memory: 0,  //this will contain the first operand while the second operand is inputted
    _memoryOperation = null, //this will contain either '+','-','*' or '/' and will be checked when equals is hit to determine the correct operation


    get display() {  // basic getter function
        return this._display.innerHTML;
    },

    set display(newOutput) {        // setter function with built in Error capability for numbers too large or small. (may adjust this later)
        if (newOutput < 1e16 && newOutput > -1e16){
            this._display.innerHTML = newOutput;
        } else {
            this._display.innerHTML = 'Error';
        }
    },
    get numberButtons(){
        return this._buttons._numbers;
    },
    get operatorButtons() {
        return this._buttons._operators;
    },
    get memory(){
        return this._memory
    },
    set memory(newMemory){
        this._memory = newMemory;
    },
    get memoryOperation(){
        return this._memoryOperation
    },
    set memoryOperation(newOperator){
        this._memoryOperation = newOperator
    },
    numberButtonDisplay(event) {
        if (event.target === decimal && calculator.display.indexOf('.') !== -1){ // check to see if there is already a decimal point in the dislayed number
            return;  //dont accept another decimal input
        };

        if (calculator.display === '0' && event.target !== decimal) { // if inputting a digit when the display reads 0
        calculator._display.innerHTML = event.target.value;  //replace the initial 0 instead of concatenating to it
        } else {
            calculator._display.innerHTML += event.target.value; // else concatenate
        
        }
    },
    operatorFunctions : {
        '+'(){
            this.memory = parseFloat(this.display);
            this.display = 0

        }
    },

    resetDisplay(event) { //used for clear button
        calculator._display.innerHTML = '0'
        console.log('logged'); 
    }
}
//
//
//make sure the calculator outputs '0' in the beginning

document.onload = calculator.resetDisplay();

//fill number buttons array
let numberList = document.querySelectorAll('.js-number');
calculator.numberButtons = numberList;
calculator.numberButtons.forEach( button => button.value = button.innerHTML);
calculator.numberButtons.forEach( button => button.onclick = calculator.numberButtonDisplay);

//fill operator buttons array
let operatorList = document.querySelectorAll('.js-operator');
calculator.operatorButtons = operatorList
calculator.operatorButtons.add.value = '+';  //add values to be stored in memoryOperation
calculator.operatorButtons.subtract.value = '-';
calculator.operatorButtons.multiply.value = '*';
calculator.operatorButtons.divide.value = '/';


//-----BUTTON EVENT LISTENERS-----

//add clear button functionality
clear.onclick = calculator.resetDisplay

//add addition functionalityy
console.log("424")





// Maybe create a superclass for all buttons with the basic constructor, then create subclasses for numbers, operators etc.
// Operators will have unique functions but will share similar behaviour with respect to the display
// clear and equals will be their own buttons as they're unlike the others.

// Things to do:
// - get numbers keys to appear in the display. Treat them like strings and concatenate them into the calculator.display property. Decimal is classed as a number.
// - create a function which tests to ensure that a number cannot begin with >1 zero and decimal point cannot appear twice or more.
// - create memory variable which stores current value of calculations and will be returned upon hitting equals.
//
//
//
//
//
//
//
