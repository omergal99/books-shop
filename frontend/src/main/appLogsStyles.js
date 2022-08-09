import { makeStyles } from "@mui/styles";

const appLogsStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(0, 1)
  },
  top: {
    display: "flex",
    justifyContent: "space-between"
  },
  wrapList: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  list: {
    overflow: "auto",
    width: "100%",

    "& .listItem": {
      padding: theme.spacing(0, 0, 0, 0.25),

      "&.newItem": {
        animationDuration: `1000ms`,
        animationName: "$myEffect",
        animationIterationCount: "2",
        animationTimingFunction: "ease"
      }
    }
  },
  "@keyframes myEffect": {
    "50%": {
      backgroundColor: "#55d78b"
    }
  },
  itemNumber: {
    width: "20px",
    textAlign: "center",
    display: "inline-block"
  }
}));

export default appLogsStyles;
