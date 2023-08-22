
import Image from 'next/image'; 

export default function VirtualImages(props) {
    return (
        <div className="campus-col">
            <Image src={props.scr} alt="#" />
            <div className="layer">
                <h3>{props.heading}</h3>
            </div>
        </div>
    );
}
