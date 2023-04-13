import styles from '../styles/Home.module.css';
import Header from '../components/Home_header';
import NewProduct from '../components/NewProduct_main';
import Products from '../components/Products_main';
import Footer from './Home_footer';


function Home() {
  return (
    <div className={styles.home_main}>
      <Header/>
      <NewProduct/>
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
