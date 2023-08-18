import { useMemo } from "react";

const UseFeaturedHouses = (allHouses) => {
    const featuredhouses = useMemo(() => {
        console.log("useMemo called");
        if (allHouses.length) {
            const randomIndex = Math.floor(Math.random() * allHouses.length);
            return allHouses[randomIndex];
        }
    }, [allHouses])
    return featuredhouses;
}

export default UseFeaturedHouses;