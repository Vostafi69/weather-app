import React, {FC} from "react";
import './cityItem.scss';
import {useAppDispath} from "../../hooks/hook";
import {addCity} from "../../store/cityesSlice";

/**
 * Тип пропсов
 *
 * @param {string} text - содержание элемента списка
 * @param {string} nameClass - название класса элемента списка
 * **/
interface IProps {
    text: string;
    nameClass: string;
}

/**
 * Возвращает элемент списка
 *
 * @param {string} text - содержание элемента списка
 * @param {string} nameClass - название класса
 * **/
const CityItem: FC<IProps> = ({text, nameClass}) => {
    const dispatch = useAppDispath();

    return (
        <li onClick={() => dispatch(addCity(text))} className={nameClass}>{text}</li>
    );
}

export default CityItem;