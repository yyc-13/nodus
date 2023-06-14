import supabase from "../supabaseClient";

export const getPublicSupabaseUrl = async (bucket, identifier, fileType) => {
  let { data } = await supabase.storage
    .from(`${bucket}`)
    .getPublicUrl(`${fileType.toLowerCase()}/${identifier}`);

  return data.publicUrl;
};

export const getMainSupabaseUrl = async (identifier, fileType) => {
  let { data, error } = await supabase.storage
    .from(`prod`)
    .createSignedUrl(`${fileType.toLowerCase()}/${identifier}`, 60 * 60 * 24);

  if (error) {
    console.error("error in getMainSupabaseUrl", error);
    throw error;
  }

  return data?.signedUrl;
};
