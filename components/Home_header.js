import styles from '../styles/Home.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBagShopping, faBars, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className={styles.home__header_main}>
        <div className={styles.home__header_nav}>
          <FontAwesomeIcon icon={faBars} size="lg" style={{marginLeft: "2rem",}} className={styles.home_icons_move} />
          <h1>MUSIC STORE</h1>
          <div className={styles.home__header_icons}>
            <FontAwesomeIcon icon={faUser} size="lg" className={styles.home_icons_move}/>
            <FontAwesomeIcon icon={faLocationDot} size="lg"  className={styles.home_icons_move}/>
            <FontAwesomeIcon icon={faBagShopping} size="lg" className={styles.home_icons_move}/>
        </div>
      </div>
      <div>
        <div className={styles.home__header_text}>
          <div className={styles.home_header__text}>
          <p>PHANTOM</p>
          <h3>IMPLOSIVE SOUND </h3>
          </div>
          <div className={styles.home__header_button}>
          <button className={styles.home__header_button1}>DISCOVER</button>
          <button className={styles.home__header_button2}>BUY</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
