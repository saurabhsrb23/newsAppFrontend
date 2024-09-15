import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsFeed({ searchParams }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    const fetchNews = async () => {
      const { q, lang, country, page } = searchParams;
      try {
        const response = await axios.get('http://localhost:5000/api/news', {
          params: { q, lang, country, page },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [searchParams]);

  return (
    <div className="news-feed">
      {articles.map((article) => (
        <div key={article.url} className="news-card">
          <img src={article.image} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
