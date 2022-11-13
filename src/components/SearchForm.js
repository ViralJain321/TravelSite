
import {  useRef } from "react";

import Button from "../ui/Button/Button";
import Card from '../ui/Cards/Card'
import classes from "./SearchForm.module.css";


const SearchForm = (props) => {
    
    const locationInputRef = useRef();

    const setLocationHandler = (event) => {

        event.preventDefault();

        const enteredLocation = locationInputRef.current.value;

        console.log(enteredLocation);

        props.onAddLocation(enteredLocation);
    }





    return (
        <div className={classes.backgroundImg}>
            
            <Card>
             
                <form className={classes.form} onSubmit={setLocationHandler}>
                    <div className={classes.control}>
                        <label htmlFor="title">Enter Destination</label>
                       
                        <input type='text' required id='title' ref={locationInputRef} />
                        
                            <Button type="submit">Search</Button>
                      
                    </div>

                   
                </form>

            </Card>

       
        </div>
    );
};

export default SearchForm;
