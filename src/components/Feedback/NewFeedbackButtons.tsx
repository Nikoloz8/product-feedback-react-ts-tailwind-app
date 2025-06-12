import { useNavigate } from "react-router-dom"
import Functions from "../../utils/Functions"
import tailwind from "../../styles/tailwind"
import { useContext } from "react"
import { Context } from "../../layouts/Layout"

export default function NewFeedbackButtons() {

    const navigate = useNavigate()
    const { addFeedback } = Functions()
    const { H4 } = tailwind()
    const { productRequest, setErrors } = useContext(Context)

    return (
        <div className="flex justify-end gap-[16px]">
            <button onClick={() => {
                navigate("/")
                setErrors(false)
            }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#656EA3] bg-[#3A4374] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                Cancel
            </button>
            <button onClick={() => {
                if (productRequest.description && productRequest.title) {
                    addFeedback(productRequest)
                    navigate("/")
                    setErrors(false)
                }
                setErrors(true)
            }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                Add Feedback
            </button>
        </div>
    )
}
