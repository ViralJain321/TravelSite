// import { Autocomplete } from "@mui/material";
import { useCallback, useRef } from "react";
import { Autocomplete, TextField, useThemeProps } from "@mui/material";

import Button from "../ui/Button/Button";
import Card from '../ui/Card/Card'
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
        <>
            <Card>

                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

                <form className={classes.form} onSubmit={setLocationHandler}>
                    <div className={classes.control}>
                        <label htmlFor="title">Meetup Title</label>
                        {/* <TextField id="outlined-basic" label="Outlined" /> */}
                        {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
                        <input type='text' required id='title' ref={locationInputRef} />
                      
                    </div>

                    <div className={classes.actions}>
                            <Button type="submit">Add Meetup</Button>
                   </div>      

                </form>

            </Card>

       
        </>
    );
};

export default SearchForm;
