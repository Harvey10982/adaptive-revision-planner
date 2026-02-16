import type { SubjectSpecification } from "../../../../types/subjectSpecification"

export const specification: SubjectSpecification = {
  units: [
    {
      id: "unit-how-markets-work",
      name: "How markets work",
      topics: [
        {
          id: "topic-economic-foundations",
          name: "Economic foundations",
          subTopics: [
            { id: "subtopic-economic-activity", name: "Economic activity (needs and wants; purpose of economic activity; key economic decisions; main economic groups)" },
            { id: "subtopic-factors-of-production", name: "Factors of production (land, labour, capital, enterprise and rewards)" },
            { id: "subtopic-making-choices", name: "Making choices (the basic economic problem; costs and benefits; opportunity cost)" },
          ],
        },
        {
          id: "topic-resource-allocation",
          name: "Resource allocation",
          subTopics: [
            { id: "subtopic-markets-and-allocation", name: "Markets and allocation of resources (factor and product markets)" },
            { id: "subtopic-economic-sectors", name: "Economic sectors (primary, secondary, tertiary; goods vs services)" },
            { id: "subtopic-specialisation-division-of-labour-exchange", name: "Specialisation, division of labour and exchange (benefits and costs)" },
          ],
        },
        {
          id: "topic-how-prices-are-determined",
          name: "How prices are determined",
          subTopics: [
            { id: "subtopic-demand", name: "Demand for goods and services (determinants; changes in demand; demand curve)" },
            { id: "subtopic-supply", name: "Supply of goods and services (determinants; changes in supply; supply curve)" },
            { id: "subtopic-equilibrium-price", name: "Equilibrium price (interaction of supply and demand; effects of shifts)" },
            { id: "subtopic-intermarket-relationships", name: "Intermarket relationships (substitutes and complements)" },
            { id: "subtopic-price-elasticity-of-demand", name: "Price elasticity of demand (calculation and interpretation; influences; uses)" },
            { id: "subtopic-price-elasticity-of-supply", name: "Price elasticity of supply (calculation and interpretation; influences; uses)" },
          ],
        },
        {
          id: "topic-production-costs-revenue-profit",
          name: "Production, costs, revenue and profit",
          subTopics: [
            { id: "subtopic-importance-of-costs-revenue-profit", name: "Why costs, revenues and profits matter for producers" },
            { id: "subtopic-production-and-productivity", name: "Production and productivity (how productivity changes; implications)" },
            { id: "subtopic-economies-diseconomies-of-scale", name: "Economies and diseconomies of scale (sources; impacts)" },
          ],
        },
        {
          id: "topic-competitive-and-concentrated-markets",
          name: "Competitive and concentrated markets",
          subTopics: [
            { id: "subtopic-importance-of-market-structures", name: "Why market structures matter for allocation of resources" },
            { id: "subtopic-competitive-markets", name: "Competitive markets (characteristics and outcomes)" },
            { id: "subtopic-non-competitive-markets", name: "Concentrated/non-competitive markets (barriers; market power; outcomes)" },
            { id: "subtopic-labour-market", name: "Labour market (wage determination; factors affecting wages)" },
          ],
        },
        {
          id: "topic-market-failure",
          name: "Market failure",
          subTopics: [
            { id: "subtopic-misallocation-of-resources", name: "How market failure leads to misallocation of resources" },
            { id: "subtopic-externalities", name: "Externalities (positive/negative; social costs/benefits; diagrams in context)" },
          ],
        },
      ],
    },
    {
      id: "unit-how-the-economy-works",
      name: "How the economy works",
      topics: [
        {
          id: "topic-introduction-to-the-national-economy",
          name: "Introduction to the national economy",
          subTopics: [
            { id: "subtopic-interest-rates", name: "Interest rates (effects on saving, borrowing, spending and investment; simple interest calculations)" },
            { id: "subtopic-government-income-and-expenditure", name: "Government income and expenditure (taxation; direct vs indirect; progressive vs regressive)" },
          ],
        },
        {
          id: "topic-government-objectives",
          name: "Government objectives",
          subTopics: [
            { id: "subtopic-economic-objectives-overview", name: "Economic objectives (growth, employment, price stability, balance of payments) and conflicts" },
            { id: "subtopic-economic-growth", name: "Economic growth (GDP, real GDP, GDP per capita; causes; costs/benefits; policies)" },
            { id: "subtopic-employment-and-unemployment", name: "Employment and unemployment (measurement; types; causes; consequences; policies)" },
            { id: "subtopic-inflation-and-price-stability", name: "Inflation and price stability (measures; causes; consequences; policies)" },
            { id: "subtopic-balance-of-payments", name: "Balance of payments (current account; causes; consequences; policies)" },
            { id: "subtopic-distribution-of-income", name: "Distribution of income (inequality; measurement; causes; policies)" },
          ],
        },
        {
          id: "topic-how-government-manages-the-economy",
          name: "How the government manages the economy",
          subTopics: [
            { id: "subtopic-fiscal-policy", name: "Fiscal policy (government spending and taxation; objectives and impacts)" },
            { id: "subtopic-monetary-policy", name: "Monetary policy (interest rates; objectives and impacts)" },
            { id: "subtopic-supply-side-policies", name: "Supply-side policies (incentives, education/training, competition; impacts)" },
            { id: "subtopic-policies-to-correct-externalities", name: "Policies to correct externalities and market failure (taxes, subsidies, regulation)" },
          ],
        },
        {
          id: "topic-international-trade-and-the-global-economy",
          name: "International trade and the global economy",
          subTopics: [
            { id: "subtopic-why-countries-trade", name: "Why countries trade and why trade matters to the UK" },
            { id: "subtopic-exchange-rates", name: "Exchange rates (causes of change; impacts on consumers, producers and the macroeconomy)" },
            { id: "subtopic-free-trade-agreements", name: "Free-trade agreements and trading blocs (including the EU as an example)" },
            { id: "subtopic-globalisation", name: "Globalisation (causes; benefits and costs; impacts on different groups)" },
          ],
        },
        {
          id: "topic-role-of-money-and-financial-markets",
          name: "Role of money and financial markets",
          subTopics: [
            { id: "subtopic-role-of-money", name: "Role of money (functions; money supply in context)" },
            { id: "subtopic-financial-markets", name: "Financial markets and institutions (purpose; links to saving, borrowing and investment)" },
          ],
        },
      ],
    },
  ],
  papers: [
    {
      id: "paper-1",
      name: "Paper 1 (How markets work)",
      assessedNodeIds: ["unit-how-markets-work"],
    },
    {
      id: "paper-2",
      name: "Paper 2 (How the economy works)",
      assessedNodeIds: ["unit-how-the-economy-works"],
    },
  ],
};
