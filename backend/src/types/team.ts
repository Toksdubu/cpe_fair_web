export interface Team {
  id: string;
  team_name: string;
  section: string;
  created_at: string;
}

export type CreateTeamDto = Omit<Team, "id" | "created_at">;
export type UpdateTeamDto = Partial<Omit<Team, "id" | "created_at">>;
