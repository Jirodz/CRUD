import React from "react";
import {db} from "../firebase";
import { collection, addDoc} from "firebase/firestore";
import { async } from "@firebase/util";

export default function Agregar(){
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc(collection(db, "todos"),{
            title,
            completed: false,
        });
        setTitle("");
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                <input
                    type="text"
                    placeholder="Ingresar..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <div className="btn_container">
                    <button>Agregar</button>
                </div>
    
            </div>
        </form>
    );

}


