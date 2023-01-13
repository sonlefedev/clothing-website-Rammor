import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Button from "../../../../common/Button";
import { useCallback, useState } from "react";

type Props = {
    className?: string;
    data: Omit<IDataProduct, "thumb">;
    type?: "for-feature";
    handleBtnShowMoreClick?: () => void;
};

const cx = classNames.bind(style);
const InfoItem = ({ data, className, type, handleBtnShowMoreClick }: Props) => {
    const [toggleAccordion, setToggleAccordion] = useState<boolean>(false);
    const [dataSubmit, setDataSubmit] = useState<{
        size: string;
        quantity: number;
    }>({ size: "S", quantity: 1 });

    const handleControlQuantity = useCallback(
        (type: "0" | "1", maxQuantity?: number) => {
            switch (type) {
                case "0": {
                    if (dataSubmit.quantity <= 1) return;
                    setDataSubmit((prev) => ({
                        ...prev,
                        quantity: dataSubmit.quantity - 1,
                    }));
                    break;
                }
                case "1": {
                    if (dataSubmit.quantity === maxQuantity) return;
                    setDataSubmit((prev) => ({
                        ...prev,
                        quantity: dataSubmit.quantity + 1,
                    }));
                    break;
                }
            }
        },
        [dataSubmit.quantity]
    );

    return (
        <div className={cx("info", className)}>
            <p>RAMMORSMERCH</p>
            <h1>Summer Nostalgia Eco Sweatshirt White</h1>
            <span>€45,99 EUR</span>
            <div className={cx("tax")}>
                Tax included.
                <Link to="/policies/shipping-policy">Shipping</Link>
                calculated at checkout.
            </div>
            {data.size ? (
                <div className={cx("size")}>
                    <span>Size</span>
                    <ul>
                        {data.size.map((size) => (
                            <li
                                onClick={() =>
                                    setDataSubmit((prev) => ({
                                        ...prev,
                                        size: size,
                                    }))
                                }
                                className={cx(
                                    dataSubmit.size.toLowerCase() ===
                                        size.toLowerCase() && "active"
                                )}
                                key={size}
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <></>
            )}
            <div className={cx("quantity")}>
                <span>Quantity</span>
                <div className={cx("control")}>
                    <button onClick={() => handleControlQuantity("0")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            fill="none"
                            viewBox="0 0 10 2"
                            className={cx("icon-minus")}
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                    <div className={cx("value")}>{dataSubmit.quantity}</div>
                    <button onClick={() => handleControlQuantity("1", 4)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            fill="none"
                            viewBox="0 0 10 10"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <Button
                className={cx("btn-add-to-cart")}
                onClick={() =>
                    alert(`
            size: ${dataSubmit.size}
            quantity: ${dataSubmit.quantity}
            `)
                }
            >
                <span>Add to cart</span>
            </Button>
            <Button className={cx("btn-buy")}>
                <span>Buy with </span>
                <img
                    src={require("../../../../../static/img/shop-pay.jpg")}
                    alt=""
                />
            </Button>
            <div className={cx("option-payment")}>More payment options</div>
            {type !== "for-feature" ? (
                <>
                    <div className={cx("desc")}>
                        {data.description.map((des) => (
                            <p key={des.id}>{des.text}</p>
                        ))}
                    </div>
                    <div className={cx("desc", "note")}>
                        {data.description_notes?.map((des) => (
                            <p key={des.id}>{des.text}</p>
                        ))}
                    </div>
                    <div className={cx("accordion", toggleAccordion && "show")}>
                        <div
                            className={cx("summary")}
                            onClick={() => setToggleAccordion((prev) => !prev)}
                        >
                            <div className={cx("summary__title")}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    role="presentation"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 10a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z"
                                        fillRule="evenodd"
                                    ></path>
                                    <path
                                        d="M15.79 8.62L15 8l.79-.62a1 1 0 010 1.24zM1 8l-.79.62.02.02a5.56 5.56 0 00.15.18 15.16 15.16 0 002.05 1.96C3.77 11.84 5.73 13 8 13c2.26 0 4.23-1.16 5.57-2.22a15.17 15.17 0 002.2-2.14l.01-.02L15 8l.79-.62-.02-.02a6.17 6.17 0 00-.6-.67c-.37-.4-.92-.94-1.6-1.47C12.23 4.16 10.27 3 8 3 5.73 3 3.77 4.16 2.43 5.22a15.16 15.16 0 00-2.2 2.14l-.01.02L1 8zm0 0l-.79.62a1 1 0 010-1.24L1 8zm0 0s3.13-4 7-4 7 4 7 4-3.13 4-7 4-7-4-7-4z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <h2>More about this product.</h2>
                            </div>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                role="presentation"
                                viewBox="0 0 10 6"
                                className={cx("icon-accordion")}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div className={cx("content")}>
                            {data.more_about_this_product?.map((item) => (
                                <p
                                    key={item.id}
                                    style={{ paddingBottom: item.pb }}
                                >
                                    {item.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
            <div className={cx("actions")}>
                <div>
                    <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            d="M1.625 8.125V10.2917C1.625 10.579 1.73914 10.8545 1.9423 11.0577C2.14547 11.2609 2.42102 11.375 2.70833 11.375H10.2917C10.579 11.375 10.8545 11.2609 11.0577 11.0577C11.2609 10.8545 11.375 10.579 11.375 10.2917V8.125"
                            stroke="currentColor"
                        ></path>
                        <path
                            d="M6.14775 1.27137C6.34301 1.0761 6.65959 1.0761 6.85485 1.27137L9.56319 3.9797C9.75845 4.17496 9.75845 4.49154 9.56319 4.6868C9.36793 4.88207 9.05135 4.88207 8.85609 4.6868L6.5013 2.33203L4.14652 4.6868C3.95126 4.88207 3.63468 4.88207 3.43942 4.6868C3.24415 4.49154 3.24415 4.17496 3.43942 3.9797L6.14775 1.27137Z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M6.5 1.125C6.77614 1.125 7 1.34886 7 1.625V8.125C7 8.40114 6.77614 8.625 6.5 8.625C6.22386 8.625 6 8.40114 6 8.125V1.625C6 1.34886 6.22386 1.125 6.5 1.125Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span>Share</span>
                </div>
                {type === "for-feature" ? (
                    <div onClick={handleBtnShowMoreClick}>
                        <span>View full details</span>
                        <svg
                            viewBox="0 0 14 10"
                            fill="none"
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default React.memo(InfoItem);
