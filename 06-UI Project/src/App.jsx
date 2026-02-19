import Header from "./Components/Headers/Header"
import Heading from "./Components/Center/LEFT/Heading"
import Cards from "./Components/Center/RIGHT/Cards"
export default function App() {
  return (
    <>
    <div className="bg-white">
      <Header/>
      <div className="flex">
      <Heading/>
      <Cards/>
      </div>
    </div>
    </>
  )
}
