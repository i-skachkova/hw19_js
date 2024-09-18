// task1
const modalOpenBtn = document.querySelector(`[open-modal]`);
const modalCloseBtn = document.querySelector(`[close-modal]`);
const backdrop = document.querySelector(".backdrop");
modalOpenBtn.addEventListener("click", () => {
    backdrop.classList.add("show-modal");
});
modalCloseBtn.addEventListener("click", () => {
    backdrop.classList.remove("show-modal");
});

//task2
backdrop.addEventListener("click", () => {
    backdrop.classList.remove("show-modal");
})

// task3
const whiteBg = document.querySelector(`[value="white"]`);
const violetBg = document.querySelector(`[value="violet"]`);
const blueBg = document.querySelector(`[value="lightblue"]`);
const body = document.querySelector('body');
whiteBg.addEventListener("change", () => {
    body.style = `background-color: white`;
})
violetBg.addEventListener("change", () => {
    body.style = `background-color: violet`;
})
blueBg.addEventListener("change", () => {
    body.style = `background-color: lightblue`;
})

// task4
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
    if(nameInput.value.length != 0){
        nameOutput.textContent = nameInput.value;
    }
    else nameOutput.textContent = "stranger";
})

const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("change", () => {
    if(validationInput.value.length == validationInput.dataset.length){
        validationInput.classList.remove("invalid")
        validationInput.classList.add("valid");
    }
    else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid")
    }
})

// task5
const sizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
sizeControl.addEventListener("input", () => {
    textEl.style = `font-size: ${sizeControl.value}px`;
})

