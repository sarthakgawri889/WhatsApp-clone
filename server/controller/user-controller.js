import User from "../model/User.js"
export const addUser=async (request, response)=>{  //data daala
    try{
       let exist = await User.findOne({sub:request.body.sub})
       if(exist){
            response.status(200).json({msg:'user already exists'});
            return;
       }

       const newUser = new User(request.body);
       await newUser.save();
       return response.status(200).json(newUser);
    }catch(err){
        return response.status(500).json(err);
    }
} 

export const getUsers = async (request,response)=>{ //data nikaala
    try{
        const users = await User.find({});
        return response.status(200).json(users);
    }catch(error){
        return response.status(500).json(error.message);
    }
} //ab jayenge api.js m api bnaenge 