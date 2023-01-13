import classNames from "classnames/bind";
import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import SearchLayerStore from "../../../context/SearchLayerStore";

export interface IDataResult {
    id: string;
    title: string;
    price: string;
    thumb: string;
    link: string;
}

type Props = {
    data: IDataResult[];
};
const cx = classNames.bind(style);
const Result = (props: Props) => {
    const { data } = props;
    const { valueSearch } = SearchLayerStore();
    return (
        <div className={cx("result")}>
            <h2>products</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <Link to={item.link}>
                            <div className={cx("thumb")}>
                                <img src={item.thumb} alt="" />
                            </div>
                            <div className={cx("info")}>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to='#' className={cx("search-more-btn")}>
                <span>Search for "{valueSearch}"</span>
                <div className={cx("icon")}>
                    <svg>
                        <path
                            d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default Result;
