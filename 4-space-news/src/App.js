import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result.results;
      })
      .then((data) => {
        setNewsList(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="news-container">
        {newsList.map((val, key) => {
          return (
            <div
              className="news"
              key={key}
              onClick={() => {
                window.open(val.url);
              }}
            >
              <img
                src={val.image_url}
                alt={
                  val?.image_url
                    ? val.image_url
                        .split("/")
                        .pop()
                        .split(/(\.png|\.jpg|\.jpeg)/i)[0]
                    : "No image available"
                }
              />
              <h2>{val.title}</h2>
              <h5>{val.published_at}</h5>
              <p>{val.summary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
