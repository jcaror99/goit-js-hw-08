import throttle from "lodash.throttle";
const feedbackForm = document.querySelector(".feedback-form");

const formInput = (e) => {
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const feedbackFormState = {};

  feedbackFormState.email = email;
  feedbackFormState.message = message;

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(feedbackFormState)
  );
};

const currentData = () => {
  const currentStorage = JSON.parse(
    localStorage.getItem("feedback-form-state")
  );

  if (currentStorage) {
    const email = document.querySelector('input[name="email"]');
    email.value = currentStorage.email;

    const message = document.querySelector('textarea[name="message"]');
    message.value = currentStorage.message;
  }
};

const formSuibmit = (e) => {
  e.preventDefault();

  const currentStorage = JSON.parse(
    localStorage.getItem("feedback-form-state")
  );

  console.log(currentStorage);
  localStorage.removeItem("feedback-form-state");
  feedbackForm.reset();
};

const delay = throttle(formInput, 500);

feedbackForm.addEventListener("input", delay);
window.addEventListener("DOMContentLoaded", currentData);
feedbackForm.addEventListener("submit", formSuibmit);
