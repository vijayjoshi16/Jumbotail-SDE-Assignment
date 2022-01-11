import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const NavbarContainer = styled(Grid)`
  background-color: #fa9746;
  color: white;
  padding: 15px 20px;
  text-align: left;
`;

export const BrandName = styled(Grid)`
  font-size: 1.75rem;
  font-weight: 600;
`;

export const Options = styled(Grid)`
  text-align: right;
`;

export const MenuButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #fa9746;
  border: none;
  outline: none;
  padding: 10px;
  padding-top: 8px;
  border-radius: 50%;
  cursor: pointer;
`;

export const MenuDash = styled.div`
  height: 4px;
  width: 25px;
  background-color: white;
  margin-top: 3px;
`;
