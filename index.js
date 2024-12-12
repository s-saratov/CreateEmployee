const formEl = document.getElementById("form-employee");
const cardEmployeeEl = document.getElementById("card-employee");

const getCard = (event) => {
  event.preventDefault();
  const nameEmpl = formEl.name.value.trim();
  const surnameEmpl = formEl.surname.value.trim();
  const ageEmpl = formEl.age.value.trim();
  const jobEmpl = formEl.job.value.trim();

  if (nameEmpl !== "" && surnameEmpl !== "" && ageEmpl !== "") {
    cardEmployeeEl.style.opacity = "100";
  } else {
    alert("Fill the required fields (*)");
  }
};

formEl.addEventListener("submit", getCard);
