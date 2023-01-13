import * as React from "react";
import Routers from "../routers/routers";
import "./style.scss";
import AppProvider from "./Context/AppProvider";
import LayerOverLap from "../component/layerOverLap";

const App: React.FC = () => {
    return (
        <>
            <AppProvider>
                <div className="app-wrapper">
                    <div className="container">
                        <Routers />
                    </div>
                </div>
                <LayerOverLap />
            </AppProvider>
        </>
    );
};

export default App;
