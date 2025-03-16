import React from "react";
import { useState } from "react";
import { backend_url } from "../context/cerdentails";
const Compare = () => {
    const [leetcodeID,setLeetcodeID] = useState([{userId:''}]);
    const addLeetcodeID = () => {
        if(leetcodeID[leetcodeID.length-1].userId!='')
            setLeetcodeID([...leetcodeID,{userId:''}])
    }
    const alterLeetcodeID = (event, index) => {
        let newArr = [...leetcodeID];
        newArr[index].userId = event.target.value
        setLeetcodeID(newArr);  
    }
    const close = (index) => {
        let arr = [...leetcodeID]
        arr.splice(index,1)
        if(arr.length==0) setLeetcodeID([{userId:''}])
        else setLeetcodeID(arr)
    }
    const handleSubmit = async() => {
        try{
            setLeetcodeID(prev => prev.filter(item => item.userId != ''));
            console.log(leetcodeID)
            const response = await fetch(`${backend_url}/compare`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify({data:leetcodeID})
            });
            const data = await response.json();
            console.log("data = ",data, response.status)
            if(response.status!=200){
                alert(data.error)
                return;
            }
            setLeetcodeID((prev) =>
                prev.map((item, index) => ({
                    ...item,
                    score: data.data[index]?.score || "N/A"
                }))
            );
            console.log(leetcodeID)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <h1>Leetcode Comparision</h1>
            <button onClick={addLeetcodeID}>Add field</button>
            {
                leetcodeID.map((element,index) => {
                    return(
                        <div key={index}>
                        <input type="text" value={element.userId} onChange={(e)=>{alterLeetcodeID(e,index)}}/>
                        <span>{element.score}</span>
                        <button onClick={()=>close(index)}>close</button>
                        </div>
                    )
                })
            }
            <button onClick={()=>handleSubmit()}>submit</button>
        </>
    )
}

export default Compare;