import { createContext, useState } from "react";

export const SearchCategoryContext = createContext({});
const CategoryContextProvider = ({children})=>{
    const [selectedCategory , setSelectedCategory] = useState("All Categories");
    return(
        <SearchCategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>{children}</SearchCategoryContext.Provider>
    )
};
export default CategoryContextProvider;