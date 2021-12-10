import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const refreshPage = () => {
    window.location.reload();
}

const SavedSuccessfully = () => {

    return (
            <div onClick={refreshPage}>
            <div className="saved_overlay_wrapper" >
            <div className="saved_overlay" >
                <div ><FontAwesomeIcon icon={faCheckCircle} className="checkIcon"/>
                </div>
                <p>Saved successfully!</p>
                </div>
            </div>
            </div>
    );
};

export default SavedSuccessfully;