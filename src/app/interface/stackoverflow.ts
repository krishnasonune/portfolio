export interface Owner {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
  }

  export interface Item {
    owner: Owner;
    is_accepted: boolean;
    score: number;
    last_activity_date: number;
    creation_date: number;
    answer_id: number;
    question_id: number;
    content_license: string;
  }

  export interface StackOverflowResponse {
    items: Item[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
  }
  