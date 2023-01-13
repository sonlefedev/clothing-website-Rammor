import React from "react";
import CommonLayout from "../CommonLayout";
import DetailProduct from "../../component/base/DetailProduct";
import { useParams } from "react-router-dom";
import { FakeDataByMap } from "../../fake-data/fakeData";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Collection from "../../component/Collection";
import { useEffect } from "react";
import arrayShuffle from "array-shuffle";

type Props = {};
const cx = classNames.bind(style);
const Product = ({}: Props) => {
    const { id } = useParams();
    const idProduct = id as any as string;
    const data = FakeDataByMap.get(idProduct)
    
    
    const dataSuggest = React.useMemo(() => {
        const dataYouAlsoLike: IDataProduct[] = [];
        for(const [key, value] of FakeDataByMap) {
            if(key === idProduct) continue;
            if(value.collectionName !== idProduct.split('_')[0]) continue;
            dataYouAlsoLike.push(value)
        }
        return arrayShuffle(dataYouAlsoLike).slice(0, 4);
    }, [idProduct])
    
    return (
        <CommonLayout>
            {!data ? (
                <>nothing here</>
            ) : (
                <DetailProduct
                    classNameWrapper={cx("detail-product")}
                    data={data}
                />
            )}
            <Collection 
                title="You may also like."
                data={dataSuggest}
                className={cx('y-also-like')}
            />
        </CommonLayout>
    );
};

export default Product;
