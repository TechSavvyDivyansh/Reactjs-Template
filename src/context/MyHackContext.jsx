import {React,createContext, useState} from 'react'


export const myHackContext=createContext(null)


const MyHackContextProvider=(props)=>{

    // dark light mode
    let [Mode,SetMode]=useState(true)
   

    let modeSwitch=()=>{
        SetMode(!Mode)
    }
    


    
    const contextVal={Mode,modeSwitch}




    return(
        <myHackContext.Provider value={contextVal}>
            {props.children}
        </myHackContext.Provider>
    )
}

export default MyHackContextProvider