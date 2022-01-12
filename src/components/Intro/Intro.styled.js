import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const ImageIntro = styled.img`
  margin: auto;
  width: 90%;
  height: 90%;
`;

export const IntroText = styled(Grid)`
  text-align: left;
  padding: 20px 10px;
`;

export const IntroDescription = styled.h4`
  color: gray;
`;

export const ExploreButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 20px 20px 20px 0px;
  border: 1px solid #fa9746;
  border-radius: 10px;
  font-weight: 800;
  outline: none;
  background-color: white;
  color: #fa9746;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fa9746;
    color: white;
  }
`;

export const SearchButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 20px 20px 20px 0px;
  border-radius: 10px;
  font-weight: 800;
  outline: none;
  border: none;
  background-color: #fa9746;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid #fa9746;
    background-color: white;
    color: #fa9746;
  }
`;
