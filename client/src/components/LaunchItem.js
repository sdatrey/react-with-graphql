import React from "react";

const LaunchItem = ({f_no,l_date,l_success,m_name}) => {
    return(
            <div className="card card-body mb-3" style={{background: '#363537'}}>
                <div className="row">
                    <div className="col-md-9">
                        <h4>Mission: {m_name}</h4>
                        <p>Date: {l_date}</p>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-secondary">Launch Details</button>
                    </div>
                </div>
            </div>
    )
}
export default LaunchItem;
