import { forwardRef } from "react";
import styles from "./style.module.scss";

export const InputCard = forwardRef(({ error, label, ...rest}, ref) => {
    
  

    return (
      <div className={styles.inputs}> 
        <label className="label">{label}</label>
        <input className={styles.input} ref={ref} {...rest}/>
        {error ? <p className="headline">{error.message}</p> : null}
        
  
      </div>
    );
  });