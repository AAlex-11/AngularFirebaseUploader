let allCourse: OneCourse[];

export interface OneCourse {
  id: number;
  titles: Titles;
  iconUrl: string;
  lessonsCount?: number;
  categories: string[];
  seqNo: number;
  url: string;
  courseListIcon?: string;
}

export interface Titles {
  description: string;
  longDescription: string;
}

let allLessons: OneLesson[];

export interface OneLesson {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
}