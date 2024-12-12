
import './App.css'
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'green',
        color: 'cyan',
        borderRadius:'15px'
    }
};
export default function App() {
    return (
        <div style={person.theme}>
            <h1>{person.name}&#39;s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"

            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

