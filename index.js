const formEl = document.getElementById("form-employee");
const cardEmployeeEl = document.getElementById("card-employee");
const nameLabel = document.getElementById("name_employee");
const surnameLabel = document.getElementById("surname-employee");
const ageLabel = document.getElementById("age-employee");
const jobLabel = document.getElementById("job-employee");

const getCard = (event) => {
  event.preventDefault();
  const nameEmpl = formEl.name.value.trim();
  const surnameEmpl = formEl.surname.value.trim();
  const ageEmpl = formEl.age.value.trim();
  const jobEmpl = formEl.job.value.trim();
  if (nameEmpl !== "" && surnameEmpl !== "" && ageEmpl !== "") {
    nameLabel.textContent = nameEmpl;
    surnameLabel.textContent = surnameEmpl;
    ageLabel.textContent = ageEmpl;
    jobLabel.textContent = jobEmpl;

    cardEmployeeEl.style.visibility = "visible";
  } else {
    alert("Fill the required fields (*)");
  }
};

formEl.addEventListener("submit", getCard);
