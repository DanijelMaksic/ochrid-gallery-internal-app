import supabase from './supabase';

export async function getWishlists() {
   const { data, error } = await supabase
      .from('website-users')
      .select('wishlist');

   if (error) {
      throw new Error('Wishlists could not get loaded');
   }

   return data;
}
