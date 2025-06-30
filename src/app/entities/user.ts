export interface user {
     userId: number;
     firstname: string;
     lastname: string;
     email: string;
     numberPhone: string;
     password: string;
     isActive : String;
     isEnabled: boolean;
     verifiedAt: Date;
     confirmationToken: string;
     resetPasswordToken: string;
     resetPasswordTokenExpiryDate: Date;
}