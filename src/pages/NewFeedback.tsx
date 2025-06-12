import tailwind from "../styles/tailwind"
import { useNavigate} from "react-router-dom"
import Title from "../components/Feedback/Title"
import Category from "../components/Feedback/Category"
import Details from "../components/Feedback/Details"
import NewFeedbackButtons from "../components/Feedback/NewFeedbackButtons"
import { useContext, useEffect } from "react"
import { Context } from "../layouts/Layout"

export default function NewFeedback() {

  const { H1, H4 } = tailwind()
  const navigate = useNavigate()
  const { productRequest, setProductRequest } = useContext(Context)

  useEffect(() => {
    setProductRequest({ ...productRequest, id: Math.floor(Math.random() * 1000000), })
  }, [])

  return (
    <div className="flex flex-col m-[60px_0_50px_0] max-sm:p-[0_30px_0_30px] gap-[50px]">
      <div className="flex justify-start w-[100%]">
        <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src="/assets/shared/icon-arrow-left.svg" alt="" />
          <h4 className={`${H4} text-[#647196] `}>Go Back</h4>
        </a>
      </div>
      <div className="w-[540px] max-sm:w-[100%]! p-[40px] bg-[#FFFFFF] rounded-[10px] ">
        <img src="/assets/shared/icon-new-feedback.svg" className={`w-[56px] relative top-[-68px]`} />
        <div className="mt-[-56px]!">
          <h1 className={`${H1}`}>Create New Feedback</h1>

          <div className="mt-[50px] flex flex-col gap-[32px]">

            <Title />

            <Category />

            <Details />

            <NewFeedbackButtons />

          </div>
        </div>
      </div>
    </div>
  )

}
