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

export const LotteryRoundOrderByInput = {
  BlockHashAsc: 'blockHash_ASC',
  BlockHashDesc: 'blockHash_DESC',
  DelayAsc: 'delay_ASC',
  DelayDesc: 'delay_DESC',
  EndAsc: 'end_ASC',
  EndDesc: 'end_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  LengthAsc: 'length_ASC',
  LengthDesc: 'length_DESC',
  MinPriceAsc: 'minPrice_ASC',
  MinPriceDesc: 'minPrice_DESC',
  RandomNumberGeneratedBlockHashAsc: 'randomNumberGenerated_blockHash_ASC',
  RandomNumberGeneratedBlockHashDesc: 'randomNumberGenerated_blockHash_DESC',
  RandomNumberGeneratedIdAsc: 'randomNumberGenerated_id_ASC',
  RandomNumberGeneratedIdDesc: 'randomNumberGenerated_id_DESC',
  RandomNumberGeneratedNumberAsc: 'randomNumberGenerated_number_ASC',
  RandomNumberGeneratedNumberDesc: 'randomNumberGenerated_number_DESC',
  RandomNumberGeneratedTimestampAsc: 'randomNumberGenerated_timestamp_ASC',
  RandomNumberGeneratedTimestampDesc: 'randomNumberGenerated_timestamp_DESC',
  RateAsc: 'rate_ASC',
  RateDesc: 'rate_DESC',
  RepeatAsc: 'repeat_ASC',
  RepeatDesc: 'repeat_DESC',
  RoundAsc: 'round_ASC',
  RoundDesc: 'round_DESC',
  StartAsc: 'start_ASC',
  StartDesc: 'start_DESC'
} as const;

export type LotteryRoundOrderByInput = typeof LotteryRoundOrderByInput[keyof typeof LotteryRoundOrderByInput];
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

export const RandomNumberGeneratedOrderByInput = {
  BlockHashAsc: 'blockHash_ASC',
  BlockHashDesc: 'blockHash_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NumberAsc: 'number_ASC',
  NumberDesc: 'number_DESC',
  RoundBlockHashAsc: 'round_blockHash_ASC',
  RoundBlockHashDesc: 'round_blockHash_DESC',
  RoundDelayAsc: 'round_delay_ASC',
  RoundDelayDesc: 'round_delay_DESC',
  RoundEndAsc: 'round_end_ASC',
  RoundEndDesc: 'round_end_DESC',
  RoundIdAsc: 'round_id_ASC',
  RoundIdDesc: 'round_id_DESC',
  RoundLengthAsc: 'round_length_ASC',
  RoundLengthDesc: 'round_length_DESC',
  RoundMinPriceAsc: 'round_minPrice_ASC',
  RoundMinPriceDesc: 'round_minPrice_DESC',
  RoundRateAsc: 'round_rate_ASC',
  RoundRateDesc: 'round_rate_DESC',
  RoundRepeatAsc: 'round_repeat_ASC',
  RoundRepeatDesc: 'round_repeat_DESC',
  RoundRoundAsc: 'round_round_ASC',
  RoundRoundDesc: 'round_round_DESC',
  RoundStartAsc: 'round_start_ASC',
  RoundStartDesc: 'round_start_DESC',
  TimestampAsc: 'timestamp_ASC',
  TimestampDesc: 'timestamp_DESC'
} as const;

export type RandomNumberGeneratedOrderByInput = typeof RandomNumberGeneratedOrderByInput[keyof typeof RandomNumberGeneratedOrderByInput];
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

export const RoundWinnerOrderByInput = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  RoundBlockHashAsc: 'round_blockHash_ASC',
  RoundBlockHashDesc: 'round_blockHash_DESC',
  RoundDelayAsc: 'round_delay_ASC',
  RoundDelayDesc: 'round_delay_DESC',
  RoundEndAsc: 'round_end_ASC',
  RoundEndDesc: 'round_end_DESC',
  RoundIdAsc: 'round_id_ASC',
  RoundIdDesc: 'round_id_DESC',
  RoundLengthAsc: 'round_length_ASC',
  RoundLengthDesc: 'round_length_DESC',
  RoundMinPriceAsc: 'round_minPrice_ASC',
  RoundMinPriceDesc: 'round_minPrice_DESC',
  RoundRateAsc: 'round_rate_ASC',
  RoundRateDesc: 'round_rate_DESC',
  RoundRepeatAsc: 'round_repeat_ASC',
  RoundRepeatDesc: 'round_repeat_DESC',
  RoundRoundAsc: 'round_round_ASC',
  RoundRoundDesc: 'round_round_DESC',
  RoundStartAsc: 'round_start_ASC',
  RoundStartDesc: 'round_start_DESC',
  TicketBoughtAmountAsc: 'ticketBought_amount_ASC',
  TicketBoughtAmountDesc: 'ticketBought_amount_DESC',
  TicketBoughtBlockNumberAsc: 'ticketBought_blockNumber_ASC',
  TicketBoughtBlockNumberDesc: 'ticketBought_blockNumber_DESC',
  TicketBoughtIdAsc: 'ticketBought_id_ASC',
  TicketBoughtIdDesc: 'ticketBought_id_DESC',
  TicketBoughtNumberAsc: 'ticketBought_number_ASC',
  TicketBoughtNumberDesc: 'ticketBought_number_DESC',
  TicketBoughtTimestampAsc: 'ticketBought_timestamp_ASC',
  TicketBoughtTimestampDesc: 'ticketBought_timestamp_DESC',
  TicketBoughtTransactionHashAsc: 'ticketBought_transactionHash_ASC',
  TicketBoughtTransactionHashDesc: 'ticketBought_transactionHash_DESC',
  TicketBoughtWhoAsc: 'ticketBought_who_ASC',
  TicketBoughtWhoDesc: 'ticketBought_who_DESC'
} as const;

export type RoundWinnerOrderByInput = typeof RoundWinnerOrderByInput[keyof typeof RoundWinnerOrderByInput];
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

export const TicketBoughtOrderByInput = {
  AmountAsc: 'amount_ASC',
  AmountDesc: 'amount_DESC',
  BlockNumberAsc: 'blockNumber_ASC',
  BlockNumberDesc: 'blockNumber_DESC',
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NumberAsc: 'number_ASC',
  NumberDesc: 'number_DESC',
  RoundWinnerIdAsc: 'roundWinner_id_ASC',
  RoundWinnerIdDesc: 'roundWinner_id_DESC',
  RoundBlockHashAsc: 'round_blockHash_ASC',
  RoundBlockHashDesc: 'round_blockHash_DESC',
  RoundDelayAsc: 'round_delay_ASC',
  RoundDelayDesc: 'round_delay_DESC',
  RoundEndAsc: 'round_end_ASC',
  RoundEndDesc: 'round_end_DESC',
  RoundIdAsc: 'round_id_ASC',
  RoundIdDesc: 'round_id_DESC',
  RoundLengthAsc: 'round_length_ASC',
  RoundLengthDesc: 'round_length_DESC',
  RoundMinPriceAsc: 'round_minPrice_ASC',
  RoundMinPriceDesc: 'round_minPrice_DESC',
  RoundRateAsc: 'round_rate_ASC',
  RoundRateDesc: 'round_rate_DESC',
  RoundRepeatAsc: 'round_repeat_ASC',
  RoundRepeatDesc: 'round_repeat_DESC',
  RoundRoundAsc: 'round_round_ASC',
  RoundRoundDesc: 'round_round_DESC',
  RoundStartAsc: 'round_start_ASC',
  RoundStartDesc: 'round_start_DESC',
  TimestampAsc: 'timestamp_ASC',
  TimestampDesc: 'timestamp_DESC',
  TransactionHashAsc: 'transactionHash_ASC',
  TransactionHashDesc: 'transactionHash_DESC',
  WhoAsc: 'who_ASC',
  WhoDesc: 'who_DESC'
} as const;

export type TicketBoughtOrderByInput = typeof TicketBoughtOrderByInput[keyof typeof TicketBoughtOrderByInput];
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

export const TotalSettleAmountByNumberOrderByInput = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NumberAsc: 'number_ASC',
  NumberDesc: 'number_DESC',
  RoundBlockHashAsc: 'round_blockHash_ASC',
  RoundBlockHashDesc: 'round_blockHash_DESC',
  RoundDelayAsc: 'round_delay_ASC',
  RoundDelayDesc: 'round_delay_DESC',
  RoundEndAsc: 'round_end_ASC',
  RoundEndDesc: 'round_end_DESC',
  RoundIdAsc: 'round_id_ASC',
  RoundIdDesc: 'round_id_DESC',
  RoundLengthAsc: 'round_length_ASC',
  RoundLengthDesc: 'round_length_DESC',
  RoundMinPriceAsc: 'round_minPrice_ASC',
  RoundMinPriceDesc: 'round_minPrice_DESC',
  RoundRateAsc: 'round_rate_ASC',
  RoundRateDesc: 'round_rate_DESC',
  RoundRepeatAsc: 'round_repeat_ASC',
  RoundRepeatDesc: 'round_repeat_DESC',
  RoundRoundAsc: 'round_round_ASC',
  RoundRoundDesc: 'round_round_DESC',
  RoundStartAsc: 'round_start_ASC',
  RoundStartDesc: 'round_start_DESC',
  TotalAmountAsc: 'totalAmount_ASC',
  TotalAmountDesc: 'totalAmount_DESC'
} as const;

export type TotalSettleAmountByNumberOrderByInput = typeof TotalSettleAmountByNumberOrderByInput[keyof typeof TotalSettleAmountByNumberOrderByInput];
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

export const TotalSettleAmountOrderByInput = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  RoundBlockHashAsc: 'round_blockHash_ASC',
  RoundBlockHashDesc: 'round_blockHash_DESC',
  RoundDelayAsc: 'round_delay_ASC',
  RoundDelayDesc: 'round_delay_DESC',
  RoundEndAsc: 'round_end_ASC',
  RoundEndDesc: 'round_end_DESC',
  RoundIdAsc: 'round_id_ASC',
  RoundIdDesc: 'round_id_DESC',
  RoundLengthAsc: 'round_length_ASC',
  RoundLengthDesc: 'round_length_DESC',
  RoundMinPriceAsc: 'round_minPrice_ASC',
  RoundMinPriceDesc: 'round_minPrice_DESC',
  RoundRateAsc: 'round_rate_ASC',
  RoundRateDesc: 'round_rate_DESC',
  RoundRepeatAsc: 'round_repeat_ASC',
  RoundRepeatDesc: 'round_repeat_DESC',
  RoundRoundAsc: 'round_round_ASC',
  RoundRoundDesc: 'round_round_DESC',
  RoundStartAsc: 'round_start_ASC',
  RoundStartDesc: 'round_start_DESC',
  TotalAmountAsc: 'totalAmount_ASC',
  TotalAmountDesc: 'totalAmount_DESC'
} as const;

export type TotalSettleAmountOrderByInput = typeof TotalSettleAmountOrderByInput[keyof typeof TotalSettleAmountOrderByInput];
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
