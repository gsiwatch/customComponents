class Tooltip extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const tooltip = document.createElement('span');
        tooltip.textContent = 'trying connectedCallback lifeCycle method';
        this.appendChild(tooltip);
    }
}

customElements.define('gs-tooltip', Tooltip); // note: name has to be two words

/**
 * custom components lifeCycles while creating the custom components
 * executes in the following order:
 *    1. constructor()  -- Basic Initialization, wrong place for accessing the DOM \
 *                          as custom element is not been added to the DOM yet
 *    2. connectedCallback() -- this is called when custom element is connected to the DOM
 *    3. disconnectedCallback() -- this will be called when custom element will be detached from the DOM
 *    4. attributeChangedCallback() -- this will be called when attributes will be changed
 *                                  -- used when updating Data + DOM
 *    
 */
