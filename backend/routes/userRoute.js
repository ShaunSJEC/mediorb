import express from 'express';
import userController from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

import upload from '../middlewares/multer.js';

const userRouter = express.Router();

userRouter.get('/get-profile', authUser, userController.getProfile);
userRouter.post('/update-profile', authUser, upload.single('image'), userController.updateProfile);
userRouter.post('/book-appointment', authUser, userController.bookAppointment);
userRouter.get('/appointments', authUser, userController.listAppointment);
userRouter.post('/cancel-appointment', authUser, userController.cancelAppointment);
userRouter.post('/payment-razorpay', authUser, userController.paymentRazorpay);
userRouter.post('/verify-razorpay', authUser, userController.verifyRazorpay);

export default userRouter;
