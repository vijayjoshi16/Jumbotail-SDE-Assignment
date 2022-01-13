import { useState } from "react";
import {
  DetailedCardContianer,
  BackgroundImage,
  DetailContent,
  BookImage,
  DetailSection,
  Title,
  MoreDetails,
  AuthorSpan,
  BuyButton,
} from "./DetailedCard.styles";
import BackgroundImg from "../../img/bg-img.webp";
import defaultImg from "../../img/default-book.webp";
import { Grid } from "@material-ui/core";

const DetailedCard = () => {
  const bookData = JSON.parse(localStorage.getItem("book_data"));
  const volumeInfo = bookData.volumeInfo;
  const volumeInfoExists = volumeInfo !== undefined;
  const imageUrl =
    volumeInfo.imageLinks !== undefined
      ? volumeInfo.imageLinks.thumbnail
      : defaultImg;
  const publisher =
    volumeInfo === undefined || volumeInfo.publisher === undefined
      ? "Publisher Not Available"
      : volumeInfo.publisher;
  const printType =
    volumeInfo === undefined || volumeInfo.printType === undefined
      ? "Print Type Not Available"
      : "Print Type: " + volumeInfo.printType;
  const description =
    volumeInfo === undefined || volumeInfo.description === undefined
      ? "No description available"
      : volumeInfo.description;
  const publishedDate =
    volumeInfo === undefined || volumeInfo.publishedDate === undefined
      ? "Published Date Not Available"
      : "Published Date: " + volumeInfo.publishedDate;
  const rating =
    !volumeInfoExists || volumeInfo.averageRating === undefined
      ? "Rating Not Available"
      : "Average Rating: " + volumeInfo.averageRating;
  const authors =
    !volumeInfoExists || volumeInfo.authors === undefined
      ? []
      : volumeInfo.authors;
  const categories =
    !volumeInfoExists || volumeInfo.categories === undefined
      ? []
      : volumeInfo.categories;
  const industryIdentifiers =
    !volumeInfoExists || volumeInfo.industryIdentifiers === undefined
      ? []
      : volumeInfo.industryIdentifiers;
  const buyLink =
    bookData.saleInfo === "undefined" ? "" : bookData.saleInfo.buyLink;
  console.log(bookData);
  return (
    <DetailedCardContianer>
      <BackgroundImage src={BackgroundImg} />
      <DetailContent container>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookImage src={imageUrl} />
          {/* <h2>BASIC DETAILS</h2> */}
          <DetailSection>
            <Title>{volumeInfo.title}</Title>
            <h4>Publisher: {publisher}</h4>
            <h4>Page Count: {volumeInfo.pageCount} pages</h4>
            <h4>
              {volumeInfo.maturityRating == "NOT_MATURE"
                ? "Not Mature"
                : "Mature"}
            </h4>
            <h4>{printType}</h4>
            <h4>{publishedDate}</h4>
            <h4>{rating}</h4>
            {buyLink !== "" && (
              <BuyButton href={buyLink} target="_blank">
                BUY HERE 🔗
              </BuyButton>
            )}
          </DetailSection>
        </Grid>
        <MoreDetails item xs={12} sm={12} md={6} lg={8}>
          <Title>DESCRIPTION</Title>
          <p>{description}</p>
          <Title>AUTHORS</Title>
          {authors.length !== 0 ? (
            authors.map((data) => {
              return <AuthorSpan>{data}</AuthorSpan>;
            })
          ) : (
            <p>Authors not available</p>
          )}
          <Title>CATEGORIES</Title>
          {categories.length !== 0 ? (
            categories.map((data) => {
              return <AuthorSpan>{data}</AuthorSpan>;
            })
          ) : (
            <p>Categories not available</p>
          )}
          <Title>INDUSTRY IDENTIFIERS</Title>
          {industryIdentifiers.length !== 0 ? (
            industryIdentifiers.map((data) => {
              return <AuthorSpan>{data.type}</AuthorSpan>;
            })
          ) : (
            <p>Industry Identfiers not available</p>
          )}
        </MoreDetails>
      </DetailContent>
    </DetailedCardContianer>
  );
};

export default DetailedCard;
