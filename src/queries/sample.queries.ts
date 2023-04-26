import { gql } from '@apollo/client/core'

export const LOTTERY_ROUNDS_QUERY = gql`
  query LotteryRoundsQuery(
    $where: LotteryRoundWhereInput
    $orderBy: [LotteryRoundOrderByInput!]
    $limit: Int
    $offset: Int
  ) {
    lotteryRounds(
      where: $where
      orderBy: $orderBy
      limit: $limit
      offset: $offset
    ) {
      length
      minPrice
      rate
      round
      repeat
      start
    }
  }
`