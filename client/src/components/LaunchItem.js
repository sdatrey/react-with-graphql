import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const LaunchItem = ({f_no,l_date,l_success,m_name}) => {
    return(
            <div className="card card-body mb-3" style={{background: '#363537'}}>
                <div className="row">
                    <div className="col-md-9">
                        <h4 >Mission: <span style={l_success ?{color: 'green'}: {color: 'red'}}>{m_name}</span> </h4>
                        <p>Date: {moment(l_date).format("YYYY-MM-DD")}</p>
                    </div>
                    <div className="col-md-3">
                        <Link to={`/launch/${f_no}`} >
                            <button className="btn btn-secondary" >Launch Details</button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}
export default LaunchItem;
