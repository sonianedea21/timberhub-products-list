import {useState} from "react";
import Head from 'next/head'
import cx from 'classnames'
import s from '../styles/Home.module.scss'
import {ProductType} from "../components/types";
import ProductLine from "../components/ProductLine";
import CreateForm from "../components/CreateForm";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import useDataHook from "../components/hooks/useDataHook";

export default function Home() {
    const [createFormVisible, setCreateFormVisible] = useState<boolean>(false);
    const {data} = useDataHook();

    const createProduct = (product: ProductType) => {
        data.push(product)
        setCreateFormVisible(false)
    }

    return (
        <div className={s.app}>
            <Head>
                <title>Products list</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <div className='p-20'>
                <div className={cx([s.row, s.spaceBetween])}>
                    <div className={cx([s.title, 'p-l-14'])}>All products</div>
                    <button type="button" onClick={() => setCreateFormVisible(true)}
                            className={cx([s.buttonSecondary])}>
                        + CREATE PRODUCT
                    </button>
                </div>

                <SearchBar/>

                <div>
                    <div className={cx([s.row, s.secondaryText, 'font-12 m-l-14'])}>
                        <p className={s.width40}>Product
                            <span className='font-10'> (Species, Grade, Drying)</span>
                        </p>
                        <p className='m-l-60'>Dimensions
                            <span className='font-10'> (ThicknessxWidth)</span>
                        </p>
                    </div>
                    {data && data.length > 0 && data.map((item: ProductType) => {
                        return <ProductLine product={item} key={item.id}/>
                    })
                    }
                </div>

            </div>

            {createFormVisible &&
                <Modal>
                    <CreateForm closeModal={() => setCreateFormVisible(false)} createProduct={createProduct}/>
                </Modal>
            }
        </div>
    )
}
