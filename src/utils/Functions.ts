import { useContext } from "react"
import { Context } from "../layouts/Layout"

export default function Functions(args: TFunctionsArgs = {}) {

    const { productRequest, detailsId } = args

    const { productRequests, setProductRequests } = useContext(Context)

    const categorys = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]

    const rightCase = (category: string) => {
        if (categorys) {
            for (let i = 0; i < categorys.length; i++) {
                if (category.toLocaleLowerCase() === categorys[i].toLowerCase()) {
                    return categorys[i]
                }
            }
        }
    }

    const commentsCount = (productRequest: TProductRequests | undefined) => {
        let commentsCount = 0
        let repliesSum = 0
        productRequest?.comments?.forEach((e) => {
            e.replies ? repliesSum += e.replies?.length : undefined
        })

        if (productRequest?.comments) {
            commentsCount = repliesSum + productRequest?.comments?.length
        }

        return commentsCount
    }

    const postComment = (commentText: string) => {
        const storedData = localStorage.getItem("21")
        if (!storedData || !productRequest) return

        const parsedStoredData: TStoredData = JSON.parse(storedData)

        const commentsArray = productRequest?.comments
        commentsArray?.push({
            id: productRequest?.comments?.length,
            content: commentText,
            user: parsedStoredData.currentUser
        })

        const filteredProductRequests = productRequests?.filter((e) => e.id !== detailsId)

        filteredProductRequests?.push(productRequest)


        const newObject = {
            currentUser: parsedStoredData.currentUser,
            productRequests: filteredProductRequests
        }

        const stringedNewObject = JSON.stringify(newObject)

        localStorage.setItem("21", stringedNewObject)
        setProductRequests(filteredProductRequests)

    }

    return { rightCase, categorys, commentsCount, postComment }
}
