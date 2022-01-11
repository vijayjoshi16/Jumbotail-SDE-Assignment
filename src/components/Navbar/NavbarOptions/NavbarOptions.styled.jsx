import { Grid, SwipeableDrawer } from "@material-ui/core";
import styled from "styled-components";

export const OptionContainer = styled(Grid)`
  text-align: center;
  padding-top: 5px;
`;

export const Option = styled.a`
  display: block;
  font-size: 1.2rem;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${(props) => (props.isSmall ? "30px" : "0px")};
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: #fa9746;
  }
`;

export const DrawerContainer = styled.div`
  background-color: #fa9746;
  color: white;
  padding: 20px;
  height: 100%;
`;
