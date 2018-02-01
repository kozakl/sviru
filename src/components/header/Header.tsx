import * as React from 'react';
import * as style from './Header.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Header extends React.PureComponent
{
    render()
    {
        return (
            <div className={style.brick}>
                <h1 className={style.header}>Tomasz Swirzewski</h1>
                <h1 className={style.portfolio}>Portfolio</h1>
            </div>
        );
    }
}
