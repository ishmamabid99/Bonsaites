import { Avatar, Button, createTheme, Input, makeStyles, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import NavProps from '../components/NavProps';
import { green } from '@material-ui/core/colors';
import { postProduct } from '../functions/postData';
const useStyles = makeStyles(theme => ({
    txtfield: {
        width: "22rem",
        marginBottom: "1rem"
    },
    root: {
        marginTop: "0rem"
    },
    typo: {
        marginTop: "3rem",
        marginBottom: "2rem",
        fontFamily: 'Lemon',
        fontSize: '2.75rem'
    },
    avt: {
        height: "12rem",
        width: '22rem'
    },
    btn: {
        color: 'white',
        margin: '3rem  0  5rem 0',
        width: "22rem",

    }
}))
export default function FormFile() {
    const classes = useStyles();
    const [image, setImage] = useState(null)
    const nav = useContext(NavProps);
    const [data, setData] = useState(null);
    nav.setNav("ORG")
    const theme = createTheme({
        palette: {
            primary: {
                main: green[900],
            },

            secondary: {
                main: '#f44336',
            },
        },
        fontFamily: 'Overpass'
    });
    const handleChange = (e) => {
        if (e.target.name !== 'image')
            setData({ ...data, [e.target.name]: e.target.value });
        else {
            setData({ ...data, [e.target.name]: e.target.files[0] });
        }
    }
    const handleSubmit = async () => {
        if (data && data.name && data.image && data.desc && data.price && data.quantity) {
            postProduct(data);
        }
        else {

        }
    }
    return (
        <div className={classes.root} align='center'>
            <Typography className={classes.typo}>
                Add your product
            </Typography>
            <ThemeProvider theme={theme}>
                <form encType='multipart/form-data' style={{ maxWidth: '30rem', marginBottom: "10rem" }} onChange={(e) => handleChange(e)}>
                    <TextField name='name' variant='standard' className={classes.txtfield} label='Name' placeholder='Name of your product' />
                    <TextField name='quantity' variant='standard' className={classes.txtfield} label='Quantity' placeholder='Number of product you can supply' />
                    <TextField name='price' variant='standard' className={classes.txtfield} label='Price' placeholder='Price of your product' />
                    <TextField name='desc' variant='outlined' multiline row={3} maxRows={10} className={classes.txtfield} label='Description' placeholder='Products detailed Description' />
                    <input name='image' type='file' onChange={(e) => {
                        setImage(URL.createObjectURL(e.target.files[0]));

                    }} id='image-input' style={{ display: "none" }} />
                    <label htmlFor='image-input'>
                        <Avatar variant='rounded' src={image} alt='Please upload Image of your product' className={classes.avt} >
                            {image === null ?
                                < CameraAltIcon />
                                :
                                null
                            }
                        </Avatar>
                    </label>
                    <Button onClick={handleSubmit} variant='contained' color='primary' className={classes.btn} >Add product</Button>
                </form>
            </ThemeProvider>
        </div>
    )
}
