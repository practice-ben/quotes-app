import React from "react";
import Quote from "./components/Quote";

export default function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [quote, setQuote] = React.useState("");

  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => setQuotes(data))
  }, [])

  function changeQuote() {
    const randomNum = Math.floor(Math.random *= 1640);
    setQuote(quotes[randomNum])
  }

  console.log(quotes.length)
  return (
    <div className="container">
      <h1>Quotes App</h1>
      {quote ? <Quote quote={quote} handleClick={changeQuote} /> : <div>loading</div>}
    </div>
  )
}