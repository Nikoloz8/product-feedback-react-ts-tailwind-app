import tailwind from "../styles/tailwind"
import { useNavigate } from "react-router-dom"
import Title from "../components/Feedback/Title"
import Category from "../components/Feedback/Category"
import Details from "./Details"
import NewFeedbackButtons from "../components/Feedback/NewFeedbackButtons"

export default function NewFeedback() {

  const { H1, H4 } = tailwind()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col m-[60px_0_50px_0] gap-[50px]">
      <div className="flex justify-start w-[100%]">
        <a className="flex gap-[8px] items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src="/assets/shared/icon-arrow-left.svg" alt="" />
          <h4 className={`${H4} text-[#647196] `}>Go Back</h4>
        </a>
      </div>
      <div className="w-[540px] p-[40px] bg-[#FFFFFF] rounded-[10px] ">
        <div className={`w-[56px] h-[56px] rounded-[100%] bg-[radial-gradient(circle_at_top_right,_#E84D70_0%,_#A337F6_53%,_#28A7ED_100%)] text-[#FFFFFF] text-[3rem] font-[700] flex items-center justify-center pb-[5px] relative top-[-65px]`}>
          +
        </div>
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
