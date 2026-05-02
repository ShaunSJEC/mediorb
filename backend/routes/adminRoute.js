import express from 'express';
import adminController from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminController.loginAdmin);
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), adminController.addDoctor);
adminRouter.post('/all-doctors', authAdmin, adminController.allDoctors);
adminRouter.post('/change-availability', authAdmin, adminController.changeAvailability);
adminRouter.get('/appointments', authAdmin, adminController.appointmentsAdmin);
adminRouter.post('/cancel-appointment', authAdmin, adminController.appointmentCancel);
adminRouter.get('/dashboard', authAdmin, adminController.adminDashboard);

export default adminRouter;
