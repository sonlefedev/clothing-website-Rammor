import React from "react";
import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

import style from "./style.module.scss";
import classNames from "classnames/bind";
import AppStore from "../../../../../app/Context/AppStore";
import SearchLayerStore from "../../context/SearchLayerStore";
import ResultSearch from "../ResultSearch";

type Props = {};
const cx = classNames.bind(style);

const FormSearch = (props: Props) => {
    const { setIsOpenSearchLayer } = AppStore();
    const { setValueSearch, valueSearch } = SearchLayerStore();

    return (
        <div className={cx("field")}>
            <input
                type="text"
                id="search_input"
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
            />
            <label
                htmlFor="search_input"
                className={cx(valueSearch.trim() !== "" && "empty-search")}
            >
                Search
            </label>
            <div className={cx("icon", "search")}>
                <CiSearch />
            </div>
            <div
                className={cx("icon", "close")}
                onClick={(e) => {
                    setIsOpenSearchLayer(false);
                }}
            >
                <TfiClose />
            </div>
            <ResultSearch />
        </div>
    );
};

export default FormSearch;
