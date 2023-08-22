
import Image from 'next/image'; 
import Img from '../../../public/img/Campus1.png';

export default function VirtualImages() {
    return (
        <div className="campus-col">
            <Image src={Img} alt="#" />
            <div className="layer">
                <h3>DELHI</h3>
            </div>
        </div>
    );
}
