import { useNavigate, useParams } from "react-router-dom"
import tailwind from "../../styles/tailwind"

export default function NavButtons() {

    const navigate = useNavigate()
    const { H4 } = tailwind()
    const { detailsId } = useParams()

    return (
        <div className="flex justify-between w-[100%]">
            <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate("/")}>
                <img src="/assets/shared/icon-arrow-left.svg" alt="" />
                <h4 className={`${H4} text-[#647196] `}>Go Back</h4>
            </a>
            <button onClick={() => navigate(`/editfeedback/${detailsId}`)} className="p-[12px_24px_12px_24px] cursor-pointer rounded-[10px] hover:bg-[#7C91F9] bg-[#4661E6] ">
                <h4 className={`${H4} text-[#F2F4FE]`}>Edit Feedback</h4>
            </button>
        </div>)
}
