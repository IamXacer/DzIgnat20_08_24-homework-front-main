import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: any // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
		event.currentTarget.value
	};

	 return (
	   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	 );
};
