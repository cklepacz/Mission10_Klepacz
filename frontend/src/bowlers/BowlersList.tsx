import { useEffect, useState } from 'react';
import { Bowlers } from '../types/Bowlers';

function BowlersList() {
  const [BowlerData, setBowlerData] = useState<Bowlers[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5228/bowl');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  const filteredTeams = ['Marlins', 'Sharks'];

  const filteredData = BowlerData.filter((bowler) =>
    filteredTeams.includes(bowler.team.teamName),
  );

  return (
    <>
      <div className="row">
        <h4 className="text-center">
          Check out this table of all the Bowlers in the League! Currently
          displayed is members of the "Marlins" and "Sharks"
        </h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((f) => (
            <tr key={f.bowlerId}>
              <td>{f.bowlerFirstName}</td>
              <td>{f.bowlerMiddleInit}</td>
              <td>{f.bowlerLastName}</td>
              <td>{f.team.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlersList;
