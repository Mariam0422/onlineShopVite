 import React, { Component } from 'react'
 
 export class Categories extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Все"
                }, 
                {
                    key: "livingRoom",
                    name: "Гостиная"
                }, 
                {
                    key: "office",
                    name: "Офис"
                }, 
                {
                    key: "bedroom",
                    name: "Спальня"
                }, 
                {
                    key: "kitchen",
                    name: "Кухня"
                }, 
                {
                    key: "street",
                    name: "Улица"
                }, 
                {
                    key: "hallway",
                    name: "Прихожая"
                }, 
            ]
        }
    }
   render() {
     return (
       <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick={()=> this.props.chooseCategory(el.key)} >
                {el.name}
            </div>
        ))}
       </div>
     )
   }
 }
 
 export default Categories