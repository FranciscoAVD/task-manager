import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 200):[T, boolean]{
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        const timeout = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        setLoading(false);
        return () => clearTimeout(timeout);
    },[value])

    return [debouncedValue, loading]
}