import React, {FC} from "react";
import List from "../list";
import CityItem from "../CityItem/CityItem";
import './plate.scss';
import '../WeatherInfo/weatherInfo.scss';

const cityes: string[] = ['Москва', 'Санкт-Петербург', 'Казань', 'Хабаровск', 'Владивосток'];

const Plate: FC = () => {
    return (
        <div className='plate'>

            {/*{В компонент}*/}

            <div className='plate-left'>
                <div className='weather-info'>
                    <div className='weather-info__deg'>-11°</div>
                    <div className='weather-info-rest'>
                        <div className='weather-info__city'>Хабаровск</div>
                        <div className='weather-info__date'>13:26 - суббота, 18 февраля</div>
                        <div className='weather-info__day-status'>День</div>
                    </div>
                </div>
            </div>

            {/*{В компонент}*/}

            <div className='plate-right'>
                <List items={cityes}
                      class={'default-cityes'}
                      renderItem={(city: string, i: number) => <CityItem key={i} text={city} nameClass={'default-cityes__item'}/>}
                />
            </div>
        </div>
    );
}

export default Plate;