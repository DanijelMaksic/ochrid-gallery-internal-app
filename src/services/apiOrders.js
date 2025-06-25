import supabase from './supabase';
import { getToday } from '../utils/helpers';

export async function getOrders() {
   const { data, error } = await supabase.from('orders').select('*');

   if (error) {
      throw new Error('Orders could not get loaded');
   }

   return data;
}

export async function deleteOrder(order) {
   const cart = JSON.parse(order.cart);
   cart.map((cartItem) => restoreQuantity(cartItem));
   const { error } = await supabase.from('orders').delete().eq('id', order.id);

   if (error) {
      throw new Error('Order could not be deleted');
   }
}

export async function deleteOrderOnArchive(order) {
   const { error } = await supabase.from('orders').delete().eq('id', order.id);

   if (error) {
      throw new Error('Order could not be archived');
   }
}

async function restoreQuantity(cartItem) {
   const { data, error } = await supabase
      .from('items')
      .select('quantity')
      .eq('id', cartItem.itemId)
      .select();

   if (error) {
      throw new Error('Item could not be updated');
   }

   const newQuantity = data[0].quantity + cartItem.cartQuantity;

   const newInStock = newQuantity < 1 ? false : true;

   await supabase
      .from('items')
      .update({ quantity: newQuantity, in_stock: newInStock })
      .eq('id', cartItem.itemId);
}

export async function getOrdersAfterDate(date) {
   const { data, error } = await supabase
      .from('orders')
      .select('created_at, cart')
      .gte('created_at', date)
      .lte('created_at', getToday({ end: true }));

   if (error) {
      throw new Error('Orders could not get loaded');
   }

   return data;
}

export async function getOrdersToday() {
   const { data, error } = await supabase
      .from('orders')
      .select('created_at, full_name, id, cart')
      .gte('created_at', getToday())
      .order('created_at', { ascending: false });

   if (error) {
      throw new Error('Orders could not get loaded');
   }

   return data;
}
