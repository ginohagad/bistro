import React from 'react'
import styles from './Specialties.module.css'
import { makeStyles } from '@material-ui/core/styles'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';


const useStyles = makeStyles((theme) => ({
  icons: {
    display: 'inline-flex',
    verticalAlign: 'middle !important',
  },
}));


const Specialties = () => {

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${styles.center}`}>Our Specialties</h1>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <FreeBreakfastIcon className={classes.icons} fontSize="large" />
          <h3 className={styles.center}>Dinner & Dessert</h3>
          <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque sunt. Nisi vel illum adipisci.</p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.center}>Breakfast</h3>
          <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque sunt. Nisi vel illum adipisci.</p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.center}>Ice Shakes</h3>
          <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque sunt. Nisi vel illum adipisci.</p>
        </div>
        <div className={styles.box}>
          <h3 className={styles.center}>Beverages</h3>
          <p className={styles.center}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque sunt. Nisi vel illum adipisci.</p>
        </div>
      </div>
    </div>
  )
}



export default Specialties