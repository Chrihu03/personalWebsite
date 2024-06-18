import '../App.css';
import './Battletech.css';
import { getMechLocation } from "./Common.js";
import { useState } from "react";

function calc(callback) {
    const result = [];
    var damage = parseInt(document.getElementById('totalDamage').value);
    const cluster = parseInt(document.getElementById('clusterSize').value);
    const mechType = document.getElementById('mechType').value;
    const mechSide = document.getElementById('mechSide').value;
    const tableType = document.getElementById('tableType').value;
    if (isNaN(damage) || isNaN(cluster)|| damage < 1 || cluster < 1) {
        callback(result);
    } else {
        let clusterRoll = 1;
        while (damage > 0) {
            if (damage >= cluster) {
                const location = getMechLocation(mechSide, mechType, tableType);
                result.push({cluster: clusterRoll, damage: cluster, location: location.location, locationRoll: location.rollData});
                damage -= cluster;
            } else {
                const location = getMechLocation(mechSide, mechType, tableType);
                result.push({cluster: clusterRoll, damage: damage, location: location.location, locationRoll: location.rollData});
                damage = 0;
            }
            clusterRoll++;
        }
    }
    callback(result);
}

function ClusterCalc() {
  const [data, setData] = useState([]);
  let side = 'Left';
  if (data.length > 0) {
    const mechSide = document.getElementById('mechSide').value
    if (mechSide === 'front') {
        side = 'Front/Back';
    } else if (mechSide === 'right') {
        side = 'Right';
    }
  }
  return (
    <div>
        <h2>Cluster Calculator</h2>

        <label htmlFor='totalDamage'>Total Damage:</label>
        <input type='number' id='totalDamage' name='totalDamage' min='0' max='100' defaultValue={20}/>
        <br/>
        <label htmlFor='clusterSize'>Cluster Size:</label>
        <input type='number' id='clusterSize' name='clusterSize' min='1' max='100' defaultValue={5}/>
        <br/>
        <label htmlFor="mechType">Type: </label>
        <select id="mechType" name="mechType" size="1" defaultValue='biped'>
            <option value="biped">Biped</option>
            <option value="quad">Quad</option>
            <option value="tripod">Tripod</option>
        </select>
        <label htmlFor="mechSide">Side: </label>
        <select id="mechSide" name="mechSide" size="1" defaultValue='front'>
            <option value="left">Left</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="right">Right</option>
        </select> 
        <label htmlFor="tableType">Table: </label> 
        <select id="tableType" name="tableType" size="1" defaultValue='full'>
            <option value="full">Standard</option>
            <option value="punch">Punch</option>
            <option value="kick">Kick</option>
        </select>  
        <br/>
      <button type='button' onClick={() => calc(setData)} >Calculate</button>
      <br/>
      {data.length === 0 &&
        <p>Enter Positive numbers greater than 0 for "Total Damage" and "Cluster Size".</p>
      }
      {data.length > 0 &&
        <table className='btTable'>
            <thead>
                <tr>
                    <th scope='col' className='btTh'>Cluster</th>
                    <th scope='col' className='btTh'>Damage</th>
                    <th scope='col' className='btTh'>Roll</th>
                    <th scope='col' className='btTh'>{side}</th>
                </tr>
            </thead>
            <tbody>
            {data.map((cluster) => (
                <tr id={cluster.cluster} key={cluster.cluster}>
                    <td id={cluster.cluster + "_cluster"} className={(cluster.location === 'Head' || cluster.location.includes('Crit')) ? "btTdCritical" : "btTd"}>{cluster.cluster}</td>
                    <td id={cluster.cluster + "_damage"} className={(cluster.location === 'Head' || cluster.location.includes('Crit')) ? "btTdCritical" : "btTd"}>{cluster.damage}</td>
                    <td id={cluster.cluster + "_roll"} className={(cluster.location === 'Head' || cluster.location.includes('Crit')) ? "btTdCritical" : "btTd"}>{cluster.locationRoll}</td>
                    <td id={cluster.cluster + "_location"} className={(cluster.location === 'Head' || cluster.location.includes('Crit')) ? "btTdCritical" : "btTd"}>{cluster.location}</td>
                </tr>
            ))}
            </tbody>
        </table>
      }
    </div>
  );
}

export default ClusterCalc;