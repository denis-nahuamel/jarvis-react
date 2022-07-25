/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
export const containerCenterCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const container = css`
    ${containerCenterCenter};
    flex-direction: column;
    margin:15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 20px;
`
export const image = css`
    border-radius: 40px;
`
export const containerButton = css `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 10px;
`
export const button = css `
    background: #548fc2;
    border: none;
    color: white;
    border-radius: 12px;
    height: 40px;
    cursor: pointer;
`
