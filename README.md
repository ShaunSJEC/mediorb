# MediOrb - MERN Doctor Appointment Management System

MediOrb is a comprehensive, responsive web application designed to streamline doctor-patient appointment bookings and hospital management.

## Features
- **Patient Portal:** Browse doctors, book appointments, and pay online via Razorpay.
- **Admin Dashboard:** Manage doctors (add/list/availability) and view global appointments.
- **Doctor Dashboard:** Manage personal queue, mark appointments as completed, and track earnings.
- **Authentication:** Clerk for Patients, Custom JWT for Admins and Doctors.
- **Tech Stack:** MongoDB, Express, React, Node.js, Tailwind CSS v4.

## Project Structure
- `/backend`: Node.js Express API.
- `/frontend`: Patient-facing React application.
- `/admin`: Shared Admin and Doctor React application.

## Setup
1. Clone the repository.
2. Install dependencies in each folder: `npm install`.
3. Configure `.env` files in `backend/`, `frontend/`, and `admin/` using the provided templates.
4. Run each module: `npm run dev`.
