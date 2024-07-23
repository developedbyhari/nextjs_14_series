import { revalidatePath } from "next/cache"


const database = {
    name: "hari"
}


export default function Test() {


    const formSubmit = async (formdata) => {
        "use server"
        //database operations
        database["name"] = formdata.get("user")
        revalidatePath('/test')

    }

    return (
        <>
            <h1>{database.name}</h1>
            <form action={formSubmit}>
                <input type="text" name="user" />
                <button>submit</button>
            </form>
        </>
    )
}