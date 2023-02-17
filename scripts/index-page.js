const comments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },

    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },

    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

const conversationSection = document.querySelector('.conversation')

const formContainer = document.createElement('div');
formContainer.classList.add('conversation__container');

const formContainerLeft = document.createElement('div');
formContainerLeft.classList.add('conversation__left');

const formIcon = document.createElement('img');
formIcon.setAttribute("src", "./assets/images/Mohan-muruge.jpg");
formIcon.classList.add('conversation__icon');

const formContainerRight = document.createElement('div');
formContainerRight.classList.add('conversation__right');

const form = document.createElement('form');
form.classList.add('conversation__form');

const formName = document.createElement('p');
formName.classList.add('form__name');
formName.innerText: "NAME";

const formNameInput = document.createElement('input');
formNameInput.classList.add('form__name-input');


formContainerLeft.appendChild(formIcon);
formContainer.appendChild(formContainerLeft);

form.appendChild(formName);
form.appendChild(formNameInput);
formContainerRight.appendChild(form);
formContainer.appendChild(formContainerRight);

conversationSection.appendChild(formContainer);
