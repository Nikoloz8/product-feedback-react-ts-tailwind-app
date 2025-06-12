import { useNavigate, useParams } from "react-router-dom"
import Category from "../components/Feedback/Category"
import Title from "../components/Feedback/Title"
import tailwind from "../styles/tailwind"
import Details from "../components/Feedback/Details"
import { useContext } from "react"
import { Context } from "../layouts/Layout"
import UpdateStatus from "../components/Feedback/UpdateStatus"
import EditFeedbackButtons from "../components/Feedback/EditFeedbackButtons"

export default function EditFeedback() {

    const { H4, H1 } = tailwind()
    const navigate = useNavigate()
    const { feedbackId } = useParams()
    const { productRequests } = useContext(Context)
    const feedback = productRequests?.find((e) => e.id === Number(feedbackId))

    return (
        <div className="flex flex-col m-[60px_0_50px_0] gap-[50px] max-sm:p-[0_30px_0_30px]">
            <div className="flex justify-start w-[100%]">
                <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate(`/details/${feedbackId}`)}>
                    <img src="/assets/shared/icon-arrow-left.svg" alt="" />
                    <h4 className={`${H4} text-[#647196] `}>Go Back</h4>
                </a>
            </div>
            <div className="w-[540px] p-[40px] max-sm:w-[100%] bg-[#FFFFFF] rounded-[10px] ">
                <img src="/assets/shared/icon-edit-feedback.svg" className={`w-[56px] relative top-[-68px]`} />
                <div className="mt-[-56px]!">
                    <h1 className={`${H1}`}>Editing ‘{feedback?.title}’</h1>

                    <div className="mt-[50px] flex flex-col gap-[32px]">

                        <Title />

                        <Category />

                        <UpdateStatus />

                        <Details />

                        <EditFeedbackButtons />

                    </div>
                </div>
            </div>
        </div>)
}
