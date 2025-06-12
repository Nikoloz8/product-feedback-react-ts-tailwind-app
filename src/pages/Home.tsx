import { useContext } from "react"
import AsideBar from "../components/Home/AsideBar"
import FilterBar from "../components/Home/FilterBar"
import RenderFeedbacks from "../components/Home/RenderFeedbacks"
import { Context } from "../layouts/Layout"



export default function Home() {

    const { isTablet } = useContext(Context)

    return (
        <div className={`flex gap-[32px] max-lg:w-[690px]! max-md:w-[100%]! max-md:p-[0_32px_0_32px] max-xl:flex-col mt-[50px] ${isTablet ? "mt-[0]! gap-[0]! p-[0]!" : ""}`}>

            <AsideBar />

            <div className="flex flex-col gap-[24px] max-xl:w-[100%] max-lg:w-[100%] w-[825px]">

                <FilterBar />

                <RenderFeedbacks />

            </div>
        </div >
    )
}
