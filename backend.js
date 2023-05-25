// Get the list of hospitals from the server
fetch("/hospitals")
  .then(response => response.json())
  .then(hospitals => {
    // Display the list of hospitals on the page
    const hospitalsList = document.querySelector("#hospitals ul");
    hospitals.forEach(hospital => {
      const hospitalItem = document.createElement("li");
      const hospitalLink = document.createElement("a");
      hospitalLink.textContent = hospital.name;
      hospitalLink.href = `/hospital/${hospital.id}`;
      hospitalItem.appendChild(hospitalLink);
      hospitalsList.appendChild(hospitalItem);
    });
  })
  .catch(error => console.error(error));

// Handle the form submission for the blood donation application
const donationForm = document.querySelector("#donate form");
donationForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(donationForm);
  fetch("/donate", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert("Thank you for your donation!");
        donationForm.reset();
      } else {
        alert("There was a problem submitting your donation. Please try again.");
      }
    })
    .catch(error => console.error(error));
});
