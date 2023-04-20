import React from "react";

/**
 * Тип для пропсов
 *
 * @param {T[]} items - массив элементов для вывода
 * @param {string} class - название класса контейнера
 * @param renderItem - функция для рендера
 * **/
interface IListProps<T> {
    items: T[];
    class: string;
    renderItem: (item: T, id: number) => React.ReactNode;
}

/**
 * Функция для вывода списка
 *
 * @param {IListProps} props - пропсы
 * **/
export default function List<T>(props: IListProps<T>) {
    return (
        <ul className={props.class}>
            {props.items.map(props.renderItem)}
        </ul>
    );
}