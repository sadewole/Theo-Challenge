export type UserT = {
  avatarUrl: string
  id: string
  name: string
}

export type OptionT = { value: number; label: string }

export type FeedbackT = Record<
  string,
  {
    id: string
    ques: string
    ans: string | OptionT
  }
>
