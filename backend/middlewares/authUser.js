import { clerkClient } from '@clerk/clerk-sdk-node';
import userModel from '../models/userModel.js';

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }

        // Verify the Clerk token
        const session = await clerkClient.verifyToken(token);
        const clerkUserId = session.sub;

        // Find or create user in local database
        let user = await userModel.findOne({ clerkId: clerkUserId });
        
        if (!user) {
            // Get user details from Clerk if not in local DB
            const clerkUser = await clerkClient.users.getUser(clerkUserId);
            user = new userModel({
                clerkId: clerkUserId,
                name: clerkUser.firstName + " " + clerkUser.lastName,
                email: clerkUser.emailAddresses[0].emailAddress,
                image: clerkUser.imageUrl
            });
            await user.save();
        }

        req.userId = user._id.toString();
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;
