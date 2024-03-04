interface goal {
  id: number
  name: string
  complete: boolean
}

export interface Bucket {
  id: number
  goalName: string
  complete: boolean
  goals: goal[]
}

const mockData: Bucket[] = [
  {
    id: 1,
    goalName: '스페인 여행',
    complete: false,
    goals: [
      { id: 1, name: '돈 300만원 모으기', complete: true },
      { id: 2, name: '비행기 표 싸게 사기', complete: false },
      { id: 3, name: '여행 계획 짜기', complete: false },
      { id: 4, name: '숙소 예약하기', complete: false },
      { id: 5, name: '즐겁게 여행하기', complete: true },
    ],
  },
  {
    id: 2,
    goalName: '일본 여행가기',
    complete: false,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: false },
      { id: 3, name: '가나다라마바사아', complete: false },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 3,
    goalName: '한달 안에 10kg 감량하기',
    complete: true,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 4,
    goalName: '영어 자격증 따기',
    complete: false,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 5,
    goalName: '잉글랜드 축구 직관 가기',
    complete: true,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 6,
    goalName: '여자친구 사귀기',
    complete: true,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 7,
    goalName: '스페인 여행',
    complete: false,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: false },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 8,
    goalName: '일본 여행가기',
    complete: false,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 9,
    goalName: '한달 안에 10kg 감량하기',
    complete: true,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 10,
    goalName: '영어 자격증 따기',
    complete: false,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 11,
    goalName: '잉글랜드 축구 직관 가기',
    complete: true,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
  {
    id: 12,
    goalName: '여자친구 사귀기',
    complete: true,
    goals: [
      { id: 1, name: '가나다라마바사아', complete: true },
      { id: 2, name: '가나다라마바사아', complete: true },
      { id: 3, name: '가나다라마바사아', complete: true },
      { id: 4, name: '가나다라마바사아', complete: true },
      { id: 5, name: '가나다라마바사아', complete: true },
    ],
  },
]

export default mockData
