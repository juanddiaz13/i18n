import React from "react";
import {FormattedDate} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import {FormattedMessage} from 'react-intl';

const Job = (props) => {
  console.log(props.idioma)
  console.log(props.offer.visits)
  let leng = 'en';
  if(props.idioma=='en'){
      leng = 'million'
  }
  if(props.idioma=='es'){
      if(props.offer.salary==1){
        leng='millón'
      }
      else{
        leng = 'millones'
      }
  }
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedMessage
            id="salary"
            description="Salary in million"
            defaultMessage="{salary}"
            values={
              {
                salary: props.offer.salary + " " + leng,
              }
              }
/>
      </td>
      <td>{props.offer.city}</td>
      <td><FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      />
      </td>
      <td>
      <FormattedNumber value={props.offer.visits} /></td>
    </tr>
  );
};

export default Job;
