import { createTheme, makeStyles, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    txtfield: {
        width: "30rem"
    },
    root: {
        marginTop: "5rem"
    },
    typo: {
        marginTop: "5rem",
        marginBottom: "5rem"
    }
}))
export default function FormFile() {
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000',
            },

            secondary: {
                main: '#f44336',
            },
        },
    });
    return (
        <div className={classes.root} align='center'>
            <Typography className={classes.typo}>
                Add your product
            </Typography>
            <ThemeProvider theme={theme}>
                <TextField variant='standard' className={classes.txtfield} />
            </ThemeProvider>

        </div>
    )
}
