import { useEffect } from 'react';
import { useState } from 'react';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {

    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getWeatherData = async () => {

            const getWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?appid=' + `${process.env.REACT_APP_WEATHER_KEY}` +
                "&q=" + `${props.enteredDestination}` + '&units=metric')

            const weatherData = await getWeather.json();

            setWeather(weatherData);
            setIsLoading(false);
        }

        props.enteredDestination && getWeatherData();

        return () => {
            setIsLoading(true);
        }

    }, [props.enteredDestination]);






    return (<header className={classes.header}>
        <div className={classes.logo}>Tripee</div>
        <nav>
            <ul>
                <li>
                    {!isLoading && `${Math.round(weather.main.temp)}°C`}
                </li>

                <li>
                    {!isLoading && `${weather.weather[0].main}`}
                </li>

                <li>
                    {!isLoading && `${weather.name}`}
                </li>

            </ul>
        </nav>
    </header>)

}

export default MainNavigation;