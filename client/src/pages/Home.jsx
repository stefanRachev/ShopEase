//import styles from './Home.module.css';
//import { useLanguage } from "../context/useLanguage";
import ProductDescription from "./ProductDescription";
import CarouselComponent from "./CarouselComponent";
function Home() {
  //const { language } = useLanguage();

  return (
    <>
      <CarouselComponent />
      <ProductDescription />
    </>
  );
}

export default Home;
