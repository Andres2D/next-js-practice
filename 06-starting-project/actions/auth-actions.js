'use server';

import { createUser } from '../lib/user';

export const signUp = async(_, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if(!email.includes('@')) {
    errors.email = 'Please enter a valid email address';
  }

  if(password.trim().length < 3) {
    errors.password = 'Password must be at least 3 characters long';
  }

  if(Object.keys(errors).length > 0) {
    return {
      errors
    }
  }

  createUser(email, password);

  return {}

};
