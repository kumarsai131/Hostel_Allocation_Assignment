import Header from './Header'
import { Link } from 'react-router-dom';
import './girls.css'
export default function GirlsChoose(){
    return(
        <>  
            <Header/>
            <div style= {{display:'flex', flexDirection:'column', justifyContent:"center",alignItems:"center",height:"90vh"}}>
                <h1>Choose a Hostel</h1>
                <div style= {{display:'flex',padding:"1%"}}>
                <Link to="/ChooseFloor/G1"> <button> G1 </button> </Link>
                <Link to="/ChooseFloor/G2"> <button> G2 </button> </Link>
                <Link to="/ChooseFloor/G3"> <button> G3 </button> </Link>
                </div>
                
                <div style= {{display:'flex',padding:"1%"}}>
                <Link to="/ChooseFloor/G4"> <button> G4 </button> </Link>
                <Link to="/ChooseFloor/G5"> <button> G5 </button> </Link>
                <Link to="/ChooseFloor/G6"> <button> G6 </button> </Link>
                </div>

                <Link style={{textDecoration:"none",color:"black"}} to="/">Go Back</Link>
            </div>
        </>
    )
}