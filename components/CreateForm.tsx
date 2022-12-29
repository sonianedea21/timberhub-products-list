import React, {ReactElement} from "react";
import Image from 'next/image'
import s from '../styles/Home.module.scss'
import cx from "classnames";
import {Dimensions, Plus, Specifications, Timber} from "../public/images";
import CustomDropdown from "./customFields/CustomDropdown";
import CustomInput from "./customFields/CustomInput";
import {ProductType} from "./types";
import config from "../config";
import useFormHook from "./hooks/useFormHook";

export default function CreateForm({
                                       closeModal,
                                       createProduct
                                   }: { closeModal: () => void, createProduct: (data: ProductType) => void }): ReactElement {
    const {
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
        addDimensions,
        addProduct
    } = useFormHook({createProduct});

    const sawnTimberFields = [
        {
            name: 'Usage',
            component: <CustomDropdown options={config.UsageOptions} name={'Usage'} required value={usage}
                                       setValue={setUsage}/>,
        },
        {
            name: 'Wood Species',
            component: <CustomDropdown options={config.WoodSpeciesOptions} name={'Wood Species'} required
                                       value={woodSpecies}
                                       setValue={setWoodSpecies}/>,
        }
    ];

    const specificationsFields = [
        {
            name: 'Drying',
            component: <CustomDropdown options={config.DryingOptions} name={'Drying'} required value={drying}
                                       setValue={setDrying}/>,
        },
        {
            name: 'Grade',
            component: <CustomDropdown options={config.GradeOptions} name={'Grade'} required value={grade}
                                       setValue={setGrade}/>,
        },
        {
            name: 'Treatment',
            component: <CustomDropdown options={config.TreatmentOptions} name={'Treatment'} required value={treatment}
                                       setValue={setTreatment}/>,
        }
    ];

    const dimensionsFields = [
        {
            name: 'Thickness',
            component: <CustomInput name={'Thickness'} required value={thickness} setValue={setThickness}/>,

        },
        {
            name: 'Width',
            component: <CustomInput name={'Width'} required value={width} setValue={setWidth}/>,

        },
        {
            name: 'Length',
            component: <CustomInput name={'Length'} required value={length} setValue={setLength}/>,

        },
    ];

    const categories = [
        {
            name: 'Sawn Timber',
            image: Timber,
            fields: sawnTimberFields,
            details: 'This will help us find what fits best to your needs.'
        },
        {
            name: 'Specifications',
            image: Specifications,
            fields: specificationsFields
        },
        {
            name: 'Dimensions',
            image: Dimensions,
            fields: dimensionsFields
        },
    ];

    return (
        <div>
            <div className={cx([s.row, 'p-t-20 p-l-20'])}>
                <div className={cx([s.title, 'p-l-14'])}>Create product</div>
            </div>
            {categories.map((category) => {
                return (
                    <div className={cx([s.borderTop, s.flex, 'p-t-30 p-b-40 m-l-20 m-r-20'])} key={category.image}>
                        <Image src={category.image} alt={`${category.name}`} width={30} height={32}/>
                        <div className={cx([s.fullWidth, 'p-l-20'])}>
                            <div className={cx([s.row, s.spaceBetween])}>
                                <p className='font-24 m-b-16'>{category.name}</p>
                                {category.name === 'Dimensions' &&
                                    <div className={s.row}>
                                        <Image src={Plus} alt=' Add another set' width={14} height={14}/>
                                        <button onClick={addDimensions}
                                                className={cx(['font-14 m-l-10 m-r-30', s.textButton, s.colorBrandGreen])}>
                                            Add another set
                                        </button>
                                    </div>

                                }
                            </div>
                            <div className={cx([s.row, s.alignItemsBaseline])}>
                                {category.fields.length > 0 && category.fields.map((field) => {
                                    return <React.Fragment key={field.name}>{field.component}</React.Fragment>
                                })}
                            </div>
                            {category.details &&
                                <p className={cx([s.secondaryText, s.fontWeight700, 'font-11 m-l-8'])}>
                                    {category.details}
                                </p>
                            }
                        </div>

                    </div>
                )
            })}
            {dimensions.map((dimension) => {
                return (
                    <div className={cx([s.row, s.alignItemsBaseline, 'm-l-60'])}
                         key={`${dimension.thickness}${dimension.width}${dimension.length}${Math.random()}`}>
                        <p className='p-r-10'>Thickness: {dimension.thickness}</p>
                        <p className='p-r-10'>Width: {dimension.width}</p>
                        <p className='p-r-10'>Length: {dimension.length}</p>
                    </div>)
            })}

            <div className={cx([s.row, s.spaceBetween, s.stickToBottom, 'p-20'])}>
                <button onClick={closeModal} className={s.textButton}>CLOSE</button>
                <button typeof="button" onClick={addProduct} className={s.buttonPrimary}>
                    CREATE PRODUCT
                </button>
            </div>
        </div>
    )
}