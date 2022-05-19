import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage} from 'react-intl';
import './joblists.css';

const JobsList = (props) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 1000
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 1320
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 3450
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className={props.idioma=='en'?"thead-dark":"thead-light"}>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Position"/></th>
            <th scope="col"><FormattedMessage id="Company"/></th>
            <th scope="col"><FormattedMessage id="Salary"/></th>
            <th scope="col"><FormattedMessage id="City"/></th>
            <th scope="col"><FormattedMessage id="PublicationDate"/></th>
            <th scope="col"><FormattedMessage id="Views"/></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job idioma={props.idioma} key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
