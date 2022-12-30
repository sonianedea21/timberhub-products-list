import {ReactElement} from "react";
import cx from "classnames";
import s from "../../styles/Home.module.scss";

export default function CustomDropdown({
                                           name,
                                           options,
                                           required, value, setValue
                                       }: { name: string, options: string[], required: boolean, value: string, setValue: (value: string) => void }): ReactElement {


    return (
        <div className={cx([s.col, s.flexGrow1, 'm-r-30'])} key={name}>
            <p className={cx([s.fontWeight700, 'font-15'])}>{name} {required && '*'}</p>
            <select defaultValue={value}
                    className={cx([s.fontWeight400, s.searchBarWrapper])}
                    required={required} onChange={(e) => setValue(e.target.value)}>
                <option value="" disabled
                        className={cx([s.secondaryText, 'font-14'])}>
                    Select
                </option>
                {options.map((option) => {
                    return (
                        <option value={option} key={option} className='font-14'>
                            {option}
                        </option>)
                })}
            </select>
        </div>
    )

}