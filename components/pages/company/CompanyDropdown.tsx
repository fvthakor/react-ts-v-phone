// const CompanyDropdown = () => {

// }

// export default CompanyDropdown;

import { Fragment, useState } from 'react'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, PlusIcon, TrashIcon} from '@heroicons/react/20/solid'
import ConfirmButton from '@/components/shared/ConfirmButton'
export interface PeopleInterface{
    name:string
}
export interface CompanyDropdownInterface{
    selected:PeopleInterface,
    selectCompany:Function,
    people:PeopleInterface[]
}
export default function CompanyDropdown({selected, selectCompany, people}:CompanyDropdownInterface) {

    const deleteComany = () => {
        console.log('delete company');
    }
  return (
    <>
        <div className="fixed top-[105px] sm:top-[7px] right-1 min-w-[200px] z-50">
            <Listbox value={selected} onChange={(e) => selectCompany(e)}>
                <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-indigo-600 text-white font-bold">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-white-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                        <div className='flex'>
                            <div className='flex-grow'>
                                <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                    }`
                                }
                                value={person}
                                >
                                {({ selected }) => (
                                    <>
                                    <span
                                        className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                        }`}
                                    >
                                        {person.name}
                                    </span>
                                    {selected &&  person.name !== 'Add Company' ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                    { person.name === 'Add Company' ? <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"><PlusIcon className="h-5 w-5" aria-hidden="true"/></span> : null}
                                    

                                    
                                    </>
                                )}
                                </Listbox.Option>
                            </div>
                            <div className='flex'>
                                { person.name !== 'Add Company' 
                                ? 
                                    <ConfirmButton title='Delete!' text='Are you sure delete!'>
                                        <span className="flex items-center pl-2 pr-1 text-red-500 cursor-pointer" onClick={() => deleteComany()} ><TrashIcon className="h-5 w-5" aria-hidden="true"/></span> 
                                    </ConfirmButton>
                                    
                                : null}
                            </div>
                        </div>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>
        </div>
        
    </>
   
  )
}
