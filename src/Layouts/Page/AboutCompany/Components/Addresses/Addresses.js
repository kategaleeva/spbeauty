import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className="col">
            <div class="gap-4"></div>
            <div className='d-inline-flex flex-column gap-3'>
            <div className='title'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;