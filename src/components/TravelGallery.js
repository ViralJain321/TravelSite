import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from './TravelGallery.module.css'

const TravelGallery = (props) => {



    const imageGallery = [];
    const imagesData = props.gallery.results;

    for (const image of imagesData) {
        imageGallery.push(image);
    }

 

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    return (
        <div>
           
            <div className={classes.tag}>
                <h1>Image Gallery</h1>
            </div>
            <div className={classes.imgslider}>
                <Slider {...settings}>

                    {imageGallery.map((image) => (
                        <div key={image.id}>
                            <img className={classes.styleImage} src={image.urls.regular} alt={image.alt_description} />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )



}

export default TravelGallery;