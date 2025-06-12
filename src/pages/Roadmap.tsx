import { useNavigate } from "react-router-dom"
import tailwind from "../styles/tailwind"
import { useContext } from "react"
import { Context } from "../layouts/Layout"
import Functions from "../utils/Functions"

export default function Roadmap() {

    const navigate = useNavigate()
    const { H4, H1, H3, P1, liStyle, P3 } = tailwind()
    const { setProductRequest } = useContext(Context)
    const { lives, planneds, inProgresses, rightCase, commentsCount } = Functions()

    return (
        <div className="w-[1110px] m-[50px_0_50px_0] flex flex-col gap-[32px]">
            <div className='w-[100%] p-[24px_40px_24px_40px] bg-[#373F68] rounded-[10px] flex justify-between'>
                <div className="flex flex-col gap-[4px]">
                    <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate("/")}>
                        <img src="/assets/shared/icon-arrow-left.svg" alt="" />
                        <h4 className={`${H4} text-[#FFFFFF] `}>Go Back</h4>
                    </a>
                    <h1 className={`${H1} text-[#FFFFFF]`}>Roadmap</h1>
                </div>
                <button onClick={() => {
                    navigate("/newfeedback")
                    setProductRequest({
                        id: 0,
                        title: "",
                        category: "feature",
                        upvotes: 0,
                        status: "suggestion",
                        description: "",
                        comments: []
                    })
                }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                    + Add Feedback
                </button>
            </div>
            <div className="flex justify-between w-[100%]">
                <div className="flex flex-col gap-[24px] w-[350px]">
                    <div>
                        <h3 className={`${H3}`}>Planned ({planneds?.length})</h3>
                        <h5 className={`${P1}`}>Ideas prioritized for research</h5>
                    </div>
                    {planneds?.map((e) => {
                        return <div className="w-[100%] p-[32px] rounded-[5px] bg-[#FFFFFF] border-t-[6px] border-solid border-[#F49F85] ">
                            <li className={`${liStyle} ml-[0]! marker:text-[#F49F85]`}>
                                <span>Planned</span>
                            </li>
                            <h3 className={`${H3} `}>{e.title}</h3>
                            <p className={`${P1} mt-[4px] text-[#647196]`}>{e.description}</p>
                            <div className="flex flex-col gap-[24px] items-start mt-[24px]">
                                <button className={`${P3} outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{e.category ? rightCase(e.category) : undefined}</button>
                                <div className="flex justify-between w-[100%]">
                                    <div className="p-[8px_16px_8px_16px] w-[70px]! bg-[#F2F4FE] hover:bg-[#CFD7FF] flex gap-[8px] items-center rounded-[10px]">
                                        <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                                        <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                                            {e.upvotes}
                                        </h5>
                                    </div>
                                    <div className="flex items-center gap-[8px]">
                                        <img src="/assets/shared/icon-comments.svg" alt="" />
                                        <h5 className={`${P1} font-[700] text-[#3A4374]`}>{commentsCount(e)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="flex flex-col gap-[24px] w-[350px]">
                    <div>
                        <h3 className={`${H3}`}>In-Progress ({inProgresses?.length})</h3>
                        <h5 className={`${P1}`}>Currently being developed</h5>
                    </div>
                    {inProgresses?.map((e) => {
                        return <div className="w-[100%] p-[32px] rounded-[5px] bg-[#FFFFFF] border-t-[6px] border-solid border-[#AD1FEA] ">
                            <li className={`${liStyle} ml-[0]! marker:text-[#AD1FEA]`}>
                                <span>Planned</span>
                            </li>
                            <h3 className={`${H3} `}>{e.title}</h3>
                            <p className={`${P1} mt-[4px] text-[#647196]`}>{e.description}</p>
                            <div className="flex flex-col gap-[24px] items-start mt-[24px]">
                                <button className={`${P3} outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{e.category ? rightCase(e.category) : undefined}</button>
                                <div className="flex justify-between w-[100%]">
                                    <div className="p-[8px_16px_8px_16px] w-[70px]! bg-[#F2F4FE] hover:bg-[#CFD7FF] flex gap-[8px] items-center rounded-[10px]">
                                        <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                                        <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                                            {e.upvotes}
                                        </h5>
                                    </div>
                                    <div className="flex items-center gap-[8px]">
                                        <img src="/assets/shared/icon-comments.svg" alt="" />
                                        <h5 className={`${P1} font-[700] text-[#3A4374]`}>{commentsCount(e)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="flex flex-col gap-[24px] w-[350px]">
                    <div>
                        <h3 className={`${H3}`}>Live ({planneds?.length})</h3>
                        <h5 className={`${P1}`}>Released features</h5>
                    </div>
                    {lives?.map((e) => {
                        return <div className="w-[100%] p-[32px] rounded-[5px] bg-[#FFFFFF] border-t-[6px] border-solid border-[#62BCFA] ">
                            <li className={`${liStyle} ml-[0]! marker:text-[#62BCFA]`}>
                                <span>Planned</span>
                            </li>
                            <h3 className={`${H3} `}>{e.title}</h3>
                            <p className={`${P1} mt-[4px] text-[#647196]`}>{e.description}</p>
                            <div className="flex flex-col gap-[24px] items-start mt-[24px]">
                                <button className={`${P3} outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{e.category ? rightCase(e.category) : undefined}</button>
                                <div className="flex justify-between w-[100%]">
                                    <div className="p-[8px_16px_8px_16px] w-[70px]! bg-[#F2F4FE] hover:bg-[#CFD7FF] flex gap-[8px] items-center rounded-[10px]">
                                        <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                                        <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                                            {e.upvotes}
                                        </h5>
                                    </div>
                                    <div className="flex items-center gap-[8px]">
                                        <img src="/assets/shared/icon-comments.svg" alt="" />
                                        <h5 className={`${P1} font-[700] text-[#3A4374]`}>{commentsCount(e)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
