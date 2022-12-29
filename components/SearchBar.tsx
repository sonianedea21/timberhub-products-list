import {ReactElement} from "react";
import cx from "classnames";
import s from "../styles/Home.module.scss";
import Image from "next/image";
import {MagnifyingGlass} from "../public/images";

export default function SearchBar(): ReactElement {
    return (
        <div className={cx([s.searchBarWrapper, s.row, 'm-t-26 m-b-26 m-l-14'])}>
            <Image src={MagnifyingGlass} alt='search' width={16} height={16} className='m-12'
                   style={{opacity: '30%'}}/>
            <input placeholder='Search' className={cx([s.searchBar])}/>
        </div>
    )
}