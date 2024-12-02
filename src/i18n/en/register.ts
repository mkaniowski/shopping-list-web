export const register = {
  card: {
    title: 'Register',
  },
  form: {
    firstName: 'First Name',
    lastName: 'Last Name',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    submit: 'Register',
  },
  validation: {
    required: 'This field is required',
    username: {
      invalid: 'Username can only contain letters and numbers',
    },
    email: {
      invalid: 'Invalid email address',
    },
    password: {
      minLength: 'Password must be at least 8 characters long',
      uppercase: 'Password must contain at least one uppercase letter',
      lowercase: 'Password must contain at least one lowercase letter',
      number: 'Password must contain at least one number',
      special: 'Password must contain at least one special character',
    },
  },
}
