function creatDaysOfWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const weekDayElement = document.createElement('li');

        weekDayElement.innerText = weekDays[index];
        weekDaysList.appendChild(weekDayElement);
    }
}
creatDaysOfWeek()

// Requisito 1
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const day = document.createElement('li');
        const dayMonth = dezDaysList[index];

        day.innerText = dayMonth;

        if (dayMonth === 24 || dayMonth === 31) {
            day.className = "day holiday";
        } else if (dayMonth === 4 || dayMonth === 11 || dayMonth === 18) {
            day.className = "day friday";
        } else if (dayMonth === 25) {
            day.className = "day holiday friday";
        } else {
            day.className = "day";
        }

        days.appendChild(day);
    }
}
createDaysOfTheMonth();

// Requisito 2
function createButtonFeriado(nome) {
    const buttonContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');


    button.innerText = nome;
    button.id = "btn-holiday";

    buttonContainer.appendChild(button);

}
createButtonFeriado("Feriados");

// Requisito 3
function changeColorOfHolidays() {
    const backgroundColor = "rgb(238,238,238)";
    const button = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday');
    
    button.addEventListener("click", changeColor);
    function changeColor() {
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === "white")
                holidays[index].style.backgroundColor = "green";
            else
                holidays[index].style.backgroundColor = "white";
        }
    }
}
changeColorOfHolidays();
