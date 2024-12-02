export const register = {
  card: {
    title: 'Zarejestruj się',
  },
  form: {
    firstName: 'Imię',
    lastName: 'Nazwisko',
    username: 'Nazwa użytkownika',
    email: 'Email',
    password: 'Hasło',
    submit: 'Zarejestruj',
  },
  validation: {
    required: 'To pole jest wymagane',
    username: {
      invalid: 'Nazwa użytkownika może zawierać tylko litery i cyfry',
    },
    email: {
      invalid: 'Niepoprawny adres email',
    },
    password: {
      minLength: 'Hasło musi zawierać co najmniej 8 znaków',
      uppercase: 'Hasło musi zawierać co najmniej jedną wielką literę',
      lowercase: 'Hasło musi zawierać co najmniej jedną małą literę',
      number: 'Hasło musi zawierać co najmniej jedną cyfrę',
      special: 'Hasło musi zawierać co najmniej jeden znak specjalny',
    },
  },
}
