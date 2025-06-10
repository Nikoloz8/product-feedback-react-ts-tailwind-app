
export default function tailwind() {
    const H1 = "font-[700] text-[2.4rem] tracking-[-0.33px] text-[#3A4374]"
    const H2 = "font-[700] text-[2rem] tracking-[-0.25px] text-[#3A4374]"
    const H3 = "font-[700] text-[1.8rem] tracking-[-0.25px] text-[#3A4374]"
    const H4 = "font-[700] text-[1.4rem] tracking-[-0.19px] text-[#3A4374]"
    const P1 = "font-[400] text-[1.6rem] text-[#3A4374]"
    const P2 = "font-[400] text-[1.5rem] text-[#3A4374]"
    const P3 = "font-[600] text-[1.3rem] text-[#3A4374]"
    const liStyle = `list-disc ml-[20px]! pr-[20p] w-[100%] marker:text-[20px] ${P1} text-[#647196]`





    return { H1, H2, H3, H4, P1, P2, P3, liStyle }
}
