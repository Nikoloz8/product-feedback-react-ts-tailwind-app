import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center min-h-[100vh] bg-[#F7F8FD]">
            <Outlet />
        </div>
    )
}
