import firebase from "firebase";

const buttonClass = {
    textDecoration: 'none',
    
}
export default function Header(){
    return(
        <>
        <div style={{ display:'flex' ,justifyContent:'space-between',flexDirection:'row',backgroundColor:"azure"}}>
        <p style={{padding:'1%'}}>Welcome <strong>{firebase.auth().currentUser.displayName}</strong>!</p>
        <p style={{padding:'1%',cursor: 'pointer'}}><a onClick={() => firebase.auth().signOut()} className={buttonClass}>Sign out</a></p>
        </div>
        </>
    )
}