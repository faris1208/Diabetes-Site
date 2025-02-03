import Image from "next/image";
import styles from "../app/page.module.scss";
import HomaPage from "./pages/homepage/page";

export default function Home() {
  return (
    <div className={styles.page}>
     <HomaPage />
    </div>
  );
}
