import { useState } from "react"
import NavButtons from "../components/Details/NavButtons"
import Feedback from "../components/Details/Feedback"
import RenderComments from "../components/Details/RenderComments"
import PostCommentBar from "../components/Details/PostCommentBar"


export default function Details() {


    const [replyText, setReplyText] = useState("")
    const [activeReply, setActiveReply] = useState<{ replyIndex?: number, commentId: number | undefined } | null>(null)


    return (
        <div className="w-[730px] flex flex-col gap-[24px] mt-[32px]">

            <NavButtons />

            <Feedback />

            <RenderComments setActiveReply={setActiveReply} replyText={replyText} activeReply={activeReply} setReplyText={setReplyText} />

            <PostCommentBar />
        </div >
    )
}
