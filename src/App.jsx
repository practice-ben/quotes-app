import React from "react";

export default function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [quote, setQuote] = React.useState(null);


  React.useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setQuote(data[0])
      });
  }, [])

  function changeQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <div className="container">
      <h1 className="title">Quotes App</h1>
        <div className="quote-container">
            <div className="button" onClick={changeQuote} >Next Quote</div>
            <p className="quote">"{quote?.text}"</p>
            <h4 className="author">"{quote?.author}</h4>
        </div>
    </div>
  )
}