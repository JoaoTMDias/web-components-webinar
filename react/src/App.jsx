import './App.css';
import React from 'react';
import { Properties } from './exercises/Properties';
import { ChangeDetection } from './exercises/ChangeDetection';
import { ConditionalRendering } from './exercises/ConditionalRendering';
import { ListsAndArrays } from './exercises/ListsAndArrays';
import { ElementComposition } from './exercises/ElementComposition';
import { PartComposition } from './exercises/PartComposition';
import { Styling } from './exercises/Styling';
import { WorkingWithShadowDom } from './exercises/WorkingWithShadowDom';
import { Expressions } from './exercises/Expressions';
import { Lifecycle } from './exercises/Lifecycle';
import { LifecycleClass } from './exercises/LifecycleClass';
import { BubblingData } from './exercises/BubblingData';

const parts = [
    { href: '/properties', title: 'Properties' },
    { href: '/change-detection', title: 'Change detection' },
    { href: '/expressions', title: 'Expression' },
    { href: '/lifecycle', title: 'Lifecycle' },
    { href: '/lifecycle-class', title: 'Lifecycle (class)' },
    { href: '/conditional-rendering', title: 'Conditional Rendering' },
    { href: '/lists-and-arrays', title: 'Lists and arrays' },
    { href: '/bubbling', title: 'Bubbling' },
    { href: '/element-composition', title: 'Composing elements' },
    { href: '/part-composition', title: 'Composing parts' },
    { href: '/working-with-shadow-dom', title: 'Working with shadow dom' },
    { href: '/styling', title: 'Styling components' },
];

function App() {
    console.log('Hello world!');

    function renderDemo() {
        const path = window.location.pathname;

        switch (path) {
            case '/properties':
                return <Properties name="ISEC" />;
            case '/change-detection':
                return <ChangeDetection />;
            case '/expressions':
                return <Expressions />;
            case '/lifecycle':
                return <Lifecycle />;
            case '/lifecycle-class':
                return <LifecycleClass />;
            case '/conditional-rendering':
                return <ConditionalRendering />;
            case '/lists-and-arrays':
                return <ListsAndArrays />;
            case '/bubbling':
                return <BubblingData />;
            case '/element-composition':
                return <ElementComposition />;
            case '/part-composition':
                return <PartComposition />;
            case '/styling':
                return <Styling />;
            case '/working-with-shadow-dom':
                return <WorkingWithShadowDom />;
            default:
                return <></>;
        }
    }

    return (
        <div className="App">
            <h2>Web Components Workshop</h2>
            <section>
                {renderDemo()}

                <ul>
                    {parts.map(part => (
                        <li key={part.href}>
                            <a href={part.href}>{part.title}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default App;
