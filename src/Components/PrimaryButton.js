import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
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
        background: #3B82F6;
        border-radius: 24px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: #3B82F6;
            opacity: 0.8;
        }
        &:active {
            background: #0F172A;
            opacity: 0.6;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;