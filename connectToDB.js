const mongoose = require('mongoose');
// 2AGxSemXLOeUqcYs
const uri = 'mongodb+srv://admin:admin@cluster0.a21e1wa.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri);
mongoose.set("strictQuery", false);
mongoose.set('strict', false);

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,    
})

const UserModel = mongoose.model('UserModel', UserSchema)

main().catch((err) => console.log('error', err));
async function main() {
    // await UserModel.deleteMany({ _id: { $exists: true } })
    // const users = await UserModel.deleteMany()
    // const users = await UserModel.insertMany([
    //     { name: 'a'},
    //     { name: 'b'},
    //     { name: 'c'},
    // ]);
    console.log((await UserModel.caller));
}

const authorSchema = new mongoose.Schema({
    name: String,
    stories: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }
})
const storySchema = new mongoose.Schema({
    name: String,
    author: {
        type: Schema.Types.ObjectId
    }
})
