import React, { useState, useEffect } from "react";
import { fetchArticles } from "./fetchHeadlines";
import Article from "./Article";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const articles = await fetchArticles();
        setTopStories(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <>
      <p className="text-white font-NunitoSans text-2xl pb-2">Top Headlines</p>
      <div className="flex flex-col justify-cente gap-5">
        {topStories.map((story, index) => (
          <Article
            key={index}
            date={story.date}
            author={story.author}
            image={story.urlToImage}
            title={story.title}
            url={story.url}
            description={story.description}
            html={story.html}
          />
        ))}
      </div>
      );
    </>
  );
};

export default TopStories;
