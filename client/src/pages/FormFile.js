import { Avatar, Button, createTheme, FormControl, Input, InputLabel, makeStyles, Menu, MenuItem, Select, TextField, ThemeProvider, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import NavProps from '../components/NavProps';
import { green } from '@material-ui/core/colors';
import { postProduct } from '../functions/postData';
const useStyles = makeStyles(theme => ({
    txtfield: {
        width: "22rem",
        height: "2.5rem",
        marginBottom: "1.25rem"
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

    },
    formControl: {
        width: "22rem",
        margin: '1rem'
    }
}))
export default function FormFile() {
    const classes = useStyles();
    const [image, setImage] = useState(null)
    const nav = useContext(NavProps);
    const [data, setData] = useState({ age: "" });
    nav.setNav("ORG")
    const [age, setAge] = useState("");
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
        if (e.target.name === 'type') {
            setAge(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                <form encType='multipart/form-data' style={{ maxWidth: '30rem', marginBottom: "10rem", height: "40rem" }} onChange={(e) => handleChange(e)}>
                    <TextField name='name' variant='standard' className={classes.txtfield} label='Name' placeholder='Name of your product' />
                    <TextField name='quantity' variant='standard' className={classes.txtfield} label='Quantity' placeholder='Number of product you can supply' />
                    <TextField name='price' variant='standard' className={classes.txtfield} label='Price' placeholder='Price of your product' />
                    <TextField name='desc' variant='standard' multiline row={3} maxRows={2} className={classes.txtfield} label='Description' placeholder='Products detailed Description' />

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                        <Select
                            native
                            value={age}
                            onChange={handleChange}
                            inputProps={{
                                name: 'type',
                                id: 'age-native-simple',
                            }}
                        >
                            <option value="" disabled />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
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
                    <Button onClick={(e)=>handleSubmit(e)} variant='contained' color='primary' className={classes.btn} >Add product</Button>
                </form>
            </ThemeProvider>
        </div>
    )
}
