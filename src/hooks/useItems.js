import { useQuery } from "react-query";

const useItems = () => {
    const { isLoading, data, refetch } = useQuery(['allItems'], () =>
        fetch("http://localhost:5000/products")
            .then(res => res.json())
    )

    return { isLoading, data, refetch };
}

export default useItems;