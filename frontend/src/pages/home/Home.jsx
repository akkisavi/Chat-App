import SideBar from "../../components/SideBar/SideBar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
  return (<>
    <div className="flex sm:h-[550px] md:h[-650px] 
    rounded-lg overflow-hidden bg-blue-400 
    bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60">
      <SideBar/>
      <MessageContainer/>
    </div>
    </>
  )
}

export default Home
