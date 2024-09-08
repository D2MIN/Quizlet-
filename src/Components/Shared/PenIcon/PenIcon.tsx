import {ReactComponent as Pen} from './pen-svgrepo-com.svg';
import style from './PenIcon.module.scss';

export function PenIcon(){
    return(
        <div className={style.pen}>
            <Pen />
        </div>
    );
}