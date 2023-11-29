import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
 const {userId, tag, prompt} = await req.JSON();

 try {
    await connectToDB();
    const newPrompt = Prompt.create({
        creator: userId,
        tag,
        prompt,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), {status: 201})
 } catch (error) {
    return new Response("Failed to create new prompt", {status: 500})
 }
}