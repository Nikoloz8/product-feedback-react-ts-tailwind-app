import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import { useContext } from "react"
import { Context } from "../../layouts/Layout"

export default function RoadmapNav() {

    const navigate = useNavigate()
    const {H4, H1} = tailwind()
    const {setProductRequest} = useContext(Context)

    return (
        <div className='w-[100%] items-center! p-[24px_40px_24px_40px] bg-[#373F68] rounded-[10px] flex justify-between'>
            <div className="flex flex-col gap-[4px]">
                <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate("/")}>
                    <img src="/assets/shared/icon-arrow-left.svg" alt="" />
                    <h4 className={`${H4} text-[#FFFFFF] `}>Go Back</h4>
                </a>
                <h1 className={`${H1} text-[#FFFFFF]`}>Roadmap</h1>
            </div>
            <button onClick={() => {
                navigate("/newfeedback")
                setProductRequest({
                    id: 0,
                    title: "",
                    category: "feature",
                    upvotes: 0,
                    status: "suggestion",
                    description: "",
                    comments: []
                })
            }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                + Add Feedback
            </button>
        </div>)
}
