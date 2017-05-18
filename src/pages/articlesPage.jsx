import React from 'react';
import ReactDom from 'react-dom';

import Article from './Article.js';
import {articles} from '../cms/content.json';

let article;
const articlesBuilt = [];

articles.sort((a, b) => {
    return Date.parse(b.date) > Date.parse(a.date); //but have to have the proper date strings in the json. Need to validate..
});

for (article of articles) {
    articlesBuilt.push(
        <Article
            key={article.name}
            articleTitle={article.title}
            articleSubtitle={article.subtitle}
            articleBody={article.body}
            articleAuthor={article.author}
            articleDate={article.date}
        />
    )
};

const articlesPage = () => (
    <main className="articles">
        <h1>Articles</h1>
        <section className="row">
                {articlesBuilt}
        </section>
    </main>
);

export default articlesPage;