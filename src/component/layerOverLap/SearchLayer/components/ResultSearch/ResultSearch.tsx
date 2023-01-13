import React, { useState } from "react";
import SearchLayerStore from "../../context/SearchLayerStore";

import style from "./style.module.scss";
import classNames from "classnames/bind";
import Result, { IDataResult } from "./Result/Result";
import Loader from "./Loader";
import { v4 } from "uuid";
type Props = {};
const cx = classNames.bind(style);

const ResultSearch = (props: Props) => {
    const { valueSearchDebounce, valueSearch } = SearchLayerStore();
    const [err, setErr] = useState<any>();
    const [result, setResult] = useState<IDataResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    React.useEffect(() => {
        if (valueSearch.trim() !== "") setIsLoading(true);
        if (valueSearch) {
            setIsLoading(true);
            setTimeout(() => {
                setResult([
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/WhiteDadHatSun_150x.jpg"),
                        title: `Sun Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/WhiteDadHatPalmTree_150x.jpg"),
                        title: `Palmtree Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/classic-dad-hat-black-front-61ead753cc3a9_150x.jpg"),
                        title: `Sun Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/classic-dad-hat-black-front-61e1ad43d7e00_150x.jpg"),
                        title: `Palmtree Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/WhiteDadHatSun_150x.jpg"),
                        title: `Sun Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/WhiteDadHatPalmTree_150x.jpg"),
                        title: `Palmtree Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/classic-dad-hat-black-front-61ead753cc3a9_150x.jpg"),
                        title: `Sun Embroidery Dad Hat`,
                        link: "#",
                    },
                    {
                        id: v4(),
                        price: `€29,99 EUR`,
                        thumb: require("../../../../../static/img/fake-result-search/classic-dad-hat-black-front-61e1ad43d7e00_150x.jpg"),
                        title: `Palmtree Embroidery Dad Hat`,
                        link: "#",
                    },
                ]);
                setIsLoading(false);
            }, 1000);
        }
    }, [valueSearch]);

    React.useEffect(() => {
        console.log(valueSearchDebounce);
    }, [valueSearchDebounce]);

    return (
        <div
            className={cx(
                "search-res-wrapper",
                valueSearch.trim() === "" && "no-data"
            )}
        >
            {err ? (
                <strong>Ops, have err</strong>
            ) : isLoading ? (
                <Loader />
            ) : valueSearch.trim() === "" ? (
                <></>
            ) : (
                <Result data={result} />
            )}
        </div>
    );
};

export default ResultSearch;
