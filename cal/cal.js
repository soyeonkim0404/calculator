class Calculator{
    constructor(displayElement){
        this.displayElement = displayElement;
        this.displayContent = '';
        this.operatorChecked = true; //숫자 전에 연산자 입력 방지
        this.equalsChecked = false;
    }

    appendNumber(number){
        if(this.equalsChecked){
            this.displayContent =  number; 
            this.equalsChecked = false;
        }else{
            this.displayContent +=  number; 
        }
         this.operatorChecked = false; // 숫자 입력 후 연산자 입력 가능하게 false 처리
    }

    appendOperator(operator){
        if(this.operatorChecked) return false;//연산자가 있을 경우 더블 입력 방지
        if(this.equalsChecked){
            this.equalsChecked = false;
        };
        this.displayContent += operator;
        return this.operatorChecked = true; //연산자 + 연산자 입력 방지
    }

    updateDisplay(){
        this.displayElement.value = this.displayContent;
    }

    clear(){
        this.displayElement.value = 0;
        this.displayContent = '';
        this.operatorChecked = true;
    }

    compute(){
        if(this.operatorChecked) return;
        this.displayContent = eval(this.displayContent);
        this.equalsChecked = true;
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