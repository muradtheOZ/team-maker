import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    //   console.log(props)
    const cart = props
    //    console.log(cart)
    let salary = 0;
    props.troop.map(troop => salary += troop.cost)

    return (
        <div>
            <div className ="row">
                <div className ="col-md-12 ">
                <h5>Total Cost</h5>
                <h3>{salary}</h3>
                </div>
                <div className="col-md-0">
                </div>

            </div>
            <div className="row customBox ">

                {
                    props.troop.map(troop => {
                        return (
                            <div className=" custom-width m-2 p-2  bg-warning">
                            <div>
                                <h5>{troop.trops_name}</h5>
                                <p><small>{troop.cost}</small></p>
                            </div>
                            </div>
                           

                        )
                    })
                }
        </div>

        </div>
       

    );
};

export default Calculation;