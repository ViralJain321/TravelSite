import { useEffect, useState } from "react";
import TouristCard from "../ui/Cards/TouristCard";
import TouristPlace from "./TouristPlace";
import classes from './ApiCall.module.css';
import Card from "../ui/Cards/Card";

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
    const [weather, setWeather] = useState({});


    useEffect(() => {


        const abortController = new AbortController();

        const getData = async () => {

            const getWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?appid=' + `${process.env.REACT_APP_WEATHER_KEY}` +
                "&q=" + `${props.enteredDestination}` + '&units=metric')

            const weatherData = await getWeather.json();

            setWeather(weatherData);

          



            const getCoordinates = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=' + props.enteredDestination,
                options, { signal: abortController.signal })
            const coordinates = await getCoordinates.json();

            setLocationCoordinates(coordinates);

          

            const lat = coordinates.lat;
            const lon = coordinates.lon;

         

            const getPlaces = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=10000&lon=' + lon + '&lat=' +
                lat + '&limit=20', options, { signal: abortController.signal })
            const allPlaces = await getPlaces.json();

            setPlaces(allPlaces)

            console.log(allPlaces)


            for (const place of allPlaces.features) {

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

                {locationCoordinates.name &&
                    <div className={classes.title}>{(locationCoordinates.name)[0].toUpperCase() + (locationCoordinates.name).substring(1)}</div>}

                {(weather.main) && <p>{Math.round(weather.main.temp)}°C</p>}
                {weather.weather && <p>{weather.weather[0].main}</p>}


            </Card>


            <TouristCard>

                {placeProperties.map((place) => {

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



            </TouristCard>


        </>

    );





}



export default ApiCall;