import '../App.css';
import scroll from '../assets/vectors/scroll.svg';

function ScrollUp() {
    return (
        <aside>
            <a href="#top"><img src={scroll} className="scrollUp"/></a>
        </aside>
    )
}

export default ScrollUp;