import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import LoadingSkeleton from "./LoadingSkeleton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    data: IDataProduct;
};

const cx = classNames.bind(style);
const Card = (props: Props) => {
    const { data } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [insideViewPort, setInsideViewPort] = useState<boolean>(false);
    const LoadingSkeletonRef = React.useRef<HTMLDivElement>(null);
    const thumbRef = React.useRef<HTMLImageElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!LoadingSkeletonRef.current) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInsideViewPort(true);
                }
            });
        });
        observer.observe(LoadingSkeletonRef.current);
    }, [LoadingSkeletonRef]);

    useEffect(() => {
        if (insideViewPort) {
            setTimeout(() => setIsLoading(false), 500);
        }
    }, [insideViewPort]);

    const handleClickCard = React.useCallback(() => {
        navigate(`/product/${data.id}`);
    }, [data.id, navigate]);

    return (
        <>
            {isLoading ? (
                <LoadingSkeleton ref={LoadingSkeletonRef} />
            ) : (
                <div className={cx("card")} onClick={handleClickCard}>
                    <div className={cx("thumb")}>
                        <img ref={thumbRef} src={data.thumb[0]} alt="" />
                    </div>
                    <div className={cx("info")}>
                        <h3>{data.title}</h3>
                        <span>{data.price}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
