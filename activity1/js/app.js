function calc() {
     var num1 = parseInt(document.querySelector("#firstNum").value);
     var num2 = parseInt(document.querySelector("#secondNum").value);
     var operator = document.querySelector("#operator").value;
     var calculate;

     if (operator == "add") {
         calculate = num1 +  num2;
     } else if (operator == "min") {
         calculate = num1 - num2;
     } else if (operator == "div") {
         calculate = num1 / num2;
     } else if (operator == "mul") {
         calculate = num1 * num2;
     }

     document.querySelector("#results").innerHTML = `Result: ${calculate}`;
}