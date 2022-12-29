import {ReactElement} from "react";
import cx from "classnames";
import s from "../../styles/Home.module.scss";

export default function CustomInput({
                                        name,
                                        required,
                                        setValue,
                                        value
                                    }: { name: string, required: boolean, value: number, setValue: (value: number) => void }): ReactElement {
    return (
        <div className={cx([s.col, s.flexGrow1, 'm-r-30'])} key={name}>
            <p className={cx([s.fontWeight700, 'font-15'])}>{name} {required && '*'}</p>
            <input
                // defaultValue={value}
                value={value || ''}
                className={cx([s.fontWeight400, s.searchBarWrapper])}
                required={required}
                onChange={(e) => setValue(parseInt(e.target.value, 10))}/>
        </div>
    )

}