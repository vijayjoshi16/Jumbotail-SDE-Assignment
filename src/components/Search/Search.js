import { Grid } from "@material-ui/core";
import { useState } from "react";
import searchImg from "../../img/search-img.jpg";
import loadingGIF from "../../img/loading-gif.gif";
import {
  SearchText,
  SearchImage,
  SearchDescription,
  SearchInput,
  SearchButton,
  LoadingImg,
  ResultHeading,
} from "./Search.styles";
import { errorToast, successToast } from "../toast.js";
import BookCard from "../BookCard/BookCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = () => {
    if (searchQuery === "") {
      errorToast("Please enter a search query");
      return;
    }
    setLoading(true);
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchQuery, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result.items.length > 0) {
          successToast("Successfully fetched results!");
          setSearchResults(result.items);
        } else {
          errorToast("Couldn't fetch matching results!");
          setSearchResults([]);
        }
      })
      .catch((err) => {
        errorToast("Couldn't fetch matching results!");
        setSearchResults([]);
      });
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <SearchImage src={searchImg} />
      </Grid>
      <SearchText item xs={12} sm={12} md={6} lg={6}>
        <h1>Search your favorite book in the giant library provided by us</h1>
        <SearchDescription>
          Just simply tell us what you want. Our Book Search API will provide
          all the relevant results at your disposal. Isn't it amazing? Go give
          it a try
        </SearchDescription>
        <SearchInput
          placeholder="Type something"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <SearchButton onClick={searchBooks}>Search</SearchButton>
      </SearchText>
      {loading && <LoadingImg src={loadingGIF} />}
      {searchResults.length !== 0 ? (
        <>
          <ResultHeading>Results for you:</ResultHeading>
          <Grid container>
            {searchResults.map((data) => {
              return <BookCard data={data} />;
            })}
          </Grid>
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default Search;
