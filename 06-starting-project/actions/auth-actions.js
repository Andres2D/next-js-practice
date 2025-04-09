'use server';

import { createAuthSession, destroySession } from '@/lib/auth';
import { hashUserPassword, verifyPassword } from '@/lib/hash';
import { redirect } from 'next/navigation';
import { createUser, getUserByEmail } from '../lib/user';

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

export const login = async(_, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const exitingUser = getUserByEmail(email);

  if(!exitingUser) {
    return {
      errors: {
        email: 'Could not authenticate user, please check your credentials.'
      }
    }
  }

  const isValidPassword = verifyPassword(exitingUser.password, password);

  if(!isValidPassword) {
    return {
      errors: {
        password: 'Could not authenticate user, please check your credentials.'
      }
    }
  }

  await createAuthSession(exitingUser.id);
  redirect('/training');

}

export const auth = async(mode, prevState, formData) => {
  if(mode === 'login') {
    return login(prevState, formData);
  } else {
    return signUp(prevState, formData);
  }
}

export const logout = async() => {
  await destroySession();
  redirect('/');
}
