import React, { Component } from 'react'
import "../css/index.css"

export default class Index extends Component {
  render() {
    return (
        
      <div className='main_content_container'>  
        <div className='main_nav_container'>
            <div className='logo_cont'>
                <div>ZICLE</div>
            </div>
            <div className='options_container'>
                <div className='nav_buttons'>HOME</div>
                <div className='nav_buttons'>PRODUCTS</div>
                <div className='nav_buttons'>RESALE</div>
                <div className='nav_buttons'>ABOUT</div>   
            </div>
        {/*center content*/} 
        </div>       
        <div className='header_container'>
            <div className='header'>
                <h1>We're Better than protein bars</h1>
            </div>
        </div>
        {/*bottom scroll page*/}
        <div className='bottom_scroll_container'>
            <div className='scroll_content_container'>
                <div className='scroll_text'>Scroll</div>
                <div><i className=' scroll_arrow down'></i></div>
            </div>
        </div>
        {/**/}
        <div className='following content'>
            <div className='card__container left__card'>
                <div className='left__header card__header__side'>Affordable</div>
                <div className='left__content card__content__side'>
                    <div className='card__content__header'>Made with Your wallets in mind</div>
                    <div className='card__content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam facere voluptates, repudiandae architecto porro tempore corrupti maiores saepe autem numquam similique distinctio! Facere dolorum error ad sunt quaerat! Consequuntur, deleniti.</div>
                </div>
            </div>

            <div className='card__container tight__card'>
            <div className='right__header card__header__side'>Effective</div>
                <div className='right__content card__content__side'>
                    <div className='card__content__header'>Made to work</div>
                    <div className='card__content'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam cumque non dicta hic autem, mollitia vero molestiae quo accusantium! Laborum corporis doloremque sit nostrum harum eius odit excepturi? Eveniet, tempora.</div>
                </div>
            </div>
            <div className='card__container tight__card'>
            <div className='right__header card__header__side'>Alternative</div>
                <div className='right__content card__content__side'>
                    <div className='card__content__header'>Take a break from powders and bars</div>
                    <div className='card__content'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam cumque non dicta hic autem, mollitia vero molestiae quo accusantium! Laborum corporis doloremque sit nostrum harum eius odit excepturi? Eveniet, tempora.</div>
                </div>
            </div>
            <div className='icon__container'>
                <div className='icon__words'>Recovery</div>
                <div className='icon__words'>Pump</div>
                <div className='icon__words'>Hydration</div>
            </div>
        </div>
      </div>

    )
  }
}

