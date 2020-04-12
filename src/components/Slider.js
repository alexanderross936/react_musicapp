import React from 'react';
import Slider from '@material-ui/core/Slider';

function Slid(){

const action = this.props.action

    return (
        <Slider 
        step={10}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
        onChange={action}
        orientation="horizontal" 
        aria-label="Soundcheck" 
        color="primary" />

    )

}

export default Slid;