import { useParams } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import { useContext } from "react"
import { Context } from "../../layouts/Layout"
import Functions from "../../utils/Functions"

export default function RenderComments({ setActiveReply, setReplyText, activeReply, replyText }: TRenderComments) {

    const { H3, H4, P3, P2 } = tailwind()
    const { detailsId } = useParams()
    const { productRequests } = useContext(Context)
    const productRequest = productRequests?.find((e) => e.id === Number(detailsId))
    const { commentsCount, postReply } = Functions({ activeReply, setReplyText, setActiveReply })

    return (
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
                            }} className={`${P3} cursor-pointer hover:underline text-[#4661E6]`}>Reply</a>
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
                                                } className={`${P3} hover:underline cursor-pointer text-[#4661E6]`}>Reply</a>
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
        </div>)
}
