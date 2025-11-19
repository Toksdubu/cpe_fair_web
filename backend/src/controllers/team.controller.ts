import type { Request, Response } from "express";
import { supabase } from "../lib/supabaseClient.js";
import { logger } from "../utils/logger.js";
import { Team, CreateTeamDto, UpdateTeamDto } from "../types/team.js";

// GET /api/team
export const getTeams = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from("team").select("*").returns<Team[]>();
    if (error) throw error;
    res.json(data);
  } catch (err: any) {
    logger.error("Failed to fetch teams", err);
    res.status(500).json({ error: err.message });
  }
};

// POST /api/team
export const createTeam = async (req: Request<{}, {}, CreateTeamDto>, res: Response) => {
  try {
    const { error } = await supabase.from("team").insert(req.body);
    if (error) throw error;
    res.status(201).json({ message: "Team created successfully" });
  } catch (err: any) {
    logger.error("Failed to create team", err);
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/team/:id
export const updateTeam = async (req: Request<{ id: string }, {}, UpdateTeamDto>, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("team").update(req.body).eq("id", id);
    if (error) throw error;
    res.json({ message: "Team updated successfully" });
  } catch (err: any) {
    logger.error("Failed to update team", err);
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/team/:id
export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("team").delete().eq("id", id);
    if (error) throw error;
    res.json({ message: "Team deleted successfully" });
  } catch (err: any) {
    logger.error("Failed to delete team", err);
    res.status(500).json({ error: err.message });
  }
};
