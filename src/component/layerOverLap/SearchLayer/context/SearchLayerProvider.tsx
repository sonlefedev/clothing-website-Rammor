import React from "react";
import useDebounce from "../../../../config-hooks/useDebounce";

type Props = {};

export const SearchLayerContext = React.createContext(
    {} as {
        setValueSearch: React.Dispatch<React.SetStateAction<string>>;
        valueSearch: string;
        valueSearchDebounce: string;
    }
);

const SearchLayerProvider = (props: React.PropsWithChildren<Props>) => {
    const [valueSearch, setValueSearch] = React.useState<string>("");
    const valueSearchDebounce = useDebounce<string>(valueSearch, 1000);

    return (
        <SearchLayerContext.Provider
            value={{
                valueSearch,
                setValueSearch,
                valueSearchDebounce,
            }}
        >
            {props.children}
        </SearchLayerContext.Provider>
    );
};

export default SearchLayerProvider;
