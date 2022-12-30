import {useMemo, useState} from "react";
import {DimensionsType, ProductType} from "../types";

const useFormHook = ({createProduct}: { createProduct: (data: ProductType) => void }) => {
    const [usage, setUsage] = useState('');
    const [grade, setGrade] = useState('');
    const [drying, setDrying] = useState('');
    const [treatment, setTreatment] = useState('');
    const [woodSpecies, setWoodSpecies] = useState('');

    const [thickness, setThickness] = useState(0);
    const [width, setWidth] = useState(0);
    const [length, setLength] = useState(0);


    const dimensions: DimensionsType[] = useMemo(() => {
        return []
    }, []);

    const newDimensions = useMemo(() => {
        return {thickness: thickness, width, length}
    }, [length, thickness, width]);

    const addDimensions = () => {
        if (width === 0 || length === 0 || thickness === 0) {
            return alert('Please fill in all mandatory fields')
        }
        dimensions.push(newDimensions);
        setThickness(0);
        setWidth(0);
        setLength(0);
    }

    const newProduct = useMemo(() => {
        return {
            id: Math.floor(new Date().getTime() / 1000),
            created: Math.floor(new Date().getTime() / 1000),
            species: woodSpecies,
            grade,
            drying_method: drying,
            usage,
            dimensions: dimensions,
            treatment: null
        }
    }, [dimensions, drying, grade, usage, woodSpecies]);

    const notAllFieldsFilledIn = useMemo(() => {
        return usage === '' || grade === '' || drying === '' || treatment === '' || woodSpecies === '' || width === 0 || length === 0 || thickness === 0
    }, [drying, grade, length, thickness, treatment, usage, width, woodSpecies])

    const addProduct = () => {
        if (notAllFieldsFilledIn) {
            alert('Please fill in all mandatory fields');
            return;
        }
        addDimensions();
        createProduct(newProduct);
    };


    return ({
        usage,
        setUsage,
        grade,
        setGrade,
        drying,
        setDrying,
        treatment,
        setTreatment,
        woodSpecies,
        setWoodSpecies,
        thickness,
        setThickness,
        width,
        setWidth,
        length,
        setLength,
        dimensions,
        newDimensions,
        addDimensions,
        newProduct,
        addProduct
    })
}
export default useFormHook;