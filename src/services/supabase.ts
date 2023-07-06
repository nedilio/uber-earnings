import { PostgrestError, createClient } from "@supabase/supabase-js";
import { EarningItem } from "@/utils/types";

if (!process.env.PROJECT_URL) {
  throw new Error("PROJECT_URL is not defined");
}
if (!process.env.ANON_KEY) {
  throw new Error("ANON_KEY is not defined");
}

const supabase = createClient(process.env.PROJECT_URL, process.env.ANON_KEY, {
  auth: { persistSession: false },
});

export const getData = async (): Promise<EarningItem[]> => {
  const { data, error } = await supabase.from("earnings").select();
  if (error) {
    throw error;
  }
  return data;
};

export const addData = async (
  earning: Omit<EarningItem, "id">
): Promise<EarningItem | PostgrestError> => {
  const { data, error } = await supabase
    .from("earnings")
    .insert(earning)
    .select();
  if (error) {
    console.log(error.message);
    return error;
  }
  return data[0] as EarningItem;
};

export const updateData = async (
  id: string,
  earning: Omit<EarningItem, "id">
) => {
  const { data, error } = await supabase
    .from("earnings")
    .update(earning)
    .eq("id", id)
    .select();
  if (error) {
    throw error;
  }
  return data[0];
};

export const getEarningById = async (id: string): Promise<EarningItem> => {
  const { data, error } = await supabase.from("earnings").select().eq("id", id);
  if (error) throw error;
  return data[0];
};

export const deleteEarning = async (id: string): Promise<void> => {
  const { error } = await supabase.from("earnings").delete().eq("id", id);
  if (error) throw error;
};
