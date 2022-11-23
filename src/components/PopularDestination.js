import classes from "./PopularDestination.module.css";

import newyork from '../assests/new-york-city.jpg';
import london from '../assests/london-england.jpg';
import paris from '../assests/paris-france.jpg';
import barcelona from '../assests/barcelona-spain.jpg';
import rome from '../assests/rome-italy.jpg';

const PopularDestination = (props) => {

    const places = [{
        city: 'New York',
        image: newyork
    },
    {
        city: 'London',
        image: london
    },

    {
        city: 'Paris',
        image: paris
    },
    {
        city: 'Barcelona',
        image: barcelona
    },
    {
        city: 'Rome',
        image: rome
    }
    ];

    const setLocationHandler = (city) => {

        props.onAddLocation(city);

    }


    return (
        <>
             <div className={classes.tag}>
                <h1>Top Tourist Destinations</h1>
            </div>
            <section className={classes.container}>
             
                {places.map((place, index) => {
           
                    return (

                        <div key= {index} className={classes.popularDestinationCard} onClick={() => setLocationHandler(place.city)}>
                            <img className={classes.styleImage} src={place.image} alt="An Alt Description"></img>
                            <h1 className={classes.name} key={index}>{place.city}</h1>
                        </div>

                    )
                })}
            </section>
        </>


    )


}

export default PopularDestination;