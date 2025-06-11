import { useState } from "react"
import tailwind from "../../styles/tailwind"
import Functions from "../../utils/Functions"

export default function PostCommentBar() {

    const { H3, H4, P2 } = tailwind()
    const [commentText, setCommentText] = useState("")
    const { postComment } = Functions()

    return (
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
        </div>)
}
