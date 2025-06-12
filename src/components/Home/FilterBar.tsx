import { useContext, useState } from "react"
import tailwind from "../../styles/tailwind"
import { Context } from "../../layouts/Layout"
import { useNavigate } from "react-router-dom"
import Functions from "../../utils/Functions"

export default function FilterBar() {

    const { H3, H4, P1 } = tailwind()
    const { setErrors, setProductRequest, selectedDropdown, setSelectedDropdown, isTablet } = useContext(Context)
    const [showDropdown, setShowDropdown] = useState(false)
    const dropDownButtons = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"]
    const { suggestionsCount } = Functions()
    const navigate = useNavigate()


    return (
        <div className={`${isTablet ? "rounded-[0]!" : ""} w-[100%] p-[16px] bg-[#373F68] justify-between rounded-[10px] flex`}>
            <div className="flex items-center gap-[24px]">
                <h3 className={`${H3} ${isTablet ? "hidden" : "flex"} gap-[20px] items-center text-[#FFFFFF]`}>
                    <img className="w-[24px]" src="/assets/suggestions/icon-suggestions.svg" alt="" />
                    {suggestionsCount ? suggestionsCount : 0} Suggestions
                </h3>
                <div className="relative">
                    <h4 onClick={() => setShowDropdown(!showDropdown)} className={`${H4} text-[#F2F4FE]! flex gap-[5px] cursor-pointer`}>
                        <span className="font-[400]">Sort by :</span>
                        <span className="flex items-center gap-[10px]">
                            {selectedDropdown}
                            <svg width="10" className={`transition-transform duration-[500ms] ease-in-out ${showDropdown ? "rotate-180" : undefined}`} height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
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
                setErrors(false)
            }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                + Add Feedback
            </button>
        </div>)
}
