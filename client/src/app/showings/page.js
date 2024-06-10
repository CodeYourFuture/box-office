// fetching the data from somewhere
"use client"
import { useEffect, useState } from "react";

export default function Showings() {

  const [shows, setShows] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:9090/api/shows/all-open`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShows(data.showings);
      })
  },[]) // <--- fetching data happens outside the component

  return (
    <main>
      <h1>Now showing</h1>
      <p>List the theatre showings here...</p>
      <ul>
        {shows.map(show => {
          return <p>{show.title}</p>
        })}
      </ul>
    </main>
  );
}
