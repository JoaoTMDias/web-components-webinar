import { LitElement, html } from 'lit';

export class ListsAndArrays extends LitElement {
    static properties = {
        numbers: { type: Array },
    };

    constructor() {
        super();

        // Generate a random sort of 5 numbers
        this.numbers = [...new Array(5)].map(() => Math.floor(Math.random() * 20));
        console.log(this.numbers);

        // An array of languages
        this.languages = [
            { name: 'Javascript', short: 'JS' },
            { name: 'Typescript', short: 'TS' },
            { name: 'Java', short: 'Java' },
            { name: 'Python', short: 'Py' },
        ];

        // Create an inline template of languages, with their short name
        this.languageList = this.languages.map(lang => html`<li>${lang.name} (${lang.short})</li>`);
    }

    /**
     * Generates an array (numbers) with a random length between 0 and 10, and fills
     * it with random numbers between 0 and 20.
     *
     * The exact number of elements and their values will vary each time this code is executed
     * due to the random nature of the calculations.
     */
    randomizeNumbers() {
        const QUANTITY = Math.floor(Math.random() * 10);
        const NEW_ARRAY_OF_NUMBERS = [...new Array(QUANTITY)];

        this.numbers = NEW_ARRAY_OF_NUMBERS.map(() => Math.floor(Math.random() * 20));
    }

    render() {
        console.log(this.languageList);

        return html`
            <h3>Lists and Arrays</h3>

            <!-- REMEMBER: the .(dot) removes attributes from the DOM element  -->
            <button type="button" .numbers=${this.numbers} @click=${this.randomizeNumbers}>So random</button>

            <h4>Languages List</h4>
            <ul>
                ${this.languageList}
            </ul>

            <h4>Random numbers</h4>
            <ul>
                ${this.numbers.map(num => html` <li>${num}</li> `)}
            </ul>
        `;
    }
}

customElements.define('lists-and-arrays', ListsAndArrays);
