import React, {createContext, useContext} from "react";

const StateContext = createContext();

const StateProvider = ({children}) => {
    const [input, setInput] = React.useState("")
    const [searchCity, setSearchCity] = React.useState()
    const [result, setResult] = React.useState("")
    const [day, setDay] = React.useState();
    const [latitude, setLatitude] = React.useState(0)
    const [longitude, setLongitude] = React.useState(0)
    const [loading, setLoading] = React.useState(false)  

    return (
        <StateContext.Provider
            value = {{
                input, setInput,
                searchCity, setSearchCity,
                result, setResult,
                day, setDay,
                latitude, setLatitude,
                longitude, setLongitude,
                loading, setLoading,
            }}
        >
        {children}
        </StateContext.Provider>
    );
}

const useGlobalStateContext = () => {
    return useContext(StateContext);
}

export {StateContext, StateProvider, useGlobalStateContext}