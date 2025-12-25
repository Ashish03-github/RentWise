import LoginBackground from '../../source/modules/Auth/Login/assets/LoginBackground';
import OTP from '../../source/modules/Auth/OTP/assets/OTP';
import Ward_B from '../../source/modules/Elective Booking/assets/Ward_B';
import Plus from '../../source/modules/Family/assets/Plus';
import Pagination1 from '../../source/modules/Onboarding/assets/Pagination1';
import Pagination2 from '../../source/modules/Onboarding/assets/Pagination2';
import Pagination3 from '../../source/modules/Onboarding/assets/Pagination3';
import Calendar from './Calendar';
import Calendar1 from './Calendar1';
import Down from './Down';
import Family from './Family';
import Female from './Female';
import Flag from './Flag';
import Google from './Google';
import Male from './Male'
import User_F from './User-F'
import User_M from './User-M'

export const IconList = {

    // Common
    down: Down,

    // Login and Registration
    user_m: User_M,
    user_f: User_F,
    family: Family,
    female: Female,
    male: Male,
    google: Google,
    flag: Flag,

    // Pagination
    pagination1: Pagination1,
    pagination2: Pagination2,
    pagination3: Pagination3,

    // Login
    loginBackground: LoginBackground,

    // OTP Verification
    otp: OTP,

    // Family Member
    plus: Plus,

    // Elective Booking
    calendar: Calendar,
    calendar1: Calendar1,
    ward_b: Ward_B

} as const;



