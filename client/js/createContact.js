import { svgDelete } from "./svg.js";

export const createContactItem = () => {
    const contact = document.createElement('div');
    const contactType = document.createElement('div');
    const contactName = document.createElement('button');
    const contactList = document.createElement('ul');

    const contactDateOfBirth = document.createElement('li');  
    const contactPlaceOfBirth = document.createElement('li');  
    const contactGender = document.createElement('li');  
    const contactPassportSeries = document.createElement('li');  
    const contactPassportNumber = document.createElement('li');  
    const contactAddress = document.createElement('li');  
    const contactWork = document.createElement('li');  
    const contactPosition = document.createElement('li');  
    const contactAccountNumber = document.createElement('li');
  
    const role = document.createElement('li');   

    const contactPhone = document.createElement('li');
    const contactEmail = document.createElement('li');
    const contactOther = document.createElement('li');

    const contactInput = document.createElement('input');
    const contactDelete = document.createElement('button');
    const contactDeleteTooltip = document.createElement('span');

    contact.classList.add('contact');
    contactDeleteTooltip.classList.add('contact-tooltip', 'site-tooltip');
    contactType.classList.add('contact__type');
    contactName.classList.add('contact__name');
    contactList.classList.add('contact__list', 'list-reset');

    contactDateOfBirth.classList.add('contact__item');  
    contactPlaceOfBirth.classList.add('contact__item');  
    contactGender.classList.add('contact__item');   
    contactPassportSeries.classList.add('contact__item');   
    contactPassportNumber.classList.add('contact__item');   
    contactAddress.classList.add('contact__item');   
    contactWork.classList.add('contact__item');   
    contactPosition.classList.add('contact__item');   
    contactAccountNumber.classList.add('contact__item');   
 
    role.classList.add('contact__item');   

    contactPhone.classList.add('contact__item');
    contactEmail.classList.add('contact__item');
    contactOther.classList.add('contact__item');

    contactInput.classList.add('contact__input');
    contactDelete.classList.add('contact__delete');

    contactName.textContent = 'Телефон';
    contactDeleteTooltip.textContent = 'Удалить контакт';
    
    contactDateOfBirth.textContent = 'Дата рождения';  
    contactPlaceOfBirth.textContent = 'Место рождения'; 
    contactGender.textContent = 'Пол';
    contactPassportSeries.textContent = 'Серия паспорта'; 
    contactPassportNumber.textContent = '№ паспорта';
    contactAddress.textContent = 'Адрес';
    contactWork.textContent = 'Место работы';
    contactPosition.textContent = 'Должность';
    contactAccountNumber.textContent = '№ Счета';
    

    role.textContent = 'Роль';

    contactPhone.textContent = 'Телефон';
    contactEmail.textContent = 'Email';
    contactOther.textContent = 'Другое';

    contactInput.placeholder = 'Введите данные контакта';
    contactInput.type = 'text';
    contactDelete.innerHTML = svgDelete;

    contactDelete.addEventListener('click', (e) => {
        e.preventDefault();
        contact.remove();
        document.querySelector('.modal__btn-contact').classList.add('modal__btn-contact--active');
    });

    contactName.addEventListener('click', (e) => {
        e.preventDefault();
        contactList.classList.toggle('contact__list--active');
        contactName.classList.toggle('contact__list--active');
    });

    contactType.addEventListener('mouseleave', () => {
        contactList.classList.remove('contact__list--active');
        contactName.classList.remove('contact__list--active');
    });

    const setType = (type) => {
        type.addEventListener('click', () => {
            contactName.textContent = type.textContent;
            contactList.classList.remove('contact__list--active');
            contactName.classList.remove('contact__list--active');
        });
    }

    const typesArray = [ contactDateOfBirth,
        contactPlaceOfBirth, contactGender, contactPassportSeries, contactPassportNumber, contactAddress,
        contactWork, contactPosition, contactAccountNumber, contactPhone, contactEmail, contactOther, role ]; 

    for (const type of typesArray) {
        setType(type);
    }

    contactDelete.append(contactDeleteTooltip);
    contact.append(contactType, contactInput, contactDelete);
    contactType.append(contactName, contactList);
    contactList.append( contactDateOfBirth,
        contactPlaceOfBirth, contactGender, contactPassportSeries, contactPassportNumber, contactAddress,
        contactWork, contactPosition, contactAccountNumber, contactPhone, contactEmail, contactOther, role );

    return {
        contact,
        contactName,
        contactInput,
        contactDelete
    }
}