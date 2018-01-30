import * as React from 'react';
import * as style from './Brick.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Brick extends React.PureComponent<BrickProps>
{
    render()
    {
        return (
            <div className={style.brick}>
                <img className={style.image} src={this.props.path}/>
                <img className={style.cover} src={this.props.path}/>
            </div>
        );
    }
}

interface BrickProps {
    path:string;    
}
