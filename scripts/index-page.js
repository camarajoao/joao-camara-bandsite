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

// Create a comment Section
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
// formCommentInput.addEventListener('focus', )

const formButton = document.createElement('button');
formButton.classList.add('form__button');
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
conversationSection.appendChild(formContainer);

// End of Create a comment Section
// Posted comments Section
for (let comment of comments) {
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
    conversationSection.append(postedCommentContainer);
}


