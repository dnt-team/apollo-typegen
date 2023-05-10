export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
};

export type LotteryRound = {
  __typename?: 'LotteryRound';
  blockHash?: Maybe<Scalars['String']>;
  delay: Scalars['Int'];
  end: Scalars['Int'];
  id: Scalars['String'];
  length: Scalars['Int'];
  minPrice: Scalars['BigInt'];
  randomNumberGenerated?: Maybe<RandomNumberGenerated>;
  rate?: Maybe<Scalars['Int']>;
  repeat: Scalars['Boolean'];
  round: Scalars['Int'];
  roundWinners: Array<RoundWinner>;
  start: Scalars['Int'];
  ticketBoughts: Array<TicketBought>;
  totalSettleAmountByNumbers: Array<TotalSettleAmountByNumber>;
  totalSettleAmounts: Array<TotalSettleAmount>;
};


export type LotteryRoundRoundWinnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RoundWinnerOrderByInput>>;
  where?: InputMaybe<RoundWinnerWhereInput>;
};


export type LotteryRoundTicketBoughtsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TicketBoughtOrderByInput>>;
  where?: InputMaybe<TicketBoughtWhereInput>;
};


export type LotteryRoundTotalSettleAmountByNumbersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TotalSettleAmountByNumberOrderByInput>>;
  where?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
};


export type LotteryRoundTotalSettleAmountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TotalSettleAmountOrderByInput>>;
  where?: InputMaybe<TotalSettleAmountWhereInput>;
};

export type LotteryRoundEdge = {
  __typename?: 'LotteryRoundEdge';
  cursor: Scalars['String'];
  node: LotteryRound;
};

export enum LotteryRoundOrderByInput {
  BlockHashAsc = 0,
  BlockHashDesc = 1,
  DelayAsc = 2,
  DelayDesc = 3,
  EndAsc = 4,
  EndDesc = 5,
  IdAsc = 6,
  IdDesc = 7,
  LengthAsc = 8,
  LengthDesc = 9,
  MinPriceAsc = 10,
  MinPriceDesc = 11,
  RandomNumberGeneratedBlockHashAsc = 12,
  RandomNumberGeneratedBlockHashDesc = 13,
  RandomNumberGeneratedIdAsc = 14,
  RandomNumberGeneratedIdDesc = 15,
  RandomNumberGeneratedNumberAsc = 16,
  RandomNumberGeneratedNumberDesc = 17,
  RandomNumberGeneratedTimestampAsc = 18,
  RandomNumberGeneratedTimestampDesc = 19,
  RateAsc = 20,
  RateDesc = 21,
  RepeatAsc = 22,
  RepeatDesc = 23,
  RoundAsc = 24,
  RoundDesc = 25,
  StartAsc = 26,
  StartDesc = 27
}

export type LotteryRoundWhereInput = {
  AND?: InputMaybe<Array<LotteryRoundWhereInput>>;
  OR?: InputMaybe<Array<LotteryRoundWhereInput>>;
  blockHash_contains?: InputMaybe<Scalars['String']>;
  blockHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_eq?: InputMaybe<Scalars['String']>;
  blockHash_gt?: InputMaybe<Scalars['String']>;
  blockHash_gte?: InputMaybe<Scalars['String']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_isNull?: InputMaybe<Scalars['Boolean']>;
  blockHash_lt?: InputMaybe<Scalars['String']>;
  blockHash_lte?: InputMaybe<Scalars['String']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']>;
  blockHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_not_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_not_eq?: InputMaybe<Scalars['String']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_not_startsWith?: InputMaybe<Scalars['String']>;
  blockHash_startsWith?: InputMaybe<Scalars['String']>;
  delay_eq?: InputMaybe<Scalars['Int']>;
  delay_gt?: InputMaybe<Scalars['Int']>;
  delay_gte?: InputMaybe<Scalars['Int']>;
  delay_in?: InputMaybe<Array<Scalars['Int']>>;
  delay_isNull?: InputMaybe<Scalars['Boolean']>;
  delay_lt?: InputMaybe<Scalars['Int']>;
  delay_lte?: InputMaybe<Scalars['Int']>;
  delay_not_eq?: InputMaybe<Scalars['Int']>;
  delay_not_in?: InputMaybe<Array<Scalars['Int']>>;
  end_eq?: InputMaybe<Scalars['Int']>;
  end_gt?: InputMaybe<Scalars['Int']>;
  end_gte?: InputMaybe<Scalars['Int']>;
  end_in?: InputMaybe<Array<Scalars['Int']>>;
  end_isNull?: InputMaybe<Scalars['Boolean']>;
  end_lt?: InputMaybe<Scalars['Int']>;
  end_lte?: InputMaybe<Scalars['Int']>;
  end_not_eq?: InputMaybe<Scalars['Int']>;
  end_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  length_eq?: InputMaybe<Scalars['Int']>;
  length_gt?: InputMaybe<Scalars['Int']>;
  length_gte?: InputMaybe<Scalars['Int']>;
  length_in?: InputMaybe<Array<Scalars['Int']>>;
  length_isNull?: InputMaybe<Scalars['Boolean']>;
  length_lt?: InputMaybe<Scalars['Int']>;
  length_lte?: InputMaybe<Scalars['Int']>;
  length_not_eq?: InputMaybe<Scalars['Int']>;
  length_not_in?: InputMaybe<Array<Scalars['Int']>>;
  minPrice_eq?: InputMaybe<Scalars['BigInt']>;
  minPrice_gt?: InputMaybe<Scalars['BigInt']>;
  minPrice_gte?: InputMaybe<Scalars['BigInt']>;
  minPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minPrice_isNull?: InputMaybe<Scalars['Boolean']>;
  minPrice_lt?: InputMaybe<Scalars['BigInt']>;
  minPrice_lte?: InputMaybe<Scalars['BigInt']>;
  minPrice_not_eq?: InputMaybe<Scalars['BigInt']>;
  minPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  randomNumberGenerated?: InputMaybe<RandomNumberGeneratedWhereInput>;
  randomNumberGenerated_isNull?: InputMaybe<Scalars['Boolean']>;
  rate_eq?: InputMaybe<Scalars['Int']>;
  rate_gt?: InputMaybe<Scalars['Int']>;
  rate_gte?: InputMaybe<Scalars['Int']>;
  rate_in?: InputMaybe<Array<Scalars['Int']>>;
  rate_isNull?: InputMaybe<Scalars['Boolean']>;
  rate_lt?: InputMaybe<Scalars['Int']>;
  rate_lte?: InputMaybe<Scalars['Int']>;
  rate_not_eq?: InputMaybe<Scalars['Int']>;
  rate_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repeat_eq?: InputMaybe<Scalars['Boolean']>;
  repeat_isNull?: InputMaybe<Scalars['Boolean']>;
  repeat_not_eq?: InputMaybe<Scalars['Boolean']>;
  roundWinners_every?: InputMaybe<RoundWinnerWhereInput>;
  roundWinners_none?: InputMaybe<RoundWinnerWhereInput>;
  roundWinners_some?: InputMaybe<RoundWinnerWhereInput>;
  round_eq?: InputMaybe<Scalars['Int']>;
  round_gt?: InputMaybe<Scalars['Int']>;
  round_gte?: InputMaybe<Scalars['Int']>;
  round_in?: InputMaybe<Array<Scalars['Int']>>;
  round_isNull?: InputMaybe<Scalars['Boolean']>;
  round_lt?: InputMaybe<Scalars['Int']>;
  round_lte?: InputMaybe<Scalars['Int']>;
  round_not_eq?: InputMaybe<Scalars['Int']>;
  round_not_in?: InputMaybe<Array<Scalars['Int']>>;
  start_eq?: InputMaybe<Scalars['Int']>;
  start_gt?: InputMaybe<Scalars['Int']>;
  start_gte?: InputMaybe<Scalars['Int']>;
  start_in?: InputMaybe<Array<Scalars['Int']>>;
  start_isNull?: InputMaybe<Scalars['Boolean']>;
  start_lt?: InputMaybe<Scalars['Int']>;
  start_lte?: InputMaybe<Scalars['Int']>;
  start_not_eq?: InputMaybe<Scalars['Int']>;
  start_not_in?: InputMaybe<Array<Scalars['Int']>>;
  ticketBoughts_every?: InputMaybe<TicketBoughtWhereInput>;
  ticketBoughts_none?: InputMaybe<TicketBoughtWhereInput>;
  ticketBoughts_some?: InputMaybe<TicketBoughtWhereInput>;
  totalSettleAmountByNumbers_every?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
  totalSettleAmountByNumbers_none?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
  totalSettleAmountByNumbers_some?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
  totalSettleAmounts_every?: InputMaybe<TotalSettleAmountWhereInput>;
  totalSettleAmounts_none?: InputMaybe<TotalSettleAmountWhereInput>;
  totalSettleAmounts_some?: InputMaybe<TotalSettleAmountWhereInput>;
};

export type LotteryRoundsConnection = {
  __typename?: 'LotteryRoundsConnection';
  edges: Array<LotteryRoundEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  lotteryRoundById?: Maybe<LotteryRound>;
  /** @deprecated Use lotteryRoundById */
  lotteryRoundByUniqueInput?: Maybe<LotteryRound>;
  lotteryRounds: Array<LotteryRound>;
  lotteryRoundsConnection: LotteryRoundsConnection;
  randomNumberGeneratedById?: Maybe<RandomNumberGenerated>;
  /** @deprecated Use randomNumberGeneratedById */
  randomNumberGeneratedByUniqueInput?: Maybe<RandomNumberGenerated>;
  randomNumberGenerateds: Array<RandomNumberGenerated>;
  randomNumberGeneratedsConnection: RandomNumberGeneratedsConnection;
  roundWinnerById?: Maybe<RoundWinner>;
  /** @deprecated Use roundWinnerById */
  roundWinnerByUniqueInput?: Maybe<RoundWinner>;
  roundWinners: Array<RoundWinner>;
  roundWinnersConnection: RoundWinnersConnection;
  squidStatus?: Maybe<SquidStatus>;
  ticketBoughtById?: Maybe<TicketBought>;
  /** @deprecated Use ticketBoughtById */
  ticketBoughtByUniqueInput?: Maybe<TicketBought>;
  ticketBoughts: Array<TicketBought>;
  ticketBoughtsConnection: TicketBoughtsConnection;
  totalSettleAmountById?: Maybe<TotalSettleAmount>;
  totalSettleAmountByNumberById?: Maybe<TotalSettleAmountByNumber>;
  /** @deprecated Use totalSettleAmountByNumberById */
  totalSettleAmountByNumberByUniqueInput?: Maybe<TotalSettleAmountByNumber>;
  totalSettleAmountByNumbers: Array<TotalSettleAmountByNumber>;
  totalSettleAmountByNumbersConnection: TotalSettleAmountByNumbersConnection;
  /** @deprecated Use totalSettleAmountById */
  totalSettleAmountByUniqueInput?: Maybe<TotalSettleAmount>;
  totalSettleAmounts: Array<TotalSettleAmount>;
  totalSettleAmountsConnection: TotalSettleAmountsConnection;
};


export type QueryLotteryRoundByIdArgs = {
  id: Scalars['String'];
};


export type QueryLotteryRoundByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryLotteryRoundsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LotteryRoundOrderByInput>>;
  where?: InputMaybe<LotteryRoundWhereInput>;
};


export type QueryLotteryRoundsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<LotteryRoundOrderByInput>;
  where?: InputMaybe<LotteryRoundWhereInput>;
};


export type QueryRandomNumberGeneratedByIdArgs = {
  id: Scalars['String'];
};


export type QueryRandomNumberGeneratedByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryRandomNumberGeneratedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RandomNumberGeneratedOrderByInput>>;
  where?: InputMaybe<RandomNumberGeneratedWhereInput>;
};


export type QueryRandomNumberGeneratedsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<RandomNumberGeneratedOrderByInput>;
  where?: InputMaybe<RandomNumberGeneratedWhereInput>;
};


export type QueryRoundWinnerByIdArgs = {
  id: Scalars['String'];
};


export type QueryRoundWinnerByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryRoundWinnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RoundWinnerOrderByInput>>;
  where?: InputMaybe<RoundWinnerWhereInput>;
};


export type QueryRoundWinnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<RoundWinnerOrderByInput>;
  where?: InputMaybe<RoundWinnerWhereInput>;
};


export type QueryTicketBoughtByIdArgs = {
  id: Scalars['String'];
};


export type QueryTicketBoughtByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryTicketBoughtsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TicketBoughtOrderByInput>>;
  where?: InputMaybe<TicketBoughtWhereInput>;
};


export type QueryTicketBoughtsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<TicketBoughtOrderByInput>;
  where?: InputMaybe<TicketBoughtWhereInput>;
};


export type QueryTotalSettleAmountByIdArgs = {
  id: Scalars['String'];
};


export type QueryTotalSettleAmountByNumberByIdArgs = {
  id: Scalars['String'];
};


export type QueryTotalSettleAmountByNumberByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryTotalSettleAmountByNumbersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TotalSettleAmountByNumberOrderByInput>>;
  where?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
};


export type QueryTotalSettleAmountByNumbersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<TotalSettleAmountByNumberOrderByInput>;
  where?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
};


export type QueryTotalSettleAmountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryTotalSettleAmountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TotalSettleAmountOrderByInput>>;
  where?: InputMaybe<TotalSettleAmountWhereInput>;
};


export type QueryTotalSettleAmountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<TotalSettleAmountOrderByInput>;
  where?: InputMaybe<TotalSettleAmountWhereInput>;
};

export type RandomNumberGenerated = {
  __typename?: 'RandomNumberGenerated';
  blockHash: Scalars['String'];
  id: Scalars['String'];
  number: Scalars['Int'];
  round: LotteryRound;
  timestamp: Scalars['DateTime'];
};

export type RandomNumberGeneratedEdge = {
  __typename?: 'RandomNumberGeneratedEdge';
  cursor: Scalars['String'];
  node: RandomNumberGenerated;
};

export enum RandomNumberGeneratedOrderByInput {
  BlockHashAsc = 0,
  BlockHashDesc = 1,
  IdAsc = 2,
  IdDesc = 3,
  NumberAsc = 4,
  NumberDesc = 5,
  RoundBlockHashAsc = 6,
  RoundBlockHashDesc = 7,
  RoundDelayAsc = 8,
  RoundDelayDesc = 9,
  RoundEndAsc = 10,
  RoundEndDesc = 11,
  RoundIdAsc = 12,
  RoundIdDesc = 13,
  RoundLengthAsc = 14,
  RoundLengthDesc = 15,
  RoundMinPriceAsc = 16,
  RoundMinPriceDesc = 17,
  RoundRateAsc = 18,
  RoundRateDesc = 19,
  RoundRepeatAsc = 20,
  RoundRepeatDesc = 21,
  RoundRoundAsc = 22,
  RoundRoundDesc = 23,
  RoundStartAsc = 24,
  RoundStartDesc = 25,
  TimestampAsc = 26,
  TimestampDesc = 27
}

export type RandomNumberGeneratedWhereInput = {
  AND?: InputMaybe<Array<RandomNumberGeneratedWhereInput>>;
  OR?: InputMaybe<Array<RandomNumberGeneratedWhereInput>>;
  blockHash_contains?: InputMaybe<Scalars['String']>;
  blockHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_eq?: InputMaybe<Scalars['String']>;
  blockHash_gt?: InputMaybe<Scalars['String']>;
  blockHash_gte?: InputMaybe<Scalars['String']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_isNull?: InputMaybe<Scalars['Boolean']>;
  blockHash_lt?: InputMaybe<Scalars['String']>;
  blockHash_lte?: InputMaybe<Scalars['String']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']>;
  blockHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_not_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_not_eq?: InputMaybe<Scalars['String']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_not_startsWith?: InputMaybe<Scalars['String']>;
  blockHash_startsWith?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  number_eq?: InputMaybe<Scalars['Int']>;
  number_gt?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
  number_in?: InputMaybe<Array<Scalars['Int']>>;
  number_isNull?: InputMaybe<Scalars['Boolean']>;
  number_lt?: InputMaybe<Scalars['Int']>;
  number_lte?: InputMaybe<Scalars['Int']>;
  number_not_eq?: InputMaybe<Scalars['Int']>;
  number_not_in?: InputMaybe<Array<Scalars['Int']>>;
  round?: InputMaybe<LotteryRoundWhereInput>;
  round_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type RandomNumberGeneratedsConnection = {
  __typename?: 'RandomNumberGeneratedsConnection';
  edges: Array<RandomNumberGeneratedEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoundWinner = {
  __typename?: 'RoundWinner';
  id: Scalars['String'];
  round: LotteryRound;
  ticketBought: TicketBought;
};

export type RoundWinnerEdge = {
  __typename?: 'RoundWinnerEdge';
  cursor: Scalars['String'];
  node: RoundWinner;
};

export enum RoundWinnerOrderByInput {
  IdAsc = 0,
  IdDesc = 1,
  RoundBlockHashAsc = 2,
  RoundBlockHashDesc = 3,
  RoundDelayAsc = 4,
  RoundDelayDesc = 5,
  RoundEndAsc = 6,
  RoundEndDesc = 7,
  RoundIdAsc = 8,
  RoundIdDesc = 9,
  RoundLengthAsc = 10,
  RoundLengthDesc = 11,
  RoundMinPriceAsc = 12,
  RoundMinPriceDesc = 13,
  RoundRateAsc = 14,
  RoundRateDesc = 15,
  RoundRepeatAsc = 16,
  RoundRepeatDesc = 17,
  RoundRoundAsc = 18,
  RoundRoundDesc = 19,
  RoundStartAsc = 20,
  RoundStartDesc = 21,
  TicketBoughtAmountAsc = 22,
  TicketBoughtAmountDesc = 23,
  TicketBoughtBlockNumberAsc = 24,
  TicketBoughtBlockNumberDesc = 25,
  TicketBoughtIdAsc = 26,
  TicketBoughtIdDesc = 27,
  TicketBoughtNumberAsc = 28,
  TicketBoughtNumberDesc = 29,
  TicketBoughtTimestampAsc = 30,
  TicketBoughtTimestampDesc = 31,
  TicketBoughtTransactionHashAsc = 32,
  TicketBoughtTransactionHashDesc = 33,
  TicketBoughtWhoAsc = 34,
  TicketBoughtWhoDesc = 35
}

export type RoundWinnerWhereInput = {
  AND?: InputMaybe<Array<RoundWinnerWhereInput>>;
  OR?: InputMaybe<Array<RoundWinnerWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<LotteryRoundWhereInput>;
  round_isNull?: InputMaybe<Scalars['Boolean']>;
  ticketBought?: InputMaybe<TicketBoughtWhereInput>;
  ticketBought_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type RoundWinnersConnection = {
  __typename?: 'RoundWinnersConnection';
  edges: Array<RoundWinnerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  lotteryRoundById?: Maybe<LotteryRound>;
  lotteryRounds: Array<LotteryRound>;
  randomNumberGeneratedById?: Maybe<RandomNumberGenerated>;
  randomNumberGenerateds: Array<RandomNumberGenerated>;
  roundWinnerById?: Maybe<RoundWinner>;
  roundWinners: Array<RoundWinner>;
  ticketBoughtById?: Maybe<TicketBought>;
  ticketBoughts: Array<TicketBought>;
  totalSettleAmountById?: Maybe<TotalSettleAmount>;
  totalSettleAmountByNumberById?: Maybe<TotalSettleAmountByNumber>;
  totalSettleAmountByNumbers: Array<TotalSettleAmountByNumber>;
  totalSettleAmounts: Array<TotalSettleAmount>;
};


export type SubscriptionLotteryRoundByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionLotteryRoundsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LotteryRoundOrderByInput>>;
  where?: InputMaybe<LotteryRoundWhereInput>;
};


export type SubscriptionRandomNumberGeneratedByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionRandomNumberGeneratedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RandomNumberGeneratedOrderByInput>>;
  where?: InputMaybe<RandomNumberGeneratedWhereInput>;
};


export type SubscriptionRoundWinnerByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionRoundWinnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RoundWinnerOrderByInput>>;
  where?: InputMaybe<RoundWinnerWhereInput>;
};


export type SubscriptionTicketBoughtByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionTicketBoughtsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TicketBoughtOrderByInput>>;
  where?: InputMaybe<TicketBoughtWhereInput>;
};


export type SubscriptionTotalSettleAmountByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionTotalSettleAmountByNumberByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionTotalSettleAmountByNumbersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TotalSettleAmountByNumberOrderByInput>>;
  where?: InputMaybe<TotalSettleAmountByNumberWhereInput>;
};


export type SubscriptionTotalSettleAmountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TotalSettleAmountOrderByInput>>;
  where?: InputMaybe<TotalSettleAmountWhereInput>;
};

export type TicketBought = {
  __typename?: 'TicketBought';
  amount: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  id: Scalars['String'];
  number: Scalars['Int'];
  round: LotteryRound;
  roundWinner?: Maybe<RoundWinner>;
  timestamp: Scalars['DateTime'];
  transactionHash?: Maybe<Scalars['String']>;
  who: Scalars['String'];
};

export type TicketBoughtEdge = {
  __typename?: 'TicketBoughtEdge';
  cursor: Scalars['String'];
  node: TicketBought;
};

export enum TicketBoughtOrderByInput {
  AmountAsc = 0,
  AmountDesc = 1,
  BlockNumberAsc = 2,
  BlockNumberDesc = 3,
  IdAsc = 4,
  IdDesc = 5,
  NumberAsc = 6,
  NumberDesc = 7,
  RoundWinnerIdAsc = 8,
  RoundWinnerIdDesc = 9,
  RoundBlockHashAsc = 10,
  RoundBlockHashDesc = 11,
  RoundDelayAsc = 12,
  RoundDelayDesc = 13,
  RoundEndAsc = 14,
  RoundEndDesc = 15,
  RoundIdAsc = 16,
  RoundIdDesc = 17,
  RoundLengthAsc = 18,
  RoundLengthDesc = 19,
  RoundMinPriceAsc = 20,
  RoundMinPriceDesc = 21,
  RoundRateAsc = 22,
  RoundRateDesc = 23,
  RoundRepeatAsc = 24,
  RoundRepeatDesc = 25,
  RoundRoundAsc = 26,
  RoundRoundDesc = 27,
  RoundStartAsc = 28,
  RoundStartDesc = 29,
  TimestampAsc = 30,
  TimestampDesc = 31,
  TransactionHashAsc = 32,
  TransactionHashDesc = 33,
  WhoAsc = 34,
  WhoDesc = 35
}

export type TicketBoughtWhereInput = {
  AND?: InputMaybe<Array<TicketBoughtWhereInput>>;
  OR?: InputMaybe<Array<TicketBoughtWhereInput>>;
  amount_eq?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_isNull?: InputMaybe<Scalars['Boolean']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not_eq?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  number_eq?: InputMaybe<Scalars['Int']>;
  number_gt?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
  number_in?: InputMaybe<Array<Scalars['Int']>>;
  number_isNull?: InputMaybe<Scalars['Boolean']>;
  number_lt?: InputMaybe<Scalars['Int']>;
  number_lte?: InputMaybe<Scalars['Int']>;
  number_not_eq?: InputMaybe<Scalars['Int']>;
  number_not_in?: InputMaybe<Array<Scalars['Int']>>;
  round?: InputMaybe<LotteryRoundWhereInput>;
  roundWinner?: InputMaybe<RoundWinnerWhereInput>;
  roundWinner_isNull?: InputMaybe<Scalars['Boolean']>;
  round_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
  who_contains?: InputMaybe<Scalars['String']>;
  who_containsInsensitive?: InputMaybe<Scalars['String']>;
  who_endsWith?: InputMaybe<Scalars['String']>;
  who_eq?: InputMaybe<Scalars['String']>;
  who_gt?: InputMaybe<Scalars['String']>;
  who_gte?: InputMaybe<Scalars['String']>;
  who_in?: InputMaybe<Array<Scalars['String']>>;
  who_isNull?: InputMaybe<Scalars['Boolean']>;
  who_lt?: InputMaybe<Scalars['String']>;
  who_lte?: InputMaybe<Scalars['String']>;
  who_not_contains?: InputMaybe<Scalars['String']>;
  who_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  who_not_endsWith?: InputMaybe<Scalars['String']>;
  who_not_eq?: InputMaybe<Scalars['String']>;
  who_not_in?: InputMaybe<Array<Scalars['String']>>;
  who_not_startsWith?: InputMaybe<Scalars['String']>;
  who_startsWith?: InputMaybe<Scalars['String']>;
};

export type TicketBoughtsConnection = {
  __typename?: 'TicketBoughtsConnection';
  edges: Array<TicketBoughtEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TotalSettleAmount = {
  __typename?: 'TotalSettleAmount';
  id: Scalars['String'];
  round: LotteryRound;
  totalAmount: Scalars['BigInt'];
};

export type TotalSettleAmountByNumber = {
  __typename?: 'TotalSettleAmountByNumber';
  id: Scalars['String'];
  number: Scalars['Int'];
  round: LotteryRound;
  totalAmount: Scalars['BigInt'];
};

export type TotalSettleAmountByNumberEdge = {
  __typename?: 'TotalSettleAmountByNumberEdge';
  cursor: Scalars['String'];
  node: TotalSettleAmountByNumber;
};

export enum TotalSettleAmountByNumberOrderByInput {
  IdAsc = 0,
  IdDesc = 1,
  NumberAsc = 2,
  NumberDesc = 3,
  RoundBlockHashAsc = 4,
  RoundBlockHashDesc = 5,
  RoundDelayAsc = 6,
  RoundDelayDesc = 7,
  RoundEndAsc = 8,
  RoundEndDesc = 9,
  RoundIdAsc = 10,
  RoundIdDesc = 11,
  RoundLengthAsc = 12,
  RoundLengthDesc = 13,
  RoundMinPriceAsc = 14,
  RoundMinPriceDesc = 15,
  RoundRateAsc = 16,
  RoundRateDesc = 17,
  RoundRepeatAsc = 18,
  RoundRepeatDesc = 19,
  RoundRoundAsc = 20,
  RoundRoundDesc = 21,
  RoundStartAsc = 22,
  RoundStartDesc = 23,
  TotalAmountAsc = 24,
  TotalAmountDesc = 25
}

export type TotalSettleAmountByNumberWhereInput = {
  AND?: InputMaybe<Array<TotalSettleAmountByNumberWhereInput>>;
  OR?: InputMaybe<Array<TotalSettleAmountByNumberWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  number_eq?: InputMaybe<Scalars['Int']>;
  number_gt?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
  number_in?: InputMaybe<Array<Scalars['Int']>>;
  number_isNull?: InputMaybe<Scalars['Boolean']>;
  number_lt?: InputMaybe<Scalars['Int']>;
  number_lte?: InputMaybe<Scalars['Int']>;
  number_not_eq?: InputMaybe<Scalars['Int']>;
  number_not_in?: InputMaybe<Array<Scalars['Int']>>;
  round?: InputMaybe<LotteryRoundWhereInput>;
  round_isNull?: InputMaybe<Scalars['Boolean']>;
  totalAmount_eq?: InputMaybe<Scalars['BigInt']>;
  totalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmount_isNull?: InputMaybe<Scalars['Boolean']>;
  totalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmount_not_eq?: InputMaybe<Scalars['BigInt']>;
  totalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TotalSettleAmountByNumbersConnection = {
  __typename?: 'TotalSettleAmountByNumbersConnection';
  edges: Array<TotalSettleAmountByNumberEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TotalSettleAmountEdge = {
  __typename?: 'TotalSettleAmountEdge';
  cursor: Scalars['String'];
  node: TotalSettleAmount;
};

export enum TotalSettleAmountOrderByInput {
  IdAsc = 0,
  IdDesc = 1,
  RoundBlockHashAsc = 2,
  RoundBlockHashDesc = 3,
  RoundDelayAsc = 4,
  RoundDelayDesc = 5,
  RoundEndAsc = 6,
  RoundEndDesc = 7,
  RoundIdAsc = 8,
  RoundIdDesc = 9,
  RoundLengthAsc = 10,
  RoundLengthDesc = 11,
  RoundMinPriceAsc = 12,
  RoundMinPriceDesc = 13,
  RoundRateAsc = 14,
  RoundRateDesc = 15,
  RoundRepeatAsc = 16,
  RoundRepeatDesc = 17,
  RoundRoundAsc = 18,
  RoundRoundDesc = 19,
  RoundStartAsc = 20,
  RoundStartDesc = 21,
  TotalAmountAsc = 22,
  TotalAmountDesc = 23
}

export type TotalSettleAmountWhereInput = {
  AND?: InputMaybe<Array<TotalSettleAmountWhereInput>>;
  OR?: InputMaybe<Array<TotalSettleAmountWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  round?: InputMaybe<LotteryRoundWhereInput>;
  round_isNull?: InputMaybe<Scalars['Boolean']>;
  totalAmount_eq?: InputMaybe<Scalars['BigInt']>;
  totalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalAmount_isNull?: InputMaybe<Scalars['Boolean']>;
  totalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalAmount_not_eq?: InputMaybe<Scalars['BigInt']>;
  totalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type TotalSettleAmountsConnection = {
  __typename?: 'TotalSettleAmountsConnection';
  edges: Array<TotalSettleAmountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type WhereIdInput = {
  id: Scalars['String'];
};
