import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { OptionContainer, Option } from "./NavbarOptions.styled";

const NavbarOptions = (props) => {
  const navigate = useNavigate();
  return (
    <OptionContainer container>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Option
          isSmall={props.isSmall}
          href="#explore"
          onClick={() => {
            navigate("/");
          }}
        >
          Explore
        </Option>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        onClick={() => {
          navigate("/search");
        }}
      >
        <Option isSmall={props.isSmall}>Search</Option>
      </Grid>
    </OptionContainer>
  );
};

export default NavbarOptions;
