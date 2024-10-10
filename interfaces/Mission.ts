export interface Mission {
    id: number;
    name: string;
    description: string;
    daysToUnlock: number;
    plant_id: number;
}

export interface UserPlantMission {
    id: number;
    plantUserId: number;
    missionId: number;
    unlockedAt: string | null;
    status: MissionStatus;
    progress: number;
    completedAt: string | null;
    Mission: Mission;
}

enum MissionStatus {
    pending,
    completed,
    failed,
    blocked
  }

