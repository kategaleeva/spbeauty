import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 16px;

width: 217px;
height: 34px;
        background: #FFFFFF;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        color: #152842;
        &:hover {
            background: #FFFFFF;
            border: #FFFFFF;
            opacity: 0.8
        }
        &:active {
            background: #FFFFFF;
            border: #FFFFFF;
            opacity: 0.6;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;