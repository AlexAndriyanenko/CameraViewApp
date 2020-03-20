import React, {useEffect, useState} from 'react';
import './App.scss';
import Camera from "./components/Camera/Camera";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MOBILE_BREAKPOINT } from "./utils/constants";

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
       const w = window.innerWidth || window.offsetWidth;

       if (w < MOBILE_BREAKPOINT) {
           setIsMobile(true);
       }

    }, [isMobile]);

	return (
            <Camera isMobile={isMobile} />
    );
};

export default App;
