import React from 'react'
import Image from 'next/image'

export default function OurFacilitiesCard(props) {
  return (
    <>
    <div className="facilities-col">
                <Image src={props.scr} alt=""/>
                <h3>{props.tittle}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
    </>
  )
}
