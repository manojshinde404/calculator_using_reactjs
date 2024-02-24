import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  const defaultValue = displayValue || "0";
  return (
    <>
      <h1>Calculator</h1>
      <input
        className={styles.display}
        type="text"
        value={defaultValue}
        readOnly
      />
    </>
  );
};

export default Display;
