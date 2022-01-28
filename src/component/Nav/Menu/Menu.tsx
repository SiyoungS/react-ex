import react from 'react';
import Nav from '../Nav';
import style from './Menu.module.scss'


const Menu=(param:any) =>{
  <Nav/>
  return(
    <div className={style.menu}>메뉴</div>
  )
}

export default Menu