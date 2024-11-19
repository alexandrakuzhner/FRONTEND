//Измените текст заголовка с id="main-title" на "Заголовок изменен с помощью JavaScript"

const change = document.getElementById("main-title");
change.innerText = "Заголовок изменен с помощью JavaScript";  
console.log(change);

// Измените стиль абзацев с классом text, установив цвет текста в синий.

const textBlue = document.querySelectorAll(".text");
textBlue.forEach(element => {
    element.style.color = "blue";
});

//Добавьте обработчик события на кнопку с id="change-title", который при нажатии изменит текст заголовка на "Заголовок изменен по кнопке".

const textChangeBtn = document.getElementById("change-title");

textChangeBtn.addEventListener('click', () => {
    change.innerText = 'Заголовок изменен по кнопке';

});

//Добавьте обработчик события на кнопку с id="add-paragraph", который при нажатии добавит новый абзац с текстом "Новый абзац добавлен." в конец body.

const addParagraphBtn = document.getElementById('add-paragraph');

addParagraphBtn.addEventListener('click', () => {
    const newPar = document.createElement("p")
    newPar.innerText = "Новый абзац добавлен."
    document.body.appendChild(newPar)
});
