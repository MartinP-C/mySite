import React from 'react';
import ReactDom from 'react-dom';

const indexPage = (props) => (
    <main className="home">
        <h1>Martin Powlesland-Cook</h1>
        <section className="row">
            <div className="col-sm-6">
                <p>Front-end developer progressing to full-stack.</p>
                <p>Excited by web development and always striving to improve.</p>
                <p>Great at understanding requirements and client intent.</p>
                <p>Works very well with any department or person to exceed client expectations.</p>
            </div>
            <div className="col-sm-6"><img className="me" src="/static/images/me.jpg" /></div>
        </section>
        <section className="row">
            <div className="col-md-12">
                <p>This whole site is a demo but also inclues a portfolio of skills.</p>
                <p>Made with React and built to static pages. See the <a href="https://github.com/MartinP-C/mySite">repo</a>.</p>
            </div>
        </section>
    </main>
)

export default indexPage;