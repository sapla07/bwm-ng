import { Booking } from '../../booking/shared/booking.model'

export class Rental{
    static readonly CATEGORIES = ['house', 'apartment', 'condo']
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