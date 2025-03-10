import express, {Express, Request, Response , NextFunction} from "express"
import { IUser, User } from "./models/User";

const app : Express = express();
const port = 3000;


app.use(express.json());

interface CustomRequest extends Request{
    startTime?: number
}

// middleware -> add startTime to request
interface User {
    name: string,
    email: string
}

app.use((req: CustomRequest, res: Response, next : NextFunction) => {
    req.startTime = Date.now();
    next()
})



app.get('/', (req : Request, res : Response) => {
    res.send("Hello TS with express")
})


//  post route -> new user -> name, email
app.post('/user', (req: Request<{}, {}, User>, res : Response)=> {
    const {name, email} = req.body;
    res.json({
        message : `User created ${name}-${email}`
    })
})

// get user based on id
app.get('/users/:id', (req : Request<{id:string}>, res : Response) => {
    const {id} = req.params;
    res.json({
        userId: id
    })
})

// get users
app.get('/', async(req : Request, res: Response)=> {
    try{
        const user: IUser[] = await User.find()
    }catch(e){
        res.status(400).json({ message: "Some error occured"})
    }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})