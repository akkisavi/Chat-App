import Conversations from "./Conversations.jsx"
import SearchInput from "./SearchInput"
import LogOutBtn from "./LogOutBtn.jsx"

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogOutBtn/>
    </div>
  )
}

export default SideBar
