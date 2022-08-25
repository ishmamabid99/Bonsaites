import { CssBaseline, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ErrorPage from '../components/ErrorPage';
import { getWishList } from '../functions/getData';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CardComponent from '../components/CardComponent'
const useStyles = makeStyles(theme => ({
  root: {

    marginLeft: "10rem",
    marginRight: "10rem"
  },
  title: {
    fontFamily: "Lemon",
    fontSize: "3rem",
    marginTop: "7rem",
    opacity: "0.7"
  }
}))

export default function WishList(props) {
  const classes = useStyles();
  const [wishData, setWishData] = useState([])
  useEffect(() => {

    const getWishListData = async () => {
      try {
        const data = await getWishList();
        setWishData(data)
      }
      catch (err) {
        console.log(err)
      }
    }
    getWishListData()
  }, [])
  return (
    <>
      <div>
        <Typography align='center' className={classes.title}>
          Your Wishlist
        </Typography>
      </div>
      <div className={classes.root}>
        {wishData.length === 0 ?
          <>
            <ErrorPage
              icon={<SentimentVeryDissatisfiedIcon style={{ fontSize: "5rem", color: '#FFB200' }} />}
              title=""
              message="There is nothing in wishlist right now.Please add product to wishlist."
            />
            <CssBaseline />
          </>
          :
          <>

            <CardComponent obj={wishData} state="wishlist" />

          </>

        }
      </div>
    </>
  )
}
