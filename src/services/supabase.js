import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zhillemogxpsusxqalra.supabase.co';
const supabaseKey =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoaWxsZW1vZ3hwc3VzeHFhbHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MzY0MzQsImV4cCI6MjA1MzIxMjQzNH0.pbBY0Ch2n3Y0ocSD5dKMp-44rZdHr6cdVMqhAsOjv_c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
