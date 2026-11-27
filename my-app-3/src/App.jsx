import 'bulma/css/bulma.css'
import ProfileCard from "./component/ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App(){
  return(
    <div>
      <section className="hero is-primary">
          <div className="title">
            <p>personal digital  assistant</p>
          </div>
      </section>
    
      <div className="contaienr">
        <section  className="section">
          <div className="column is-4"> 
             <ProfileCard   title="alexa" handel="a@a.com" image={AlexaImage} />

          </div>
           <div className="column is-4"> 
             <ProfileCard title="cortana" handel="a@a.com" image={CortanaImage}/>

          </div>
           <div className="column is-4"> 
             <ProfileCard title="siri" handel="a@a.com"image={SiriImage} />

          </div>

        </section>
        
      </div>



     
     
      
    </div>
  )


}
export default App;