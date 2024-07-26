import Card from "./card"
function CardList() {
    //const name="DETAILS";
    const college = "SVECW";
    const userObject = { branch: "AIML", year: "3" };
    const users = ["Vijaya", "Meghana", "Yamini", "Sowjanya", "Bhargavi","Harshitha","Hari","Bhavs"]
    return (
        <div className="container">
            <div className="row">
                    {
                        users.map(
                            (data, index) => (<Card key={index}
                                //program={name}
                                col={college}
                                user={userObject}
                                userFromArray={data} />)
                        )
                    }
                    </div>
                </div>
    );
}
export default CardList;