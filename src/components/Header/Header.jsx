import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'
const Header = () => {
  return (
    <>
 <Title>Транспорт</Title>
    <div className="wrap">
       <Card title="IPHONE" photo="/IPHONE.webp" price="1200$"/>
       <Card title="Велик" photo ="/card-1.jfif" price="200$"/>
       <Card title="Комп" photo="/Card-2.jfif" price="2999$"/>
       <Card/>
    </div>
    </>
  )
}

export default Header