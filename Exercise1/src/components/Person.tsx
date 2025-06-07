
interface PersonPropsI{
    name: string;
    age: number;
    isDeveloper: boolean;
}



export const Person = ({name, age, isDeveloper}: PersonPropsI) => {
    return(
        <div>
            <h2>Person name: {name} </h2>
            <p>Perosn age: {age} </p>
            <p>{isDeveloper? "The person is developer" : "The person is not a developer!"}</p>

        </div>
    )
}

