import { styled } from "@mui/material";
import { CSVLink } from "react-csv";

const StyledCSVLink = styled(CSVLink)(() => ({
  textDecoration: "none",
  color: "#212121",
}));

export default StyledCSVLink;
