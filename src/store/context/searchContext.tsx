import { createContext, useState } from "react";

export const SearchContext = createContext({});
const SearchContextProvider = ({children})=>{
    const [selectedCategory , setSelectedCategory] = useState("All Categories");
    const[selectedPrice , setSelectedPrice] = useState("All Prices");
    const [searchCourse , setSearchCourse] = useState("");
    return(
        <SearchContext.Provider value={{selectedCategory, setSelectedCategory, selectedPrice , setSelectedPrice , searchCourse , setSearchCourse}}>
            {children}
        </SearchContext.Provider>
    )
};
export default SearchContextProvider;