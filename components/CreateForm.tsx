import {ReactElement} from "react";

export default function CreateForm(): ReactElement {
    // TODO select-urile ar trebui sa fie reutilizabile

    return (
        <div>
            <div>
                Create product
            </div>
            <div>
                <p>Sawn timber</p>
                <div>
                    <p>Usage</p>
                </div>
                <div>
                    <p>Wood species</p>
                </div>
            </div>
        </div>
    )
}