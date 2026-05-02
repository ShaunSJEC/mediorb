# **Project Specification: MediOrb \- MERN Doctor Appointment Management System**

## **1\. Project Overview**

A comprehensive, responsive web application designed to streamline doctor-patient appointment bookings and hospital management. The system operates via two distinct frontends interacting with a unified backend API. It supports three primary user roles: **Patients**, **Doctors**, and a single **System Admin**.

## **2\. Core User Roles & Workflows**

### **A. Patient Portal (Public & Protected)**

The patient-facing web app. Browsing is public, but booking, payment requires authentication.

* **Home Page:** Hero section, search/filter bar for specialties, featured doctors, and footer.  
* **Doctors Page:** A comprehensive directory of all active doctors with filtering options.  
* **Doctor Profile:** Detailed view of a specific doctor (specialization, experience, fees, about) with an interactive availability calendar to select appointment slots.  
* **Authentication:** Sign up and Login (Powered by Clerk for seamless user onboarding).  
* **My Appointments (Protected):** Dashboard to view upcoming, completed, and cancelled appointments. Option to cancel pending appointments or trigger online payment.  
* **Contact Page:** Basic hospital info and inquiry form.

### **B. Doctor Dashboard (Protected)**

Access restricted to verified medical staff to manage their individual operations.

* **Authentication:** Custom JWT-based login (Email/Password).  
* **Dashboard:** High-level metrics including total appointments, total earnings, completed consultations, and cancellations.  
* **Appointments Page:** A queue of booked appointments. Doctors can mark them as "Completed" or "Cancelled".  
* **Profile Management:** Edit profile details (fees, bio) and manage availability/scheduling.

### **C. Admin Dashboard (Protected)**

The hospital management command center restricted to a single master admin.

* **Authentication:** Custom JWT-based login using master credentials.  
* **Dashboard:** System-wide metrics (Total Doctors, Total Appointments, Total Platform Earnings).  
* **Manage Doctors:** Add new doctors to the system (uploads image, sets specialty, credentials, and initial password).  
* **List Doctors:** View all doctors, edit details, or deactivate accounts.  
* **All Appointments:** A global ledger of every appointment made across the platform with status tracking.

## **3\. Technology Stack**

* **Frontend (Patient App & Admin/Doctor App):** React.js, Vite, React Router DOM, TailwindCSS, Axios.  
* **Backend:** Node.js, Express.js.  
* **Database:** MongoDB with Mongoose (ODM).  
* **Authentication:**  
  * *Patients:* Clerk (OAuth/Email).  
  * *Admin/Doctors:* JSON Web Tokens (JWT), bcryptjs for password hashing.  
* **File Handling & Storage:** Multer (memory storage buffer) streamed to Cloudinary via streamifier.  
* **Payment Integration:** Razorpay API (Test Mode) for order creation, signature verification, and secure webhooks.

## **4\. Architecture & Repository Structure**

The project will use a monorepo-style folder structure for ease of development:

├── backend/               \# Express API, Models, Controllers, Routes, Middleware  
├── frontend/              \# Patient-facing React/Vite App (Port 5173\)  
└── admin/                 \# Shared Admin & Doctor React/Vite App (Port 5174\)

## 

## **5\. Environment Variables**

**/backend/.env**

PORT=5000  
NODE\_ENV=development  
MONGODB\_URI=your\_mongo\_connection\_string  
JWT\_SECRET=your\_jwt\_secret\_key  
ADMIN\_EMAIL=admin@hospital.com  
ADMIN\_PASSWORD=secure\_admin\_password  
FRONTEND\_URL=http://localhost:5173  
ADMIN\_URL=http://localhost:5174

\# Cloudinary (Image Storage)  
CLOUDINARY\_CLOUD\_NAME=your\_cloud\_name  
CLOUDINARY\_API\_KEY=your\_api\_key  
CLOUDINARY\_API\_SECRET=your\_api\_secret

\# Razorpay (Payments)  
RAZORPAY\_KEY\_ID=your\_razorpay\_key  
RAZORPAY\_KEY\_SECRET=your\_razorpay\_secret  
RAZORPAY\_WEBHOOK\_SECRET=your\_webhook\_secret

\# Clerk (If verifying patient tokens on backend)  
CLERK\_SECRET\_KEY=your\_clerk\_secret  
