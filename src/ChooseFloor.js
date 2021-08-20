import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'
import './chooseFloor.css'
import firebase from "firebase";

const modalStyle = {
  position:'fixed',
  background: 'lightblue',
  width: '50%',
  height: '80%',
  opacity:'1',
  top:'50%',
  left:'50%',
  transform: 'translate(-50%,-50%)', 
  borderRadius:'10%'
}

export default function ChooseFloor(){
    const params = useParams()
    const [click,setClick] = useState(false)
    const [modalClick, setModalClick] = useState(false)
    const [room,setRoom] = useState(0)

    function book(e){
        setRoom(e.target.innerText)
        setClick(true)
        e.target.style.backgroundColor = 'Grey'
        console.log(e.target.disabled="true")
    }

    function show(){
        setModalClick(true)
        setClick(false)
        console.log("Hello")
    }

    useEffect(()=>{
        localStorage.setItem('myKey',JSON.stringify({email:firebase.auth().currentUser.email,floor:params.name,room:room}))
    },[room])
    
    function close(){
        setModalClick(false)
    }

    return(
        <> 
            <Header/> 
            <div style= {{display:'flex', flexDirection:'column', justifyContent:"center",alignItems:"center",height:"85vh"}}>
            <h1>Choose a floor</h1>
            <select>
                <option> 1st Floor</option>
                <option> 2nd Floor</option>
                <option> 3rd Floor</option>
                <option> 4th Floor</option>
                <option> 5th Floor</option>
            </select><br/>
            <div style={{border:"1px solid black",padding:"1%",borderRadius:"10%"}}>
                <div>
                <button  onClick = {(e)=>book(e)}> 1 </button>
                <button  onClick = {(e)=>book(e)}> 2 </button>
                <button  onClick = {(e)=>book(e)}> 3 </button>
                <button  onClick = {(e)=>book(e)}> 4 </button>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <button  onClick = {(e)=>book(e)}> 10 </button>
                <button  onClick = {(e)=>book(e)}> 5 </button>
                </div>
                <div>
                <button  onClick = {(e)=>book(e)}> 9 </button>
                <button  onClick = {(e)=>book(e)}> 8 </button>
                <button  onClick = {(e)=>book(e)}> 7 </button>
                <button  onClick = {(e)=>book(e)}> 6 </button>
                </div>
            </div>
            <div>
                {
                    click ? <button className="bookroom" onClick = {show}> Book Room </button> : ""
                }
            </div>
            </div>
            <div>
            {
                modalClick ? 
                <div style= {modalStyle}>
                    <div style={{textAlign:'center'}}>
                    <div style={{display:'flex'}}>
                        <button className="close" onClick={close}>X</button>
                        <h1>Success</h1>
                    </div>
                    <p> Your room has been successfully booked</p>
                    <p><strong>Your room details are :</strong></p>
                    <p>Hostel No - {params.name} </p>
                    <p>Room No - {room}</p>
                    
                    </div>
                </div>
             : ""
            }
            </div>
        </>
    )
}