type ButtonPropsType = {
    name: string
    callBack: ()=> void
    className?: string
    disabled?: boolean
    callBackErrorText?:(value:boolean)=>void


}

export const UniButton = (props:ButtonPropsType) => {
    if (props.callBackErrorText){
        if(props.disabled){
            props.callBackErrorText(props.disabled)
        } else
            props.callBackErrorText(false)
    }

    const onClickButtonHandler = () => {
        props.callBack()
    }
    return(
        <button className={props.className}
                disabled={props.disabled}
                onClick={onClickButtonHandler}>{props.name}</button>
    )

}