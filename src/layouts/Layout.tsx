import { createContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import data from "../../data.json"


export const Context = createContext<TContext>({
    productRequests: [],
    setProductRequests: () => []
})


export default function Layout() {

    useEffect(() => {
        const storedData = localStorage.getItem("21")

        if (storedData) {
            const parsedStoredData: TStoredData = JSON.parse(storedData)
            const productRequests = parsedStoredData?.productRequests
            setProductRequests(productRequests)
        } else {
            localStorage.setItem("21", JSON.stringify(data))
        }
    }, [])

    const [productRequests, setProductRequests] = useState<TProductRequests[] | undefined>()


    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center min-h-[100vh] bg-[#F7F8FD]">
            <Context.Provider value={{ productRequests, setProductRequests }}>
                <Outlet />
            </Context.Provider>
        </div>
    )
}
