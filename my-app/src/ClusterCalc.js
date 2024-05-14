import './App.css';
import './Battletech.css';
import { useState } from "react";

function randomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function getLocation() {
    const locationRoll = randomInt(1, 6) + randomInt(1, 6);
    switch(locationRoll) {
        case 2:
            return {roll: locationRoll, left:"Left Torso [critical]", center:"Center Torso [critical]",right:"Right Torso [critical]"};
        case 3:
            return {roll: locationRoll, left:"Left Leg (Left Rear Leg)", center:"Right Arm (Right Front Leg)",right:"Right Leg (Right Rear Leg)"};
        case 4:
            return {roll: locationRoll, left:"Left Arm (Left Front Leg)", center:"Right Arm (Right Front Leg)",right:"Right Arm (Right Front Leg)"};
        case 5:
            return {roll: locationRoll, left:"Left Arm (Left Front Leg)", center:"Right Leg (Right Rear Leg)",right:"Right Arm (Right Front Leg)"};
        case 6:
            return {roll: locationRoll, left:"Left Leg (Left Rear Leg)", center:"Right Torso",right:"Right Leg (Right Rear Leg)"};
        case 7:
            return {roll: locationRoll, left:"Left Torso", center:"Center Torso",right:"Right Torso"};
        case 8:
            return {roll: locationRoll, left:"Center Torso", center:"Left Torso",right:"Center Torso"};
        case 9:
            return {roll: locationRoll, left:"Right Torso", center:"Left Leg (Left Rear Leg)",right:"Left Torso"};
        case 10:
            return {roll: locationRoll, left:"Right Arm (Right Front Leg)", center:"Left Arm (Left Front Leg)",right:"Left Arm (Left Front Leg)"};
        case 11:
            return {roll: locationRoll, left:"Right Leg (Right Rear Leg)", center:"Left Arm (Left Front Leg)",right:"Left Leg (Left Rear Leg)"};
        case 12:
            return {roll: locationRoll, left:"Head", center:"Head",right:"Head"};
        default:
            return {roll: locationRoll, left:"Head", center:"Head",right:"Head"};
    }
}

function calc(callback) {
    var damage = parseInt(document.getElementById('totalDamage').value);
    const cluster = parseInt(document.getElementById('clusterSize').value);
    const result = [];
    var x = 1;
    console.log(getLocation());
    while (damage > 0) {
        if (damage <= cluster) {
            result.push({cluster: x, damage: damage, location: getLocation()});
            damage = 0;
        } else {
            result.push({cluster: x, damage: cluster, location: getLocation()});
            damage = damage - cluster;
        }
        x++;
    }
    callback(result);
}

function ClusterCalc() {
  const [data, setData] = useState([]);
  return (
    <div>
      <h1>Welcome to Cluster Calc</h1>

      <label htmlFor='totalDamage'>Total Damage:</label>
      <input type='number' id='totalDamage' name='totalDamage' min='0' max='100' defaultValue={20}/>
      <br/>
      <label htmlFor='clusterSize'>Cluster Size:</label>
      <input type='number' id='clusterSize' name='clusterSize' min='1' max='100' defaultValue={5}/>
      <br/>
      <button type='button' onClick={() => calc(setData)} >Calculate</button>
      {data.length === 0 &&
        <p>Test message</p>
      }
      {data.length > 0 &&
        <table className='btTable'>
            <thead>
                <tr>
                    <th scope='col' className='btTh'>Damage</th>
                    <th scope='col' className='btTh'>Roll</th>
                    <th scope='col' className='btTh'>Left</th>
                    <th scope='col' className='btTh'>Center</th>
                    <th scope='col' className='btTh'>Right</th>
                </tr>
            </thead>
            <tbody>
            {data.map((cluster) => (
                <tr id={cluster.cluster}>
                    <td id={cluster.cluster + "_damage"} className={(cluster.location.roll === 2 || cluster.location.roll ===12) ? "btTdCritical" : "btTd"}>{cluster.damage}</td>
                    <td id={cluster.cluster + "_roll"} className={(cluster.location.roll === 2 || cluster.location.roll ===12) ? "btTdCritical" : "btTd"}>{cluster.location.roll}</td>
                    <td id={cluster.cluster + "_left"} className={(cluster.location.roll === 2 || cluster.location.roll ===12) ? "btTdCritical" : "btTd"}>{cluster.location.left}</td>
                    <td id={cluster.cluster + "_center"} className={(cluster.location.roll === 2 || cluster.location.roll ===12) ? "btTdCritical" : "btTd"}>{cluster.location.center}</td>
                    <td id={cluster.cluster + "_right"} className={(cluster.location.roll === 2 || cluster.location.roll ===12) ? "btTdCritical" : "btTd"}>{cluster.location.right}</td>
                </tr>
            ))}
            </tbody>
        </table>
      }
    </div>
  );
}

export default ClusterCalc;