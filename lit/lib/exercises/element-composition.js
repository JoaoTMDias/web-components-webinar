import { LitElement, html } from 'lit';

export class ElementWithChildSlot extends LitElement {
    render() {
        return html`
            <div>
                <slot><p>Hello ISEC!</p></slot>
            </div>
        `;
    }
}

customElements.define('element-with-child-slot', ElementWithChildSlot);

export class ElementComposition extends LitElement {
    render() {
        return html`
            <h3>Element Composition</h3>

            <element-with-child-slot>
                <p>Hello João</p>
            </element-with-child-slot>
        `;
    }
}

customElements.define('element-composition', ElementComposition);
