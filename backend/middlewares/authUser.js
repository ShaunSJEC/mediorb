import jwt from 'jsonwebtoken';

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }
        // Since we are using Clerk on frontend, we should ideally verify Clerk token.
        // For simplicity in this MERN setup if not fully integrated with Clerk SDK backend, 
        // we might use a custom JWT or Clerk's session token.
        // Assuming custom JWT for now or Clerk token decode.
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;
