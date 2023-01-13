import React from "react";

function useDebounce<T>(value: T, delay: number) {
    const [debounceValue, setDebounceValue] = React.useState<T>(value);

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
