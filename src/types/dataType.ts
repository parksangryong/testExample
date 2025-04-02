export interface TestProps {
  info: {
    mainTitle: string;
    subTitle: string;
    mainUrl: string;
    scoreType: string;
    mainImage: string;
    thumbImage: string;
    lang: string;
    category: string;
  };
  questions: {
    which: string;
    question: string;
    answers: {
      type: string;
      content: string;
    }[];
  }[];
  results: {
    type: string;
    query: string;
    img_src: string;
  }[];
}

export interface QuizProps {
  mbtiScore: {
    E: number;
    I: number;
    N: number;
    S: number;
    T: number;
    F: number;
    P: number;
    J: number;
  };
}
