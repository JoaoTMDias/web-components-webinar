import { LitElement, html } from 'lit';

class WorkshopAttendantManager extends LitElement {
    /**
     * Adds a new set of attendants.
     * Takes the current input value and creates/dispatches a new custom event.
     */
    addAttendants() {
        const attendantCount = this.inputValue;

        const event = new CustomEvent('on-attendant-count-change', {
            detail: {
                operation: 'Add',
                attendantCount,
            },
        });
        this.dispatchEvent(event);
    }

    /**
     * Removes a new set of attendants.
     * Takes the current input value and creates/dispatches a new custom event.
     */
    removeAttendants() {
        const attendantCount = this.inputValue;
        const event = new CustomEvent('on-attendant-count-change', {
            detail: {
                operation: 'Remove',
                attendantCount,
            },
        });

        this.dispatchEvent(event);
    }

    /**
     * Retrieves the current input value
     *
     * @memberof WorkshopAttendantManager
     */
    get inputValue() {
        return this.shadowRoot.querySelector('input')?.value ?? 0;
    }

    /**
     * Sets a new input value
     *
     * @memberof WorkshopAttendantManager
     */
    set inputValue(value) {
        this.shadowRoot.querySelector('input').value = value.toString();
    }

    render() {
        return html`
            <h4>Manage attendants</h4>
            <input type="number" value=${this.inputValue} />
            <button @click=${this.addAttendants}>Add</button>
            <button @click=${this.removeAttendants}>Remove</button>
        `;
    }
}

class WorkshopInfo extends LitElement {
    static properties = {
        attendants: { type: Number },
    };

    constructor() {
        super();
        this.attendants = 0;
    }

    /**
     * When the event for the attendant count change occurs,
     * updates the attendants state
     *
     * @param {*} event
     */
    onAttendantCountChange({ detail: data }) {
        const numberOfAttendants = parseInt(data.attendantCount);

        switch (data.operation) {
            case 'Add':
                this.attendants = this.attendants + numberOfAttendants;
                break;

            case 'Remove':
                this.attendants = this.attendants - numberOfAttendants;
                break;

            default:
                break;
        }
    }

    render() {
        return html`
            <div>
                <h3>Workshop attendant count:</h3>
                <p>${this.attendants} attendants</p>
                <!--<WorkshopAttendantManager onAttendantCountChange={onAttendantCountChange} /> -->
                <workshop-attendant-manager
                    @on-attendant-count-change=${this.onAttendantCountChange}
                ></workshop-attendant-manager>
            </div>
        `;
    }
}

export class BubblingData extends LitElement {
    render() {
        return html`
            <h3>Bubbling Data</h3>
            <workshop-info></workshop-info>
        `;
    }
}

customElements.define('workshop-info', WorkshopInfo);
customElements.define('workshop-attendant-manager', WorkshopAttendantManager);
customElements.define('bubbling-data', BubblingData);
