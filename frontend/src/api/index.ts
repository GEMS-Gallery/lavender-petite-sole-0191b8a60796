import { backend } from 'declarations/backend';

export const greet = async (name: string): Promise<string> => {
  try {
    return await backend.greet(name);
  } catch (error) {
    console.error('Error greeting:', error);
    throw new Error('Failed to greet. Please try again later.');
  }
};
