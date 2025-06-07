// Simple Calculator
function calculate(){
    const num1 = parseFloat(document.getElementById('calc-num1').value);
    const num2 = parseFloat(document.getElementById('calc-num2').value);
    const operator = document.getElementById('calc-operator').value;
    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0){
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2;
            break;
    }
    document.getElementById('calc-result').innerText = "Result: " + result.toFixed(2);
}

// BMI Calculator
function calculateBMI(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(1);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    document.getElementById('bmi-result').innerText = "Your BMI: " + roundedBMI;
    document.getElementById('bmi-category').innerText = "Category: " + category;
}

// Income Tax Calculator
function calculateTax(){
    const get_Tax = parseFloat(document.getElementById('annual-income').value);
    let tax = 0;
    let get_category = "";
    // A
    if(get_Tax >= 0 && get_Tax<= 5000){
        tax = 0;
        get_category = "A";
    // B
    }else if(get_Tax >= 5001 && get_Tax <= 20000){
        tax = (get_Tax - 5000) * 0.01;
        get_category = "B";
    // C
    }else if(get_Tax >= 20001 && get_Tax <= 35000){
        tax = 150 + (get_Tax - 20000) * 0.03;
        get_category = "C";
    // D
    }else if(get_Tax >= 35001 && get_Tax <= 50000){
        tax = 600 + (get_Tax - 35000) * 0.08;
        get_category = "D";
    // E
    }else if(get_Tax >= 50001 && get_Tax <= 70000){
        tax = 1800 + (get_Tax - 50000) * 0.13;
        get_category = "E";
    // F
    }else if(get_Tax >= 70001 && get_Tax <= 100000){
        tax = 4400 + (get_Tax - 70000) * 0.21;
        get_category = "F";
    // G
    }else if(get_Tax >= 100001 && get_Tax <= 250000){
        tax = 10700 + (get_Tax - 100000) * 0.24;
        get_category = "G";
    // H
    }else if(get_Tax >= 250001 && get_Tax <= 400000){
        tax = 46700 + (get_Tax - 250000) * 0.245;
        get_category = "H";
    // I
    }else if(get_Tax >= 400001 && get_Tax <= 600000){
        tax = 83450 + (get_Tax - 400000) * 0.25;
        get_category = "I";
    // J
    }else if(get_Tax >= 600001 && get_Tax <= 1000000){
        tax = 133450 + (get_Tax - 600000) * 0.26;
        get_category = "J";
    // K
    }else if(get_Tax >= 1000001 && get_Tax <= 2000000){
        tax = 237450 + (get_Tax - 1000000) * 0.28;
        get_category = "K";
    // L
    }else if(get_Tax >= 2000000){
        tax = 517450 + (get_Tax - 2000000) * 0.30;
        get_category = "L";
    }
    
    document.getElementById("tax-result").innerText = "Tax Amount: RM " + tax.toFixed(2);
    document.getElementById("category-result").innerText = "Categorya: " + get_category;
}

// Unit Converter
function convert(type) {
    const input = parseFloat(document.getElementById('convert-input').value);

    let result;
    switch (type) {
        case 'cmToM':
            result = input / 100;
            document.getElementById('convert-result').innerText = input + "cm = " + result + "m";
            break;
        case 'mToCm':
            result = input * 100;
            document.getElementById('convert-result').innerText = input + "m = " + result + "cm";
            break;
        case 'mToKm':
            result = input / 1000;
            document.getElementById('convert-result').innerText = input + "m = " + result + "km";
            break;
        case 'kmToM':
            result = input * 1000;
            document.getElementById('convert-result').innerText = input + "km = " + result + "m";
            break;
    }
} 