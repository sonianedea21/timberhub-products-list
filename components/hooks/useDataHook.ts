import {useEffect, useState} from "react";
import {ProductType} from "../types";

const useDataHook = () => {
    const [data, setData] = useState<ProductType[]>([]);
    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                setData(res.rows);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return ({
        data
    });
}

export default useDataHook