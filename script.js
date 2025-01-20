const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let currentInput = "";
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            result.value = "";
        } else if (value === "=") {
            try {
                result.value = eval(currentInput);
            } catch {
                result.value = "Error";
            }
        } else {
            currentInput += value;
            result.value = currentInput;
        }
    });
});