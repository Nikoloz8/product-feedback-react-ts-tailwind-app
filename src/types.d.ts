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
}>

type TAsideBar = {
    choosenCategory: number
    setChoosenCategory: React.Dispatch<React.SetStateAction<number>>
}

type TFilterBar = {
    selectedDropdown: string
    setSelectedDropdown: React.Dispatch<React.SetStateAction<string>>
}