import Conversation from "../model/Conversation.js";

export const newConversation = async(request,response)=>{
    try{ 
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        // console.log(receiverId)
        // console.log(senderId);
        const exist = await Conversation.findOne({members:{$all: [senderId,receiverId]}})
        if(exist){
            return response.status(200).json('Conversation already exists')
        }

        const newConversation = new Conversation({
            members: [senderId,receiverId]
        })

        await newConversation.save();
        return response.status(200).json('Conversation saved successfully');
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const getConversation = async(request,response)=>{
    try{ 
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        // console.log(request.body);

        let conversation = await Conversation.findOne({members: { $all: [senderId,receiverId] }})
        return response.status(200).json(conversation);
    }catch(error){
        return response.status(500).json(error.message);

    }
}