import React from "react";

import classNames from "classnames/bind";

import style from "./style.module.scss";
import AppStore from "../../../app/Context/AppStore";
import SearchLayerProvider from "./context/SearchLayerProvider";

import FormSearch from "./components/FormSearch";
import ResultSearch from "./components/ResultSearch";

type Props = {};

const cx = classNames.bind(style);
const SearchLayer = (props: Props) => {
    const { setIsOpenSearchLayer } = AppStore();

    return (
        <SearchLayerProvider>
            <div
                className={cx("search-layer")}
                onClick={(e) => {
                    setIsOpenSearchLayer(false);
                }}
            >
                <div
                    className={cx("container")}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {/* field search */}
                    <FormSearch />
                </div>
            </div>
        </SearchLayerProvider>
    );
};

export default SearchLayer;
