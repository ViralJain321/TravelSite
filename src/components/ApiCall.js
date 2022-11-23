import { useEffect, useState } from "react";
import TouristCard from "../ui/Cards/TouristCard";
import TouristPlace from "./TouristPlace";
import classes from './ApiCall.module.css';
import TravelGallery from "./TravelGallery";





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
    const [gallery, setGallery] = useState({});
    const [isGalleryLoading, setIsGalleryLoading] = useState(true);




    useEffect(() => {



        const getData = async () => {

            const getCoordinates = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=' + props.enteredDestination,
                options)
            const coordinates = await getCoordinates.json();

            setLocationCoordinates(coordinates);


            const lat = coordinates.lat;
            const lon = coordinates.lon;


            const getPlaces = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/radius?radius=20000&lon=' + lon + '&lat=' +
                lat + '&limit=30', options)
            const allPlaces = await getPlaces.json();

            setPlaces(allPlaces)



            for (const place of allPlaces.features) {

                const xid = place.properties.xid

                const getPlaceProperties = await fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/xid/' + xid,
                    options)
                const properties = await getPlaceProperties.json();



                setPlaceProperties((prevState) => {
                    return [...prevState, properties]
                })

            }

        }




        const getTravelGalleryData = async () => {

            setIsGalleryLoading(true);

            const getGallery = await fetch('https://api.unsplash.com/search/photos?page=3&query=' + props.enteredDestination + '&client_id=' + `${process.env.REACT_APP_UNSPLASH_KEY}`)

            const galleryData = await getGallery.json();

            setGallery(galleryData);

            setIsGalleryLoading(false);


        }

     
        getData();
        getTravelGalleryData();



        return () => {
            setPlaceProperties([]);
            setGallery({});
            setPlaces({});
        }



    }, [props.enteredDestination])


    return (

        <>
            {!isGalleryLoading && <TravelGallery gallery={gallery} />}

            <div className={classes.tag}>
                <h1>Popular Destinations</h1>
            </div>



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