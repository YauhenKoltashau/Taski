import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {SetCounter} from "./setCounter";
import styles from './App.module.css'

export type ValueType = number


function App() {
    let [startValue, setStartValue] = useState<ValueType>(0)
    let [currentValue, setCurrentValue] = useState(startValue)
    let [maxValue, setMaxValue] = useState(0)
    let [disabled, setDisabled] = useState(false)
    let [error, setError] = useState(false)

    // useEffect(() => {
    //     let valueLocalStorage = localStorage.getItem("CounterValue")
    //     if (valueLocalStorage) {
    //         let newValueForCounter = JSON.parse(valueLocalStorage)
    //         setStartValue(newValueForCounter)
    //     }
    // }, [])
    useEffect(() => {
        setCurrentValue(startValue)
    }, [startValue])

    const disabledCounter = () => {
        setDisabled(true)
    }
    const activateCounter = () => {
        setDisabled(false)
    }

    const setterCurrentValue = (newCurrentValue: ValueType) => {
        console.log(newCurrentValue)
        if (newCurrentValue <= maxValue) {
            setCurrentValue(newCurrentValue)
        } else if (newCurrentValue > maxValue) {
            setDisabled(true)


        }
        // localStorage.setItem('CounterValue', JSON.stringify(currentValue))
        // }else
        //     setDisabled(true)


    }
    const setterMaxValue = (newMaxValue: ValueType) => {
        setMaxValue(newMaxValue)
    }
    const setterStartValue = (newStartValue: ValueType) => {
        setStartValue(newStartValue)

    }
    const resetValues = () => {
        console.log(startValue)
        setCurrentValue(startValue)
        setDisabled(false)
    }
    const observerErrors = (error: boolean) => {
        setError(error)
        console.log(error)
    }

    return (
        <div className={styles.mainWrapper}>
            <SetCounter
                startValue={startValue}
                maxValue={maxValue}
                callBackStart={setterStartValue}
                callBackMax={setterMaxValue}
                disabledCounter={disabledCounter}
                activateCounter={activateCounter}
                observerErrors={observerErrors}

            />
            <Counter
                disabled={disabled}
                currentValue={currentValue}
                startValue={startValue}
                maxValue={maxValue}
                setterCurrentValue={setterCurrentValue}
                resetValues={resetValues}
                error={error}
                // disabled={!disabled}
            />
        </div>
    );
}

export default App;
