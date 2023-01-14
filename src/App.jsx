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

  
  return (
    <div className="container">
      <h1>Quotes App</h1>
      <Quote />
    </div>
  )
}