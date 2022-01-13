import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const DetailedCardContianer = styled.div`
  max-width: 960px;
  margin: 20px auto 20px auto;
  border-radius: 15px;
  box-shadow: 0px 0px 15px gray;
  text-align: left;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 15px 15px 0px 0px;
`;

export const DetailContent = styled(Grid)`
  margin: 10px;
`;

export const BookImage = styled.img`
  border-radius: 15px;
  border: 2px solid white;
  margin-top: -80px;
  margin-left: 5%;
  width: 80%;
  height: 200px;
`;

export const DetailSection = styled.div`
  padding-left: 20px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const MoreDetails = styled(Grid)`
  padding: 10px 20px 10px 10px;
`;

export const AuthorSpan = styled.span`
  display: inline-block;
  margin: 0 15px 10px 0;
  background-color: gray;
  padding: 5px;
  border-radius: 5px;
`;

export const BuyButton = styled.a`
  display: inline-block;
  text-align: center;
  width: 150px;
  height: 35px;
  margin: 10px 20px 20px 0px;
  border-radius: 10px;
  padding-top: 10px;
  font-weight: 800;
  outline: none;
  border: none;
  background-color: #fa9746;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    border: 1px solid #fa9746;
    background-color: white;
    color: #fa9746;
  }
`;
