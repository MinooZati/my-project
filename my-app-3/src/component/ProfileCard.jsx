import App from "../App";
export default function ProfileCard({title,handel,image}){
  console.log(App)
    return(
        <div>
          <div className="card">
            <div className="card-image">
              <figure className="image is-1-by1">
                <img src={image} alt="my logo" />
              </figure>
            </div>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="title is-6">{handel}</p>

            </div>

          </div>
         
        </div>
     
    )
 

}