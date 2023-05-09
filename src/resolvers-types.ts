import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  BlockHashAsc = 'blockHash_ASC',
  BlockHashDesc = 'blockHash_DESC',
  DelayAsc = 'delay_ASC',
  DelayDesc = 'delay_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  MinPriceAsc = 'minPrice_ASC',
  MinPriceDesc = 'minPrice_DESC',
  RandomNumberGeneratedBlockHashAsc = 'randomNumberGenerated_blockHash_ASC',
  RandomNumberGeneratedBlockHashDesc = 'randomNumberGenerated_blockHash_DESC',
  RandomNumberGeneratedIdAsc = 'randomNumberGenerated_id_ASC',
  RandomNumberGeneratedIdDesc = 'randomNumberGenerated_id_DESC',
  RandomNumberGeneratedNumberAsc = 'randomNumberGenerated_number_ASC',
  RandomNumberGeneratedNumberDesc = 'randomNumberGenerated_number_DESC',
  RandomNumberGeneratedTimestampAsc = 'randomNumberGenerated_timestamp_ASC',
  RandomNumberGeneratedTimestampDesc = 'randomNumberGenerated_timestamp_DESC',
  RateAsc = 'rate_ASC',
  RateDesc = 'rate_DESC',
  RepeatAsc = 'repeat_ASC',
  RepeatDesc = 'repeat_DESC',
  RoundAsc = 'round_ASC',
  RoundDesc = 'round_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC'
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
  BlockHashAsc = 'blockHash_ASC',
  BlockHashDesc = 'blockHash_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  RoundBlockHashAsc = 'round_blockHash_ASC',
  RoundBlockHashDesc = 'round_blockHash_DESC',
  RoundDelayAsc = 'round_delay_ASC',
  RoundDelayDesc = 'round_delay_DESC',
  RoundEndAsc = 'round_end_ASC',
  RoundEndDesc = 'round_end_DESC',
  RoundIdAsc = 'round_id_ASC',
  RoundIdDesc = 'round_id_DESC',
  RoundLengthAsc = 'round_length_ASC',
  RoundLengthDesc = 'round_length_DESC',
  RoundMinPriceAsc = 'round_minPrice_ASC',
  RoundMinPriceDesc = 'round_minPrice_DESC',
  RoundRateAsc = 'round_rate_ASC',
  RoundRateDesc = 'round_rate_DESC',
  RoundRepeatAsc = 'round_repeat_ASC',
  RoundRepeatDesc = 'round_repeat_DESC',
  RoundRoundAsc = 'round_round_ASC',
  RoundRoundDesc = 'round_round_DESC',
  RoundStartAsc = 'round_start_ASC',
  RoundStartDesc = 'round_start_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
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
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RoundBlockHashAsc = 'round_blockHash_ASC',
  RoundBlockHashDesc = 'round_blockHash_DESC',
  RoundDelayAsc = 'round_delay_ASC',
  RoundDelayDesc = 'round_delay_DESC',
  RoundEndAsc = 'round_end_ASC',
  RoundEndDesc = 'round_end_DESC',
  RoundIdAsc = 'round_id_ASC',
  RoundIdDesc = 'round_id_DESC',
  RoundLengthAsc = 'round_length_ASC',
  RoundLengthDesc = 'round_length_DESC',
  RoundMinPriceAsc = 'round_minPrice_ASC',
  RoundMinPriceDesc = 'round_minPrice_DESC',
  RoundRateAsc = 'round_rate_ASC',
  RoundRateDesc = 'round_rate_DESC',
  RoundRepeatAsc = 'round_repeat_ASC',
  RoundRepeatDesc = 'round_repeat_DESC',
  RoundRoundAsc = 'round_round_ASC',
  RoundRoundDesc = 'round_round_DESC',
  RoundStartAsc = 'round_start_ASC',
  RoundStartDesc = 'round_start_DESC',
  TicketBoughtAmountAsc = 'ticketBought_amount_ASC',
  TicketBoughtAmountDesc = 'ticketBought_amount_DESC',
  TicketBoughtBlockNumberAsc = 'ticketBought_blockNumber_ASC',
  TicketBoughtBlockNumberDesc = 'ticketBought_blockNumber_DESC',
  TicketBoughtIdAsc = 'ticketBought_id_ASC',
  TicketBoughtIdDesc = 'ticketBought_id_DESC',
  TicketBoughtNumberAsc = 'ticketBought_number_ASC',
  TicketBoughtNumberDesc = 'ticketBought_number_DESC',
  TicketBoughtTimestampAsc = 'ticketBought_timestamp_ASC',
  TicketBoughtTimestampDesc = 'ticketBought_timestamp_DESC',
  TicketBoughtTransactionHashAsc = 'ticketBought_transactionHash_ASC',
  TicketBoughtTransactionHashDesc = 'ticketBought_transactionHash_DESC',
  TicketBoughtWhoAsc = 'ticketBought_who_ASC',
  TicketBoughtWhoDesc = 'ticketBought_who_DESC'
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
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  RoundWinnerIdAsc = 'roundWinner_id_ASC',
  RoundWinnerIdDesc = 'roundWinner_id_DESC',
  RoundBlockHashAsc = 'round_blockHash_ASC',
  RoundBlockHashDesc = 'round_blockHash_DESC',
  RoundDelayAsc = 'round_delay_ASC',
  RoundDelayDesc = 'round_delay_DESC',
  RoundEndAsc = 'round_end_ASC',
  RoundEndDesc = 'round_end_DESC',
  RoundIdAsc = 'round_id_ASC',
  RoundIdDesc = 'round_id_DESC',
  RoundLengthAsc = 'round_length_ASC',
  RoundLengthDesc = 'round_length_DESC',
  RoundMinPriceAsc = 'round_minPrice_ASC',
  RoundMinPriceDesc = 'round_minPrice_DESC',
  RoundRateAsc = 'round_rate_ASC',
  RoundRateDesc = 'round_rate_DESC',
  RoundRepeatAsc = 'round_repeat_ASC',
  RoundRepeatDesc = 'round_repeat_DESC',
  RoundRoundAsc = 'round_round_ASC',
  RoundRoundDesc = 'round_round_DESC',
  RoundStartAsc = 'round_start_ASC',
  RoundStartDesc = 'round_start_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC',
  WhoAsc = 'who_ASC',
  WhoDesc = 'who_DESC'
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
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  RoundBlockHashAsc = 'round_blockHash_ASC',
  RoundBlockHashDesc = 'round_blockHash_DESC',
  RoundDelayAsc = 'round_delay_ASC',
  RoundDelayDesc = 'round_delay_DESC',
  RoundEndAsc = 'round_end_ASC',
  RoundEndDesc = 'round_end_DESC',
  RoundIdAsc = 'round_id_ASC',
  RoundIdDesc = 'round_id_DESC',
  RoundLengthAsc = 'round_length_ASC',
  RoundLengthDesc = 'round_length_DESC',
  RoundMinPriceAsc = 'round_minPrice_ASC',
  RoundMinPriceDesc = 'round_minPrice_DESC',
  RoundRateAsc = 'round_rate_ASC',
  RoundRateDesc = 'round_rate_DESC',
  RoundRepeatAsc = 'round_repeat_ASC',
  RoundRepeatDesc = 'round_repeat_DESC',
  RoundRoundAsc = 'round_round_ASC',
  RoundRoundDesc = 'round_round_DESC',
  RoundStartAsc = 'round_start_ASC',
  RoundStartDesc = 'round_start_DESC',
  TotalAmountAsc = 'totalAmount_ASC',
  TotalAmountDesc = 'totalAmount_DESC'
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
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RoundBlockHashAsc = 'round_blockHash_ASC',
  RoundBlockHashDesc = 'round_blockHash_DESC',
  RoundDelayAsc = 'round_delay_ASC',
  RoundDelayDesc = 'round_delay_DESC',
  RoundEndAsc = 'round_end_ASC',
  RoundEndDesc = 'round_end_DESC',
  RoundIdAsc = 'round_id_ASC',
  RoundIdDesc = 'round_id_DESC',
  RoundLengthAsc = 'round_length_ASC',
  RoundLengthDesc = 'round_length_DESC',
  RoundMinPriceAsc = 'round_minPrice_ASC',
  RoundMinPriceDesc = 'round_minPrice_DESC',
  RoundRateAsc = 'round_rate_ASC',
  RoundRateDesc = 'round_rate_DESC',
  RoundRepeatAsc = 'round_repeat_ASC',
  RoundRepeatDesc = 'round_repeat_DESC',
  RoundRoundAsc = 'round_round_ASC',
  RoundRoundDesc = 'round_round_DESC',
  RoundStartAsc = 'round_start_ASC',
  RoundStartDesc = 'round_start_DESC',
  TotalAmountAsc = 'totalAmount_ASC',
  TotalAmountDesc = 'totalAmount_DESC'
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LotteryRound: ResolverTypeWrapper<LotteryRound>;
  LotteryRoundEdge: ResolverTypeWrapper<LotteryRoundEdge>;
  LotteryRoundOrderByInput: LotteryRoundOrderByInput;
  LotteryRoundWhereInput: LotteryRoundWhereInput;
  LotteryRoundsConnection: ResolverTypeWrapper<LotteryRoundsConnection>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  RandomNumberGenerated: ResolverTypeWrapper<RandomNumberGenerated>;
  RandomNumberGeneratedEdge: ResolverTypeWrapper<RandomNumberGeneratedEdge>;
  RandomNumberGeneratedOrderByInput: RandomNumberGeneratedOrderByInput;
  RandomNumberGeneratedWhereInput: RandomNumberGeneratedWhereInput;
  RandomNumberGeneratedsConnection: ResolverTypeWrapper<RandomNumberGeneratedsConnection>;
  RoundWinner: ResolverTypeWrapper<RoundWinner>;
  RoundWinnerEdge: ResolverTypeWrapper<RoundWinnerEdge>;
  RoundWinnerOrderByInput: RoundWinnerOrderByInput;
  RoundWinnerWhereInput: RoundWinnerWhereInput;
  RoundWinnersConnection: ResolverTypeWrapper<RoundWinnersConnection>;
  SquidStatus: ResolverTypeWrapper<SquidStatus>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TicketBought: ResolverTypeWrapper<TicketBought>;
  TicketBoughtEdge: ResolverTypeWrapper<TicketBoughtEdge>;
  TicketBoughtOrderByInput: TicketBoughtOrderByInput;
  TicketBoughtWhereInput: TicketBoughtWhereInput;
  TicketBoughtsConnection: ResolverTypeWrapper<TicketBoughtsConnection>;
  TotalSettleAmount: ResolverTypeWrapper<TotalSettleAmount>;
  TotalSettleAmountByNumber: ResolverTypeWrapper<TotalSettleAmountByNumber>;
  TotalSettleAmountByNumberEdge: ResolverTypeWrapper<TotalSettleAmountByNumberEdge>;
  TotalSettleAmountByNumberOrderByInput: TotalSettleAmountByNumberOrderByInput;
  TotalSettleAmountByNumberWhereInput: TotalSettleAmountByNumberWhereInput;
  TotalSettleAmountByNumbersConnection: ResolverTypeWrapper<TotalSettleAmountByNumbersConnection>;
  TotalSettleAmountEdge: ResolverTypeWrapper<TotalSettleAmountEdge>;
  TotalSettleAmountOrderByInput: TotalSettleAmountOrderByInput;
  TotalSettleAmountWhereInput: TotalSettleAmountWhereInput;
  TotalSettleAmountsConnection: ResolverTypeWrapper<TotalSettleAmountsConnection>;
  WhereIdInput: WhereIdInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  LotteryRound: LotteryRound;
  LotteryRoundEdge: LotteryRoundEdge;
  LotteryRoundWhereInput: LotteryRoundWhereInput;
  LotteryRoundsConnection: LotteryRoundsConnection;
  PageInfo: PageInfo;
  Query: {};
  RandomNumberGenerated: RandomNumberGenerated;
  RandomNumberGeneratedEdge: RandomNumberGeneratedEdge;
  RandomNumberGeneratedWhereInput: RandomNumberGeneratedWhereInput;
  RandomNumberGeneratedsConnection: RandomNumberGeneratedsConnection;
  RoundWinner: RoundWinner;
  RoundWinnerEdge: RoundWinnerEdge;
  RoundWinnerWhereInput: RoundWinnerWhereInput;
  RoundWinnersConnection: RoundWinnersConnection;
  SquidStatus: SquidStatus;
  String: Scalars['String'];
  Subscription: {};
  TicketBought: TicketBought;
  TicketBoughtEdge: TicketBoughtEdge;
  TicketBoughtWhereInput: TicketBoughtWhereInput;
  TicketBoughtsConnection: TicketBoughtsConnection;
  TotalSettleAmount: TotalSettleAmount;
  TotalSettleAmountByNumber: TotalSettleAmountByNumber;
  TotalSettleAmountByNumberEdge: TotalSettleAmountByNumberEdge;
  TotalSettleAmountByNumberWhereInput: TotalSettleAmountByNumberWhereInput;
  TotalSettleAmountByNumbersConnection: TotalSettleAmountByNumbersConnection;
  TotalSettleAmountEdge: TotalSettleAmountEdge;
  TotalSettleAmountWhereInput: TotalSettleAmountWhereInput;
  TotalSettleAmountsConnection: TotalSettleAmountsConnection;
  WhereIdInput: WhereIdInput;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LotteryRoundResolvers<ContextType = any, ParentType extends ResolversParentTypes['LotteryRound'] = ResolversParentTypes['LotteryRound']> = ResolversObject<{
  blockHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  randomNumberGenerated?: Resolver<Maybe<ResolversTypes['RandomNumberGenerated']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repeat?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roundWinners?: Resolver<Array<ResolversTypes['RoundWinner']>, ParentType, ContextType, Partial<LotteryRoundRoundWinnersArgs>>;
  start?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticketBoughts?: Resolver<Array<ResolversTypes['TicketBought']>, ParentType, ContextType, Partial<LotteryRoundTicketBoughtsArgs>>;
  totalSettleAmountByNumbers?: Resolver<Array<ResolversTypes['TotalSettleAmountByNumber']>, ParentType, ContextType, Partial<LotteryRoundTotalSettleAmountByNumbersArgs>>;
  totalSettleAmounts?: Resolver<Array<ResolversTypes['TotalSettleAmount']>, ParentType, ContextType, Partial<LotteryRoundTotalSettleAmountsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LotteryRoundEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LotteryRoundEdge'] = ResolversParentTypes['LotteryRoundEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LotteryRound'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LotteryRoundsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LotteryRoundsConnection'] = ResolversParentTypes['LotteryRoundsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['LotteryRoundEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  lotteryRoundById?: Resolver<Maybe<ResolversTypes['LotteryRound']>, ParentType, ContextType, RequireFields<QueryLotteryRoundByIdArgs, 'id'>>;
  lotteryRoundByUniqueInput?: Resolver<Maybe<ResolversTypes['LotteryRound']>, ParentType, ContextType, RequireFields<QueryLotteryRoundByUniqueInputArgs, 'where'>>;
  lotteryRounds?: Resolver<Array<ResolversTypes['LotteryRound']>, ParentType, ContextType, Partial<QueryLotteryRoundsArgs>>;
  lotteryRoundsConnection?: Resolver<ResolversTypes['LotteryRoundsConnection'], ParentType, ContextType, RequireFields<QueryLotteryRoundsConnectionArgs, 'orderBy'>>;
  randomNumberGeneratedById?: Resolver<Maybe<ResolversTypes['RandomNumberGenerated']>, ParentType, ContextType, RequireFields<QueryRandomNumberGeneratedByIdArgs, 'id'>>;
  randomNumberGeneratedByUniqueInput?: Resolver<Maybe<ResolversTypes['RandomNumberGenerated']>, ParentType, ContextType, RequireFields<QueryRandomNumberGeneratedByUniqueInputArgs, 'where'>>;
  randomNumberGenerateds?: Resolver<Array<ResolversTypes['RandomNumberGenerated']>, ParentType, ContextType, Partial<QueryRandomNumberGeneratedsArgs>>;
  randomNumberGeneratedsConnection?: Resolver<ResolversTypes['RandomNumberGeneratedsConnection'], ParentType, ContextType, RequireFields<QueryRandomNumberGeneratedsConnectionArgs, 'orderBy'>>;
  roundWinnerById?: Resolver<Maybe<ResolversTypes['RoundWinner']>, ParentType, ContextType, RequireFields<QueryRoundWinnerByIdArgs, 'id'>>;
  roundWinnerByUniqueInput?: Resolver<Maybe<ResolversTypes['RoundWinner']>, ParentType, ContextType, RequireFields<QueryRoundWinnerByUniqueInputArgs, 'where'>>;
  roundWinners?: Resolver<Array<ResolversTypes['RoundWinner']>, ParentType, ContextType, Partial<QueryRoundWinnersArgs>>;
  roundWinnersConnection?: Resolver<ResolversTypes['RoundWinnersConnection'], ParentType, ContextType, RequireFields<QueryRoundWinnersConnectionArgs, 'orderBy'>>;
  squidStatus?: Resolver<Maybe<ResolversTypes['SquidStatus']>, ParentType, ContextType>;
  ticketBoughtById?: Resolver<Maybe<ResolversTypes['TicketBought']>, ParentType, ContextType, RequireFields<QueryTicketBoughtByIdArgs, 'id'>>;
  ticketBoughtByUniqueInput?: Resolver<Maybe<ResolversTypes['TicketBought']>, ParentType, ContextType, RequireFields<QueryTicketBoughtByUniqueInputArgs, 'where'>>;
  ticketBoughts?: Resolver<Array<ResolversTypes['TicketBought']>, ParentType, ContextType, Partial<QueryTicketBoughtsArgs>>;
  ticketBoughtsConnection?: Resolver<ResolversTypes['TicketBoughtsConnection'], ParentType, ContextType, RequireFields<QueryTicketBoughtsConnectionArgs, 'orderBy'>>;
  totalSettleAmountById?: Resolver<Maybe<ResolversTypes['TotalSettleAmount']>, ParentType, ContextType, RequireFields<QueryTotalSettleAmountByIdArgs, 'id'>>;
  totalSettleAmountByNumberById?: Resolver<Maybe<ResolversTypes['TotalSettleAmountByNumber']>, ParentType, ContextType, RequireFields<QueryTotalSettleAmountByNumberByIdArgs, 'id'>>;
  totalSettleAmountByNumberByUniqueInput?: Resolver<Maybe<ResolversTypes['TotalSettleAmountByNumber']>, ParentType, ContextType, RequireFields<QueryTotalSettleAmountByNumberByUniqueInputArgs, 'where'>>;
  totalSettleAmountByNumbers?: Resolver<Array<ResolversTypes['TotalSettleAmountByNumber']>, ParentType, ContextType, Partial<QueryTotalSettleAmountByNumbersArgs>>;
  totalSettleAmountByNumbersConnection?: Resolver<ResolversTypes['TotalSettleAmountByNumbersConnection'], ParentType, ContextType, RequireFields<QueryTotalSettleAmountByNumbersConnectionArgs, 'orderBy'>>;
  totalSettleAmountByUniqueInput?: Resolver<Maybe<ResolversTypes['TotalSettleAmount']>, ParentType, ContextType, RequireFields<QueryTotalSettleAmountByUniqueInputArgs, 'where'>>;
  totalSettleAmounts?: Resolver<Array<ResolversTypes['TotalSettleAmount']>, ParentType, ContextType, Partial<QueryTotalSettleAmountsArgs>>;
  totalSettleAmountsConnection?: Resolver<ResolversTypes['TotalSettleAmountsConnection'], ParentType, ContextType, RequireFields<QueryTotalSettleAmountsConnectionArgs, 'orderBy'>>;
}>;

export type RandomNumberGeneratedResolvers<ContextType = any, ParentType extends ResolversParentTypes['RandomNumberGenerated'] = ResolversParentTypes['RandomNumberGenerated']> = ResolversObject<{
  blockHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['LotteryRound'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RandomNumberGeneratedEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RandomNumberGeneratedEdge'] = ResolversParentTypes['RandomNumberGeneratedEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RandomNumberGenerated'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RandomNumberGeneratedsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RandomNumberGeneratedsConnection'] = ResolversParentTypes['RandomNumberGeneratedsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['RandomNumberGeneratedEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoundWinnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoundWinner'] = ResolversParentTypes['RoundWinner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['LotteryRound'], ParentType, ContextType>;
  ticketBought?: Resolver<ResolversTypes['TicketBought'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoundWinnerEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoundWinnerEdge'] = ResolversParentTypes['RoundWinnerEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RoundWinner'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoundWinnersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoundWinnersConnection'] = ResolversParentTypes['RoundWinnersConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['RoundWinnerEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SquidStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['SquidStatus'] = ResolversParentTypes['SquidStatus']> = ResolversObject<{
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  lotteryRoundById?: SubscriptionResolver<Maybe<ResolversTypes['LotteryRound']>, "lotteryRoundById", ParentType, ContextType, RequireFields<SubscriptionLotteryRoundByIdArgs, 'id'>>;
  lotteryRounds?: SubscriptionResolver<Array<ResolversTypes['LotteryRound']>, "lotteryRounds", ParentType, ContextType, Partial<SubscriptionLotteryRoundsArgs>>;
  randomNumberGeneratedById?: SubscriptionResolver<Maybe<ResolversTypes['RandomNumberGenerated']>, "randomNumberGeneratedById", ParentType, ContextType, RequireFields<SubscriptionRandomNumberGeneratedByIdArgs, 'id'>>;
  randomNumberGenerateds?: SubscriptionResolver<Array<ResolversTypes['RandomNumberGenerated']>, "randomNumberGenerateds", ParentType, ContextType, Partial<SubscriptionRandomNumberGeneratedsArgs>>;
  roundWinnerById?: SubscriptionResolver<Maybe<ResolversTypes['RoundWinner']>, "roundWinnerById", ParentType, ContextType, RequireFields<SubscriptionRoundWinnerByIdArgs, 'id'>>;
  roundWinners?: SubscriptionResolver<Array<ResolversTypes['RoundWinner']>, "roundWinners", ParentType, ContextType, Partial<SubscriptionRoundWinnersArgs>>;
  ticketBoughtById?: SubscriptionResolver<Maybe<ResolversTypes['TicketBought']>, "ticketBoughtById", ParentType, ContextType, RequireFields<SubscriptionTicketBoughtByIdArgs, 'id'>>;
  ticketBoughts?: SubscriptionResolver<Array<ResolversTypes['TicketBought']>, "ticketBoughts", ParentType, ContextType, Partial<SubscriptionTicketBoughtsArgs>>;
  totalSettleAmountById?: SubscriptionResolver<Maybe<ResolversTypes['TotalSettleAmount']>, "totalSettleAmountById", ParentType, ContextType, RequireFields<SubscriptionTotalSettleAmountByIdArgs, 'id'>>;
  totalSettleAmountByNumberById?: SubscriptionResolver<Maybe<ResolversTypes['TotalSettleAmountByNumber']>, "totalSettleAmountByNumberById", ParentType, ContextType, RequireFields<SubscriptionTotalSettleAmountByNumberByIdArgs, 'id'>>;
  totalSettleAmountByNumbers?: SubscriptionResolver<Array<ResolversTypes['TotalSettleAmountByNumber']>, "totalSettleAmountByNumbers", ParentType, ContextType, Partial<SubscriptionTotalSettleAmountByNumbersArgs>>;
  totalSettleAmounts?: SubscriptionResolver<Array<ResolversTypes['TotalSettleAmount']>, "totalSettleAmounts", ParentType, ContextType, Partial<SubscriptionTotalSettleAmountsArgs>>;
}>;

export type TicketBoughtResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketBought'] = ResolversParentTypes['TicketBought']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['LotteryRound'], ParentType, ContextType>;
  roundWinner?: Resolver<Maybe<ResolversTypes['RoundWinner']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  who?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TicketBoughtEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketBoughtEdge'] = ResolversParentTypes['TicketBoughtEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TicketBought'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TicketBoughtsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TicketBoughtsConnection'] = ResolversParentTypes['TicketBoughtsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TicketBoughtEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalSettleAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalSettleAmount'] = ResolversParentTypes['TotalSettleAmount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['LotteryRound'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalSettleAmountByNumberResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalSettleAmountByNumber'] = ResolversParentTypes['TotalSettleAmountByNumber']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['LotteryRound'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalSettleAmountByNumberEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalSettleAmountByNumberEdge'] = ResolversParentTypes['TotalSettleAmountByNumberEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TotalSettleAmountByNumber'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalSettleAmountByNumbersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalSettleAmountByNumbersConnection'] = ResolversParentTypes['TotalSettleAmountByNumbersConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TotalSettleAmountByNumberEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalSettleAmountEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalSettleAmountEdge'] = ResolversParentTypes['TotalSettleAmountEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['TotalSettleAmount'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalSettleAmountsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalSettleAmountsConnection'] = ResolversParentTypes['TotalSettleAmountsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TotalSettleAmountEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  BigInt?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  LotteryRound?: LotteryRoundResolvers<ContextType>;
  LotteryRoundEdge?: LotteryRoundEdgeResolvers<ContextType>;
  LotteryRoundsConnection?: LotteryRoundsConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RandomNumberGenerated?: RandomNumberGeneratedResolvers<ContextType>;
  RandomNumberGeneratedEdge?: RandomNumberGeneratedEdgeResolvers<ContextType>;
  RandomNumberGeneratedsConnection?: RandomNumberGeneratedsConnectionResolvers<ContextType>;
  RoundWinner?: RoundWinnerResolvers<ContextType>;
  RoundWinnerEdge?: RoundWinnerEdgeResolvers<ContextType>;
  RoundWinnersConnection?: RoundWinnersConnectionResolvers<ContextType>;
  SquidStatus?: SquidStatusResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TicketBought?: TicketBoughtResolvers<ContextType>;
  TicketBoughtEdge?: TicketBoughtEdgeResolvers<ContextType>;
  TicketBoughtsConnection?: TicketBoughtsConnectionResolvers<ContextType>;
  TotalSettleAmount?: TotalSettleAmountResolvers<ContextType>;
  TotalSettleAmountByNumber?: TotalSettleAmountByNumberResolvers<ContextType>;
  TotalSettleAmountByNumberEdge?: TotalSettleAmountByNumberEdgeResolvers<ContextType>;
  TotalSettleAmountByNumbersConnection?: TotalSettleAmountByNumbersConnectionResolvers<ContextType>;
  TotalSettleAmountEdge?: TotalSettleAmountEdgeResolvers<ContextType>;
  TotalSettleAmountsConnection?: TotalSettleAmountsConnectionResolvers<ContextType>;
}>;

