import supabase, { supabaseUrl } from './supabase';

export async function getItems() {
   const { data, error } = await supabase.from('items').select('*');

   if (error) {
      throw new Error('Items could not be loaded');
   }

   return data;
}

export async function createItem(newItem) {
   const imageName1 = `${Math.random()}-${newItem.image.name}`.replaceAll(
      '/',
      ''
   );
   const imageName = imageName1.replaceAll(' ', '');
   const imagePath = `${supabaseUrl}/storage/v1/object/public/item-images//${imageName}`;

   // Create item
   const { data, error } = await supabase
      .from('items')
      .insert([{ ...newItem, image: imagePath }])
      .select();

   if (error) {
      throw new Error('Item could not be created');
   }

   // Upload image
   const { error: storageError } = await supabase.storage
      .from('item-images')
      .upload(imageName, newItem.image);

   // Delete item if there was an error uploading image
   if (storageError) {
      await supabase.from('items').delete().eq('id', data.id);

      throw new Error(
         'Item image could not be uploaded and the item was not created'
      );
   }

   return data;
}

export async function deleteItem(item) {
   const { error } = await supabase.from('items').delete().eq('id', item.id);

   if (error) {
      throw new Error('Item could not be deleted');
   }

   // Delete image from DB
   const imageName = item.image.split('/').pop();
   const { error: imageError } = await supabase.storage
      .from('item-images')
      .remove([imageName]);

   if (imageError) throw new Error('Image could not be deleted from database');
}

export async function editItem(item) {
   const hasImagePath = item.newImage?.startsWith?.(supabase);

   if (hasImagePath === undefined) {
      // Delete old image from DB
      const oldImageName = item.oldImage.split('/').pop();
      const { error: imageError } = await supabase.storage
         .from('item-images')
         .remove([oldImageName]);

      if (imageError)
         throw new Error('Image could not be deleted from database');

      // Create name and path for new image
      const newImageName = `${Math.random()}-${
         item.newImage[0].name
      }`.replaceAll('/', '');

      const newImagePath = `${supabaseUrl}/storage/v1/object/public/item-images//${newImageName}`;

      const { error } = await supabase
         .from('items')
         .update({
            name: item.name,
            price: item.price,
            in_stock: item.in_stock,
            quantity: item.quantity,
            image: newImagePath,
         })
         .eq('id', item.id)
         .select();

      if (error) {
         throw new Error('Item could not be edited');
      }

      // Upload image
      const { error: storageError } = await supabase.storage
         .from('item-images')
         .upload(newImageName, item.newImage[0]);

      if (storageError) {
         throw new Error('Image could not be uploaded');
      }
   }

   const { error } = await supabase
      .from('items')
      .update({
         name: item.name,
         price: item.price,
         in_stock: item.in_stock,
         quantity: item.quantity,
      })
      .eq('id', item.id)
      .select();

   if (error) {
      throw new Error('Item could not be edited');
   }
}

export async function addSale(cartItem) {
   const { data, error } = await supabase
      .from('items')
      .select('sales')
      .eq('id', cartItem.itemId)
      .select();

   if (error) {
      throw new Error('Item could not be updated');
   }

   const newSales = data[0].sales + cartItem.cartQuantity;

   await supabase
      .from('items')
      .update({ sales: newSales })
      .eq('id', cartItem.itemId);
}
