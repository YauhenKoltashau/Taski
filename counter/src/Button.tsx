type ButtonPropsType = {
    name: string
    callBack: ()=> void
    className?: string
}

export const Button = (props:ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return(
        <button className={props.className} onClick={onClickButtonHandler}>{props.name}</button>
    )

}