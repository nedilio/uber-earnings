import { createClient } from "@supabase/supabase-js";
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

export const addData = async (data: Omit<EarningItem, "id">): Promise<void> => {
  const { error } = await supabase.from("earnings").insert(data);
  if (error) {
    throw error;
  }
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
  return data;
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
