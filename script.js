document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const userTable = document.getElementById("userTable");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            if (name && email && contact && address) {
                const users = JSON.parse(localStorage.getItem("users")) || [];
                users.push({ name, email, contact, address });
                localStorage.setItem("users", JSON.stringify(users));

                alert("User registered successfully!");
                registrationForm.reset();
            }
        });
    }

    if (userTable) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.length > 0) {
            const tbody = userTable.querySelector("tbody");
            tbody.innerHTML = "";

            users.forEach(user => {
                const row = `<tr>
                    <td class="py-2 px-4 border-b">${user.name}</td>
                    <td class="py-2 px-4 border-b">${user.email}</td>
                    <td class="py-2 px-4 border-b">${user.contact}</td>
                    <td class="py-2 px-4 border-b">${user.address}</td>
                </tr>`;
                tbody.innerHTML += row;
            });
        }
    }
});