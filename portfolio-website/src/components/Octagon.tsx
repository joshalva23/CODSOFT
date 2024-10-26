import polygon1 from '../assets/polygon-1-1.svg';
import polygon2 from '../assets/polygon-2-1.svg';
import polygon3 from '../assets/polygon-3-1.svg';
import sample from '../assets/sample-img.png';

function Octagon({ size }: { size: string }) {

    return (
        <div className="flex flex-row">
            <div className="w-full overflow-hidden">
                <img 
                    src={sample} 
                    alt="Foreground" 
                    style={{ height: `${size}rem`, width: 'auto' }} 
                    className={`absolute top-10 left-[63.25vw] z-40 `} 
                />
            </div>
            <img 
                src={polygon1} 
                alt="Octagon" 
                style={{ height: `${size}rem`, width: 'auto' }} 
                className={`absolute top-10 left-[64vw] z-30 `} 
            />
            <img 
                src={polygon2} 
                alt="Octagon" 
                style={{ height: `${size}rem`, width: 'auto' }} 
                className={`absolute  top-10 left-[66vw] z-10 `} 
            />
            <img 
                src={polygon3} 
                alt="Octagon" 
                style={{ height: `${size}rem`, width: 'auto' }} 
                className={`absolute top-10 left-[65vw] z-20 `} 
            />
        </div>
    );
}


export default Octagon;