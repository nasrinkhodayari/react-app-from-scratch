import { jss, theme } from "./theme";
export const indexStyles = jss.createStyleSheet({
    root: {
        display: "flex",
    },
    loaderContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        minHeight: "400px",
    },
    pageLoader:{
        color: '#5795b1',
    },
    itemRoot: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    roleItem: {
        borderLeft: '6px solid'
    },
    title: {
        fontSize: 16,
        fontWeight:"bold",
        marginBottom: 10,
    },
    pos: {
        marginBottom: 0,
        fontSize:"14px",
    },
    container: {
        padding: "0 25px 30px 25px"//,
        // marginTop: "50px",
        // marginBottom:"50px",
    },
    headerBlue: {
        background: "linear-gradient(60deg, #5795b1, #6aa9c5)",
        boxShadow: "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(103, 177, 211,.4)",
    },
    boxCustomHeader: {
        marginBottom: "30px",
        display: "flex",
        "& >h6": {
            marginTop: "10px",
            color: "#676767",
            marginBottom: 0,
            fontWeight: "normal",
            fontSize: "20px",
        },
    },
    boxTitle: {
        minWidth: "70px",
        minHeight: "70px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        color: "#fff",
        marginTop: "-35px",
        marginRight: "15px",
        marginLeft: "15px",
        borderRadius: "3px",
        backgroundColor: "#999",
    },
    headerDescrWrapper: {
        padding: "13px 20px",
        "& p": {
            lineHeight: "30px",
            margin: 0
        },
        "& >h6": {
            marginTop: 0,
            marginBottom: "17px",
            fontSize: "20px"
        }
    },
    appBarSpacer:{
        minHeight:"100px",
    },
});


