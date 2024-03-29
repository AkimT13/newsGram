// handleNews.js

import axios from 'axios';
import dotenv from 'dotenv';
import { ref, set,get,getDatabase } from 'firebase/database';
import { database } from './src/Firebase/Firebase.js';
import { getHtml } from './src/Components/NewsArticles/getHtml.js';





dotenv.config();

export default async function handler() {
  try {
    //get data from newsapi
    //const apiKey = process.env.VITE_NEWSAPIKEY;
    const apiKey2 = "1200299230a54093ab0bd9a12413d913"
    console.log("Fetching Data from NewsApi")
    let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}`);

    const headlines = response.data;
    
    for(const article of headlines.articles){
      try{
         article.html = await getHtml(article.url);
      }
      catch{
        article.html = "error getting article data"
      }
     
    }
    
    console.log("Storing Data...")
    // Store the data in the database
    await set(ref(database, "/headlines"), headlines);
    
    console.log("Stored Data")
    

    
  } catch (error) {
    console.error('Error updating data', error);
    
  }
}

handler();