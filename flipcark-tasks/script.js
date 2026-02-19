

// Bottom Navigation Active Switch
function setActive(element) {
    document.querySelectorAll('.bottom-nav div').forEach(el => {
        el.classList.remove('active');
    });
    element.classList.add('active');
}
// Search Filter
document.getElementById("search").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

