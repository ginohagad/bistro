import React from 'react'
import styles from './Specialties.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';


const useStyles = makeStyles((theme) => ({
  icons: {
    fontSize: '40px',
    marginBottom: '20px',
    color: '#fff',
    backgroundColor: 'orange',
    borderRadius: '50%',
    padding: '10px',
  },
}));


const Specialties = () => {

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={`${styles.title} ${styles.center}`}>Our Specialties</Typography>
      <hr className={styles.line} />
      <div className={styles.boxes}>
        <div className={styles.box}>
          <FreeBreakfastIcon className={classes.icons} />
          <Typography variant="h6" className={`${styles.categoryTitle} ${styles.center}`}>Breakfast</Typography>
          <Typography paragraph className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloremque placeat rerum quis perferendis odio, aliquid aspernatur est sed iste rem minima, quae error tempore.</Typography>
        </div>
        <div className={styles.box}>
          <LocalBarIcon className={classes.icons} />
          <Typography variant="h6" className={`${styles.categoryTitle} ${styles.center}`}>Dinner & Dessert</Typography>
          <Typography paragraph className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae facere voluptatem in quo! Doloremque dolorem voluptas corporis ut minus.</Typography>
        </div>
        <div className={styles.box}>
          <FastfoodIcon className={classes.icons} />
          <Typography variant="h6" className={`${styles.categoryTitle} ${styles.center}`}>Ice Shakes</Typography>
          <Typography paragraph className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste deserunt aspernatur, distinctio eius non unde nesciunt? Quibusdam, distinctio a. Fugiat maxime pariatur eos rerum nam inventore, expedita sed ipsam.</Typography>
        </div>
        <div className={styles.box}>
          <LocalDrinkIcon className={classes.icons} />
          <Typography variant="h6" className={`${styles.categoryTitle} ${styles.center}`}>Beverages</Typography>
          <Typography paragraph className={styles.center}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vitae optio, quis aliquid distinctio iusto officiis dolorem ipsum. Aliquid debitis delectus, quia velit dolore exercitationem.</Typography>
        </div>
      </div>
    </div>
  )
}



export default Specialties