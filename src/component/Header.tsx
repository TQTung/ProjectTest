import styled from "@emotion/styled";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrap>
      <LinkTo to="/">
        <Item sx={{ borderRadius: "4px" }}> Dashboard</Item>
      </LinkTo>
      <LinkTo to="/usermanager">
        <Item sx={{ borderRadius: "4px" }}> User Manager</Item>
      </LinkTo>
      <LinkTo to="/settings">
        <Item sx={{ borderRadius: "4px" }}> Settings</Item>
      </LinkTo>
    </Wrap>
  );
};

const Wrap = styled(Box)({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  height: "100%",
  width: "250px",
  paddingTop: "15px",
  boxShadow: "rgb(100 100 111 / 14%) 0px 3px 8px 0px;",
});

export const LinkTo = styled(Link)({
  textDecoration: "none",
  width: "100%",
  color: "#10111e",
});

const Item = styled(MenuItem)({
  color: "#10111e;",
  fontWeight: "600",
  fontSize: "15px",
  textTransform: "uppercase",
  fontFamily: "'Rubik', sans-serif;",
});

export default Header;
