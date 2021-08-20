import Header from './Header'
import { Link } from 'react-router-dom';
import './girls.css'

export default function BoysChoose(){
    return(
        <>
            <Header/>
            <div style= {{display:'flex', flexDirection:'column', justifyContent:"center",alignItems:"center",height:"90vh"}}>
                <h1>Choose a Hostel</h1>
                <div style= {{display:'flex',padding:"1%"}}>
                <Link to="/ChooseFloor/B1"> <button> B1 </button> </Link>
                <Link to="/ChooseFloor/B2"> <button> B2 </button> </Link>
                <Link to="/ChooseFloor/B3"> <button> B3 </button> </Link>
                </div>
                
                <div style= {{display:'flex',padding:"1%"}}>
                <Link to="/ChooseFloor/B4"> <button> B4 </button> </Link>
                <Link to="/ChooseFloor/B5"> <button> B5 </button> </Link>
                <Link to="/ChooseFloor/B6"> <button> B6 </button> </Link>
                </div>

                <Link style={{textDecoration:"none",color:"black"}} to="/">Go Back</Link>
            </div>   
        </>
    )
}