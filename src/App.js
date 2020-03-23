import React, {useEffect, useState} from 'react';
import './App.scss';
import Camera from "./components/Camera/Camera";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MOBILE_BREAKPOINT } from "./utils/constants";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
       const w = window.innerWidth || window.offsetWidth;

       if (w < MOBILE_BREAKPOINT) {
           setIsMobile(true);
       }

    }, [isMobile]);

	return (
	    <div className="app-container">
            <Camera isMobile={isMobile} />
            <ToastContainer />
        </div>
    );
};

export default App;