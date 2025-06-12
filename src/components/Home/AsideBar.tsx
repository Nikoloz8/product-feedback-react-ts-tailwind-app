import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import Functions from "../../utils/Functions"
import { useNavigate } from "react-router-dom"
import { Context } from "../../layouts/Layout"

export default function AsideBar() {

    const { categorys, lives, inProgresses, planneds } = Functions()
    const { H2, P2, H3, P3, liStyle } = tailwind()
    const { setChoosenCategory, choosenCategory, isTablet, showBurger, setShowBurger } = useContext(Context)
    const navigate = useNavigate()

    return (
        <div className={`flex flex-col  max-xl:h-[210px] w-[255px] max-xl:flex-row max-xl:w-[100%] gap-[24px] ${isTablet ? "h-[100%]!" : ""}`}>
            <div className={`w-[100%] h-[100%] absolute ${showBurger ? "block" : "hidden"} bg-[rgba(0,0,0,0.5)] z-10 top-[72px] left-0`}></div>
            <div className={`h-[100%] w-[270px]! fixed z-20 flex-col gap-[24px] flex top-[72px] bg-[#F7F8FD] p-[24px] right-[-270px] transition-all duration-1000 ${showBurger ? "right-[0]!" : undefined}`}>
                <div className={`bg-[#FFFFFF] items-start rounded-[10px] w-[100%] flex-wrap gap-[8px] p-[24px] flex`}>
                    {categorys.map((e, i) => {
                        return <button onClick={() => setChoosenCategory(e)} className={`${P3} cursor-pointer outline-none ${e === choosenCategory ? "bg-[#4661E6] text-[#FFFFFF]" : "bg-[#F2F4FF] text-[#4661E6]"} hover:bg-[#CFD7FF] hover:text-[#4661E6]  rounded-[10px] max-lg:p-[6px_16px_6px_16px]! p-[8px_16px_8px_16px]`} key={i}>{e}</button>
                    })}
                </div>
                <div className={`w-[100%] p-[24px] rounded-[10px] bg-[#FFFFFF] flex-col gap-[24px]`}>
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
            </div>
            <div className={`bg-[url('/assets/suggestions/desktop/background-header.png')] bg-center bg-no-repeat bg-cover max-sm:bg-[url('/assets/suggestions/mobile/background-header.png')] w-[100%] h-[137px] rounded-[10px] p-[24px] flex items-end max-xl:h-[100%] ${isTablet ? "bg-[url('/assets/suggestions/tablet/background-header.png') justify-between rounded-[0]! h-[72px]! p-[0_24px_12px_24px]!" : ""}`}>
                <div>
                    <h2 className={`${H2} text-[#FFFFFF]`}>Frontend Mentor</h2>
                    <h4 className={`${P2} font-[500] text-[#DFD5FC]`}>Feedback Board</h4>
                </div>
                {isTablet ? <img onClick={() => {
                    setShowBurger(!showBurger)
                    const body = document.querySelector("body")
                    if (showBurger) {
                        body?.style.overflowY
                    } else {
                        document.body.style.overflow = ""
                    }
                }} className="mb-[16px] cursor-pointer" src={`${!showBurger ? "/assets/shared/mobile/icon-hamburger.svg" : "/assets/shared/mobile/icon-close.svg"}`} alt="" /> : undefined}
            </div>
            <div className={`bg-[#FFFFFF] items-start rounded-[10px] w-[100%] flex-wrap gap-[8px] p-[24px] ${isTablet ? "hidden" : "flex"}`}>
                {categorys.map((e, i) => {
                    return <button onClick={() => setChoosenCategory(e)} className={`${P3} cursor-pointer outline-none ${e === choosenCategory ? "bg-[#4661E6] text-[#FFFFFF]" : "bg-[#F2F4FF] text-[#4661E6]"} hover:bg-[#CFD7FF] hover:text-[#4661E6]  rounded-[10px] max-lg:p-[6px_16px_6px_16px]! p-[8px_16px_8px_16px]`} key={i}>{e}</button>
                })}
            </div>
            <div className={`w-[100%] p-[24px] rounded-[10px] bg-[#FFFFFF] ${isTablet ? "hidden" : "flex"} flex-col gap-[24px]`}>
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
