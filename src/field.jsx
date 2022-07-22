/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { image, containerCenterCenter } from "./styles/table-style";
const Field = ({ data }) => {
    return (
        data.map((employee, index) => (
            <tr key={index} >
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>
                    <div css={containerCenterCenter}>
                        {employee.dob.age}
                    </div>
                </td>
                <td>
                    <div css={containerCenterCenter}>
                        {employee.gender}
                    </div>
                </td>
                <td>{employee.email}</td>
                <td>
                    <div css={containerCenterCenter}>
                        {employee.nat}
                    </div>
                </td>
                <td>
                    <div css={containerCenterCenter}>
                        <img css={image} src={employee.picture.thumbnail} />
                    </div>
                </td>
            </tr>
        )))
}
export default Field;