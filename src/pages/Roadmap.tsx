import RoadmapNav from "../components/Roadmap/RoadmapNav"
import RenderPlanned from "../components/Roadmap/RenderPlanned"
import RenderProgress from "../components/Roadmap/RenderProgress"
import RenderLive from "../components/Roadmap/RenderLive"

export default function Roadmap() {

    return (
        <div className="w-[1110px] m-[50px_0_50px_0] flex flex-col gap-[32px]">

            <RoadmapNav />

            <div className="flex justify-between w-[100%]">

                <RenderPlanned />

                <RenderProgress />

                <RenderLive />

            </div>
        </div>
    )
}
