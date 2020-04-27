import { createContext } from "react";

const searchContext = createContext({
    search: "",
    type: "",
    results: [],
    onClick: () => undefined,
    onChange: () => undefined
});

export default searchContext;