import React from "react";
import { Container, Grid, Typography, Button, Box, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    mainbox: {
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20%"
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto !important",
        background: "white",
        padding: 20
    },
    iconCol: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contentCol: {},
    ctaBttns: {
        margin: "0 10px 0px 0 !important"
    },
    titleTypo: {
        fontFamily: "Lemon",
        fontSize: "2rem"
    },
    messageTypo: {
        fontFamily: "Lemon",
        fontSize: "2rem"
    }
});

export default function ErrorPage({
    title,
    message,
    icon,
    primaryActionLabel,
    primaryAction,
    secondaryActionLabel,
    secondaryAction
}) {
    const classes = useStyles();

    return (
        <Box className={classes.mainbox}>
            <Container maxWidth="sm">
                <Grid container className={classes.container} columnSpacing={3}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={2}
                        lg={2}
                        xl={2}
                        className={classes.iconCol}
                    >
                        {icon}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={10}
                        lg={10}
                        xl={10}
                        className={classes.contentCol}
                    >
                        <Typography align='center' classsName={classes.titleTypo}>
                            {title}
                        </Typography>
                        <Typography className={classes.messageTypo} align='center'>{message}</Typography>
                        {(primaryAction || secondaryAction) && (
                            <Box mt={2}>
                                {primaryAction && (
                                    <Button variant="contained" className={classes.ctaBttns}>
                                        {primaryActionLabel}
                                    </Button>
                                )}
                                {secondaryAction && (
                                    <Button variant="outlined" className={classes.ctaBttns}>
                                        {secondaryActionLabel}
                                    </Button>
                                )}
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
