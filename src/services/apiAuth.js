import supabase, { supabaseUrl } from './supabase';

export async function signup({ full_name, email, password }) {
   const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
         data: {
            full_name,
            profile_image: '',
         },
      },
   });

   if (error) throw new Error(error.message);

   return data;
}

export async function login({ email, password }) {
   const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
   });

   if (error) throw new Error(error.message);

   return { data };
}

export async function getCurrentUser() {
   const { data: session } = await supabase.auth.getSession();

   if (!session.session) return null;

   const { data, error } = await supabase.auth.getUser();

   if (error) throw new Error(error.message);

   return data?.user;
}

export async function logout() {
   const { error } = await supabase.auth.signOut();

   if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, profileImage }) {
   // 1) Update password or fullName
   let updateData;
   if (password) updateData = { password };
   if (fullName) updateData = { data: { full_name: fullName } };

   const { data, error: dataUpdateError } = await supabase.auth.updateUser(
      updateData
   );

   if (dataUpdateError) throw new Error(dataUpdateError.message);

   if (!profileImage) return data;

   // 2) Upload the profileImage
   const fileName = `profile-image-${data.user.id}-${Math.random()}`;

   const hasImage = data.user.user_metadata.profile_image;

   // 2.1) delete the already present image
   if (hasImage) {
      const existingFilePath = data.user.user_metadata.profile_image
         .split('/')
         ?.at(-1);

      const { error: imageDeleteError } = await supabase.storage
         .from('profile-images')
         .remove([existingFilePath]);

      if (imageDeleteError) throw new Error(imageDeleteError.message);
   }

   // 2.2) Finally upload the new image
   const { error: imageUploadError } = await supabase.storage
      .from('profile-images')
      .upload(fileName, profileImage);

   if (imageUploadError) throw new Error(imageUploadError.message);

   // 3) Update profileImage field in user
   const { data: profileImageUpdatedData, error: profileImageError } =
      await supabase.auth.updateUser({
         data: {
            profile_image: `${supabaseUrl}/storage/v1/object/public/profile-images/${fileName}`,
         },
      });

   if (profileImageError) throw new Error(profileImageError.message);

   return profileImageUpdatedData;
}

export async function getAllUsers() {
   const { data, error } = await supabase
      .from('users')
      .select()
      .order('id', { ascending: false });

   if (error) throw new Error(error.message);

   return data;
}

export async function updateUsersTable(user) {
   const { error } = await supabase
      .from('users')
      .update({
         full_name: user.fullName,
      })
      .eq('id', user.id)
      .select();

   if (error) throw new Error(error.message);

   if (user.profileImage === null) return;

   // 2) Upload the profileImage
   const fileName = `profile-image-${user.id}-${Math.random()}`;

   // 2.1) delete the already present image
   const existingFilePath = user.oldImage;

   const { error: imageDeleteError } = await supabase.storage
      .from('profile-images')
      .remove([existingFilePath]);

   if (imageDeleteError) throw new Error(imageDeleteError.message);

   // 2.2) Finally upload the new image
   const { error: imageUploadError } = await supabase.storage
      .from('profile-images')
      .upload(fileName, user.profileImage);

   if (imageUploadError) throw new Error(imageUploadError.message);

   // 3) Update profileImage field in user
   const { error: profileImageError } = await supabase
      .from('users')
      .update({
         profile_image: `${supabaseUrl}/storage/v1/object/public/profile-images/${fileName}`,
      })
      .eq('id', user.id)
      .select();

   if (profileImageError) throw new Error(profileImageError.message);
}
