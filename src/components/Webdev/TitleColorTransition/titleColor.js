import './titleColor.css'
import React from 'react';

const TitleColor = (props) => {
    return (
        <>
            <div class='center-title-color'>
              <p class="awesome-text">{props.first}<p class={`awesome ${props.colors+"1"}`}>{props.first}</p></p>
              <p class="awesome-text">{props.second}<p class={`awesome ${props.colors+"2"}`}>{props.second}</p></p>
              <p class="awesome-text">{props.third}<p class={`awesome ${props.colors+"3"}`}>{props.third}</p></p>
            </div>
        </>
    )
  }
  
  export default TitleColor