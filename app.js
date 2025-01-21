const first_name = document.getElementById("first-name");
const being_conatct = document.getElementById("being-conatct");
const error = document.getElementsByClassName("error");
const input_field = document.getElementsByClassName("input-field");
const radio_buttions = document.getElementsByName("radio-btn");
const message_input = document.getElementById("mesage-input");
const checkbox_field = document.getElementById("being-conatct");
const custom_alert_box = document.getElementsByClassName("custom-alert-box");
const close_alert_box_btn = document.getElementById("close");
const radio_btns = document.getElementsByName("radio-btn");

const submit_btn = document.getElementById("submit-btn");

// object for storing form data
let data = {
  firstName: "",
  lastName: "",
  email: "",
  quertType: "",
  message: "",
  isContracted: false,
};

let isAllFieldsFilled = 0;

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();
  // check is first name last name and email input field filled
  for (let i = 0; i < input_field.length; i++) {
    if (input_field[i].value.trim() == "") {
      error[i].style.visibility = "visible";
      isAllFieldsFilled++;
      data.firstName = input_field[0].value.trim();
      data.lastName = input_field[1].value.trim();
      data.email = input_field[2].value.trim();
    }
  }

  // check for radio buttions

  if (!radio_buttions[0].checked && !radio_buttions[1].checked) {
    error[3].style.visibility = "visible";
  }

  for (let i = 0; i < radio_btns.length; i++) {
    if (radio_btns[i].checked) {
      data.quertType = radio_btns[i].value;
    }
  }

  // check for message field
  if (message_input.value.trim() == "") {
    error[4].style.visibility = "visible";
  }
  data.message = message_input.value.trim();

  // //  check for check box
  if (!checkbox_field.checked) {
    // alert("check box is not checked");
    error[5].style.visibility = "visible";
  }

  if (isAllFieldsFilled == 0) {
    custom_alert_box[0].style.visibility = "visible";
  }

  // console.log("kkkkk");
  alert(data);
});

close_alert_box_btn.addEventListener("click", () => {
  custom_alert_box[0].style.visibility = "hidden";
});

// console.log("data");
