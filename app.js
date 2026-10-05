// Basic client-side validation only. Salesforce submission is handled by
// the Salesforce-generated Form Handler script/attributes.
const form = document.querySelector(".lead-form");
const status = document.querySelector("#form-status");
const marketingOptIn = document.querySelector("#marketing_opt_in");

form.addEventListener("submit", (event) => {
  if (!form.reportValidity()) {
    event.preventDefault();
    status.textContent = "Please complete the required fields.";
    return;
  }

  // Set checkbox value before Salesforce handles the submission.
  marketingOptIn.value = marketingOptIn.checked ? "true" : "false";
  // Do not preventDefault here: allow the Salesforce handler to process submit.
  status.textContent = "Submitting...";
});
