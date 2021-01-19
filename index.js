



















class EmailConfirmation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const bodyMessage = document.createElement('p');
        bodyMessage.textContent = `We've sent you an email from no-reply@RocketAccount.com
        so we can verify your email address. Just click the button in the email 
        to finish creating your account. If you don't receive the email, plase check your spam or junk folder.`;
        this.appendChild(bodyMessage);
    }
}

customElements.define('email-confirmation-message', EmailConfirmation);
