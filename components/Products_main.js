import styles from '../styles/Home.module.css';


function Products() {
  return (
    <div className={styles.product__cards_main}> 
      <div className={styles.product__cards}>
        <div className={styles.product__cards_1}>
          <div className={styles.product__cards_content}>
            <p>PHANTOM I White</p>
            <h3>A class of its own.</h3>
            <button>DISCOVER</button>
          </div>
        </div>
        <div className={styles.product__cards_2}>
          <div className={styles.product__cards_content}>
            <p>PHANTOM II Gold</p>
            <h3>Pure sound.</h3>
            <button>DISCOVER</button>
          </div>
        </div>
        <div className={styles.product__cards_3}>
          <div className={styles.product__cards_content}>
            <p>PHANTOM II Black</p>
            <h3>Deeply nomadic.</h3>
            <button>DISCOVER</button>
          </div>
        </div>
        <div className={styles.product__cards_4}>
          <div className={styles.product__cards_content}>
            <p>PHANTOM II White</p>
            <h3>Intensively immersive.</h3>
            <button>DISCOVER</button>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
