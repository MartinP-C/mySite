import React from 'react';
import ReactDom from 'react-dom';

const Article = (props) => (
    <div className="col-md-12">
    <article className="article-container">
        <h2>{props.articleTitle}</h2>
        <h3>{props.articleSubtitle}</h3>
        <section dangerouslySetInnerHTML={
            {__html: props.articleBody}
        }></section>
        <footer className="article-footer">
            <span className="article-author">Author: {props.articleAuthor}</span>
            <span className="article-date">Date: {props.articleDate}</span>
        </footer>
    </article>
    </div>
)

export default Article;