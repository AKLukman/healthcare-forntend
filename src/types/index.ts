export interface IDoctor {
    id: string;
    email: string;
    name: string;
    profilePhoto: string;
    contactNumber: string;
    address: string;
    registrationNumber: string;
    experience: number;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    apointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    isDeleted: boolean;
    createdAt: string; // or Date if you parse it
    updatedAt: string; // or Date if you parse it
    averageRating: number;
}