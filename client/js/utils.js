import { contactTooltip } from "./createTooltip.js";
import { svgPhone, svgEmail, svgOther } from "./svg.js";

/*Добавление данных*/

export const createContactLink = (type, value, element, svg, item) => {
    const setTooltip = contactTooltip(type, value);
    element = document.createElement('a');
    element.classList.add('contacts__link');
    element.innerHTML = svg;

    if (type === 'Email') {
        element.href = `mailto:${value.trim()}`;
    } else if (type === 'Телефон') {
        element.href = `tel:${value.trim()}`;
        setTooltip.tooltipValue.style.color = 'var(--color-white)';
        setTooltip.tooltipValue.style.textDecoration = 'none';
    } else {
        element.href = value.trim();
    }

    element.append(setTooltip.tooltip);
    item.append(element);
}

export const createContactItemByType = (type, value, item) => {
    switch (type) {
        case 'Телефон':
            let phone;
            createContactLink(type, value, phone, svgPhone, item);
            break;
        case 'Email':
            let email;
            createContactLink(type, value, email, svgEmail, item); 
            break;
        case 'Другое':
            let other;
            createContactLink(type, value, other, svgOther, item);  
            break;      
        case 'Дата рождения':
            let contactDateOfBirth;
            createContactLink(type, value, contactDateOfBirth, svgOther, item);  
            break; 
        case 'Место рождения':
            let contactPlaceOfBirth;
            createContactLink(type, value, contactPlaceOfBirth, svgOther, item);  
            break;
        case 'Пол':
            let contactGender;
            createContactLink(type, value, contactGender, svgOther, item);  
            break;  
        case 'Серия паспорта':
            let contactPassportSeries;
            createContactLink(type, value, contactPassportSeries, svgOther, item);  
            break; 
        case '№ паспорта':
            let contactPassportNumber;
            createContactLink(type, value, contactPassportNumber, svgOther, item);  
            break;  
        case 'Адрес':
            let contactAddress;
            createContactLink(type, value, contactAddress, svgOther, item);  
            break; 
        case 'Место работы':
            let contactWork;
            createContactLink(type, value, contactWork, svgOther, item);  
            break; 
        case 'Должность':
            let contactPosition;
            createContactLink(type, value, contactPosition, svgOther, item);  
            break; 
        case '№ Счета':
            let contactAccountNumber;
            createContactLink(type, value, contactAccountNumber, svgOther, item);
            break;   
        case 'Роль':
            let role;
            createContactLink(type, value, role, svgOther, item);        
            break; 
        default:
            break;
    }
}

export const formatDate = data => {
    const newDate = new Date(data);

    const correctDate = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }

    const resultDate = newDate.toLocaleString('ru', correctDate);

    return resultDate;
}

export const formatTime = data => {
    const newDate = new Date(data);

    const correctDate = {
        hour: 'numeric',
        minute: 'numeric',
    }

    const resultTime = newDate.toLocaleString('ru', correctDate);

    return resultTime;
}