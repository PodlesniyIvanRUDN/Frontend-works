import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export const greetings = () =>{
    const {name, phone} = useContext(UserContext)

    if (name){
        return (
            <div style={{ position: 'absolute', right: '30px' }}>
                Здравствуйте, {name}
            </div>
        )
    }
    return null;
}