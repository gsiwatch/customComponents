class Tooltip extends HTMLElement {
    constructor() {
        super();
        console.log('custom component basic setup');
    }
}

customElements.define('gs-tooltip', Tooltip);
