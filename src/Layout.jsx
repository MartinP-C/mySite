import React from 'react';
import ReactDom from 'react-dom';

import Footer from './components/Footer';

const Layout = (props) => {
    return (
        <div className="layoutwrapper">
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;