import React, { Component } from 'react';
import {Button} from 'reactstrap';
import api from './api';
import isNull from 'stack-utils';
//import { request } from 'express';

class App extends React.Component{

  constructor (props)
  {
    super(props);
    this.state={items: [],
                value:"",};
                this.handleChange = this.handleChange.bind(this); 
  }
  handleChange(event) {
    this.setState({value:event.target.value});
  }    
    loadItems =async (e)=>
    {
        const  response = await api.get('');
        //var url=
        console.log(api.get(''));
        this.setState({items: response.data.items});
        //console.log(response.data.items);
       
        
    }
render(){
    var {items}=this.state;
    return(
        <div>
         <h3> listar todas as perguntas</h3>
         <br id="teste"></br>
    
            <p>Entre com a Duvida</p>
            <input type="text" name="duvida" id ="duvida"></input>    
             <Button type="submit" id="botao" onClick={(e)=>this.loadItems(e)} onChange={this.handleChange} color="primary"> Buscar </Button>
       
        <Button type="submit" id="prox" color="dark" onClick={(pages, perPage)=>
         { 
//while(has_more)
          //"has_more":true,"quota_max":300,"quota_remaining":160
    //         var numero = document.getElementById('numero').value; 
    //         //pegar as proximas páginas
    //         var father= document.body;
    //         for (var t=0;t<numero;t++)
    //         {
    //             var li=document.getElementById(t);
    //             father.removeChild(li);
    //         }
            
    //         perPage=numero;
    //         pages =0;
    //         var vetoraux=[];
    //         var start= Number(pages*numero);//3,3,3,1
    //         var end= Number(start +numero);//3,6,9,1
          
    //         if(items.length>numero)
    //         {
    //             console.log(items.splice(start,end));//tem que remover esse pedaço);
    //             console.log(items);
    //             for (var j=0;j<items.length;j++)
    //                 {   
    //                     if (vetoraux[pages]===undefined)
    //                     {vetoraux[pages]= [];}
    //                  vetoraux[pages].push(items[j]);
            
    //                     if ((j+1)% numero ===0)
    //                     {pages=pages+1;}
    //                 }
            
    //         if(items.length>numero)
    //         {
    //         for (var i=0; i<numero ;i++)
    //         {  
    //             var li = document.createElement('li');
    //             li.setAttribute('key',items[i].id);
    //             li.setAttribute('id',i);
    //             li.textContent="Nome: "+" "+items[i].name+" id: "+" "+items[i].id+" "+ " absoluteIndex: "+" "+items[i].absoluteIndex
    //             father.appendChild(li);
    //         }
    //  var p = (items.length-numero);
    //  if (!p%numero===0&& numero>p)
    //  {
    //     for (var q=0;q<p;q++)
    //  {
    //     var li = document.createElement('li');
    //     li.setAttribute('key',items[i].id);
    //     li.setAttribute('id',i);
    //     li.textContent="Nome: "+" "+items[i].name+" id: "+" "+items[i].id+" "+ " absoluteIndex: "+" "+items[i].absoluteIndex
    //     father.appendChild(li);
    //  }
    // }
    //     }
    //     }
        
    //         return vetoraux; 

         }}>Próxima página</Button>
               {    items.map(item=> (
 <ul key={items.title}>
 
    <p>
      <strong>question_id: </strong>  {item.question_id}<br></br>
      <strong>Título: </strong>{item.title} <br></br>
      <strong>Link: </strong><a href={item.link}>{item.link} </a> <br></br>
      ---
    </p>
  </ul>
))}

        </div>
    );}};
export default App;