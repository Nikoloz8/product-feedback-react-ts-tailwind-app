import { useNavigate, useParams } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import { useContext } from "react"
import { Context } from "../../layouts/Layout"
import Functions from "../../utils/Functions"

export default function EditingFeedbackButtons() {

    const navigate = useNavigate()
    const { H4 } = tailwind()
    const { productRequest, setErrors } = useContext(Context)
    const { feedbackId } = useParams()
    const { saveEditedFeedback, deleteFeedback } = Functions()

    return (
        <div className="flex justify-between">
            <button onClick={() => {
                deleteFeedback(Number(feedbackId))
                navigate(`/`)
            }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#E98888] bg-[#D73737] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                Delete
            </button>
            <div className="flex gap-[16px]">
                <button onClick={() => {
                    navigate(`/details/${feedbackId}`)
                    setErrors(false)
                }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#656EA3] bg-[#3A4374] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                    Cancel
                </button>
                <button onClick={() => {
                    if (productRequest.description && productRequest.title) {
                        saveEditedFeedback(productRequest, Number(feedbackId))
                        navigate("/")
                        setErrors(false)
                    } else {
                        setErrors(true)
                    }
                }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                    Add Feedback
                </button>
            </div>
        </div >)
}
