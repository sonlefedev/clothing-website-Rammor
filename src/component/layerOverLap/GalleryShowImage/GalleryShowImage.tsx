import classNames from "classnames/bind";
import style from "./style.module.scss";
import AppStore from "../../../app/Context/AppStore";
export type TDataGalleryShowImage = string[];

type Props = {
    data: TDataGalleryShowImage;
};

const cx = classNames.bind(style);

const GalleryShowImage = (props: Props) => {
    const { galleryShowImage, setGalleryShowImage } = AppStore();
    return (
        <div
            className={cx("wrapper-gallery")}
            onClick={() =>
                setGalleryShowImage((prev) => ({ ...prev, display: false, data: [] }))
            }
        >
            {galleryShowImage.data.map((src) => (
                <div key={src} className={cx("item-gallery")}>
                    <img src={src} alt="" />
                </div>
            ))}
        </div>
    );
};

export default GalleryShowImage;
