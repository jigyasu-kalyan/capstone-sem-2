'use client';

import React, { useEffect, useState } from 'react';
import styles from './blog.module.css';
import Header from '@/components/Header';

function page() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
        try {
            setLoading(true);
            const res = await fetch(`https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&q=mental+health&language=en`);
            const data = await res.json();
            setArticles(data.results || []);
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
        <div className={styles.blogContainer}>
            <h1 className={styles.title}>Latest Mental Health Articles</h1>
            <div className={styles.articles}>
                {loading ? (
                    <p>Fetching articles...</p>
                ) : (
                    articles.map((article, index) => (
                        <div key={index} className={styles.articleCard}>
                            <h2> {article.title} </h2>
                            <p> {article.description} </p>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" >Read More</a>
                        </div>
                    ))
                )}
            </div>
        </div>
    </>
  )
}

export default page