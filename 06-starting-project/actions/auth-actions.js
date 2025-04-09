'use server';

import { createAuthSession } from '@/lib/auth';
import { hashUserPassword } from '@/lib/hash';
import { redirect } from 'next/navigation';
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

  const hashedPassword = hashUserPassword(password);

  try {
    const userId = createUser(email, hashedPassword);
    await createAuthSession(userId);
    redirect('/training');
  } catch(error) {
    if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'It seems like an account for the chosen email already exist.'
        }
      }
    }
    throw error;
  }
};
