import React from 'react';
import ReactDom from 'react-dom';

const skillsPage = () => (
    <main className="skills">
        <section className="row justify-content-center">
            <div className="col-md-6">
                <h1 className="sticky">Skills</h1>
                <ul className="styled-list">
                    <li>
                        <h3>HTML</h3>
                    </li>
                    <li className="js-accordian">
                        <h3>CSS</h3>
                        <ul>
                            <li>SASS</li>
                            <li>LESS</li>
                        </ul>
                    </li>
                    <li className="js-accordian">
                        <h3>Javascript</h3>
                        <ul>
                            <li>ES6</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </li>
                    <li className="js-accordian">
                        <h3>C#</h3>
                        <ul>
                            <li>ASP.NET Core</li>
                        </ul>
                    </li>
                    <li className="js-accordian">
                        <h3>Umbraco</h3>
                    </li>
                    <li className="js-accordian">
                        <h3>Others</h3>
                        <ul>
                            <li><h4>Programming</h4></li>
                            <ul>
                                <li>Ruby</li>
                                <li>Python</li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4>Tools</h4></li>
                            <ul>
                                <li>
                                    <h5>SCM</h5>
                                    <ul>
                                        <li>git</li>
                                        <li>SVN</li>
                                        <li>SourceTree</li>
                                    </ul>
                                </li>
                                <li>
                                    <h5>IDEs</h5>
                                    <ul>
                                        <li>Visual Studio Code</li>
                                        <li>Visual Studio 2013/2015</li>
                                        <li>Sublime</li>
                                    </ul>
                                    </li>
                            </ul>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <h1 className="sticky">
                    Experience
                </h1>
                <p>
                    Front-end on large brand, cross-country websites.<br/>
                    Working with project managers and design to exceed client expectations.
                </p>
                <p>
                    Front-end and back-end for product website.
                </p>
            </div>
        </section>
    </main>
)

export default skillsPage;