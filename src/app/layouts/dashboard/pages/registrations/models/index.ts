import { Course } from "../../courses/models";
import { User } from "../../users/models";

export interface Registration {
    id: string | number;
    userId: string | number;
    productId: string | number;
    user?: User;
    course?: Course;
}

export interface CreateRegistrationData {
    userId: string | number | null;
    productId: string | number | null;
}