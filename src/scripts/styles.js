import { jss, theme } from "./theme";
export const indexStyles = jss.createStyleSheet({   
    root: {
        display: "flex",
    },
    container: {
        padding: theme.spacing(4),
        color:'red'
    },
    appBarSpacer: theme.mixins.toolbar,
});


