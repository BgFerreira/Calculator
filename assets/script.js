class Calculator {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }


    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }


    setOperation(_operation) {
        this.operation = _operation;
    }


    getResult() {

        if (this.operation == "+") {
            return this.operand1 + this.operand2;

        } else if (this.operation == "-") {
            return this.operand1 - this.operand2;

        } else if (this.operation == "*") {
            return this.operand1 * this.operand2;

        } else {
            if (this.operand2 == 0) {
                return "Division by Zero"
            } else {
                return this.operand1 / this.operand2;
            }
        }
    }

    clearCalculator() {
        this.operand1 = undefined;
        this.operand2 = undefined;
        this.operation = undefined;
    }
}

let myCalculator = new Calculator();
let displayString;

function writeOnDisplay(_number) {

    let lookFloatPoint;

    if (document.getElementById("display").innerHTML == "0" || document.getElementById("display").innerHTML == "Division by Zero") {
        document.getElementById("display").innerHTML = "";
        displayString = undefined;
    }

    if (document.getElementById("display").innerHTML.length <= 12) {
        if (_number == ".") {
            for (let i = 0; i < displayString.length; i++) {
                if (displayString[i] == ".") {
                    lookFloatPoint = true;
                }
            }

            if (lookFloatPoint != true && displayString.length > 0) {
                document.getElementById("display").innerHTML += _number;
            }
        } else {
            document.getElementById("display").innerHTML += _number;
        }

        displayString = document.getElementById("display").innerHTML;
    }
}

function chooseOperation(_operationSymbol) {
    if (displayString != undefined) {
        document.getElementById("display").innerHTML = "0";
        myCalculator.setOperand1(parseFloat(displayString));
        myCalculator.setOperation(_operationSymbol);
        displayString = 0;
    }
}

function letCalculate() {
    if (myCalculator.operand1 != undefined && displayString != undefined) {
        document.getElementById("display").innerHTML = "";
        myCalculator.setOperand2(parseFloat(displayString));
        myCalculator.getResult();
        document.getElementById("display").innerHTML = myCalculator.getResult();
        displayString = myCalculator.getResult();
    }
}

function eraseCalculator() {
    myCalculator.clearCalculator();
    displayString = 0;
    document.getElementById("display").innerHTML = "0";
}