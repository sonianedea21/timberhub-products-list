import {ReactElement} from "react";
import s from '../styles/Home.module.scss'

export default function Modal({children}: { children: ReactElement }): ReactElement {
    return (
        <div className={s.modal}>
            <div className={s.modalMain}>
                {children}
            </div>
        </div>

    )
}