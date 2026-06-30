import { useState } from "react";
const P = () => {

    const [user, setUser] = useState([{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Bob", age: 35 }]);
    const handleClick = () => {
        setUser([...user, { name: "Alice", age: 28 }]);
    }
    return (
        <div>
            {user.map((object, indx) => (
                <p key={indx}>{object.name} - {object.age} years old.</p>

            ))}
            <button onClick={handleClick}>Add User</button>
        </div>
    );
};
export const Message=()=>{
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
export default P;