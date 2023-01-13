import SearchLayer from "./SearchLayer";
import AppStore from "../../app/Context/AppStore";
import MenuMobile from "../base/Header/components/MenuMobile";
import GalleryShowImage from "./GalleryShowImage";

type Props = {};

const LayerOverLap = (props: Props) => {
    const { isOpenSearchLayer, isOpenMenuMobile, galleryShowImage } =
        AppStore();
    return (
        <>
            {isOpenSearchLayer && <SearchLayer />}
            {galleryShowImage.display && (
                <GalleryShowImage data={galleryShowImage.data} />
            )}
            <MenuMobile state={isOpenMenuMobile} />
        </>
    );
};

export default LayerOverLap;
