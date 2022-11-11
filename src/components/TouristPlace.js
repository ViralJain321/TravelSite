// import maldives2 from "./assets/maldives2.jpg";
import classes from "./TouristPlace.module.css";

// import { ProductCard } from "react-ui-cards";



function TouristPlace(props) {
    const name = props.name
    const city = props.address.city;
    const country = props.address.country;
    const kinds= props.kinds;

    const rate = props.rate;
    const image = props.image;

   console.log(image);

    
    if (image) {
        // console.log(image)
        const imgUrl = image.source
        // console.log("image present");
        return (

                <div className={classes.touristCard}>
                    {console.log(imgUrl)}
                    <img className={classes.styleImage} src={imgUrl} alt="this is an img" />
                    <h5 className={classes.name}>{name}</h5>
                    <p><span>Rate:</span> {rate}</p>
                    <p><span>Type:</span> {kinds}</p>
                    <p>{country}</p>
                </div>

                /* <span className={classes.touristCard}>
                    <img className={classes.styleImage} src={image} alt="this is an img" />
                    <h2>{name}</h2>
                    <p>{country}</p>

                    
                </span>
                <span className={classes.touristCard}>
                    <img className={classes.styleImage} src={image} alt="this is an img" />
                    <h2>{name}</h2>
                    <p>{country}</p>

                    
                </span>
                <span className={classes.touristCard}>
                    <img className={classes.styleImage} src={image} alt="this is an img" />
                    <h2>{name}</h2>
                    <p>{country}</p>

                    
                </span> */

            
    
        );
    }

 
}

export default TouristPlace;

