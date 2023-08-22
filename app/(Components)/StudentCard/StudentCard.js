import Image from 'next/image'

export default function StudentCard(props) {
  return (
    <>
     <div class="testimonials-col">
                <Image src={props.scr} alt="oo.." />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class={props.classTitle}></i>
                </div>
            </div>
    </>
  )
}
