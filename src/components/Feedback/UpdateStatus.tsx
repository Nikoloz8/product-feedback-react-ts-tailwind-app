import { useContext } from "react"
import { Context } from "../../layouts/Layout"
import tailwind from "../../styles/tailwind"
import Functions from "../../utils/Functions"

export default function UpdateStatus() {

    const categorys = ["Suggestion", "Planned", "In-Progress", "Live"]
    const { productRequest, setProductRequest, setShowStatus, showStatus, setShowDropdown } = useContext(Context)
    const { P2, P1, H4 } = tailwind()
    const { rightCase2 } = Functions()

    return (
        <div className="flex flex-col gap-[16px] relative">
            <div className="flex flex-col gap-[2px]">
                <label onClick={() => {
                    setShowStatus(!showStatus)
                    setShowDropdown(false)
                }} className={`${H4}`}>Update Status</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Change feedback state</h4>
            </div>
            <div onClick={() => {
                setShowStatus(!showStatus)
                setShowDropdown(false)
            }} className={`w-[100%] bg-[#F7F8FD] outline-none rounded-[5px] p-[12px_24px_12px_24px] cursor-pointer ${P2} flex justify-between items-center`}>
                {productRequest.status ? rightCase2(productRequest.status) : "312"}
                <img className={`transition-transform duration-[500ms] ease-in-out ${showStatus ? "rotate-180" : undefined}`} src="/assets/shared/icon-arrow-down.svg" alt="" />
            </div>
            <div className="absolute w-[100%] shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)] bottom-[-210px] bg-[#FFFFFF] rounded-[10px]">
                {categorys.map((e, i) => {
                    return <button onClick={() => {
                        setProductRequest({ ...productRequest, status: e.toLowerCase() })
                        setShowStatus(false)
                    }} key={i} className={`w-[100%] ${i + 1 != categorys.length ? "border-b-[1px] border-solid border-[#E2E3EA]" : undefined} ${!showStatus ? "hidden" : "block"} outline-none p-[12px_24px_12px_24px] hover:text-[#AD1FEA] cursor-pointer text-left ${P1} text-[#647196] flex items-center justify-between`}>
                        {e}
                        {e === productRequest.category ? <img src="/assets/shared/icon-check.svg" alt="" /> : undefined}
                    </button>
                })}
            </div>
        </div>
    )
}
