import React from 'react'
import WordCloud from "react-d3-cloud";
import {CardMedia} from "@material-ui/core";

function MyPhotoComponent() {
    return (
        <div className="myphoto">
            <CardMedia style={{maxWidth: '250px', maxHeight: '250px'}} component="img"
                       image="/images/me_2020.jpg"/>
        </div>
    )
}

export default MyPhotoComponent