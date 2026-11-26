export default function ProfileCard({title,handel,image}){
  console.log({title,handel})
    return(
        <div>
            <img src={image} alt="my logo" />
          <div>
            my title is {title} 
          </div>
          <div>
            and my handrl is{handel} 
          </div>
         
        </div>
     
    )
 

}