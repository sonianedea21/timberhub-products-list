import {ReactElement} from "react";
import Image from 'next/image';

import s from '../styles/Home.module.scss'

import {Logo} from '../public/images';

export default function Header(): ReactElement {
    return (
        <div className={s.header}>
            <Image src={Logo} alt='logo' width={160} height={45} className={s.headerLogo}/>
        </div>
    )
}