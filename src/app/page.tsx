import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}
