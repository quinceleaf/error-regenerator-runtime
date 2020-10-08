import CustomTable from "./CustomTable"

import {myData, myColumns} from "../data/Data"

const App = () => {
return (
    <div><CustomTable data={myData} columns={myColumns}/></div>

)
}

export default App