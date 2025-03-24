'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim() === '';
}

// server action. only executes in a server
export const shareMeal = async(prevState, formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }

  if(
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0
  ) {
    console.log(meal);
    console.log('Inn');
    return {
      message: 'Invalid input.'
    };
  }
    

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}
