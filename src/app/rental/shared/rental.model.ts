import { Booking } from '../../booking/shared/booking.model'

export class Rental{
    _id: String;
    title: String;
    city: String;
    street : String;
    category : String;
    image : String;
    bedrooms : number;
    description : String;
    dailyRate : number;
    shared : boolean;
    createdAt : String;
    bookings: Booking[];
}