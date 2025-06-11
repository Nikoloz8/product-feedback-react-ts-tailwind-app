import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { Context } from "../../layouts/Layout"
import Functions from "../../utils/Functions"
import { useParams } from "react-router-dom"

export default function Feedback() {

    const { P3, H3, P1 } = tailwind()

    const { rightCase } = Functions()

    const { productRequests } = useContext(Context)

    const { detailsId } = useParams()

    const productRequest = productRequests?.find((e) => e.id === Number(detailsId))

    return (
        <div className="w-[100%] bg-[#FFFFFF] rounded-[10px] flex p-[28px_32px_28px_32px] justify-between">
            <div className="flex items-start gap-[40px]">
                <div className="p-[12px_8px_12px_8px] bg-[#F2F4FE] hover:bg-[#CFD7FF] flex flex-col gap-[8px] items-center rounded-[10px]">
                    <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                    <h5 className={`${P3} text-[#3A4374] font-[700]`}>
                        {productRequest?.upvotes}
                    </h5>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className={`${H3} text-[#3A4374]`}>{productRequest?.title}</h3>
                    <h5 className={`${P1} text-[#647196] mb-[8px]`}>{productRequest?.description}</h5>
                    <button className={`${P3} cursor-pointer outline-none bg-[#F2F4FF] text-[#4661E6] rounded-[10px] p-[8px_16px_8px_16px]`} >{productRequest?.category ? rightCase(productRequest?.category) : undefined}</button>
                </div>
            </div>
            <div className="flex items-center gap-[8px]">
                <img src="/assets/shared/icon-comments.svg" alt="" />
                <h5 className={`${P1} font-[700] text-[#3A4374]`}>{productRequests ? productRequests[0].comments?.length : ""}</h5>
            </div>
        </div>)
}
