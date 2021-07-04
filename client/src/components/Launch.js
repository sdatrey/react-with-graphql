import React from "react";
import {gql, useQuery} from "@apollo/client";
import {useParams} from 'react-router-dom';
import moment from "moment";

const LAUNCH_QUERY = gql `
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number,
            mission_name,
            launch_date_local,
            launch_success,
            rocket{
                rocket_id,
                rocket_name,
                rocket_type
            }
        }
    }
`;
const Launch = () => {
    let {flight_number}  = useParams();
        flight_number = parseInt(flight_number);
        console.log(flight_number)
        const {loading, error, data} = useQuery(LAUNCH_QUERY,{
            variables: { flight_number }
        });
        if(loading) return <h4>Loading...</h4>;
        if (error) console.log(error);
        const { mission_name, launch_date_local, launch_success, rocket:{ rocket_id, rocket_name, rocket_type} } = data.launch;
    return(
        <div >
            <h2 className="display-4 my-3">
                Mission: <span className="text-dark"> {mission_name}</span>
            </h2>
            <h5 className="mb-3">Launch Details</h5>
            <ul className="list-group" >
                <li className="list-group-item bg-dark text-light">
                    Flight Number: {flight_number}
                </li>
                <li className="list-group-item bg-dark text-light">
                    Launch Date: {moment(launch_date_local).format("DD-MM-YYYY")}
                </li>
                <li className="list-group-item bg-dark text-light">
                    Launch Success: <span style={launch_success ? {color : 'green'}: {color: 'red'}}>{launch_success ? "Yes": "No"}</span>
                </li>
            </ul>
            <h5 className="my-3">Rocket Details</h5>
                <ul className="list-group" >
                    <li className="list-group-item bg-dark text-light">
                        Rocket ID: {rocket_id}
                    </li>
                    <li className="list-group-item bg-dark text-light">
                        Rocket Name: {rocket_name}
                    </li>
                    <li className="list-group-item bg-dark text-light">
                        Rocket Type: {rocket_type}
                    </li>
                </ul>

        </div>
    )
}
export default Launch;
