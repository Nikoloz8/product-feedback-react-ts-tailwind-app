import { useState } from "react"
import AsideBar from "../components/Home/AsideBar"
import FilterBar from "../components/Home/FilterBar"
import RenderFeedbacks from "../components/Home/RenderFeedbacks"



export default function Home() {

    const [choosenCategory, setChoosenCategory] = useState(0)
    const [selectedDropdown, setSelectedDropdown] = useState("Most Upvotes")



    return (
        <div className="flex gap-[32px] mt-[50px]">

            <AsideBar choosenCategory={choosenCategory} setChoosenCategory={setChoosenCategory} />

            <div className="flex flex-col gap-[24px] w-[825px]">

                <FilterBar selectedDropdown={selectedDropdown} setSelectedDropdown={setSelectedDropdown} />

                <RenderFeedbacks />

            </div>
        </div >
    )
}
