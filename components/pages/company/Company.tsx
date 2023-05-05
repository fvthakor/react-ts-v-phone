import { useState } from "react";
import AddCompany from "./AddCompany";
import CompanyDropdown from "./CompanyDropdown";
const people = [
    { name: 'Wade Cooper' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
    { name: 'Add Company' },
  ]
const Company = () => {
    const [selected, setSelected] = useState(people[0])
    const selectCompany = (value:any) => {
        if(value.name === 'Add Company'){
            openModal();
        }else{
            setSelected(value);
        }
      }

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    return(
        <>
            <CompanyDropdown selected={selected} people={people} selectCompany={selectCompany} />
            <AddCompany isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}

export default Company;