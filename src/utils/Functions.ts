import { useContext } from "react"
import { Context } from "../layouts/Layout"
import { useParams } from "react-router-dom"

export default function Functions(args: TFunctionsArgs = {}) {

    const { activeReply, setReplyText, setActiveReply } = args

    const { setProductRequests } = useContext(Context)


    const { detailsId } = useParams()
    const { productRequests } = useContext(Context)

    const productRequest = productRequests?.find((e) => e.id === Number(detailsId))

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

        if (commentsArray === undefined) {
            productRequest.comments = []
        }

        commentsArray?.push({
            id: Math.floor(Math.random() * 1000),
            content: commentText,
            user: parsedStoredData.currentUser
        })


        const filteredProductRequests = productRequests?.filter((e) => e.id !== Number(detailsId))
        filteredProductRequests?.push(productRequest)


        const newObject = {
            currentUser: parsedStoredData.currentUser,
            productRequests: filteredProductRequests
        }

        const stringedNewObject = JSON.stringify(newObject)

        localStorage.setItem("21", stringedNewObject)
        setProductRequests(filteredProductRequests)

    }

    const postReply = (commentId: number | undefined, replyText: string) => {
        if (!replyText.trim()) return
        const storedData = localStorage.getItem("21")
        if (!storedData || !productRequest) return

        const parsedStoredData: TStoredData = JSON.parse(storedData)
        const comment = productRequest.comments?.find(c => c.id === commentId)

        const replyingTo = typeof activeReply?.replyIndex === "number" && comment?.replies?.[activeReply.replyIndex]?.user?.username ? comment.replies[activeReply.replyIndex].user?.username : comment?.user?.username

        if (!comment) return
        const newReply = {
            content: replyText,
            replyingTo,
            user: parsedStoredData.currentUser
        }

        console.log(commentId)
        console.log(comment)

        comment.replies = comment.replies || []
        comment.replies.push(newReply)

        const filteredProductRequests = productRequests?.filter((e) => e.id !== detailsId)
        const newObject = {
            currentUser: parsedStoredData.currentUser,
            productRequests: filteredProductRequests
        }
        const stringedNewObject = JSON.stringify(newObject)
        localStorage.setItem("21", stringedNewObject)
        setProductRequests(filteredProductRequests)
        if (setReplyText) setReplyText("")
        if (setActiveReply) setActiveReply(null)
    }

    const addFeedback = (productRequest: TProductRequests) => {
        const storedData = localStorage.getItem("21")

        if (!storedData) return

        const parsedData: TStoredData = JSON.parse(storedData)
        const requests = parsedData.productRequests
        requests.push(productRequest)

        setProductRequests(requests)

        const newObject = {
            currentUser: parsedData.currentUser,
            productRequests: requests
        }

        const stringedObject = JSON.stringify(newObject)
        localStorage.setItem("21", stringedObject)
    }

    return { rightCase, categorys, commentsCount, postComment, postReply, addFeedback }
}
