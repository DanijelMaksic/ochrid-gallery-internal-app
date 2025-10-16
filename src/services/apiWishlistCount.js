import supabase from './supabase';

export async function getWishlistCount() {
   const { count, error } = await supabase
      .from('wishlists')
      .select('item_id', { count: 'exact', head: true });

   if (error) {
      console.error(error);
      throw new Error('Wishlist count could not be fetched');
   }

   return count || 0;
}
