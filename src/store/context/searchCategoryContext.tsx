import { createContext, useState } from "react";

export const SearchCategoryContext = createContext({});
const CategoryContextProvider = ({children})=>{
    const [selectedCategory , setSelectedCategory] = useState("All Categories");
    const[selectedPrice , setSelectedPrice] = useState("All Prices");
    return(
        <SearchCategoryContext.Provider value={{selectedCategory, setSelectedCategory, selectedPrice , setSelectedPrice}}>
            {children}
        </SearchCategoryContext.Provider>
    )
};
export default CategoryContextProvider;