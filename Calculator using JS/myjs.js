document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const numberButtonsContainer = document.getElementById("number-buttons");

    
    const digits = ['1','2','3','4','5','6','7','8','9','0'];
    digits.forEach(digit => {
        const btn = document.createElement("button");
        btn.textContent = digit;
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.addEventListener("click", () => {
            display.value += digit;
        });
        numberButtonsContainer.appendChild(btn);
    });

    
    document.getElementById("clear").addEventListener("click", () => {
        display.value = "";
        document.getElementById("result").innerHTML = "Result:";
    });

    
    document.getElementById("back").addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
    });

    
    document.getElementById("equals").addEventListener("click", () => {
        try {
            const result = eval(display.value);
            document.getElementById("result").innerHTML = `Result: ${result}`;
        } catch (e) {
            document.getElementById("result").innerHTML = "Result: Error";
        }
    });
});

function calculate(operation) {
    const display = document.getElementById("display");
    if (operation === 'mod') {
        display.value += '%';
    } else if (operation === 'power') {
        display.value += '**';
    } else {
        display.value += operation;
    }
}
