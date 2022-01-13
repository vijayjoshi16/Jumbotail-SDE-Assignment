import { Grid } from "@material-ui/core";
import {
  ExploreButton,
  ImageIntro,
  IntroDescription,
  IntroText,
  SearchButton,
} from "./Intro.styled";
import introImg from "../../img/intro-img.webp";

const Intro = () => {
  return (
    <Grid container>
      <IntroText item xs={12} sm={12} md={6} lg={6}>
        <h1>Discover the world of books with the Book Search API</h1>
        <IntroDescription>
          Explore different books in the feed section, search for your favorite
          books and know more details about each book
        </IntroDescription>
        <ExploreButton>Explore</ExploreButton>
        <SearchButton>Search</SearchButton>
      </IntroText>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <ImageIntro src={introImg} />
      </Grid>
    </Grid>
  );
};

export default Intro;
