const searchBox = document.getElementById("searchBox");
const contacts = document.querySelectorAll("#contactList li");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("keyup", function () {
    let value = searchBox.value.toLowerCase();
    let visibleCount = 0;

    contacts.forEach(function (contact) {
        let name = contact.textContent.toLowerCase();

        if (name.includes(value)) {
            contact.style.display = "block";
            visibleCount++;
        } else {
            contact.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
});