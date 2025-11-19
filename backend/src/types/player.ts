export interface Player {
  id: string;
  full_name: string;
  section: string;
  created_at: string;
}

export type CreatePlayerDto = Omit<Player, "id" | "created_at">;
export type UpdatePlayerDto = Partial<Omit<Player, "id" | "created_at">>;
