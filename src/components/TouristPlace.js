
import classes from "./TouristPlace.module.css";




function TouristPlace(props) {
    const name = props.name
    const country = props.address.country;
    const kinds= props.kinds;

    const rate = props.rate;
    const image = props.image;

   console.log(image);

    
    if (image) {
        const imgUrl = image.source
        return (

                <div className={classes.touristCard}>
                    {console.log(imgUrl)}
                    <img className={classes.styleImage} src={imgUrl} alt="this is an img" />
                    <h5 className={classes.name}>{name}</h5>
                    <p><span>Rate:</span> {rate}</p>
                    <p><span>Type:</span> {kinds}</p>
                    <p>{country}</p>
                </div>   
    
        );
    }

 
}

export default TouristPlace;

