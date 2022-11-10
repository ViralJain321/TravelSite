import Card from "../ui/Card/Card";

// import maldives2 from "./assets/maldives2.jpg";
import classes from "./TouristPlace.module.css";

// import { ProductCard } from "react-ui-cards";
import { render } from "@testing-library/react";


function TouristPlace(props) {
    const name = props.name
    const city = props.address.city;
    const country = props.address.country;
    const rate = props.rate;
    const image = props.image;

    // if(image) {
    // const Example = <ProductCard
    //     price="3.0"
    //     productName="madlives"
    //     url='https://github.com/nukeop' />


    // header='https://i.imgur.com/vRAtM3i.jpg'
    // avatar='https://i.imgur.com/XJxqvsU.jpg'
    // positionName='Software Engineering Manager'


    if(image){
        console.log("image present");
    return (

        <div>
            {/* <Example /> */}
            <Card>
            {/* {console.log(image)} */}
                <img className={classes.styleImage} src={image.source} alt="this is an img" />
                <h2>{name}</h2>
                 <p>{country}</p>

                {/* <img src={image} alt="This is an im"/>
            <p>{name}</p>
            <p>{city}</p> */}
            </Card>
        </div>
    );
        }
        else{
            return <h1>no image</h1>
        }
    // }
}

export default TouristPlace;

