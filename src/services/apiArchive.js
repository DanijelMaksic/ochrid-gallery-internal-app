import supabase from './supabase';
import { getToday } from '../utils/helpers';

export async function getArchivedOrders() {
   const { data, error } = await supabase.from('archive').select('*');

   if (error) {
      throw new Error('Orders could not get loaded');
   }

   return data;
}

export async function createArchivedOrder(order) {
   const {
      id: order_id,
      created_at: order_date,
      full_name,
      adress,
      cart,
      city,
      payment_method,
      country,
      post_code,
      email,
      phone,
      note,
   } = order;

   const { error } = await supabase
      .from('archive')
      .insert({
         id: Math.floor(Math.random() * 100000),
         order_id,
         order_date,
         full_name,
         adress,
         payment_method,
         cart,
         country,
         city,
         post_code,
         email,
         phone,
         note,
      })
      .select();

   if (error) {
      throw new Error('Order could not be archived');
   }
}

export async function deleteArchivedOrder(archivedOrder) {
   const { error } = await supabase
      .from('archive')
      .delete()
      .eq('id', archivedOrder.id);

   if (error) {
      throw new Error('Archived order could not be deleted');
   }
}

export async function getArchivedOrdersAfterDate(date) {
   const { data, error } = await supabase
      .from('archive')
      .select('archived_at, cart')
      .gte('archived_at', date)
      .lte('archived_at', getToday({ end: true }));

   if (error) {
      throw new Error('Archived orders could not get get loaded');
   }

   return data;
}
