// Each score can belong to a player OR a team
export interface Score {
  id: string;
  game: string;
  points: number;
  player_id?: string | null; // only if it's a player score
  team_id?: string | null;   // only if it's a team score
  created_at: string;
}

// Type for creating a new score
export type CreateScoreDto = Omit<Score, "id" | "created_at">;

// Type for updating a score
export type UpdateScoreDto = Partial<Omit<Score, "id" | "created_at">>;
