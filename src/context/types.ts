export type UserT = {
  avatarUrl: string
  id: string
  name: string
}

type Option = { value: string; label: string }

export type FeedbackT = Record<
  string,
  {
    id: string
    ques: string
    ans: string | Option
  }
>
