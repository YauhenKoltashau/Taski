import React, {useState} from "react";
import {Button} from "./Button";

import styles from './Counter.module.css'


export const Counter = () => {
    let [counter, setCounter] = useState(0)

    const upCounter = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }
    const resetCounter = () => {
        setCounter(0)
    }
    return (
        <div className={styles.counterBack}>
            <div className={styles.counter}><b>{counter}</b></div>
            <Button
                className={counter < 10 ? styles.up : styles.disabledUp}
                callBack={upCounter}
                name={"ADD"}/>
            <Button
                className={counter < 1 ? styles.disabledReset : styles.reset}
                callBack={resetCounter}
                name={"RESET"}/>
            {counter===5&&<span className={styles.error}>Maximum is made. Try reset</span>}

        </div>
    )

}