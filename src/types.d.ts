type TProductRequests = {
    id?: number
    title?: string
    category?: string
    upvotes?: number
    status?: string
    description?: string
    comments?: {
        id?: number
        content?: string
        user?: {
            image?: string
            name?: string
            username?: string
        }
        replies?: {
            content?: string
            replyingTo?: string
            user?: {
                image?: string
                name?: string
                username?: string
            }
        }[]
    }[]

}

type TStoredData = {
    currentUser: {
        image: string,
        name: string,
        username: string
    },
    productRequests: TProductRequests[]
}

type TContext = {
    productRequests: TProductRequests[] | undefined
    setProductRequests: React.Dispatch<React.SetStateAction<TProductRequests[] | undefined>>
}

type TFunctionsArgs = Partial<{
    productRequest: TProductRequests
    detailsId: string
    activeReply: {
        replyIndex?: number;
        commentId: number | undefined
    } | null
    setReplyText: React.Dispatch<React.SetStateAction<string>>
    setActiveReply: React.Dispatch<React.SetStateAction<{
        replyIndex?: number;
        commentId: number | undefined;
    } | null>>
}>

type TAsideBar = {
    choosenCategory: number
    setChoosenCategory: React.Dispatch<React.SetStateAction<number>>
}

type TFilterBar = {
    selectedDropdown: string
    setSelectedDropdown: React.Dispatch<React.SetStateAction<string>>
}

type TRenderComments = {
    setActiveReply: React.Dispatch<React.SetStateAction<{
        replyIndex?: number;
        commentId: number | undefined;
    } | null>>
    setReplyText: React.Dispatch<React.SetStateAction<string>>
    activeReply: {
        replyIndex?: number;
        commentId: number | undefined;
    } | null
    replyText: string
}