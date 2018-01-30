import * as React from 'react';
import * as style from './Content.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Content extends React.PureComponent
{
    private images = [
        'assets/projects/thumbs/banner1.jpg',
        'assets/projects/thumbs/banner2.jpg',
        'assets/projects/thumbs/banner3.jpg',
        'assets/projects/thumbs/banner4.jpg',
        'assets/projects/thumbs/banner5.jpg',
        'assets/projects/thumbs/banner6.jpg',
        'assets/projects/thumbs/banner7.jpg',
        'assets/projects/thumbs/banner8.jpg',
        'assets/projects/thumbs/banner9.jpg',
        'assets/projects/thumbs/banner10.jpg',
        'assets/projects/thumbs/banner11.jpg',
        'assets/projects/thumbs/banner12.jpg',
        'assets/projects/thumbs/banner13.jpg',
        'assets/projects/thumbs/banner14.jpg',
        'assets/projects/thumbs/banner15.jpg',
        
        'assets/projects/thumbs/info1.jpg',
        'assets/projects/thumbs/info2.jpg',
        
        'assets/projects/thumbs/moto.jpg',
        'assets/projects/thumbs/onion.jpg',
        
        'assets/projects/thumbs/play1.jpg',
        'assets/projects/thumbs/play2.jpg',
        
        'assets/projects/thumbs/poker1.jpg',
        'assets/projects/thumbs/poker2.jpg',
        
        'assets/projects/thumbs/shu1.jpg',
        'assets/projects/thumbs/shu2.jpg',
        'assets/projects/thumbs/shu3.jpg',
        'assets/projects/thumbs/sign.jpg',
        'assets/projects/thumbs/slot1.jpg',
        'assets/projects/thumbs/slot2.jpg',
        'assets/projects/thumbs/splash1.jpg',
        'assets/projects/thumbs/splash2.jpg',
        'assets/projects/thumbs/splash3.jpg',
        'assets/projects/thumbs/UE.jpg',
    ];
    
    render()
    {
        return (
            <div className={style.content}>
                {this.images.map(
                    (n:string, id:number)=>
                        <div className={style.element} key={n}>
                            <img  src={n}>
                            
                        </img>
                        </div>
                        
                )}
            </div>
        );
    }
}
