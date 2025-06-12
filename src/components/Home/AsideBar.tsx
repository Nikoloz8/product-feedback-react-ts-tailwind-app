import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import Functions from "../../utils/Functions"
import { useNavigate } from "react-router-dom"
import { Context } from "../../layouts/Layout"

export default function AsideBar() {

    const { categorys, lives, inProgresses, planneds } = Functions()
    const { H2, P2, H3, P3, liStyle } = tailwind()
    const { setChoosenCategory, choosenCategory } = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className="flex flex-col max-xl:h-[210px]! w-[255px] max-xl:flex-row max-xl:w-[100%] gap-[24px]">
            <div className="bg-[url('/assets/suggestions/desktop/background-header.png')] bg-center bg-no-repeat bg-cover w-[100%] h-[137px] rounded-[10px] p-[24px] flex flex-col justify-end max-xl:h-[100%]!">
                <h2 className={`${H2} text-[#FFFFFF]`}>Frontend Mentor</h2>
                <h4 className={`${P2} font-[500] text-[#DFD5FC]`}>Feedback Board</h4>
            </div>
            <div className="bg-[#FFFFFF] items-start rounded-[10px] w-[100%] flex-wrap flex gap-[8px] p-[24px]">
                {categorys.map((e, i) => {
                    return <button onClick={() => setChoosenCategory(e)} className={`${P3} cursor-pointer outline-none ${e === choosenCategory ? "bg-[#4661E6] text-[#FFFFFF]" : "bg-[#F2F4FF] text-[#4661E6]"} hover:bg-[#CFD7FF] hover:text-[#4661E6]  rounded-[10px] max-lg:p-[6px_16px_6px_16px]! p-[8px_16px_8px_16px]`} key={i}>{e}</button>
                })}
            </div>
            <div className="w-[100%] p-[24px] rounded-[10px] bg-[#FFFFFF] flex flex-col gap-[24px]">
                <div className="flex w-[100%] justify-between items-center">
                    <h3 className={`${H3}`}>Roadmap</h3>
                    <a onClick={() => navigate("/roadmap")} className={`underline ${P3} cursor-pointer text-[#4661E6] hover:text-[#8397F8]`}>View</a>
                </div>
                <ul className="flex flex-col gap-[8px]">
                    <li className={`${liStyle} marker:text-[#F49F85]`}>
                        <span className="flex w-[100%] justify-between">
                            <span>Planned</span>
                            <span className="font-[600] mr-[20px]!">{planneds?.length}</span>
                        </span>
                    </li>
                    <li className={`${liStyle} marker:text-[#AD1FEA]`}>
                        <span className="flex w-[100%] justify-between">
                            <span>In-Progress</span>
                            <span className="font-[600] mr-[20px]!">{inProgresses?.length}</span>
                        </span>
                    </li>
                    <li className={`${liStyle} marker:text-[#62BCFA]`}>
                        <span className="flex w-[100%] justify-between">
                            <span>Live</span>
                            <span className="font-[600] mr-[20px]!">{lives?.length}</span>
                        </span></li>
                </ul>
            </div>
        </div>)
}
