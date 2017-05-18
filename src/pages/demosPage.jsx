import React from 'react';
import ReactDom from 'react-dom';

import Demo from './Demo';
import {demos} from '../cms/content.json';

let demo;
const demosBuilt = [];

for (demo of demos) {
    demosBuilt.push(
        <Demo
            key={demo.name}
            demoImage={demo.image}
            demoDescriptionHeading={demo.descriptionHeading}
            demoDescription={demo.description}
            demoPage={demo.page}
        />
    );
}

const demosPage = () => (
    <main className="demos">
        <h1>Demos</h1>
        <section className="row">
                {demosBuilt}
        </section>
    </main>
);

export default demosPage;