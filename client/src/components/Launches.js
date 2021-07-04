import React from "react";
import { gql, useQuery } from '@apollo/client';
import logo from "../logo.png";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number,
            mission_name,
            launch_date_local,
            launch_success
        }
    }
`;

const Launches = () => {
    const {loading, error, data} = useQuery(LAUNCHES_QUERY)
    if(loading) return <h1>Loading....</h1>;
    if (error) console.log(error);

    const filteredLaunches = data.launches.filter((launch) => launch.flight_number < 100)
    return(
            <div>
                <img src={logo} alt="" style={{width: 300, display: 'block', margin: 'auto'}}/>
                <h1 className="display-4 my-3">Launches</h1>
                <div className="my-3">
                    <p>
                        <span className="px-3 m-2 bg-success" /> = Success
                    </p>
                    <p>
                        <span className="px-3 m-2 bg-danger" /> = fail
                    </p>
                </div>
                {
                   filteredLaunches.map((launch) => {
                        return(

                       <LaunchItem key={launch.flight_number}
                                   f_no={launch.flight_number}
                                   m_name={launch.mission_name}
                                   l_success={launch.launch_success}
                                   l_date={launch.launch_date_local}
                       />
                        )
                    })
                }
            </div>
    )
};
export default Launches;
