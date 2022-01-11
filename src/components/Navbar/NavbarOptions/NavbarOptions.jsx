import { Grid } from "@material-ui/core";
import { OptionContainer, Option } from "./NavbarOptions.styled";

const NavbarOptions = (props) => {
  return (
    <OptionContainer container>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Option isSmall={props.isSmall}>Explore</Option>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Option isSmall={props.isSmall}>Search</Option>
      </Grid>
    </OptionContainer>
  );
};

export default NavbarOptions;
