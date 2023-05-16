// @ts-nocheck
import { html, render } from 'lit';

import './exercises';

const ROUTES = [
    { href: '/properties', title: 'Properties' },
    { href: '/change-detection', title: 'Change detection' },
    { href: '/expressions', title: 'Expression' },
    { href: '/lifecycle', title: 'Lifecycle' },
    { href: '/conditional-rendering', title: 'Conditional Rendering' },
    { href: '/lists-and-arrays', title: 'Lists and arrays' },
    { href: '/bubbling', title: 'Bubbling' },
    { href: '/element-composition', title: 'Composing elements' },
    { href: '/working-with-shadow-dom', title: 'Working with shadow dom' },
];

function renderDemo() {
    const path = window.location.pathname;

    switch (path) {
        case '/properties':
            return html`<using-properties name="ISEC"></using-properties>`;
        case '/change-detection':
            return html`<change-detection times-clicked=${50}></change-detection>`;
        case '/expressions':
            return html`<using-expressions></using-expressions>`;
        case '/lifecycle':
            return html`<life-cycle></life-cycle>`;
        case '/conditional-rendering':
            return html`<conditional-rendering></conditional-rendering>`;
        case '/lists-and-arrays':
            return html`<lists-and-arrays></lists-and-arrays>`;
        case '/bubbling':
            return html`<bubbling-data></bubbling-data>`;
        case '/element-composition':
            return html`<element-composition></element-composition>`;
        case '/part-composition':
            return html`<part-composition></part-composition>`;
        case '/styling':
            return html`<styling-elements></styling-elements>`;
        case '/working-with-shadow-dom':
            return html`<working-with-shadow-dom>
                <p>Hello!</p>
            </working-with-shadow-dom>`;
        default:
            return html``;
    }
}

function renderLinkList() {
    return html`
        <nav>
            <ol>
                ${ROUTES.map(route => html` <li key=${route.href}><a href=${route.href}>${route.title}</a></li> `)}
            </ol>
        </nav>
    `;
}

/**
 * Renders the demo into the DOM
 */
function renderView() {
    const app = document.querySelector('#app');
    render(
        html`
            <header>
                <h2>Web Components Workshop</h2>
            </header>
            <main>
                <section>${renderDemo()}</section>
                <section>${renderLinkList()}</section>
            </main>
        `,
        app,
    );
}

renderView();
