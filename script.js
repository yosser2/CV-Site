function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Tous les champs sont obligatoires !");
        return false;
    }

    if (!email.includes('@')) {
        alert("Veuillez entrer une adresse email valide !");
        return false;
    }

    alert("Message envoyé avec succès !");
    return true;
}

