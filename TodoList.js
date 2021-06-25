import React from 'react'

function TodoList(props) {


    return (
        <>
            
                <tr >
                    <th scope="row" key={props.itemid}>{props.itemid+1}</th>
                    <td >{props.itemvalue}</td>
                    <td ><button  className="btn btn-danger btn-sm"  
                    onClick={()=>{props.onSelect(props.itemid)}}>x</button></td>
                </tr>
                 
        </>
    )
}

export default TodoList
