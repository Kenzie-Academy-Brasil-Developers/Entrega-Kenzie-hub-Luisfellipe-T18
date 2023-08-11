import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <label className="label">{label}</label>
      <div className={styles.inputGrid}>
        <input
          className={styles.inputPassword}
          type={isHidden ? "password" : "text"}
          ref={ref}
          {...rest}
        />
        <button className={styles.button} onClick={() => setIsHidden(!isHidden)} type="button">
          {isHidden ? <MdVisibilityOff /> :  <MdVisibility />}
        </button>
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
