import React from 'react';
import './css/SchoolCard.css';

function SchoolCard(props) {
  return(
    <div className="col-4">
      <div className="card">
        <h5 className="card-header">{props.school.ENTITY_NAME}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge">2016-17</span>
            <span className="badge">2017-18</span>
            <span className="badge">2018-19</span>
            <span className="badge">2019-20</span>
            
          </h5>
          <span className="badge badge-header">Student Data</span>
          <ul className="list-group">
                <li className="list-group-item">Year: {props.school.YEAR}</li>
                <li className="list-group-item">Males: {props.school.NUM_MALE}</li>
                <li className="list-group-item">Females: {props.school.NUM_FEMALE}</li>
                <li className="list-group-item">PCT Hisp: {props.school.PER_HISP}</li>
                <li className="list-group-item">PCT Black: {props.school.PER_BLACK}</li>
                <li className="list-group-item">PCT Asian: {props.school.PER_ASIAN}</li>
                <li className="list-group-item">PCT White: {props.school.PER_WHITE}</li>
                <li className="list-group-item">PCT ELL: {props.school.PER_ELL}</li>
            
          </ul>
          <span className="badge badge-header">School Data</span>
          <ul className="list-group">
            <li className="list-group-item">School Report Card</li>
            <li className="list-group-item">Student and Educator Report</li>
            <li className="list-group-item">3-8 ELA Assessment Data</li>
            <li className="list-group-item">3-8 Math Assessment Data</li>
          </ul>
        
        </div>
      </div>
    </div>
    
  );
}

export default SchoolCard;
