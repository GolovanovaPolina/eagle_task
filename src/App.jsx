import React, {useState} from "react";
import FormContainer from "./containers/FormContainer.tsx";
import TreeContainer from "./containers/TreeContainer.tsx";
import {FC} from "react";
import LadderContainer from "./containers/LadderContainer.tsx";

const App: FC = () => {
    const [start, setStart] = useState(false);

    const onReady = () => {
        setStart(true);
    }

    return (
        <div className="container">
            <FormContainer onReady={onReady}/>
            <LadderContainer />
            {start && <TreeContainer />}
        </div>
    );
}

export default App;
