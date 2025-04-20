// type of the dasboard props

export interface DashboardProps {};

// Leaderboard response

export interface LeaderboardResponse {
  message: string;
  data: UserScore[];
  comparable_matrix: ComparableMatrix[];
}

// user score

export interface UserScore {
  userId: string;
  userAvatar: string;
  easy: number;
  medium: number;
  hard: number;
  easyAC: number;
  mediumAC: number;
  hardAC: number;
  rating: string;
  score: string;
  easy100: string;
  medium100: string;
  hard100: string;
  rating100: string;
  metrices: Metric[];
  rank: number;
  funnyUserName: string;
}

// user comparable matrix

export interface Metric {
  title: string;
  message: string; // contains HTML string like <strong>text</strong>
}

// the comparable matrix of the user

export interface ComparableMatrix {
  username: string;
  streak: number;
  reputation: number;
  totalActiveDays: number;
  activeYears: number;
  ranking: number;
}


// Comparision.tsx Prop Types

export interface ComparisionProps {
    results: UserScore[];
    usernames: string[];
    compareLoader: boolean;
    handleDashBoardState: (key: any, state: any) => void;
}

// Analytics.tsx Types

export interface AnalyticsProps {
  usernames: string[];
  results: UserScore[];
  compareLoader: boolean;
}


// Radar Chart Types

export interface RadarChartProps {
  usersData: UserScore[];
  focusedUser: number | null;
}

// Compare Leetcode Username Function @utils.ts

export interface FetchCompareUserResponse {
  valid: boolean;
  status?: number;
  error?: string;
  data?: UserScore[];
  additional_matrix?: ComparableMatrix[];
}

// Multiple Bar Chart types
export interface MultipleBarChartProps {
  attr:  keyof ComparableMatrix;
  comparable_matrix: ComparableMatrix[];
}