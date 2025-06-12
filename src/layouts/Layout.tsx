import { createContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import data from "../../data.json"


export const Context = createContext<TContext>({
    productRequests: [],
    setProductRequests: () => [],
    productRequest: {
        id: 0,
        title: "",
        category: "",
        upvotes: 0,
        status: "",
        description: "",
        comments: []
    },
    setProductRequest: () => { },
    errors: false,
    setErrors: () => { }
})



export default function Layout() {
    const [productRequest, setProductRequest] = useState<TProductRequests>({
        id: Math.floor(Math.random() * 100000),
        title: "",
        category: "Feature",
        upvotes: 0,
        status: "Suggestion",
        description: "",
        comments: []
    })

    const [errors, setErrors] = useState(false)

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
            <Context.Provider value={{ productRequests, setProductRequests, setProductRequest, productRequest, errors, setErrors }}>
                <Outlet />
            </Context.Provider>
        </div>
    )
}
