import styled from 'styled-components';
import { Card } from "antd";

export const DisplayWrapper = styled.div`
    padding: 0px 20px;
`;

export const DisplayStyled = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 14px;
`;

export const CardStyled = styled(Card)`
    width:300px;
    border: 1px solid #e8e8e8;
    .ant-card-actions{
        background: #fafafa;
        border-top: 1px solid #e8e8e8;
    }
`
export const CoverWrapper = styled.div`
    display: flex;
    background: #f5f5f5;
    justify-content:center;
    align-items: center";
`;
