import { getToday } from '../utils/helpers';
import supabase from './supabase';

export async function getReviews() {
   const { data, error } = await supabase.from('reviews').select('item_id');

   if (error) {
      throw new Error('Reviews could not get loaded');
   }

   return data;
}

export async function getReviewsAfterDate(date) {
   const { data, error } = await supabase
      .from('reviews')
      .select('created_at')
      .gte('created_at', date)
      .lte('created_at', getToday({ end: true }));

   if (error) {
      throw new Error('Reviews could not get loaded');
   }

   return data;
}
