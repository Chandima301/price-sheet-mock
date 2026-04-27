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
  type PriceSheetData {
    templateId: Int
    templateType: PriceSheetTemplateType
    templateStatus: PriceSheetTemplateStatus
    serviceName: PriceSheetServices

    data: [PriceSheetDataRow]
  }

  type PriceSheetDataRow {
    exchangeId: Long
    exchangeCode: String
    marketId: String
    subMarket: String
    currency: String
    marketSession: MarketSessionType

    # Commission / Order fees
    commissionOrderFeeId: Int
    commissionOrderFeeTierNo: Int
    commissionOrderFeeTierFrom: Float
    commissionOrderFeeTierTo: Float
    commissionOrderFeeRangeType: PriceSheetRangeType
    commissionOrderFeeSlabNo: Int
    commissionOrderFeeSlabFrom: Float
    commissionOrderFeeSlabTo: Float
    commissionOrderFeeUserValue: Float
    commissionOrderFeeDefaultValue: Float
    commissionOrderFeeMinValue: Float
    commissionOrderFeeUnit: PriceSheetValueConfigUnit
    commissionOrderFeeCreatedDate: Date
    commissionOrderFeeModifiedDate: Date
  }

  type PriceSheetTieredSlab {
    tieredFrom: Float
    tieredTo: Float
    buyOrderValueQty: Float
    brokerCommissionSlabs: [PriceSheetBrokerCommissionSlab]
  }

  type PriceSheetBrokerCommissionSlab {
    from: Float
    to: Float
    bps: Int
  }

  type PriceSheetServiceResponse {
    templateId: Int
    services: [PriceSheetServices]
  }

  type PriceSheetTemplate {
    id: ID
    templateType: PriceSheetTemplateType
    status: PriceSheetTemplateStatus
    clientId: String
    clientName: String
    gtnEntity: GtnEntity
    createdBy: Long
    createdDate: Date
    requestedBy: Long
    requestedDate: Date
    l1ApprovedBy: Long
    l1ApprovedDate: Date
    l2ApprovedBy: Long
    l2ApprovedDate: Date
    rejectedBy: Long
    rejectedDate: Date
    promotedToLiveBy: Long
    promotedToLiveDate: Date
    statusChangedBy: Long
    statusChangedDate: Date
  }

  # ========================
  # QUERIES
  # ========================

  extend type Query {
    getPriceSheetServices(
      priceSheetServicesRequest: PriceSheetServicesGetRequest!
    ): PriceSheetServiceResponse
    getPriceSheetData(
      filter: Filter!
      page: Pagination
      config: Config
      priceSheetDataRequest: PriceSheetDataRequest!
    ): PriceSheetData
  }

  # ========================
  # MUTATIONS
  # ========================

  extend type Mutation {
    upsertPriceSheetServices(request: PriceSheetServiceUpsertRequest!): Boolean
    upsertPriceSheetData(request: PriceSheetDataInput!): Boolean
    createPriceSheet(input: PriceSheetCreateInput!): PriceSheetTemplate
  }

  # ========================
  # APPLICABILITY ENUMS
  # ========================

  enum PriceSheetExchangeRegions {
    DIFC
    ASIA
    EUROPE
    US
    HK
  }

  enum PriceSheetFeeType {
    BrokerCommission
    SafeCustodyFee
    TransactionFee
    VAT
    StampDuty
    IbCommission
    SubscriptionFees
    RegulatoryFees
    SettlementFeePerIsinPerDay
    PtmLevy
    OrderFees
  }

  enum PriceSheetInstrumentType {
    IndexOptions
    RegularOptions
    All
  }

  enum MarketSessionType {
    Pre
    Reg
    Post
    All
    OverNight
    Extended
    Pre2
    Unknown
  }

  enum PriceSheetRangeType {
    Value
    Volume
    SharePrice
    OrderSide
  }

  enum PriceSheetServices {
    EquitiesMENA
    EquitiesAsia
    EquitiesEuropeUS
    Options
    CFDs
    CfdFxMarkupGroups
    CommitmentFees
  }

  enum PriceSheetTemplateStatus {
    Live
    Draft
    Pending
    L1Approved
    PendingL2
    L2Approved
    Rejected
  }

  enum PriceSheetTemplateType {
    Default
    Customized
  }

  enum PriceSheetValueConfigUnit {
    BPS
    USD
  }

  enum GtnEntity {
    MENA
    Asia
    Europe
    HongKong
    US
    Unknown
  }

  enum PriceSheetExchangeType {
    Equity
    Options
    CFD
    Unknown
  }

  # ========================
  # APPLICABILITY INPUT
  # ========================

  input PriceSheetDataInput {
    templateId: Int!
    templateType: PriceSheetTemplateType!
    templateStatus: PriceSheetTemplateStatus!
    serviceName: PriceSheetServices!

    data: [PriceSheetDataRowInput]
  }

  input PriceSheetDataRowInput {
    exchangeCode: String!
    marketId: String
    subMarket: String
    currency: String
    marketSession: MarketSessionType!

    # Commission / Order fees
    #    commissionOrderFeeId: Int // Add modified date based on this
    commissionOrderFeeTierFrom: Float
    commissionOrderFeeTierTo: Float
    commissionOrderFeeRangeType: PriceSheetRangeType!
    commissionOrderFeeSlabFrom: Float
    commissionOrderFeeSlabTo: Float
    commissionOrderFeeUserValue: Float
    commissionOrderFeeDefaultValue: Float
    commissionOrderFeeMinValue: Float
    commissionOrderFeeUnit: PriceSheetValueConfigUnit
    commissionOrderFeeCreatedDate: Date
    commissionOrderFeeModifiedDate: Date
  }

  input PriceSheetBrokerCommissionSlabInput {
    from: Float
    to: Float
    rageType: Int
    value: PriceSheetValueConfigInput
  }

  input PriceSheetTieredSlabInput {
    tieredFrom: Float
    tieredTo: Float
    brokerCommissionSlabs: [PriceSheetBrokerCommissionSlabInput]
  }

  input PriceSheetValueConfigInput {
    userValue: Float!
    defaultValue: Float!
    minValue: Float
    unit: Int
  }

  input PriceSheetDataRequest {
    isDefault: Boolean!
    serviceName: PriceSheetServices!
    priceSheetTemplateId: Int!
  }

  input PriceSheetServicesGetRequest {
    templateId: Int!
  }

  input PriceSheetServiceUpsertRequest {
    templateId: Int!
    services: [PriceSheetServices]!
  }

  input PriceSheetCreateInput {
    gtnEntity: GtnEntity!
    clientName: String!
    clientId: String!
    services: [PriceSheetExchangeType]!
    exchanges: [String]!
  }
`;
