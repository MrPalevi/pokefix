// import { useEffect, useState } from "react";

// function App() => {

//     const [setOff, setOffset] = useState([]);
//     const [setLim, setLimit] = useState(21);



//     useEffect(() => {
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=21&offset=')
//             .then((res) => res.json())
//             .then((data) => console.log("Cek data", data))
//     }, [setLim])
//     const loadMore = () => {
//         setLimit(setlim + 21)
//     }


//     export default App;