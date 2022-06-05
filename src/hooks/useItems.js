import { useQuery } from "react-query";

const useItems = () => {
    const { isLoading, data, refetch } = useQuery(['allItems'], () =>
        fetch("https://polar-cove-29814.herokuapp.com/products")
            .then(res => res.json())
    )

    return { isLoading, data, refetch };
}

export default useItems;