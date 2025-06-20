import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import Functions from "../../utils"
import { useContext } from "react"
import { Context } from "../../layouts/Layout"

export default function RenderFeedbacks() {

    const navigate = useNavigate()
    const { P3, H3, P1, H1, H4 } = tailwind()
    const { rightCase, commentsCount, filteredRequests } = Functions()
    const { isTablet } = useContext(Context)

    return (
        <div className="flex flex-col gap-[18px] mb-[50px] max-md:p-[0_20px_0_20px]">

            {filteredRequests().length > 0 ? filteredRequests()?.map((e, i) => {
                return <div key={i} onClick={() => navigate(`/details/${e.id}`)} className={`w-[100%] cursor-pointer bg-[#FFFFFF] group rounded-[10px] flex p-[28px_32px_28px_32px] justify-between`}>
                    <div className="flex items-start gap-[40px]">
                        <div className={`p-[8px_0_8px_0] w-[40px]!  bg-[#F2F4FE] hover:bg-[#CFD7FF]  flex-col gap-[8px] items-center rounded-[10px] ${isTablet ? "hidden" : "flex"}`}>
                            <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                            <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                                {e.upvotes}
                            </h5>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className={`${H3} text-[#3A4374] group-hover:text-[#4661E6]`}>{e.title}</h3>
                            <h5 className={`${P1} text-[#647196] mb-[8px]`}>{e.description}</h5>
                            <div className="flex justify-between">
                                <button className={`${P3} cursor-pointer outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{e.category ? rightCase(e.category) : undefined}</button>
                            </div>
                            <div className={`${!isTablet ? "hidden" : "flex"} mt-[16px]! justify-between w-[100%]`}>
                                <div className={`p-[8px] w-[70px]! bg-[#F2F4FE] hover:bg-[#CFD7FF] flex gap-[8px] items-center justify-around rounded-[10px]`}>
                                    <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                                    <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                                        {e.upvotes}
                                    </h5>
                                </div>
                                <div className={`flex items-center gap-[8px]  ${!isTablet ? "hidden" : "flex"}`}>
                                    <img src="/assets/shared/icon-comments.svg" alt="" />
                                    <h5 className={`${P1} font-[700] text-[#3A4374]`}>{commentsCount(e)}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex items-center gap-[8px]  ${isTablet ? "hidden" : "flex"}`}>
                        <img src="/assets/shared/icon-comments.svg" alt="" />
                        <h5 className={`${P1} font-[700] text-[#3A4374]`}>{commentsCount(e)}</h5>
                    </div>
                </div>
            }) : <div className="w-[100%] h-[600px] p-[24px] bg-[#FFFFFF] rounded-[10px] gap-[24px] flex items-center justify-center flex-col">
                <img src="/assets/suggestions/illustration-empty.svg" alt="" />
                <h1 className={`${H1} text-center`}>There is no feedback yet.</h1>
                <p className={`${P1} text-[#647196] max-w-[410px] text-center`}>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                <button className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                    + Add Feedback
                </button>
            </div>}
        </div>)
}
