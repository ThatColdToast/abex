export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      friends: {
        Row: {
          created_at: string
          friendee: string
          friender: string
          id: string
        }
        Insert: {
          created_at?: string
          friendee: string
          friender: string
          id?: string
        }
        Update: {
          created_at?: string
          friendee?: string
          friender?: string
          id?: string
        }
      }
      messages: {
        Row: {
          created_at: string | null
          data: string
          id: string
          recipient: string
          sender: string
        }
        Insert: {
          created_at?: string | null
          data?: string
          id?: string
          recipient: string
          sender: string
        }
        Update: {
          created_at?: string | null
          data?: string
          id?: string
          recipient?: string
          sender?: string
        }
      }
      profiles: {
        Row: {
          id: string
          public_key: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          id: string
          public_key?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          id?: string
          public_key?: string | null
          updated_at?: string
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
