import React from 'react'
import styles from './Specialties.module.css'




const Specialties = () => {

  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${styles.center}`}>Our Specialties</h1>
      <div className={styles.boxes}>
        <div className={styles.box}>
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