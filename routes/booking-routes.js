import express from 'express';
import { newBooking } from '../controllers/booking-controller';

const bookingsRouter=express.Router();
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post('/',newBooking)
bookingsRouter.delete("/:id");
export default bookingsRouter;