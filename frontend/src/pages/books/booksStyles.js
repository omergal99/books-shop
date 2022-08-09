import { makeStyles } from "@mui/styles";

const booksStyles = makeStyles({
  book: {
    backgroundColor: (props) => props.defaultBackgroundColor,
    height: "100px",
    color: "white",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "inherit",
    border: '3px double rgb(236, 236, 236)'
  }
});

export default booksStyles;
