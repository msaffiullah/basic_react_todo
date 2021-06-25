import React, {useState} from 'react'
import TodoList from './TodoList';


function LearnState() {
        const [inputData,setInputData]=useState("");
        const callitem= (e)=>{setInputData(e.target.value);};
  
                        const [addData,setAddData]=useState([]);
                        const addlistdata =()=>{
                            setAddData((enteredData)=>{
                                return [...enteredData,inputData]
                            });
                            return setInputData("")
                        };
          const deletelistdata = (itemid)=> {
          // console.log(itemid);
          setAddData((enteredData)=>{
          return enteredData.filter((arrElement,index)=>{ 
            return index!==itemid;
          });
        });
        };     
    return (
        <div>
        <h1 className="text-center mt-4 "> Todo List </h1>
        <div className="row text-center mx-auto">
                <div className="w-50 mx-auto">
                <br/>
                <input type="text"  className="form-control mb-4" placeholder="Add an item" 
                value={inputData} onChange={callitem}/>
                <button className="btn btn-primary btn-lg btn-block text-center" onClick={addlistdata}>+</button>
                <br/>
                <hr/>
         
               <h3>Updated Records</h3>

                <table className="table text-center">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Item List</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {addData.map((listitem,itemId)=>{
                    
                  return( 
                    <TodoList 
                  itemvalue={listitem}
                  itemid={itemId}
                  key={itemId}
                  onSelect={deletelistdata}
                   />
                  )})}   
                  </tbody>
                </table>
                              
                        </div>
                      </div>
                    </div>
                    )
                }

export default LearnState
