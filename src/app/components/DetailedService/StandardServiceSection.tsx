import Image from "next/image";
import styles from "./StandardServiceSection.module.css";
import StandardServiceSectionProps from "@/app/models/interfaces/StandardServiceSectionProps.interface";

const StandardServiceSection: React.FC<StandardServiceSectionProps> = ({
  img,
  description,
}) => {
  return (
    <>
      <Image src={img} width={350} height={350} alt="" className="img" />
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default StandardServiceSection;
