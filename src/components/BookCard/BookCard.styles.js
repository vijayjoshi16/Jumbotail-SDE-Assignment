import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px;
  background-color: #fa9746;
  border-radius: 15px;
  text-align: left;
  color: white;
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px gray;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0px 0px;
`;

export const BookInfo = styled.div`
  margin: 10px;
`;

export const KnowMoreButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  height: 50px;
  background-color: #fa9746;
  color: white;
  border: 1px solid white;
  border-radius: 0px 0px 15px 15px;
  &:hover {
    background-color: white;
    color: #fa9746;
  }
`;
