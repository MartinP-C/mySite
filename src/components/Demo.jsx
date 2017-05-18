import React from 'react';
import ReactDom from 'react-dom';
import { Link, IndexLink } from 'react-router';

import test from '../static/images/test.png';
import style from '../static/styles/core.css';

const Demo = (props) => (
    <div className="col-md-4">
    <div className="demo-container">
        <Link to={`demos/${props.demoPage}`} className="demo-link">
                <img src={test} alt=""/>
                <div className="demo-rollover">
                    <h3>{props.demoDescriptionHeading}</h3>
                    <p dangerouslySetInnerHTML={
                        {__html: props.demoDescription}
                    }></p>  
                </div>
        </Link>
    </div>
    </div>
)

export default Demo;