import { connect } from "../../../dbConfig"
import User from "../../../model"

connect()


export async function GET() {
    const users = await User.find();
    return Response.json(users)
};


export async function POST(req) {
    const reqBody = await req.json();
    const user = new User({
        name: reqBody.name
    });
    await user.save()
    return Response.json("user added successfully")
}

export async function DELETE(req) {
    const reqBody = await req.json();
    const findUser = await User.findByIdAndDelete(reqBody.id)

    if (!findUser) {
        return Response.json("user not found")
    }

    return Response.json("user deleted")
}


export async function PUT(req) {
    const reqBody = await req.json();
    const findUser = await User.findByIdAndUpdate(reqBody.id, {
        name: reqBody.name
    })

    if (!findUser) {
        return Response.json("user not found")
    }

    return Response.json("user updated")
}