import React from 'react'
import InputButton from '../InputButton/InputButton'

export default function InputForm(props) {
    return (
       <>
        <div class="comment-box">
            <h3>Leave a Comment</h3>
            <form class="comment-form">
                <input type="text" placeholder="Enter Name" required />
                <input type="email" placeholder="Enter Email" required />
                <textarea rows="5" placeholder="Your Comment"></textarea>
            </form><InputButton text={props.btnTxt}/>
        </div>
       </>
    )
}
