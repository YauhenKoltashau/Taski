import React, {useState} from "react";
import styles from './set.module.css'
import {ValueType} from "./App";
import {UniButton} from "./UniButton";
import {UniInput} from "./UniInput";

export type SetCounterPropsType = {
    startValue: ValueType
    maxValue: ValueType
    callBackStart: (startValue: ValueType) => void
    callBackMax: (maxValue: ValueType) => void
    disabledCounter: () => void
    activateCounter: () => void
    observerErrors: (value: boolean) => void
}
export const SetCounter = (props: SetCounterPropsType) => {
    let [startValue, setStartValue] = useState(props.startValue)
    let [maxValue, setNewMaxValue] = useState(props.maxValue)
    let [errorS, setErrorS] = useState(false)
    let [errorM, setErrorM] = useState(false)

    const onChangeStartValue = (newValue: string) => {
        props.disabledCounter()
        let newStartValue = Number.parseInt(newValue)
        if (newStartValue < 0) {
            setErrorS(true)
            setStartValue(newStartValue)
        } else if (newStartValue > 0) {
            setErrorS(false)
            setStartValue(newStartValue)
        } else if (newStartValue === 0) {
            setErrorS(false)
            setStartValue(newStartValue)
        }

    }

    const onChangeMaxValue = (newValue: string) => {
        props.disabledCounter()
        let newMaxValue = Number.parseInt(newValue)
        if (newMaxValue < 0) {
            setErrorM(true)
            setNewMaxValue(newMaxValue)
        } else if (newMaxValue > 0) {
            setErrorM(false)
            setNewMaxValue(newMaxValue)
        } else if (newMaxValue === 0) {
            setErrorM(false)
            setNewMaxValue(newMaxValue)
        }

    }

    const setData = () => {
        if (maxValue > startValue) {
            props.activateCounter()
            props.callBackStart(startValue)
            props.callBackMax(maxValue)
        } else
            props.observerErrors(true)


    }


    return (
        <div>
            <div className={styles.setMain}>
                <div className={styles.setParameters}>
                    <div><span> max value</span>
                        <UniInput
                            callBack={onChangeMaxValue}
                            error={errorM}
                            type={"number"}
                            value={maxValue}
                        />
                    </div>
                    <div><span> start value</span>
                        <UniInput
                            callBack={onChangeStartValue}
                            error={errorS}
                            type={'number'}
                            value={startValue}

                        /></div>


                </div>
                <div className={styles.setButton}>
                    <UniButton
                        disabled={errorS || errorM || maxValue<=startValue}
                        className={styles.button}
                        callBack={setData}
                        name={"SET"}
                        callBackErrorText={props.observerErrors}/>
                </div>


            </div>
            {/*<hr/>*/}
            {/*<Button name={"setToLocalStorage"} callBack={setValueToLocalStorage}/>*/}
            {/*<Button name={"getLocalStorageValue"} callBack={getValueLocalStorageValue}/>*/}
            {/*<Button name={"clearLocalStorage"} callBack={clearLocalStorage}/>*/}
            {/*<Button name={"removeLocalStorageValue"} callBack={removeLocalStorageValue}/>*/}
        </div>

    )

}