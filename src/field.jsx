/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { image, containerCenterCenter } from "./styles/table-style";
const Field = ({ data }) => {
    console.log("data", data)
    return (
        
        data.map((employee, index) => (
            <tr key={index} >
                <td>{employee[0].name.first}</td>
                <td>{employee[0].name.last}</td>
                <td>
                    <div css={containerCenterCenter}>
                        {employee[0].dob.age}
                    </div>
                </td>
                <td>
                    <div css={containerCenterCenter}>
                        {employee[0].gender}
                    </div>
                </td>
                <td>{employee[0].email}</td>
                <td>
                    <div css={containerCenterCenter}>
                        {employee[0].nat}
                    </div>
                </td>
                <td>
                    <div css={containerCenterCenter}>
                        <img css={image} src={employee[0].picture.thumbnail} />
                    </div>
                </td>
            </tr>
        ))
    )
}
export default Field;