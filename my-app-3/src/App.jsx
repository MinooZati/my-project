import ProfileCard from "./component/ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){
  return(
    <div>
      <div>
        personal digital  assistant
      </div>
      <ProfileCard   title="title1" handel="a@a.com" image={AlexaImage} />
      <ProfileCard title="titele2" handel="a@a.com" image={CortanaImage}/>
      <ProfileCard title="title3" handel="a@a.com"image={SiriImage} />
      
    </div>
  )


}
export default App;