// import { Autocomplete } from "@mui/material";
import { useCallback, useRef } from "react";
import { Autocomplete, TextField, useThemeProps } from "@mui/material";

import Button from "../ui/Button/Button";
import Card from '../ui/Card/Card'
import classes from "./SearchForm.module.css";

import backgroundImg from "../assests/backgroundImg.jpg";

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
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

                <form className={classes.form} onSubmit={setLocationHandler}>
                    <div className={classes.control}>
                        <label htmlFor="title">Enter Destination</label>
                        {/* <TextField id="outlined-basic" label="Outlined" /> */}
                        {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
                        <input type='text' required id='title' ref={locationInputRef} />
                        {/* <div className={classes.actions}> */}
                            <Button type="submit">Search</Button>
                        {/* </div>       */}

                      
                    </div>

                   
                </form>

            </Card>

       
        </div>
    );
};

export default SearchForm;
