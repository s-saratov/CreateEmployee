const formEl = document.getElementById("form-employee");
const cardEmployeeEl = document.getElementById("card-employee");

const getCard = (event) => {
  event.preventDefault();
  console.log("event happened");
};

formEl.addEventListener("submit", getCard);
