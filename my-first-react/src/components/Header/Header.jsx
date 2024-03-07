import './Header.css';
import {Button} from "../Button/Button.jsx";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <Button color='red'  />
        </header>
    );
}