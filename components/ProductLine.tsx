import {ReactElement} from "react";
import {ProductType} from "./types";

export default function ProductLine({product}: { product: ProductType }): ReactElement {
    const {id, created, species, grade, drying_method, dimensions} = product;

    var month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const time = new Date(1970, 0, 1);
    time.setSeconds(created);
    const date = `${time.getDate()}. ${month[time.getMonth()]} ${time.getFullYear()}`

    return (
        <div>
            {/*<Image src={} alt={}/>*/}
            <div>
                <div>{species}, {grade}, {drying_method}</div>
                <div>#{id} {date}</div>
            </div>
            {dimensions.map((dimension) => {
                return `${dimension.thickness}x${dimension.width}`
            })}
        </div>
    )

}