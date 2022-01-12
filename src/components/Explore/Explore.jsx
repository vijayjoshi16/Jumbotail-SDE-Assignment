import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { ExploreContainer, SectionHeading } from "./Explore.styled";
import loadingGIF from "../../img/loading-gif.gif";

const Explore = () => {
  const [books, setBooks] = useState([]);

  const defaultSearchQueries = ["Adventure", "Business", "Science", "Sports"];

  useEffect(() => {
    const bookArray = [];
    defaultSearchQueries.forEach((query) => {
      console.log(query);
      fetch("https://www.googleapis.com/books/v1/volumes?q=" + query, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          bookArray.push({
            category: query,
            bookList: result.items,
          });
          if (bookArray.length === 4) {
            setBooks(bookArray);
          }
        });
    });
  }, []);

  return (
    <ExploreContainer>
      <h1>EXPLORE</h1>
      {books.length !== 0 ? (
        <>
          {books.map((dataObject, index) => {
            return (
              <>
                <SectionHeading>
                  {dataObject.category} Books For You
                </SectionHeading>
                <Grid container>
                  {books[index].bookList.map((data) => {
                    return <BookCard data={data} />;
                  })}
                </Grid>
              </>
            );
          })}
        </>
      ) : (
        <img src={loadingGIF} />
      )}
    </ExploreContainer>
  );
};

export default Explore;
