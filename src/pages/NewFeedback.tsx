import { useState } from "react"
import tailwind from "../styles/tailwind"
import { useNavigate } from "react-router-dom"
import Functions from "../utils/Functions"

export default function NewFeedback() {

  const { H1, H4, P2, P1 } = tailwind()

  const categorys = ["Feature", "UI", "UX", "Enhancement", "Bug"]

  const [showDropdown, setShowDropdown] = useState(false)

  const [productRequest, setProductRequest] = useState({
    id: Math.floor(Math.random() * 100000),
    title: "",
    category: "Feature",
    upvotes: 0,
    status: "Suggestion",
    description: "",
    comments: []
  })


  const { addFeedback } = Functions()

  const [errors, setErrors] = useState(false)
  console.log(errors)

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
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[2px]">
                <label htmlFor="title" className={`${H4}`}>Feedback Title</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Add a short, descriptive headline</h4>
              </div>
              <input type="text" onChange={(e) => setProductRequest({ ...productRequest, title: e.target.value })} id="title" className={`w-[100%] bg-[#F7F8FD] outline-none border-solid border-[#4661E6] focus:border-[1px] ${errors && !productRequest.title ? "border-[#D73737]! border-[1px]" : undefined} rounded-[5px] p-[12px_24px_12px_24px] ${P2} `} />
              {errors && !productRequest.title ? <p className={`${H4} mt-[-10px]!  font-[400]! text-[#D73737]`}>Can’t be empty</p> : undefined}
            </div>
            <div className="flex flex-col gap-[16px] relative">
              <div className="flex flex-col gap-[2px]">
                <label htmlFor="title" className={`${H4}`}>Category</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Choose a category for your feedback</h4>
              </div>
              <div onClick={() => setShowDropdown(!showDropdown)} className={`w-[100%] bg-[#F7F8FD] outline-none rounded-[5px] p-[12px_24px_12px_24px] cursor-pointer ${P2} flex justify-between items-center`}>
                {productRequest.category}
                <img src="/assets/shared/icon-arrow-down.svg" alt="" />
              </div>
              <div className="absolute w-[100%] shadow-[0_10px_40px_-7px_rgba(55,63,104,0.35)] bottom-[-260px] bg-[#FFFFFF] rounded-[10px]">
                {categorys.map((e, i) => {
                  return <button onClick={() => {
                    setProductRequest({ ...productRequest, category: e })
                    setShowDropdown(false)
                  }} key={i} className={`w-[100%] ${i + 1 != categorys.length ? "border-b-[1px] border-solid border-[#E2E3EA]" : undefined} ${!showDropdown ? "hidden" : "block"} outline-none p-[12px_24px_12px_24px] hover:text-[#AD1FEA] cursor-pointer text-left ${P1} text-[#647196] flex items-center justify-between`}>
                    {e}
                    {e === productRequest.category ? <img src="/assets/shared/icon-check.svg" alt="" /> : undefined}
                  </button>
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[2px]">
                <label htmlFor="detail" className={`${H4}`}>Feedback Detail</label>
                <h4 className={`${H4} font-[400]! text-[#647196]!`}>Include any specific comments on what should be improved, added, etc.</h4>
              </div>
              <textarea onChange={(e) => setProductRequest({ ...productRequest, description: e.target.value })} className={`w-[100%] h-[96px]! ${P2} outline-none rounded-[5px] p-[12px_24px_12px_24px] resize-none! ${errors && !productRequest.description ? "border-[#D73737]! border-[1px]" : undefined} focus:border-[1px] border-solid border-[#4661E6] bg-[#F7F8FD]`} name="" id="detail" />
              {errors && !productRequest.description ? <p className={`${H4} font-[400]! mt-[-10px]! text-[#D73737]`}>Can’t be empty</p> : undefined}
            </div>
            <div className="flex justify-end gap-[16px]">
              <button onClick={() => navigate("/")} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#656EA3] bg-[#3A4374] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                Cancel
              </button>
              <button onClick={() => {
                if (productRequest.description && productRequest.title) {
                  addFeedback(productRequest)
                  navigate("/")
                }
                setErrors(true)
              }} className={`cursor-pointer p-[12px_24px_12px_24px] hover:bg-[#C75AF6] bg-[#AD1FEA] ${H4} text-[#F2F4FE] rounded-[10px]`}>
                Add Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
