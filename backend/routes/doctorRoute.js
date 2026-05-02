import express from 'express';
import doctorController from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.post('/login', doctorController.loginDoctor);
doctorRouter.get('/appointments', authDoctor, doctorController.appointmentsDoctor);
doctorRouter.get('/list', doctorController.doctorList);
doctorRouter.post('/complete-appointment', authDoctor, doctorController.appointmentComplete);
doctorRouter.post('/cancel-appointment', authDoctor, doctorController.appointmentCancel);
doctorRouter.get('/dashboard', authDoctor, doctorController.doctorDashboard);
doctorRouter.get('/profile', authDoctor, doctorController.doctorProfile);
doctorRouter.post('/update-profile', authDoctor, doctorController.updateDoctorProfile);

export default doctorRouter;
