import { useContext } from "react"
import { Context } from "../layouts/Layout"
import { useParams } from "react-router-dom"

export default function Functions(args: TFunctionsArgs = {}) {

    const { activeReply, setReplyText, setActiveReply } = args

    const { setProductRequests, choosenCategory , selectedDropdown} = useContext(Context)


    const { detailsId } = useParams()
    const { productRequests } = useContext(Context)

    const productRequest = productRequests?.find((e) => e.id === Number(detailsId))

    const categorys = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
    const categorys2 = ["Suggestion", "Planned", "In-Progress", "Live"]

    const rightCase = (category: string) => {
        if (categorys) {
            for (let i = 0; i < categorys.length; i++) {
                if (category.toLocaleLowerCase() === categorys[i].toLowerCase()) {
                    return categorys[i]
                }
            }
        }
    }

    const rightCase2 = (category: string) => {
        if (categorys2) {
            for (let i = 0; i < categorys2.length; i++) {
                if (category.toLocaleLowerCase() === categorys2[i].toLowerCase()) {
                    return categorys2[i]
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

    const saveEditedFeedback = (productRequest: TProductRequests, feedbackId: number | undefined) => {
        const newProductRequests = productRequests?.filter((e) => e.id !== Number(feedbackId))
        newProductRequests?.push(productRequest)
        setProductRequests(newProductRequests)
        const storedData = localStorage.getItem("21")
        if (!storedData) return
        const parsedData: TStoredData = JSON.parse(storedData)
        const currentUser = parsedData.currentUser
        const parsedNew = { currentUser, productRequests: newProductRequests }
        const stringedNew = JSON.stringify(parsedNew)
        localStorage.setItem("21", stringedNew)
    }

    const deleteFeedback = (feedbackId: number) => {
        const newProductRequests = productRequests?.filter((e) => e.id !== Number(feedbackId))
        setProductRequests(newProductRequests)
        const storedData = localStorage.getItem("21")
        if (!storedData) return
        const parsedData: TStoredData = JSON.parse(storedData)
        const currentUser = parsedData.currentUser
        const parsedNew = { currentUser, productRequests: newProductRequests }
        const stringedNew = JSON.stringify(parsedNew)
        localStorage.setItem("21", stringedNew)
    }


    const planneds = productRequests?.filter((e) => e.status === "planned")
    const inProgresses = productRequests?.filter((e) => e.status === "in-progress")
    const lives = productRequests?.filter((e) => e.status === "live")


    const suggestionsCount = productRequests?.filter((e) => e.status === "suggestion").length

    const descedingUpvotes = () => {
        const descedingUpvote = (productRequests ?? []).sort((a, b) =>
            (b.upvotes ?? 0) - (a.upvotes ?? 0)
        )
        return descedingUpvote
    }

    const ascedingUpvotes = () => {
        const ascedingUpvote = (productRequests ?? []).sort((a, b) =>
            (a.upvotes ?? 0) - (b.upvotes ?? 0)
        )
        return ascedingUpvote
    }

    const descedingComments = () => {
        const descedingComment = (productRequests ?? []).sort((a, b) =>
            (commentsCount(b) ?? 0) - (commentsCount(a) ?? 0)
        )
        return descedingComment
    }

    const ascedingComments = () => {
        const ascedingComment = (productRequests ?? []).sort((a, b) =>
            (commentsCount(a) ?? 0) - (commentsCount(b) ?? 0)
        )
        return ascedingComment
    }

    const filteredRequests = () => {
        const category = choosenCategory === "All" ? null : choosenCategory.toLowerCase()

        let sortedRequests

        switch (selectedDropdown) {
            case "Most Upvotes":
                sortedRequests = descedingUpvotes()
                break;
            case "Least Upvotes":
                sortedRequests = ascedingUpvotes()
                break;
            case "Most Comments":
                sortedRequests = descedingComments()
                break;
            default:
                sortedRequests = ascedingComments()
        }

        return category
            ? sortedRequests.filter((e) => e.category === category)
            : sortedRequests
    }

    return { rightCase, rightCase2, categorys, saveEditedFeedback, commentsCount, postComment, postReply, addFeedback, deleteFeedback, planneds, inProgresses, lives, filteredRequests, suggestionsCount }
}
