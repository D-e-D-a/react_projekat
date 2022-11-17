import "./App.scss";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./components/cardData";

function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        img={card.img}
        name={card.name}
        place={card.place}
        map={card.map}
        loc={card.loc}
        date={card.date}
        info={card.info}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      {cardElements}
    </div>
  );
}

export default App;
