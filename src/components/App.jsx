import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

// refer: https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets
const options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
    params: {
        pair_ID: '1057391',
        page: '1',
        time_utc_offset: '28800',
        lang_ID: '1'
    },
    headers: {
        'X-RapidAPI-Key': 'your_api_key',
        'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
    }
};

function App() {
    const [cryptoNews, setCryptoNews] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                // console.log(response.data, typeof(response.data));
                
                // array of news is found here: response.data.data[0].screen_data.news
                
                // Since, we have already defined our cryptoNews useState hook to be an array, we store those array there
                // setCryptoNews(response.data.data[0].screen_data.news);
                // console.log(typeof(response.data.data[0].screen_data.news))
                console.log(response.data.data[0].screen_data.news, typeof(response.data.data[0].screen_data.news))
                setCryptoNews(response.data.data[0].screen_data.news)
                // console.log(typeof(cryptoNews)); // object
                
                // console.log(response.data.data[0].screen_data.news)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(); // Call the asynchronous function inside useEffect
        
    }, []);
    return(
        <div>
            <h1>Investing & CryptoCurrency News</h1>
            <ul>
                {
                    // https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map
                    cryptoNews && cryptoNews.map((newsObj) => (
                        <Card
                            key={newsObj.news_ID}
                            imglink={newsObj.related_image}
                            lastupdate={newsObj.last_updated}
                            heading={newsObj.HEADLINE}
                            news_link={newsObj.news_link}
                            body={newsObj.BODY}
                            news_provider_name={newsObj.news_provider_name}
                        />
                    ))
                    
                }
            </ul>
        </div>
    )
}

export default App;

/* 
to hide api key:
-> install package called dotenv: npm i dotenv (enter)
-> 
*/