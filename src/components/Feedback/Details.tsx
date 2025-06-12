import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { Context } from "../../layouts/Layout"

export default function Details() {

    const { H4, P2 } = tailwind()
    const { productRequest, setProductRequest, errors } = useContext(Context)
    
    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[2px]">
                <label htmlFor="detail" className={`${H4}`}>Feedback Detail</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Include any specific comments on what should be improved, added, etc.</h4>
            </div>
            <textarea defaultValue={productRequest.description} onChange={(e) => setProductRequest({ ...productRequest, description: e.target.value })} className={`w-[100%] h-[96px]! ${P2} outline-none rounded-[5px] p-[12px_24px_12px_24px] resize-none! ${errors && !productRequest.description ? "border-[#D73737]! border-[1px]" : undefined} focus:border-[1px] border-solid border-[#4661E6] bg-[#F7F8FD]`} name="" id="detail" />
            {errors && !productRequest.description ? <p className={`${H4} font-[400]! mt-[-10px]! text-[#D73737]`}>Can’t be empty</p> : undefined}
        </div>)
}
