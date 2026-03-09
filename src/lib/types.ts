export type Profile = {
  id: string;
  full_name: string;
  gamer_name: string;
  gamer_title: string | null;
  bio: string | null;
  country: string | null;
  profile_image_url: string;
  age: number | null;
  show_personal: boolean;
  show_games: boolean;
  show_friends: boolean;
  show_messages: boolean;
  admin_user_id: string | null;
};

export type Education = {
  id: string;
  institution_name: string;
  level: string | null;
  description: string | null;
  dress_image_url: string | null;
};

export type SocialLink = {
  id: string;
  platform: string;
  icon_url: string;
  url: string;
  position: number;
};

export type GameSection = {
  id: string;
  name: string;
  parent_id: string | null;
  position: number;
};

export type Game = {
  id: string;
  section_id: string | null;
  name: string;
  icon_url: string | null;
  admin_username: string | null;
  level_rank: string | null;
  notes: string | null;
};

export type Friend = {
  id: string;
  name: string;
  image_url: string;
  role: string | null;
  description: string | null;
};

export type FriendSocialLink = {
  id: string;
  friend_id: string;
  icon_url: string;
  url: string;
  position: number;
};

export type TreeSection = GameSection & {
  children: TreeSection[];
  games: Game[];
};

export type Message = {
  id: string;
  sender_user_id: string | null;
  name: string | null;
  email: string | null;
  avatar_url: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};
