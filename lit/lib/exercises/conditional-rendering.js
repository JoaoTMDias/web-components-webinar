import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';

export class ConditionalRendering extends LitElement {
    renderMessage() {
        return html`<p>Wow, that's over ten!</p>`;
    }

    render() {
        const count = 10;

        let countMessage = html``;

        if (count > 10) {
            countMessage = html`<p>Wow, that's over ten!</p>`;
        }

        return html`
            <h3>Conditional Rendering</h3>

            <!-- rendering via pre-defined variable -->
            ${countMessage}

            <!-- rendering via double ampersand -->
            ${count > 10 && html`<p>Wow, that's over ten!</p>`}

            <!-- rendering via when directive -->
            ${when(count > 10, () => html`<p>Wow, that's over ten!</p>`)}

            <!-- rendering via ternary with empty template -->
            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : html``}

            <!-- rendering via ternary with empty string -->
            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : ''}

            <!-- rendering via ternary with undefined -->
            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : undefined}

            <!-- rendering via ternary with null -->
            ${count > 10 ? html`<p>Wow, that's over ten!</p>` : null}

            <!-- rendering via method execution -->
            ${this.renderMessage()}
        `;
    }
}

customElements.define('conditional-rendering', ConditionalRendering);
