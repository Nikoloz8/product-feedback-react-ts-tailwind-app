import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { Context } from "../../layouts/Layout"

export default function Title() {

    const { H4, P2 } = tailwind()
    const { productRequest, setProductRequest, errors } = useContext(Context)


    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[2px]">
                <label htmlFor="title" className={`${H4}`}>Feedback Title</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Add a short, descriptive headline</h4>
            </div>
            <input type="text" onChange={(e) => setProductRequest({ ...productRequest, title: e.target.value })} id="title" className={`w-[100%] bg-[#F7F8FD] outline-none border-solid border-[#4661E6] focus:border-[1px] ${errors && !productRequest.title ? "border-[#D73737]! border-[1px]" : undefined} rounded-[5px] p-[12px_24px_12px_24px] ${P2} `} />
            {errors && !productRequest.title ? <p className={`${H4} mt-[-10px]!  font-[400]! text-[#D73737]`}>Can’t be empty</p> : undefined}
        </div>)
}
