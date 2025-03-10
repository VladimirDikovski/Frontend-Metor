const fieldDay = document.querySelector(".day");
const fieldMonth = document.querySelector(".month");
const fieldYear = document.querySelector(".year");
const buttonFirld = document.querySelector(".btn");
const errorMessegeField = document.querySelectorAll(".error-messenger");
const dayResultField = document.querySelector(".day-result");
const monthResultField = document.querySelector(".month-result");
const yearResultFiled = document.querySelector(".year-result");
const fieldsElement = document.querySelector(".fields");

var currentTime = new Date();
var dateNow = currentTime.getFullYear();
function ValidatitionNotEmpty(inputField) {
  inputField.style.display = "inline-block";
  fieldsElement.classList.add("requared");
}
function inputTextError(stringText, inputField) {
  inputField.textContent = stringText;
}

buttonFirld.addEventListener("click", function () {
  let isValid = true;
  if (fieldDay.value === "") {
    inputTextError("Field is requared", errorMessegeField[0]);
    ValidatitionNotEmpty(errorMessegeField[0]);
    isValid = false;
  }
  if (fieldMonth.value === "") {
    inputTextError("Field is requared", errorMessegeField[1]);
    ValidatitionNotEmpty(errorMessegeField[1]);
    isValid = false;
  }
  if (fieldYear.value === "") {
    inputTextError("Field is requared", errorMessegeField[2]);
    ValidatitionNotEmpty(errorMessegeField[2]);
    isValid = false;
  }
  if (!isValid) return;

  inputTextError("", errorMessegeField[0]);
  inputTextError("", errorMessegeField[1]);
  inputTextError("", errorMessegeField[2]);
  let day = Number(fieldDay.value);
  let month = Number(fieldMonth.value);
  let year = Number(fieldYear.value);

  if (day < 1 || day > 31) {
    inputTextError("must be a valid day", errorMessegeField[0]);
    ValidatitionNotEmpty(errorMessegeField[0]);
    isValid = false;
  }
  if (month < 1 || month > 12) {
    inputTextError("must be a valid month", errorMessegeField[1]);
    ValidatitionNotEmpty(errorMessegeField[1]);
    isValid = false;
  }
  if (year > dateNow) {
    inputTextError("must be in the past", errorMessegeField[2]);
    ValidatitionNotEmpty(errorMessegeField[2]);
    isValid = false;
  }
  if (!isValid) return;
  let date = new Date(year, month - 1, day); // Month is 0-based
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    inputTextError("Must be a valid date", errorMessegeField[0]);
    ValidatitionNotEmpty(errorMessegeField[0]);
    return;
  }
  fieldsElement.classList.remove("requared");
  // **Calculate Age (Years, Months, Days)**
  let today = new Date();
  let birthDate = new Date(year, month - 1, day);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust if birth day hasn't happened yet this month
  if (ageDays < 0) {
    let lastMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays += lastMonthDays;
    ageMonths -= 1;
  }

  // Adjust if birth month hasn't happened yet this year
  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  // Display correct results
  yearResultFiled.textContent = ageYears;
  monthResultField.textContent = ageMonths;
  dayResultField.textContent = ageDays;
});
