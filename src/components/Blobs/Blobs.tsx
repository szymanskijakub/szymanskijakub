import Blob1 from "../../assets/blobs/blob1.svg?react";
import Blob2 from "../../assets/blobs/blob2.svg?react";
import styles from "./Blobs.module.scss";
const Blobs = () => {
  return (
    <div className={styles.container}>
      <Blob1
        style={{ left: "-1200px", top: "-1100px" }}
        className={`${styles.blob1} blob1`}
      />
      <Blob2 style={{ right: "-800px" }} className={`${styles.blob2} blob2`} />
    </div>
  );
};

export default Blobs;
