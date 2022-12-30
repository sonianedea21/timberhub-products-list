import {ReactElement} from "react";
import Image from 'next/image'
import cx from 'classnames'
import s from '../styles/Home.module.scss'
import {DimensionsType, ProductType} from "./types";
import {Timber} from "../public/images";
import {getDate} from "../helpers/date";
import DimensionsTag from "./DimensionsTag";


export default function ProductLine({product}: { product: ProductType }): ReactElement {
    const {id, created, species, grade, drying_method, dimensions} = product;

    return (
        <div className={cx([s.productLine, s.row])}>
            <Image src={Timber} alt='product-line-icon' width={20} height={21} className='m-22'/>

            <div className={cx([s.width40, 'm-t-14 m-b-16'])}>
                <p className='font-13'>{species}, {grade}, {drying_method}</p>
                <p className='font-11'><a>#{id} </a><span className={s.secondaryText}>{getDate(created)}</span></p>
            </div>

            <div className={cx(['font-12', s.row])}>
                {dimensions.map((dimension: DimensionsType, index: number) => {
                    return (
                        <DimensionsTag dimension={dimension} index={index}
                                       key={`${dimension.thickness}x${dimension.width}${index}`}
                                       dimensionsLength={dimensions.length}
                        />
                    )
                })}</div>
        </div>
    )

}