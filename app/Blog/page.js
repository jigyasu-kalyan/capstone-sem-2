'use client';

import React, { useEffect, useState } from 'react';
import './blog.css';
import Header from '@/components/Header';

const Blog = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_8832c330eac64d7bad321bd684f956a9&q=mental+health&language=en`);
            const data = await res.json();
            setArticles(data.results);
        } catch (error) {
            console.log("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchArticles();
    }, []);

  return (
    <>
        <Header />
        <div className="blogContainer">
            <h1 className="blogTitle">Latest Mental Health Articles</h1>
            <div className="articles">
                {loading ? (
                    <p>Fetching articles...</p>
                ) : (
                    articles.map((article, index) => (
                        <div key={index} className="articleCard">
                            <h2> {article.title} </h2>
                            <p> {article.description} </p>
                            <a href={article.link} >Read More</a>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    </>
  )
}

export default Blog