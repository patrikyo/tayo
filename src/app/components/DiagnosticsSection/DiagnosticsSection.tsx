import Image from "next/image";
import styles from "./DiagnosticsSection.module.css";
const DiagnosticsSection: React.FC<DiagnosticsSectionProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <>
      <Image src={img} width={350} height={350} className="img" alt="" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default DiagnosticsSection;
