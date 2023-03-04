import React from "react";
import {ImSpinner9} from 'react-icons/im';

function Loading() {

    return <div className=" grow text-3xl flex flex-col items-center justify-center">
        <ImSpinner9 className="animate-spin"/>
    </div>
}

export default Loading;