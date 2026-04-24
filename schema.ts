/**
 * Copyright 2024 GTN Technologies (Pvt) Ltd. All rights reserved.
 *
 * Unauthorized access, copying, publishing, sharing, reuse of algorithms,
 * concepts, design patterns and code level demonstrations are strictly prohibited
 * without any written approval of GTN Technologies (Pvt) Ltd.
 */

/**
 * DEV-ONLY MOCK SCHEMA
 *
 * Defines GraphQL operations not yet implemented by the deployed backend.
 * Consumed by:
 *   - codegen (libs/shared/graphql/src/lib/codegen.ts) — merged with the
 *     deployed schema to generate TypeScript types.
 *   - the runtime dev mock link (createDevMockLink) — intercepts these
 *     operations and resolves them from dev-mocks/mocks.ts.
 *
 * When a feature's real backend ships, remove its ops from here and the
 * matching resolvers from mocks.ts.
 */

export const sdl = /* GraphQL */ `

  # ========================
  # OUTPUT TYPES
  # ========================

  type PriceSheetTemplateEquityMena {
    exchange: String
    marketCode: String
    marketId: String
    subMarket: String
    currency: String
    session: String
    buyOrderValueQty: String

    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  type PriceSheetTemplateEquityAsia {
    exchange: String
    marketCode: String
    marketId: String
    subMarket: String
    currency: String
    session: String
    buyOrderValueQty: String

    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    regulatoryFees: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  type PriceSheetTemplateEquityEuropeUs {
    exchange: String
    marketCode: String
    marketId: String
    subMarket: String
    currency: String
    session: String

    tieredQty: String
    buyOrderValueQty: String

    brokerCommissionFrom: Float
    brokerCommissionTo: Float
    brokerCommissionBps: Float

    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ptmLevyBps: Float
    regulatoryFees: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  type PriceSheetTemplateOption {
    exchange: String
    marketCode: String
    marketId: String
    subMarket: String
    currency: String
    session: String

    instrumentType: String
    buyOrderValueQty: String

    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  type PriceSheetTemplateCFD {
    exchange: String
    marketCode: String
    marketId: String
    subMarket: String
    currency: String
    session: String
    buyOrderValueQty: String

    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  # ========================
  # INPUT TYPES
  # ========================

  input PriceSheetTemplateEquityMenaInput {
    exchange: String
    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  input PriceSheetTemplateEquityAsiaInput {
    exchange: String
    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    regulatoryFees: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  input PriceSheetTemplateEquityEuropeUsInput {
    exchange: String
    marketId: String
    subMarket: String
    currency: String
    session: String
    marketCode: String
    tieredQty: String
    buyOrderValueQty: String

    brokerCommissionFrom: Float
    brokerCommissionTo: Float
    brokerCommissionBps: Float

    minFeePerTrade: Float
    fixedAmountPerTrade: Float
    safeCustodyFees: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ptmLevyBps: Float
    regulatoryFees: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  input PriceSheetTemplateOptionInput {
    exchange: String
    instrumentType: String
    buyOrderValueQty: String

    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  input PriceSheetTemplateCFDInput {
    exchange: String
    buyOrderValueQty: String

    brokerCommissionBps: Float
    minFeePerTrade: Float
    safeCustodyFees: Float
    fixedAmountPerTrade: Float
    transactionFeeBps: Float
    vatBps: Float
    stampDutyBps: Float
    ibCommissionBps: Float
    settlementFeePerIsin: Float
    fractionalSupported: Float
  }

  # ========================
  # QUERIES
  # ========================

  extend type Query {
    getPriceSheetTemplateEquityMena: [PriceSheetTemplateEquityMena]
    getPriceSheetTemplateEquityAsia: [PriceSheetTemplateEquityAsia]
    getPriceSheetTemplateEquityEuropeUs: [PriceSheetTemplateEquityEuropeUs]
    getPriceSheetTemplateOption: [PriceSheetTemplateOption]
    getPriceSheetTemplateCFD: [PriceSheetTemplateCFD]
  }

  # ========================
  # MUTATIONS
  # ========================

  extend type Mutation {
    updatePriceSheetTemplateEquityMena(rows: [PriceSheetTemplateEquityMenaInput!]!): Boolean
    updatePriceSheetTemplateEquityAsia(rows: [PriceSheetTemplateEquityAsiaInput!]!): Boolean
    updatePriceSheetTemplateEquityEuropeUs(rows: [PriceSheetTemplateEquityEuropeUsInput!]!): Boolean
    updatePriceSheetTemplateOption(rows: [PriceSheetTemplateOptionInput!]!): Boolean
    updatePriceSheetTemplateCFD(rows: [PriceSheetTemplateCFDInput!]!): Boolean
    upsertPriceSheetData(request: PriceSheetDataInput!): Boolean
  }

  # ========================
  # APPLICABILITY ENUMS
  # ========================

  enum PriceSheetTemplateType {
    Default
    Customized
  }

  enum PriceSheetTemplateStatus {
    Live
    Draft
    Pending
    L1_Approved
    Pending_L2
    L2_Approved
    Rejected
  }

  enum PriceSheetServices {
    Equities_MENA
    Equities_ASIA
    Equities_Europe_US
    Options
    CFDs
    CFD_FX_Markup_Groups
    Commitment_Fees
  }

  # ========================
  # APPLICABILITY INPUT
  # ========================

  input PriceSheetDataRowInput {
    key: String
    value: String
  }

  input PriceSheetDataInput {
    templateId: Int!
    templateType: PriceSheetTemplateType!
    templateStatus: PriceSheetTemplateStatus!
    serviceName: PriceSheetServices!
    data: [PriceSheetDataRowInput]
  }
`;
