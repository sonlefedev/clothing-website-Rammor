import React from "react";

const useLazyLoadImg = (
    refImg: React.RefObject<HTMLImageElement>,
    src: string
) => {
    React.useEffect(() => {
        if (!refImg.current) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const imgTag = refImg.current as HTMLImageElement;
                    imgTag.src = src;
                }
            });
        });
        observer.observe(refImg.current);
    }, [refImg, src]);
};

export default useLazyLoadImg;
