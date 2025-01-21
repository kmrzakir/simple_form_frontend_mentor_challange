// selectying
const submitBtn = document.getElementsByTagName("button")[0];
const error = document.getElementsByClassName("error");
const radioButtion = document.getElementsByName("QT");
const parentAlertBox = document.getElementById("parent_alertBox");
const closeDialogBtn = document.getElementById("close_btn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const textArea = document.getElementById("message");
const checkBox = document.getElementById("checkBox");

submitBtn.addEventListener("click", (event) => {
  // check is all the input fields selelcted or not
  const isAllFilled = isAllFieldsFilled(
    firstName.value.trim(),
    lastName.value.trim(),
    email.value.trim(),
    textArea.value.trim(),
    checkBox
  );

  if (isAllFilled) {
    // parentAlertBox.style.display = "block";
    parentAlertBox.classList.add("runAnimation");
  }
});

function isAllFieldsFilled(firstName, lastName, email, textArea, checkBox) {
  let isAllFilled = true;
  if (firstName == "") {
    error[0].style.display = "block";
    isAllFilled = false;
  } else {
    error[0].style.display = "none";
  }
  if (lastName == "") {
    error[1].style.display = "block";
    isAllFilled = false;
  } else {
    error[1].style.display = "none";
  }
  if (email == "") {
    error[2].style.display = "block";
    isAllFilled = false;
  } else {
    error[2].style.display = "none";
  }
  if (!radioButtion[0].checked && !radioButtion[1].checked) {
    error[3].style.display = "block";
    isAllFilled = false;
  } else {
    error[3].style.display = "none";
  }
  if (textArea == "") {
    error[4].style.display = "block";
    isAllFilled = false;
  } else {
    error[4].style.display = "none";
  }
  if (!checkBox.checked) {
    error[5].style.display = "block";
    isAllFilled = false;
  } else {
    error[5].style.display = "none";
  }
  return isAllFilled;
}

// close the form submitted success dialog
closeDialogBtn.addEventListener("click", () => {
  parentAlertBox.style.display = "none";
  clearAllInputs(firstName, lastName, email, textArea, checkBox);
});

// clear all inputs after form has been submited succefully
function clearAllInputs(firstName, lastName, email, textArea, checkBox) {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  textArea.value = "";
  checkBox.checked = false;
  radioButtion[0].checked = false;
  radioButtion[1].checked = false;
}
