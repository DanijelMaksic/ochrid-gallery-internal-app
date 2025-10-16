import supabase from './supabase';

export async function getWishlists() {
   const { data, error } = await supabase.from('wishlists').select('*');

   if (error) {
      console.error(error);
      throw new Error('Wishlists could not be fetched');
   }

   return data;
}
