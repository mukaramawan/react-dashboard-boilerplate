import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL= 'https://fdznpykabvaowdrcyjtt.supabase.co';
const SUPABASE_ANON_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkem5weWthYnZhb3dkcmN5anR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjQwMzcsImV4cCI6MjA3MzgwMDAzN30._a-6qTJo6wTGhJI8cexsNIca90cgVHP1ZKRM8YDkns4"

const supabaseUrl = SUPABASE_URL;
const supabaseAnonKey = SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);