import { useContext } from "react"
import { Context } from "../../layouts/Layout"
import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import Functions from "../../utils/Functions"

export default function RenderFeedbacks() {

    const { productRequests } = useContext(Context)
    const navigate = useNavigate()
    const { P3, H3, P1, H1, H4 } = tailwind()
    const { rightCase, commentsCount } = Functions()

    return (
        <div className="flex flex-col gap-[18px] mb-[50px]">
            {productRequests ? productRequests.map((e, i) => {
                return <div key={i} onClick={() => navigate(`/details/${e.id}`)} className="w-[100%] cursor-pointer bg-[#FFFFFF] group rounded-[10px] flex p-[28px_32px_28px_32px] justify-between">
                    <div className="flex items-start gap-[40px]">
                        <div className="p-[12px_8px_12px_8px] bg-[#F2F4FE] hover:bg-[#CFD7FF] flex flex-col gap-[8px] items-center rounded-[10px]">
                            <img src="/assets/suggestions/icon-.svg" alt="" />
                            <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                                {e.upvotes}
                            </h5>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className={`${H3} text-[#3A4374] group-hover:text-[#4661E6]`}>{e.title}</h3>
                            <h5 className={`${P1} text-[#647196] mb-[8px]`}>{e.description}</h5>
                            <button className={`${P3} cursor-pointer outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{e.category ? rightCase(e.category) : undefined}</button>
                        </div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <img src="/assets/shared/icon-comments.svg" alt="" />
                        <h5 className={`${P1} font-[700] text-[#3A4374]`}>{commentsCount(e)}</h5>
                    </div>
                </div>
            }) : <div className="w-[100%] h-[600px] bg-[#FFFFFF] rounded-[10px] gap-[24px] flex items-center justify-center flex-col">
                <img src="/assets/suggestions/illustration-empty.svg" alt="" />
                <h1 className={`${H1} text-center`}>There is no feedback yet.</h1>
                <p className={`${P1} text-[#647196] max-w-[410px] text-center`}>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                <button className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                    + Add Feedback
                </button>
            </div>}
        </div>)
}
