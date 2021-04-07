import Recact from "react";
import GitCommandData from "../Data/GitCommandsData";

const GitCommands = () => {

  return (
    <table>
      <tr>
        <th className="tableColumn">Action</th>
        <th className="tableColumn">Git command</th>
        <th className="tableColumn">Note</th>
      </tr>
      {GitCommandData &&
        GitCommandData.map((x, index) => (
          <tr>
            <td className="tableColumn">{x.action}</td>
            <td className="tableColumn">{x.command}</td>
            <td className="tableColumn">{x.note}</td>
          </tr>
        ))}
    </table>
  );
};

export default GitCommands;
