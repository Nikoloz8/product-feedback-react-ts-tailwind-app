import { useContext, useState } from "react"
import tailwind from "../styles/tailwind"
import { useNavigate } from "react-router-dom"
import { Context } from "../layouts/Layout"
import Functions from "../utils/Functions"



export default function Home() {

    const { H2, P2, P3, H3, H4, liStyle, P1, H1 } = tailwind()

    const dropDownButtons = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"]

    const { categorys, rightCase, commentsCount } = Functions()

    const [choosenCategory, setChoosenCategory] = useState(0)
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedDropdown, setSelectedDropdown] = useState("Most Upvotes")

    const { productRequests } = useContext(Context)

    const plannedCount = productRequests?.filter((e) => e.status === "planned").length
    const inProgressCount = productRequests?.filter((e) => e.status === "in-progress").length
    const liveCount = productRequests?.filter((e) => e.status === "live").length
    const suggestionsCount = productRequests?.filter((e) => e.status === "suggestion").length

    const navigate = useNavigate()

    return (
        <div className="flex gap-[32px] mt-[50px]">
            <div className="flex flex-col w-[255px] gap-[24px]">
                <div className="bg-[url('/assets/suggestions/desktop/background-header.png')] bg-center bg-no-repeat bg-cover w-[100%] h-[137px] rounded-[10px] p-[24px] flex flex-col justify-end">
                    <h2 className={`${H2} text-[#FFFFFF]`}>Frontend Mentor</h2>
                    <h4 className={`${P2} font-[500] text-[#DFD5FC]`}>Feedback Board</h4>
                </div>
                <div className="bg-[#FFFFFF] rounded-[10px] w-[100%] flex-wrap flex gap-[8px] p-[24px]">
                    {categorys.map((e, i) => {
                        return <button onClick={() => setChoosenCategory(i)} className={`${P3} cursor-pointer outline-none ${i === choosenCategory ? "bg-[#4661E6] text-[#FFFFFF]" : "bg-[#F2F4FF] text-[#4661E6]"} rounded-[10px] p-[8px_16px_8px_16px]`} key={i}>{e}</button>
                    })}
                </div>
                <div className="w-[100%] p-[24px] rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[24px]">
                    <div className="flex w-[100%] justify-between items-center">
                        <h3 className={`${H3}`}>Roadmap</h3>
                        <a className={`underline ${P3} cursor-pointer text-[#4661E6] hover:text-[#8397F8]`}>View</a>
                    </div>
                    <ul className="flex flex-col gap-[8px]">
                        <li className={`${liStyle} marker:text-[#F49F85]`}>
                            <span className="flex w-[100%] justify-between">
                                <span>Planned</span>
                                <span className="font-[600] mr-[20px]!">{plannedCount}</span>
                            </span>
                        </li>
                        <li className={`${liStyle} marker:text-[#AD1FEA]`}>
                            <span className="flex w-[100%] justify-between">
                                <span>In-Progress</span>
                                <span className="font-[600] mr-[20px]!">{inProgressCount}</span>
                            </span>
                        </li>
                        <li className={`${liStyle} marker:text-[#62BCFA]`}>
                            <span className="flex w-[100%] justify-between">
                                <span>Live</span>
                                <span className="font-[600] mr-[20px]!">{liveCount}</span>
                            </span></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[825px]">
                <div className="w-[100%] p-[16px] bg-[#373F68] justify-between rounded-[10px] flex">
                    <div className="flex items-center gap-[24px]">
                        <h3 className={`${H3} flex gap-[20px] items-center text-[#FFFFFF]`}>
                            <img className="w-[24px]" src="/assets/suggestions/icon-suggestions.svg" alt="" />
                            {suggestionsCount ? suggestionsCount : 0} Suggestions
                        </h3>
                        <div className="relative">
                            <h4 onClick={() => setShowDropdown(!showDropdown)} className={`${H4} text-[#F2F4FE]! flex gap-[5px] cursor-pointer`}>
                                <span className="font-[400]">Sort by :</span>
                                <span className="flex items-center gap-[10px]">
                                    {selectedDropdown}
                                    <svg width="10" className={`transition-transform duration-[500ms] ease-in-out ${showDropdown ? "rotate-180" : undefined}`} height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#FFFFFF" stroke-width="2" fill="none" fillRule="evenodd" /></svg>
                                </span>
                            </h4>
                            <div className={`absolute w-[255px] rounded-[10px] top-[64px] shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)] bg-[#FFFFFF] ${!showDropdown ? "hidden" : undefined}`}>
                                {dropDownButtons.map((e, i) => {
                                    return <button key={e} onClick={() => {
                                        setSelectedDropdown(e)
                                        setShowDropdown(false)
                                    }} className={`w-[100%] items-center group cursor-pointer p-[12px_24px_12px_24px] flex justify-between ${i != 3 ? "border-b-[1px] border-solid border-[#E2E3EA]" : undefined}`} >
                                        <h5 className={`${P1} text-[#647196] group-hover:text-[#AD1FEA]!`}>{e}</h5>
                                        {e === selectedDropdown ? <img src="/assets/shared/icon-check.svg" alt="" /> : undefined}
                                    </button>
                                })}
                            </div>
                        </div>
                    </div>
                    <button className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                        + Add Feedback
                    </button>
                </div>
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
                </div>
            </div>
        </div >
    )
}
