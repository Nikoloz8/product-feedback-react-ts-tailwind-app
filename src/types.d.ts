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
    productRequest: TProductRequests
    setProductRequest: React.Dispatch<React.SetStateAction<TProductRequests>>
    errors: boolean,
    setErrors: React.Dispatch<React.SetStateAction<boolean>>
    showStatus: boolean
    setShowStatus: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: boolean
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
    selectedDropdown: string,
    setSelectedDropdown: React.Dispatch<React.SetStateAction<string>>
    choosenCategory: string
    setChoosenCategory: React.Dispatch<React.SetStateAction<string>>
    isTablet: boolean
    setIsTablet: React.Dispatch<React.SetStateAction<boolean>>
    showBurger: boolean
    setShowBurger: React.Dispatch<React.SetStateAction<boolean>>
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