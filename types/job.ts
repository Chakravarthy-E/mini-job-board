export interface IJob {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  salaryRange: string;
  createdAt: string;
}

export interface IJobCard {
  job: IJob;
  userType: string;
}
