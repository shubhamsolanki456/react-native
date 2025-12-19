import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export type User = {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
};

export type Profile = {
  id: string;
  user_id: string;
  name: string;
  email: string;
  avatar_url?: string;
  streak: number;
  level: number;
  experience: number;
  subscription_tier: 'free' | 'premium';
  created_at: string;
};

export type Quest = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  completion_date?: string;
  created_at: string;
};

export type DailyActivity = {
  id: string;
  user_id: string;
  activity_type: string;
  duration?: number;
  count?: number;
  notes?: string;
  created_at: string;
};
