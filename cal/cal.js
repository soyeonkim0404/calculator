class Calculator{
    constructor(displayElement){
        this.displayElement = displayElement;
        this.displayContent = '';
    }

    appendNumber(number){
        this.displayContent = this.displayContent + number; 
    }

    appendOperator(operator){
        this.displayContent = this.displayContent + operator;
    }

    updateDisplay(){
        this.displayElement.value = this.displayContent;
    }

    clear(){
        this.displayElement.value = 0;
        this.displayContent = '';
    }

    compute(){
        this.displayContent = eval(this.displayContent);
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')

const calculator = new Calculator(displayElement);

buttons.forEach((e) => {
    e.addEventListener('click', () => {
        switch(e.dataset.type){
            case 'operator':
                calculator.appendOperator(e.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(e.innerText)
                calculator.updateDisplay()
                break
        }
    })
});