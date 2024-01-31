document.addEventListener("DOMContentLoaded", function () {
  // Initialize local storage with an empty array
  localStorage.setItem("users", JSON.stringify([]));
 // Function to display data
  let displayData = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    storedUsers.map(
      (user, index) =>
      (tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>`) );  };
 // Display the initial empty data
  displayData();
  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let postObject = {
      name,email,
      password,
    };
 // Retrieve existing users or initialize an empty array
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        // Add the new user to the array
    storedUsers.unshift(postObject);
// Store the updated array in local storage
    localStorage.setItem("users", JSON.stringify(storedUsers));
    // Display the updated data
    displayData();
  });
});
