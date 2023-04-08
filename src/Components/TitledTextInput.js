import styled from "styled-components";

const Input = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 16px;

width: 447px;
height: 34px;
    outline: none;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    <TitledTextInput title='Название компании' def='SPBEAUTY'/>
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption color-grey'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-3' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;