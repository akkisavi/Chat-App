import Conversations from "./Conversations.jsx"
import SearchInput from "./SearchInput"
import LogOutBtn from "./LogOutBtn.jsx"

const SideBar = () => {
  return (
    <div className="border-r border-white p-4 flex flex-col">
        <SearchInput/>
        <div className="divider border-t border-white mx-0"></div>
        <Conversations/>
        <LogOutBtn/>
    </div>
  )
}

export default SideBar
