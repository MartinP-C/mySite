import React from 'react';
import ReactDom from 'react-dom';

const Scripts = () => (
    <div id="scripts">
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="/static/scripts/lib/modernizer-touch.js"></script>
      <script src="/static/scripts/modules/accordian.js"></script>{/*Need to make this a module that builds. to be investigated*/}
    </div>
)

export default Scripts;