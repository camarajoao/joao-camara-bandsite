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

const conversationSection = document.querySelector('.conversation');
const conversationContainer = document.createElement('div');
conversationContainer.classList.add('conversation__container');
conversationSection.appendChild(conversationContainer);

// Create a comment Section
const formContainer = document.createElement('div');
formContainer.classList.add('conversation__post-comment');

const formContainerLeft = document.createElement('div');
formContainerLeft.classList.add('conversation__left');

const formIcon = document.createElement('img');
formIcon.setAttribute("src", "./assets/images/Mohan-muruge.jpg");
formIcon.classList.add('conversation__icon');

const formContainerRight = document.createElement('div');
formContainerRight.classList.add('conversation__right');

const form = document.createElement('form');
form.classList.add('conversation__form');

const formName = document.createElement('label');
formName.classList.add('form__name');
formName.innerText = "NAME";
formName.setAttribute('for', 'name')

const formNameInput = document.createElement('input');
formNameInput.classList.add('form__name-input');
formNameInput.setAttribute('name', 'name');
formNameInput.setAttribute('id', 'name');
formNameInput.setAttribute('placeholder', 'Enter your name');

const formComment = document.createElement('label');
formComment.classList.add('form__comment');
formComment.innerText = "COMMENT";
formComment.setAttribute('for', 'comment')

const formCommentInput = document.createElement('textarea');
formCommentInput.classList.add('form__comment-input');
formCommentInput.setAttribute('name', 'comment');
formCommentInput.setAttribute('id', 'comment');
formCommentInput.setAttribute('placeholder', 'Add a new comment');

const formButton = document.createElement('button');
formButton.classList.add('form__button');
formButton.setAttribute('type', 'submit');
formButton.innerText = 'COMMENT';

formContainerLeft.appendChild(formIcon);
formContainer.appendChild(formContainerLeft);

form.appendChild(formName);
form.appendChild(formNameInput);
form.appendChild(formComment);
form.appendChild(formCommentInput);
form.appendChild(formButton);
formContainerRight.appendChild(form);
formContainer.appendChild(formContainerRight);
conversationContainer.appendChild(formContainer);

// End of Create a comment Section
// Posted comments Section

const postedSection = document.createElement('div');
postedSection.classList.add('conversation__posted');
conversationContainer.appendChild(postedSection)

function displayComment(comment) {
    const postedCommentContainer = document.createElement('div');
    postedCommentContainer.classList.add('conversation__posted-container');

    const postedCommentContainerLeft = document.createElement('div');
    postedCommentContainerLeft.classList.add('conversation__posted-container-left');

    const postedCommentAvatar = document.createElement('img');
    postedCommentAvatar.classList.add('conversation__posted-avatar');

    const postedCommentContainerRight = document.createElement('div');
    postedCommentContainerRight.classList.add('conversation__posted-container-right');

    const postedCommentContainerRightTop = document.createElement('div');
    postedCommentContainerRightTop.classList.add('conversation__posted-container-right-top');

    const postedCommentName = document.createElement('p');
    postedCommentName.classList.add('conversation__posted-name');
    postedCommentName.innerText = `${comment.name}`;

    const postedCommentDate = document.createElement('p');
    postedCommentDate.classList.add('conversation__posted-date');
    postedCommentDate.innerText = `${comment.timestamp}`;

    const postedCommentContainerRightBottom = document.createElement('div');
    postedCommentContainerRightBottom.classList.add('conversation__posted-container-right-bottom');

    const postedCommentText = document.createElement('p');
    postedCommentText.classList.add('conversation__posted-text');
    postedCommentText.innerText = `${comment.comment}`;

    postedCommentContainerRightBottom.appendChild(postedCommentText);
    postedCommentContainerRightTop.append(postedCommentName, postedCommentDate);
    postedCommentContainerRight.append(postedCommentContainerRightTop, postedCommentContainerRightBottom);
    postedCommentContainerLeft.append(postedCommentAvatar);
    postedCommentContainer.append(postedCommentContainerLeft, postedCommentContainerRight);
    postedSection.append(postedCommentContainer);
}

for (let comment of comments) {
    displayComment(comment);
}


formButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (formNameInput.value !== "" && formCommentInput.value !== "") {
        const date = new Date();
        const day = ("0" + date.getDate()).slice(-2);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        timestamp = `${month}/${day}/${year}`
        const newComment = { name: formNameInput.value, timestamp, comment: formCommentInput.value }
        comments.unshift(newComment);
        postedSection.innerHTML = "";
        for (let comment of comments) {
            displayComment(comment);
        }
        formNameInput.value = "";
        formCommentInput.value = "";
    } else {
        if (formNameInput.value === "") {
            formNameInput.classList.add('error-state');
        }
        if (formCommentInput.value === "") {
            formCommentInput.classList.add('error-state');
        }
    }
})
formNameInput.addEventListener('focus', function () {
    formNameInput.classList.remove('error-state');
})
formCommentInput.addEventListener('focus', function () {
    formCommentInput.classList.remove('error-state');
})

