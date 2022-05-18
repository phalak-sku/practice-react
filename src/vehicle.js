import React from 'react'
function reducer(state='',action) {
    switch(action.type) {
        case "Car" :
            return  action.payload
              
            
        case "Bike" : {
            return "this is bike"
                
            
        }
        default :
            return "this is a vehicle"

    }
}

export default reducer