import { useEffect, useState } from "react";
import TouristCard from "../ui/TouristCard";
import TouristPlace from "./TouristPlace";
import classes from './ApiCall.module.css';
import Card from "../ui/Card/Card";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
    }

};


const ApiCall = (props) => {


    const [locationCoordinates, setLocationCoordinates] = useState({});
    const [places, setPlaces] = useState({});
    const [placeProperties, setPlaceProperties] = useState([]);


    useEffect(() => {


        const abortController = new AbortController();

        const getData = async () => {


            // const getCoordinates = async () => {
            //     await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=Paris', options)
            //         .then((response) => response.json())
            //         .then((data) => {
            //             setLocationCoordinates(data);
            //         })

            // }

            let getCoordinates = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=' + props.enteredDestination,
                options, { signal: abortController.signal })
            const coordinates = await getCoordinates.json();

            setLocationCoordinates(coordinates);

            console.log(coordinates);

            const lat = coordinates.lat;
            const lon = coordinates.lon;

            console.log(lat + " " + lon);

        

            const getPlaces = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=10000&lon=' + lon + '&lat=' +
                lat + '&limit=20', options, { signal: abortController.signal })
            const allPlaces = await getPlaces.json();

            setPlaces(allPlaces)

            console.log(allPlaces)


            for (const place of allPlaces.features) {

                // console.log(place)

                const xid = place.properties.xid

                const getPlaceProperties = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/' + xid,
                    options, { signal: abortController.signal })
                const properties = await getPlaceProperties.json();

                setPlaceProperties((prevState) => {
                    return [...prevState, properties]
                })

            }



        }


        console.log(props.enteredDestination);
        getData();

  


        return () => {
            setPlaceProperties([]);
            console.log(placeProperties)
            abortController.abort();
        }



    }, [props.enteredDestination])





    return (

        <>


            <Card>
                <div className={classes.title}>{(locationCoordinates.name)[0].toUpperCase() + (locationCoordinates.name).substring(1)}</div>
            </Card>
            <TouristCard>

                {/* <ul className={classes.list}> */}
                {placeProperties.map((place) => {
                    {/* console.log(place.xid)*/ }
                    { console.log(place) }
                    return (
                        <TouristPlace
                            key={place.xid}
                            name={place.name}
                            address={place.address}
                            rate={place.rate}
                            kinds={place.kinds}
                            image={place.preview}
                        />
                    )
                })}

                {/* </ul> */}

            </TouristCard>


        </>

    );





}



export default ApiCall;