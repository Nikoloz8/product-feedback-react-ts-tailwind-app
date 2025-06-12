import AsideBar from "../components/Home/AsideBar"
import FilterBar from "../components/Home/FilterBar"
import RenderFeedbacks from "../components/Home/RenderFeedbacks"



export default function Home() {

    return (
        <div className="flex gap-[32px] max-lg:w-[690px]! max-xl:flex-col mt-[50px]">

            <AsideBar />

            <div className="flex flex-col gap-[24px] max-xl:w-[100%] max-lg:w-[100%] w-[825px]">

                <FilterBar />

                <RenderFeedbacks />

            </div>
        </div >
    )
}
