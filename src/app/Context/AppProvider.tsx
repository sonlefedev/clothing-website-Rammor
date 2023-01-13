import React from "react";
import { TDataGalleryShowImage } from "../../component/layerOverLap/GalleryShowImage/GalleryShowImage";

type Props = {};

export const AppContext = React.createContext(
    {} as {
        isOpenSearchLayer: boolean;
        setIsOpenSearchLayer: React.Dispatch<React.SetStateAction<boolean>>;

        isOpenMenuMobile: boolean;
        setIsOpenMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;

        galleryShowImage: {
            display: boolean;
            data: TDataGalleryShowImage;
        };
        setGalleryShowImage: React.Dispatch<
            React.SetStateAction<{
                display: boolean;
                data: TDataGalleryShowImage;
            }>
        >;
    }
);

const AppProvider = (props: React.PropsWithChildren<Props>) => {
    const [isOpenSearchLayer, setIsOpenSearchLayer] =
        React.useState<boolean>(false);
    const [isOpenMenuMobile, setIsOpenMenuMobile] =
        React.useState<boolean>(false);
    const [galleryShowImage, setGalleryShowImage] = React.useState<{
        display: boolean;
        data: TDataGalleryShowImage;
    }>({ data: [], display: false });

    return (
        <AppContext.Provider
            value={{
                isOpenSearchLayer,
                setIsOpenSearchLayer,
                isOpenMenuMobile,
                setIsOpenMenuMobile,
                galleryShowImage,
                setGalleryShowImage,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;
