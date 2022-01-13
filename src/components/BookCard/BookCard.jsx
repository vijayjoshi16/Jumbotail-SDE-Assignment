import { Grid } from "@material-ui/core";
import {
  BookInfo,
  CardContainer,
  CardImage,
  KnowMoreButton,
} from "./BookCard.styles";
import defaultPic from "../../img/default-book.webp";

const BookCard = (props) => {
  const imageLink =
    props.data.volumeInfo.imageLinks !== undefined
      ? props.data.volumeInfo.imageLinks.thumbnail
      : defaultPic;

  const description =
    props.data.volumeInfo.description !== undefined
      ? props.data.volumeInfo.description
      : "No Description available";

  const handleClick = () => {
    console.log(props.data);
    localStorage.setItem("book_data", JSON.stringify(props.data));
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardContainer>
        <CardImage src={imageLink} />
        <BookInfo>
          <h3>{props.data.volumeInfo.title}</h3>
          <p>
            {description.length <= 200
              ? description
              : description.slice(0, 200) + "..."}
          </p>
          <p>Published at: {props.data.volumeInfo.publishedDate}</p>
        </BookInfo>
        <KnowMoreButton onClick={handleClick}>KNOW MORE</KnowMoreButton>
      </CardContainer>
    </Grid>
  );
};

export default BookCard;
