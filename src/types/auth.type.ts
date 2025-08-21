export interface ILogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  data: {
    Name: string;
    Email: string;
    Avatar: string;
    Contact: string;
  };
  message: string;
}
