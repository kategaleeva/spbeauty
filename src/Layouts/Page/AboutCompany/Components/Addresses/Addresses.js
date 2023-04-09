import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className="col d-flex flex-column justify-content-between gap-2 mt-4 border-adresses">
            <div className='d-inline-flex flex-column gap-3 p-4'>
                <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div className='m-3'>
            <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;