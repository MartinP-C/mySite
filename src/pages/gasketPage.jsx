import React from 'react';
import ReactDom from 'react-dom';

const gasketPage = () => (
    <main className="gasket">
        {/*<Head>*/}
            <script src="/static/scripts/gasketMaker.js"></script>
        {/*</Head>*/}
        <h2>Gasket</h2>
        <section>
            <canvas id="myCanvas"></canvas>
        </section>
    </main>
);

export default gasketPage;