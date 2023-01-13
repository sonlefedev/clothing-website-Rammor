import React, { useCallback, useEffect } from "react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import InfoItem from "./Component/InfoItem";
import AppStore from "../../../app/Context/AppStore";
import { useNavigate } from "react-router-dom";

type Props = {
    type?: "for-feature";
    data: IDataProduct;
    classNameWrapper?: string;
};

const cx = classNames.bind(style);
const DetailProduct = ({ type, data, classNameWrapper }: Props) => {
    const { thumb, ...infoText } = data;
    const thumbRef = React.useRef<HTMLImageElement>(null);
    const navigate = useNavigate();

    const [indexThumb, setIndexThumb] =
        React.useState<number>(0);

    const { setGalleryShowImage } = AppStore();

    // useLazyLoadImg(thumbRef, thumb[indexThumb]);

    const handleClickThumb = React.useCallback(() => {
        setGalleryShowImage((prev) => ({
            ...prev,
            data: thumb,
        }));
        setGalleryShowImage((prev) => ({ ...prev, display: true }));
    }, [thumb, setGalleryShowImage]);

    return (
        <div
            className={cx(
                "featured_item",
                "default-padding-left_right",
                "max-width",
                classNameWrapper
            )}
        >
            <div className={cx("item", "wrapper-thumbnail")}>
                <div className={cx("thumb")} onClick={handleClickThumb}>
                    <img ref={thumbRef} src={thumb[indexThumb]} alt="" />
                    <div className={cx("zoom-plus")}>
                        <HiOutlineMagnifyingGlassPlus />
                    </div>
                </div>
                {type !== "for-feature" ? (
                    <ul className={cx("more-thumb-option")}>
                        {data.thumb.map((src, i) => (
                            <li
                                key={src}
                                className={cx(
                                    src === thumb[indexThumb] && "active"
                                )}
                            >
                                <img
                                    src={src}
                                    onClick={() => setIndexThumb(i)}
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <></>
                )}
            </div>

            <InfoItem
                handleBtnShowMoreClick={() => navigate(`/product/${data.id}`)}
                type={type}
                data={infoText}
                className={cx("item")}
            />
        </div>
    );
};

export default DetailProduct;
