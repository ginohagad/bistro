import React from 'react'
import { Typography, Card, CardMedia, CardContent, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from './FeaturedFood.module.css'
import pizza from '../../../img/food/pizza.jpg'
import salad from '../../../img/food/salad.jpg'
import soup from '../../../img/food/soup.jpg'
import pasta from '../../../img/food/pasta.jpg'



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

	const food = [
		{
			src: pizza,
			name: 'Pizza',
			desc: 'This is a pizza',
		},
		{
			src: salad,
			name: 'Salad',
			desc: 'This is a salad',
		},
		{
			src: soup,
			name: 'Soup',
			desc: 'This is a soup',
		},
		{
			src: pasta,
			name: 'Pasta',
			desc: 'This is a pasta',
		},
	];




  const classes = useStyles()

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.title}>Featured Food</Typography>
      <hr className={styles.line} />
			<Grid container spacing={24} alignItems="center" justify="center" className={classes.gridContainer}>
				{food.map((f, idx) => 
					<Grid key={idx} item md={3}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.media}
								image={f.src}
							/>
							<CardContent>
								<Typography variant="h6">
									{f.name}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{f.desc}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				)}
			</Grid>
    </div>
  )
}


export default FeaturedFood
