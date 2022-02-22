import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const StyledPaper = withStyles((theme) => ({
    root: {
        padding: 10,
        margin: theme.spacing(35),
        padding: theme.spacing(10),
        paddingTop: 50,

    }
}))(Paper);

export default StyledPaper;
