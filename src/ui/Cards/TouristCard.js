
import classes from './TouristCard.module.css'


const TouristCard = (props) => {

    return(
    <div className={classes.container}>
        {props.children}
    </div>
    )

}

export default TouristCard;