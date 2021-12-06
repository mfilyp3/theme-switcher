import { useEffect, useState, Dispatch, SetStateAction } from "react";

type IResponse<T> = [
    T,
    Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialValue: T): IResponse<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue);
        }
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}


export default usePersistedState;