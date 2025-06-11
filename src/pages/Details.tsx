import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../layouts/Layout"
import { useContext, useState } from "react"
import tailwind from "../styles/tailwind"
import Functions from "../utils/Functions"


export default function Details() {

    const { detailsId } = useParams()
    const { productRequests, setProductRequests } = useContext(Context)
    const { P3, H3, P1, H4, P2 } = tailwind()
    const navigate = useNavigate()

    const productRequest = productRequests?.find((e) => e.id === Number(detailsId))

    const { rightCase, commentsCount, postComment } = Functions({ productRequest })
    const [commentText, setCommentText] = useState("")
    const [replyText, setReplyText] = useState("")
    const [activeReply, setActiveReply] = useState<{ replyIndex?: number, commentId: number | undefined } | null>(null)

    const postReply = (commentId: number | undefined, replyText: string) => {
        if(!replyText.trim()) return
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
        setReplyText("")
        setActiveReply(null)
    }

    return (
        <div className="w-[730px] flex flex-col gap-[24px] mt-[32px]">
            <div className="flex justify-between w-[100%]">
                <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate("/")}>
                    <img src="/assets/shared/icon-arrow-left.svg" alt="" />
                    <h4 className={`${H4} text-[#647196] `}>Go Back</h4>
                </a>
                <button className="p-[12px_24px_12px_24px] cursor-pointer rounded-[10px] bg-[#4661E6] ">
                    <h4 className={`${H4} text-[#F2F4FE]`}>Edit Feedback</h4>
                </button>
            </div>
            <div className="w-[100%] bg-[#FFFFFF] rounded-[10px] flex p-[28px_32px_28px_32px] justify-between">
                <div className="flex items-start gap-[40px]">
                    <div className="p-[12px_8px_12px_8px] bg-[#F2F4FE] hover:bg-[#CFD7FF] flex flex-col gap-[8px] items-center rounded-[10px]">
                        <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                        <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                            {productRequest?.upvotes}
                        </h5>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className={`${H3} text-[#3A4374]`}>{productRequest?.title}</h3>
                        <h5 className={`${P1} text-[#647196] mb-[8px]`}>{productRequest?.description}</h5>
                        <button className={`${P3} cursor-pointer outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{productRequest?.category ? rightCase(productRequest?.category) : undefined}</button>
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <img src="/assets/shared/icon-comments.svg" alt="" />
                    <h5 className={`${P1} font-[700] text-[#3A4374]`}>{productRequests ? productRequests[0].comments?.length : ""}</h5>
                </div>
            </div>
            <div className="w-[100%] rounded-[10px] p-[24px] bg-[#FFFFFF]">
                <h3 className={`${H3} text-[#3A4374]`}>Comments {commentsCount(productRequest)}</h3>
                {productRequest?.comments?.map((e, i) => {
                    return <div key={i} className={`flex w-[100%] items-start p-[32px_0] ${i + 1 != productRequest.comments?.length ? "border-b-[1px]" : undefined} border-solid border-[#E2E3EC]`}>
                        <img src={e.user?.image} className="w-[40px] rounded-full" alt="" />
                        <div className="w-[100%] flex flex-col gap-[16px]">
                            <div className="flex ml-[32px] pr-[32px] justify-between w-[100%]">
                                <div>
                                    <h4 className={`${H4} text-[#3A4374]`}>{e.user?.name}</h4>
                                    <h4 className={`${H4} font-[400]! text-[#647196]`}>@{e.user?.username}</h4>
                                </div>
                                <a onClick={() => {
                                    setActiveReply({ commentId: e.id })
                                    setReplyText("")
                                }} className={`${P3} cursor-pointer text-[#4661E6]`}>Reply</a>
                            </div>
                            <div>
                                <p className={`${P2} ${e.replies ? "border-l-[1px] pl-[32px] border-solid border-[#F0F1F5]" : "ml-[32px]"} text-[#647196]`}>{e.content}</p>
                                {e.id === activeReply?.commentId && !activeReply?.hasOwnProperty("replyIndex") ? <div className="flex items-start ml-[32px] pr-[32px] mt-[32px] w-[100%] justify-between">
                                    <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} className={`w-[466px] h-[80px]! ${P2} outline-none rounded-[5px] p-[16px_24px_16px_24px] resize-none! focus:border-[1px] border-solid border-[#4661E6] bg-[#F7F8FD]`} placeholder="Type your Reply here" maxLength={250} name="" id="" />
                                    <button onClick={() => postReply(e.id, replyText)} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                                        Post Reply
                                    </button>
                                </div> : undefined}
                                <div className={`flex flex-col gap-[40px] pl-[24px] border-[#F0F1F5] border-l-[1px] border-solid ${e.replies ? "pt-[40px]" : undefined} `}>
                                    {e.replies?.map((r, i) => {
                                        return <div key={i} className={`flex w-[100%] items-start`}>
                                            <img src={r.user?.image} className="w-[40px] rounded-full" alt="" />
                                            <div className="w-[100%] flex flex-col gap-[16px]">
                                                <div className="flex ml-[32px] pr-[32px] justify-between w-[100%]">
                                                    <div>
                                                        <h4 className={`${H4} text-[#3A4374]`}>{r.user?.name}</h4>
                                                        <h4 className={`${H4} font-[400]! text-[#647196]`}>@{r.user?.username}</h4>
                                                    </div>
                                                    <a onClick={() => {
                                                        setActiveReply({ commentId: e.id, replyIndex: i })
                                                        setReplyText("")
                                                    }
                                                    } className={`${P3} cursor-pointer text-[#4661E6]`}>Reply</a>
                                                </div>
                                                <div>
                                                    <p className={`${P2} text-[#647196]`}><span className={`${P2} text-[#AD1FEA] font-[700]`}>@{r.replyingTo} </span>{r.content}</p>
                                                    {e.id === activeReply?.commentId && activeReply?.replyIndex === i ? <div className="flex items-start mt-[32px] w-[100%] justify-between">
                                                        <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} className={`w-[416px] h-[80px]! ${P2} outline-none rounded-[5px] p-[16px_24px_16px_24px] resize-none! focus:border-[1px] border-solid border-[#4661E6] bg-[#F7F8FD]`} placeholder="Type your Reply here" maxLength={250} name="" id="" />
                                                        <button onClick={() => postReply(e.id, replyText)} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                                                            Post Reply
                                                        </button>
                                                    </div> : undefined}
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="w-[100%] p-[24px] bg-[#FFFFFF] rounded-[10px] mb-[32px]">
                <h3 className={`${H3} text-[#3A4374]`}>Add Comment</h3>
                <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} className={`w-[100%] h-[80px]! mt-[24px] ${P2} outline-none rounded-[5px] p-[16px_24px_16px_24px] resize-none! focus:border-[1px] border-solid border-[#4661E6] bg-[#F7F8FD]`} placeholder="Type your comment here" maxLength={250} name="" id="" />
                <div className="w-[100%] flex items-center justify-between mt-[16px]">
                    <h5 className={`${P2} text-[#647196]`}>{250 - commentText.length} characters left</h5>
                    <button onClick={() => {
                        if (commentText.length > 1) {
                            postComment(commentText)
                        }
                        setCommentText("")
                    }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                        Post Comment
                    </button>
                </div>
            </div>
        </div >
    )
}
