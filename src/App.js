import React, { Component } from 'react'
import './App.css';
import data from './data/data'

export class App extends Component {
  
componentDidMount(){
  this.sortTable();
  this.topper();
}



topper= ()=>{
  let table, rows;
  table = document.getElementById("myTable");
  rows = table.rows 
  //console.log(rows)
  let max = -1
  //console.log(rows[2].getElementById("totalmarks").innerHTML)
  for(let i=2;i<(rows.length);i++){
    let k = parseInt(rows[i].querySelector("#totalmarks").innerHTML)
    if(k>max)
         max = k
  }
  //console.log(rows)
  for(let i=2;i<(rows.length);i++){
    let p = rows[i].querySelector("#totalmarks")
    let k = parseInt(rows[i].querySelector("#totalmarks").innerHTML)
    if(k===max){
      let parent = p.parentElement
      parent.className = "Topper"

      let child = parent.children
      //console.log(child[3])
      child[3].innerHTML = "Topper"
    }
       
  }
  
}

sortTable= () =>{
  let table, rows, switching, i, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  //console.log(table)
  
  while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 2; i < (rows.length -1); i++) {
      shouldSwitch = false;
      
      let x = rows[i].getElementsByTagName("td")[0];
      let y = rows[i + 1].getElementsByTagName("td")[0];
      //console.log(rows[i+1].getElementsByTagName("td")[0])
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

render() {
    return (
      <div className="App">
        

        <table className="center" id="myTable">
          <thead>
          <tr><th colSpan="4"><b>
            Students Result Board
          </b></th></tr>
          <tr>
            <th><b><i>Student Name</i></b></th>
            <th><b><i>Roll Number</i></b></th>
            <th><b><i>Total Marks</i></b></th>
            <th><b><i>Status</i></b></th>
          </tr>
          </thead>
          
          {
            data.map( (obj) =>{
              let m = parseInt(obj.marks.Maths)
              let e = parseInt(obj.marks.English)
              let s = parseInt(obj.marks.Science)
              let sum = m+e+s;
              
              if(m<20 || e<20 || s<20){
                  return(
                    <tbody>
                    <tr key={obj.rollNumber} className="Fail">

                    <td className="name">{obj.name}</td>
                    <td>{obj.rollNumber}</td>
                    <td id="totalmarks">{sum}</td>
                    <td>Fail</td>
                  </tr>
                  </tbody>
                  )
              }
              
              
              else
              return(
                 <tbody>
                  <tr className="Pass">
                    <td className="name">{obj.name}</td>
                    <td>{obj.rollNumber}</td>
                    <td id="totalmarks">{sum}</td>
                    <td>Pass</td>
                  </tr>
                </tbody>

              )
            })
          }          

        </table>

      </div>
    )
  }
}

export default App
