import React from 'react'

const ShowBox = (props) => {
    const colors = props.colors;
   

    return (
        <div style={{display:'flex' }}>
        {colors.map(
            (item,index) => <div style={{backgroundColor:item ,width:100+'px',height:100+'px' ,margin:15+'px'}}></div>
        )}
      </div> 
    )

}

export default ShowBox
