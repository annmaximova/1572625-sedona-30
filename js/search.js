const bookingLink = document.querySelector(".booking-link");
const bookingPopup = document.querySelector(".booking-block-form");
const bookingForm = bookingPopup.querySelector(".booking-form");
const checkIn = bookingPopup.querySelector(".check-in-date-value");
const checkOut = bookingPopup.querySelector(".check-out-date-value");
const adultsNumber = bookingPopup.querySelector(".adults-number-value");
const childNumber = bookingPopup.querySelector(".child-number-value");

let isStorageSupport = true;
let storage = "";

try {
storage = localStorage.getItem("amount");
} catch (err) {
isStorageSupport = false;
 }

bookingLink.addEventListener("click", function (evt) {
evt.preventDefault();
bookingPopup.classList.toggle('modal-show');
bookingPopup.classList.toggle('modal-close');
if (storage) {
adultsNumber.value = storage;
childNumber.value = storage;
}
checkIn.focus();
});

bookingForm.addEventListener("submit", function (evt) {
if (!checkIn.value || !checkOut.value) {
evt.preventDefault();
} else {
if (isStorageSupport) {
localStorage.setItem("adults", adultsNumber.value);
localStorage.setItem("child", childNumber.value);
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
if (bookingPopup.classList.contains("modal-show")) {
evt.preventDefault();
bookingPopup.classList.remove("modal-show");
}
}
});



