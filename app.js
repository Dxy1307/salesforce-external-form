// Basic client-side validation only. Salesforce submission is handled by
// the Salesforce-generated Form Handler script/attributes.
const form = document.querySelector(".lead-form");
const status = document.querySelector("#form-status");

const marketingCheckbox = document.querySelector("#marketing_opt_in_checkbox");
const marketingOptIn = document.querySelector("#marketing_opt_in");

function updateMarketingOptIn() {
  marketingOptIn.value = marketingCheckbox.checked ? "true" : "false";
}

updateMarketingOptIn();

marketingCheckbox.addEventListener("change", updateMarketingOptIn);

form.addEventListener("submit", (event) => {
  if (!form.reportValidity()) {
    event.preventDefault();
    status.textContent = "Please complete the required fields.";
    return;
  }

  updateMarketingOptIn();

  console.log("marketing_opt_in:", marketingOptIn.value);

  // Do not preventDefault here: allow the Salesforce handler to process submit.
  status.textContent = "Submitting...";
});