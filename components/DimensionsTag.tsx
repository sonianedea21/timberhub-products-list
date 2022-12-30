import {ReactElement} from "react";
import cx from "classnames";
import s from "../styles/Home.module.scss";
import {DimensionsType} from "./types";

export default function DimensionsTag({
                                          dimension,
                                          index,
                                          dimensionsLength
                                      }: { dimension: DimensionsType, index: number, dimensionsLength: number }): ReactElement | null {
    if (index < 3) {
        return (
            <div className={s.dimensionsTag}>
                <span className={cx([s.secondaryText, 'p-r-6'])}>{index + 1}</span>
                {dimension.thickness}x{dimension.width}
            </div>
        )
    }
    if (index === 3) {
        return (
            <div className={s.dimensionsTag}>
                + {dimensionsLength - 3} more sets
            </div>
        )
    }
    return null;
}