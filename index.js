/**
 * shadow DOM and html template example
 *      for creating encapsulated custom components
 */
class EmailConfirmation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.textValue = `We've sent you an email from <a href="">no-reply@RocketAccount.com</a>
        so we can verify your email address. Just click the button in the email 
        to finish creating your account. If you don't receive the email, plase check your spam or junk folder.`;
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this.textValue = this.getAttribute('text');
        }
        const bodyMessage = document.createElement('p');
        bodyMessage.innerHTML = this.textValue;
        this.shadowRoot.appendChild(bodyMessage); // append the child to shadowDOM instead of lightDOM
    }
}

customElements.define('email-confirmation-message', EmailConfirmation);
