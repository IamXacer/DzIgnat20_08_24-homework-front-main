import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

// Тип пропсов для спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

// Тип для каждой опции
type OptionType = {
    id: number
    value: string
}

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: OptionType[] // Массив с типом OptionType
    onChangeOption?: (option: OptionType) => void  // Функция для обновления состояния с объектом OptionType
    spanProps?: DefaultSpanPropsType
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       className,
                                                       options,
                                                       value,
                                                       onChange,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let selectedOption = options?.find(o => o.id === Number(e.currentTarget.value))
        if (selectedOption && onChangeOption) {
            onChangeOption(selectedOption)
        }
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: React.ReactNode[] = options
        ? options.map((o) => (
            <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id} // Проверьте правильность генерации id
                    type={'radio'}
                    name={name}
                    value={o.id}
                    checked={o.id === value}
                    onChange={onChangeCallback}
                    className={finalRadioClassName}
                />
                <span id={id + '-span-' + o.id} >{o.value}</span>
            </label>
        ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
