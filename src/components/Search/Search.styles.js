import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const SearchImage = styled.img`
  margin: 20px;
  width: 90%;
  height: 90%;
`;

export const SearchText = styled(Grid)`
  text-align: left;
  padding: 20px 10px;
`;

export const SearchDescription = styled.h4`
  color: gray;
`;

export const SearchInput = styled.input`
  height: 45px;
  width: 190px;
  border-radius: 5px;
  border: 2px solid #fa9746;
  vertical-align: top;
  margin: 20px;
`;

export const SearchButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 20px 20px 20px 20px;
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

export const LoadingImg = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

export const ResultHeading = styled.h2`
  padding: 10px;
`;
