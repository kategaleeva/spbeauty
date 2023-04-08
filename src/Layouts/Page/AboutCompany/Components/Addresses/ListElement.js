import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';
import SettingsIcon from '../../../../../Icons/SettingsIcon';

const Option = styled.div`
    outline: none;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-1'>
            <Option className='flex-grow-1 py-3 pe-5'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;