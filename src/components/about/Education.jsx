import React from "react";
import "./education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BBA</td>
          <td>Accounting</td>
          <td>Madan Mohan College</td>
          <td>2020 - Present</td>
        </tr>

        <tr>
          <td>HSC</td>
          <td>Business Studies</td>
          <td>Dakshin Surma Govt. College</td>
          <td>2018 - 2020</td>
        </tr>

        <tr>
          <td>SSC</td>
          <td>General</td>
          <td>Tafsirul Quran Dakhil Madrasha</td>
          <td>2008 - 2018</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
