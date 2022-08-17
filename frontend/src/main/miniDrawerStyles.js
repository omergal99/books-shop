import { makeStyles } from "@mui/styles";

const contentHeightPercent = 70;
const borderColor = "gray";
const borderWidth = "2px";

const miniDrawerStyles = makeStyles((theme) => {
  return {
    drawerStyle: {
      "& .MuiDrawer-paper": {
        backgroundColor: "rgb(236, 236, 236)",
        borderColor: borderColor,
        borderWidth: borderWidth
      }
    },
    navListItem: {
      '&.MuiListItemIcon-root': {
        minWidth: '40px'
      }
    },
    mainScreen: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    content: {
      height: `${contentHeightPercent}%`,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    },
    childrenContent: {
      overflow: "auto",
      padding: theme.spacing(2, 2, 2, 3)
    },
    logs: {
      height: `${100 - contentHeightPercent}%`,
      borderTop: "2px solid gray"
    }
  };
});

export default miniDrawerStyles;
