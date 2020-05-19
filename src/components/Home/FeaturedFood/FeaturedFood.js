import React from 'react'
import { Typography, Card, CardMedia, CardContent, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from './FeaturedFood.module.css'



const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: '30px',
  },
  card: {
    maxWidth: 345,
    margin: '5px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))



const FeaturedFood = () => {

  const classes = useStyles()

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.title}>Featured Food</Typography>
      <hr className={styles.line} />
      <Grid container spacing={24} alignItems="center" justify="center" className={classes.gridContainer}>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://placeimg.com/640/480/any"
            />
            <CardContent>
              <Typography variant="h6">
                Food name 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://placeimg.com/640/480/any"
            />
            <CardContent>
              <Typography variant="h6">
                Food name 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://placeimg.com/640/480/any"
            />
            <CardContent>
              <Typography variant="h6">
                Food name 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://placeimg.com/640/480/any"
            />
            <CardContent>
              <Typography variant="h6">
                Food name 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}


export default FeaturedFood