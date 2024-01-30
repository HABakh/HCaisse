import React from "react";
import DtTable from "../dataTable";
import "./billPrint.css";

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

let columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Director",
    selector: "director",
    sortable: true,
    cell: (d) => (
      <a href="https://google.com" target="_blank" className="dlink">
        {d.director}
      </a>
    )
  },
  {
    name: "Genres",
    selector: "genres",
    sortable: true,
    cell: (d) => <span>{d.genres.join(", ")}</span>
  },
  {
    name: "Year",
    selector: "year",
    sortable: true
  },
  {
    name: "Action",
    sortable: false,
    selector: "null",
    cell: (d) => [
      <i
        key={d.title}
        onClick={handleClick.bind(this, d.title)}
        className="first fas fa-pen"
      ></i>,
      <i
        onClick={handleClick.bind(this, d.title)}
        className="fas fa-trash-alt"
      ></i>
    ]
  }
];

let data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    runtime: "92",
    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
    actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    plot:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
  },
  {
    id: 2,
    title: "The Cotton Club",
    year: "1984",
    runtime: "127",
    genres: ["Crime", "Drama", "Music"],
    director: "Francis Ford Coppola",
    actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    plot:
      "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    plot:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
  },
];

const BillPrint = () => {
  return (
    <div>
    <h1 className="wewe">List des Fatcures</h1>
    <DtTable columns={columns} data={data} />
    
    </div>
  );
};

export default BillPrint;