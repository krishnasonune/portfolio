export interface LeetCodeStatsDTO {
  totalSolved: number;
  totalSubmissions: {
    difficulty: string;
    count: number;
    submissions: number;
  }[];
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoint: number;
  reputation: number;
  submissionCalendar: { [timestamp: string]: number };
  recentSubmissions: recentSubmissions[];
  matchedUserStats: {
    acSubmissionNum: {
      difficulty: string;
      count: number;
      submissions: number;
    }[];
    totalSubmissionNum: {
      difficulty: string;
      count: number;
      submissions: number;
    }[];
  };
}

export interface recentSubmissions{
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
  __typename: string;
};
