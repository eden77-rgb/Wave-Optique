/*
Script JavaScript permettant l'envoi d'un email via EmailJS.

- Initialise EmailJS avec l'User ID.
- Envoie les données du formulaire au service EmailJS.
- Utilisation d'un template de mail.
- Affiche un message de succès ou d'échec en fonction du résultat.

Je recois les informations sur mon adresse mail des l'envoie, screen --> PDF
*/

const form = document.getElementById("contact-form")

function init()
{
    emailjs.init('vqEyfEEd9QNO94yiC')
}

init()

form.addEventListener("submit", function (event)
{
    event.preventDefault()

    const prenom = document.getElementById("prenom").value
    const nom = document.getElementById("nom").value
    const email = document.getElementById("email").value
    const telephone = document.getElementById("telephone").value
    const message = document.getElementById("message").value

    const templateParams =
    {
        get_nom: nom,
        get_prenom: prenom,
        get_email: email,
        get_telephone: telephone,
        get_message: message
    }

    emailjs.send('service_9220j1o', 'template_8b4xiua', templateParams)
        .then(function (response)
        {
            alert("Email envoyé avec succès !")
            console.log('Succès!', response.status, response.text)
        }, function (error)
        {
            alert("Erreur lors de l'envoi.")
            console.log('Échec...', error)
        })
})
