import tailwind from "../../styles/tailwind"
import Functions from "../../utils"

export default function RenderLive() {

    const { H3, P1, liStyle, P3 } = tailwind()
    const { lives, rightCase, rightCase2, commentsCount } = Functions()

    return (
        <div className="flex flex-col gap-[24px] w-[350px]">
            <div>
                <h3 className={`${H3}`}>Live ({lives?.length})</h3>
                <h5 className={`${P1} text-[#647196]`}>Released features</h5>
            </div>
            {lives?.map((e) => {
                return <div className="w-[100%] p-[32px] rounded-[5px] bg-[#FFFFFF] border-t-[6px] border-solid border-[#62BCFA] ">
                    <li className={`${liStyle} ml-[0]! marker:text-[#62BCFA]`}>
                        <span>{e.status ? rightCase2(e.status) : undefined}</span>
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
        </div>)
}
