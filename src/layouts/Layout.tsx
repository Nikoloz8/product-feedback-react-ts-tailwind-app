import { createContext, useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
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
    setErrors: () => { },
    showStatus: false,
    setShowStatus: () => { },
    showDropdown: false,
    setShowDropdown: () => { },
    selectedDropdown: "",
    setSelectedDropdown: () => { },
    choosenCategory: "",
    setChoosenCategory: () => { },
    isTablet: false,
    setIsTablet: () => { },
    showBurger: false,
    setShowBurger: () => { }
})



export default function Layout() {
    const [productRequests, setProductRequests] = useState<TProductRequests[] | undefined>()

    const { feedbackId } = useParams()

    const [productRequest, setProductRequest] = useState<TProductRequests>({
        id: 0,
        title: "",
        category: "feature",
        upvotes: 0,
        status: "suggestion",
        description: "",
        comments: []
    })



    const [showStatus, setShowStatus] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const [errors, setErrors] = useState(false)
    const [selectedDropdown, setSelectedDropdown] = useState("Most Upvotes")
    const [choosenCategory, setChoosenCategory] = useState("All")
    const [showBurger, setShowBurger] = useState(false)

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

    useEffect(() => {
        if (!productRequests || !feedbackId) return

        const feedback = productRequests.find((e) => e.id === Number(feedbackId))

        if (feedback) {
            setProductRequest({
                id: feedback.id,
                title: feedback.title,
                category: feedback.category,
                upvotes: feedback.upvotes,
                status: feedback.status,
                description: feedback.description,
                comments: feedback.comments || []
            })
        }
    }, [productRequests, feedbackId])

    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        setIsTablet(window.innerWidth < 700)
        const handleResize = () => setIsTablet(window.innerWidth < 700)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (showBurger) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        };
    }, [showBurger])

    return (
        <div className={`w-[100%] h-[100%] flex items-start justify-center min-h-[100vh] bg-[#F7F8FD]`}>
            <Context.Provider value={{ productRequests, setProductRequests, setProductRequest, productRequest, errors, setErrors, showDropdown, setShowDropdown, setShowStatus, showStatus, setSelectedDropdown, selectedDropdown, choosenCategory, setChoosenCategory, setIsTablet, isTablet, setShowBurger, showBurger }}>
                <Outlet />
            </Context.Provider>
        </div>
    )
}
