import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  const [gameDeals, setGameDeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandle = (event) => {
    event.preventDefault();
    setHasSearched(true);
    setIsLoading(true);
    searchGames(gameTitle);
  };
  const searchGames = (title) => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}&limit=8`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchedGames(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=30&pageSize=5`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGameDeals(data);
      });
  }, []);
  console.log(gameDeals);
  // console.log(gameTitle);
  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search for a Game</h1>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Minecraft, COD ..."
            onChange={(event) => {
              setGameTitle(event.target.value);
            }}
          />
          <button type="submit">Search Game Title</button>
        </form>
        <div className="games">
          {hasSearched && isLoading ? (
            <p>Searching...</p>
          ) : hasSearched ? (
            searchedGames.length > 0 ? (
              searchedGames.map((game, key) => {
                return (
                  <div className="game" key={key}>
                    <img src={game.thumb} alt={game.internalname + " png"} />
                    <p>{game.external}</p>
                    <p id="price">${game.cheapest}</p>
                  </div>
                );
              })
            ) : (
              <p>No Game Called {gameTitle} Found</p>
            )
          ) : null}
        </div>
      </div>
      <div className="dealSection">
        <h1>Latest Deals</h1>
        <div className="games">
          {gameDeals.map((game, key) => {
            return (
              <div className="game" key={key}>
                <img src={game.thumb} alt={game.internalname + " png"} />
                <p>{game.title}</p>
                <p id="price">Deal: ${game.salePrice}</p>
                <p>Normal Price: ${game.normalPrice}</p>
                <p>
                  You Save <span id="notprice">{parseInt(game.savings)}%</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
