import { useContext, useState } from "react"
import tailwind from "../../styles/tailwind"
import { Context } from "../../layouts/Layout"

export default function Category() {

    const { H4, P2, P1 } = tailwind()
    const { productRequest, setProductRequest } = useContext(Context)
    const [showDropdown, setShowDropdown] = useState(false)
    const categorys = ["Feature", "UI", "UX", "Enhancement", "Bug"]

    return (
        <div className="flex flex-col gap-[16px] relative">
            <div className="flex flex-col gap-[2px]">
                <label htmlFor="title" className={`${H4}`}>Category</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Choose a category for your feedback</h4>
            </div>
            <div onClick={() => setShowDropdown(!showDropdown)} className={`w-[100%] bg-[#F7F8FD] outline-none rounded-[5px] p-[12px_24px_12px_24px] cursor-pointer ${P2} flex justify-between items-center`}>
                {productRequest.category}
                <img src="/assets/shared/icon-arrow-down.svg" alt="" />
            </div>
            <div className="absolute w-[100%] shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)] bottom-[-260px] bg-[#FFFFFF] rounded-[10px]">
                {categorys.map((e, i) => {
                    return <button onClick={() => {
                        setProductRequest({ ...productRequest, category: e })
                        setShowDropdown(false)
                    }} key={i} className={`w-[100%] ${i + 1 != categorys.length ? "border-b-[1px] border-solid border-[#E2E3EA]" : undefined} ${!showDropdown ? "hidden" : "block"} outline-none p-[12px_24px_12px_24px] hover:text-[#AD1FEA] cursor-pointer text-left ${P1} text-[#647196] flex items-center justify-between`}>
                        {e}
                        {e === productRequest.category ? <img src="/assets/shared/icon-check.svg" alt="" /> : undefined}
                    </button>
                })}
            </div>
        </div>)
}
