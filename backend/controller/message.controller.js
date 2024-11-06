import Conversation from "../models/conversaton.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (!conversation) {
      // Create a new conversation if none exists
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [newMessage._id],
      });
    } else {
      // Add new message to the existing conversation
      conversation.messages.push(newMessage._id);
    }

    // Save both the message and conversation
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(200).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.log(`Error in sending message: ${error}`);
    res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: Chatuser } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, Chatuser],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(201).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json({ messages });
  } catch (error) {
    console.error(`Error in getting message: ${error}`);
    res.status(500).json({ message: error.message });
  }
};
