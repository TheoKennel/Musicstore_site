import styles from '../styles/Home.module.css';


function NewProduct() {
  return (
    <div>
      <div className={styles.newProduct__title} >
      <div className={styles.newProduct__title1}>
      <p>LATEST LAUNCH</p>
      <h3>DIONE SOUNDBAR</h3>
      </div>
      <img src='soundbar.png' className={styles.newProduct__soundbar} />
      <button>DISCOVER</button>
      </div>
    </div>
  );
}

export default NewProduct;
