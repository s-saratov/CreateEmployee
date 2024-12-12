// Создаём переменные - ссылки на необходимые элементы страницы

const formEl = document.getElementById("form-employee");
const cardEmployeeEl = document.getElementById("card-employee");
const nameLabel = document.getElementById("name_employee");
const surnameLabel = document.getElementById("surname-employee");
const ageLabel = document.getElementById("age-employee");
const jobLabel = document.getElementById("job-employee");

// Создаём функцию, отвечающую за передачу значений из полей ввода в текст карточки и её демонстрацию

const getCard = (event) => {
  event.preventDefault(); // предоставращаем стандартную отработку события

  // Создаём переменные, в которые передаём необходимые значения
  const nameEmpl = formEl.name.value.trim();
  const surnameEmpl = formEl.surname.value.trim();
  const ageEmpl = formEl.age.value.trim();
  const jobEmpl = formEl.job.value.trim();

  // Условный оператор, предотвращающий передачу значений из незаполненных необходимых полей
  if (nameEmpl !== "" && surnameEmpl !== "" && ageEmpl !== "") {
    
    // Передаём значения в текст карточки
    nameLabel.textContent = nameEmpl;
    surnameLabel.textContent = surnameEmpl;
    ageLabel.textContent = ageEmpl;
    jobLabel.textContent = jobEmpl;

    // Показывем заполненную карточку
    cardEmployeeEl.style.visibility = "visible";
  } else {
    alert("Fill all required fields (*)");
  }
};

// Запускаем ожидание события нажатия на кнопку
formEl.addEventListener("submit", getCard);