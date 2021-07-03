import React from "react";
import {gql, useQuery} from "@apollo/client";


const LAUNCH_QUERY = gql `
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $fligth_number){
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
    let { match: {flight_number} } = this.params;
        flight_number = parseInt(flight_number);
        const {loading, error, data} = useQuery(LAUNCH_QUERY,{
            variables: {flight_number}
        });
        if(loading) return <h4>Loading...</h4>;
        if (error) console.log(error);
        console.log(data);
    return(
        <>
        </>
    )
}
export default Launch;
