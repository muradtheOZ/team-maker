import React from 'react';
import './Troops.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus} from '@fortawesome/free-solid-svg-icons'

const Troops = (props) => {
    const { trops_name, favourite_target, hitpoint, cost, attack_type, img } = props.troops;
    const handleAddTroops = props.handleAddTroops;

    return (
        <div className="col-md-3 align-self-center">
            <div className="card customCard p-3 m-3">
                <img src={img} className="card-imgTop" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{trops_name}</h4>
                    <p className="card-text"> Attack Type: {attack_type}</p>
                    <p className="card-text"> favorite Target: {favourite_target}</p>
                    <p className="card-text">Hit point: {hitpoint}</p>
                    <p className="card-text">Cost: $ {cost}</p>
                    <button onClick={() => handleAddTroops(props.troops)} className="btn btn-warning"> Add <FontAwesomeIcon icon={faPlus}/></button>
                </div>

            </div>
        </div>

    );
};

export default Troops;