module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/home.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "home-module-scss-module__YAGOlW__active",
  "appHeader": "home-module-scss-module__YAGOlW__appHeader",
  "appMain": "home-module-scss-module__YAGOlW__appMain",
  "appSubtitle": "home-module-scss-module__YAGOlW__appSubtitle",
  "appTitle": "home-module-scss-module__YAGOlW__appTitle",
  "holdingsSection": "home-module-scss-module__YAGOlW__holdingsSection",
  "informationSection": "home-module-scss-module__YAGOlW__informationSection",
  "mainSections": "home-module-scss-module__YAGOlW__mainSections",
  "mobileFull": "home-module-scss-module__YAGOlW__mobileFull",
  "mobileLayout": "home-module-scss-module__YAGOlW__mobileLayout",
  "mobileTabs": "home-module-scss-module__YAGOlW__mobileTabs",
  "page": "home-module-scss-module__YAGOlW__page",
  "tabButton": "home-module-scss-module__YAGOlW__tabButton",
  "tabIcon": "home-module-scss-module__YAGOlW__tabIcon",
});
}),
"[project]/src/data/constant.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CARD_STATUS",
    ()=>CARD_STATUS
]);
var CARD_STATUS = /*#__PURE__*/ function(CARD_STATUS) {
    CARD_STATUS["USING"] = "using";
    CARD_STATUS["KEEPING"] = "keeping";
    CARD_STATUS["TERMINATED"] = "terminated";
    return CARD_STATUS;
}({});
}),
"[project]/src/data/cards-conan.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONAN_CARDS",
    ()=>CONAN_CARDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constant.ts [app-ssr] (ecmascript)");
;
const CONAN_CARDS = [
    {
        name: '삼성 SFC 3',
        depositBank: '하나은행',
        annualFee: '0원',
        monthlyUsage: '200000원',
        automaticDebit: [],
        period: {
            start: new Date(2014, 7, 1),
            end: new Date(2020, 11, 16)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED,
        holder: 'conan'
    },
    {
        name: 'SC 플러스마일',
        depositBank: 'SC은행',
        annualFee: '50000원',
        monthlyUsage: '500000원',
        automaticDebit: [],
        period: {
            start: new Date(2018, 5, 1),
            end: new Date(2020, 11, 16)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED,
        holder: 'conan'
    },
    {
        name: '현대 M3 유플러스',
        depositBank: '하나은행',
        annualFee: '35000원',
        monthlyUsage: '300000원',
        automaticDebit: [],
        period: {
            start: new Date(2018, 3, 1),
            end: new Date(2020, 11, 16)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED,
        holder: 'conan'
    },
    {
        name: '하나 SK Family',
        depositBank: '하나은행',
        annualFee: '0원',
        monthlyUsage: '300000원',
        automaticDebit: [
            {
                name: '네이버 멤버쉽',
                cost: '4900원'
            },
            {
                name: 'Youtube Premium',
                cost: '1.75달러'
            }
        ],
        period: {
            start: new Date(2020, 1, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
        holder: 'conan'
    },
    {
        name: '신한 11번가',
        depositBank: '농협은행',
        annualFee: '5000원',
        monthlyUsage: '0원',
        automaticDebit: [
            {
                name: 'AWS',
                cost: '5달러'
            }
        ],
        period: {
            start: new Date(2020, 3, 1),
            end: new Date(2020, 11, 28)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
        holder: 'conan'
    },
    {
        name: '신한 네이버페이 라인프렌즈',
        depositBank: '농협은행',
        annualFee: '7000원',
        monthlyUsage: '0원',
        automaticDebit: [
            {
                name: '하이패스',
                cost: '50000원'
            }
        ],
        period: {
            start: new Date(2020, 11, 3),
            end: new Date(2020, 11, 28)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
        holder: 'conan'
    },
    {
        name: '국민 탄탄대로 올쇼핑 티타늄',
        depositBank: '농협은행',
        annualFee: '30000원',
        monthlyUsage: '0원',
        automaticDebit: [
            {
                name: 'Youtube',
                cost: '1.75달러'
            }
        ],
        period: {
            start: new Date(2020, 8, 7),
            end: new Date(2021, 3, 1)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
        holder: 'conan'
    },
    {
        name: '롯데 LIKIT',
        depositBank: '농협은행',
        annualFee: '15000원',
        monthlyUsage: '0원',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 9),
            end: new Date(2021, 0, 31)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
        holder: 'conan'
    },
    {
        name: '농협 올바른 New Have',
        depositBank: '농협은행',
        annualFee: '12000원',
        monthlyUsage: '350000원',
        automaticDebit: [
            {
                name: '아파트 관리비',
                cost: '190000원'
            }
        ],
        period: {
            start: new Date(2020, 7, 27),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
        holder: 'conan'
    }
];
}),
"[project]/src/data/cards-chaeji.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAEJI_CARDS",
    ()=>CHAEJI_CARDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constant.ts [app-ssr] (ecmascript)");
;
const CHAEJI_CARDS = [
    {
        name: '삼성 SFC 아시아나',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2012, 0, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
        holder: 'chaeji'
    },
    {
        name: '국민 올림',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2012, 0, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
        holder: 'chaeji'
    },
    {
        name: '현대 M3 포인트',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 25),
            end: new Date(2021, 1, 19)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
        holder: 'chaeji'
    },
    {
        name: '우리 카드의 정석',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2012, 0, 1),
            end: new Date(9999, 11, 31)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
        holder: 'chaeji'
    },
    {
        name: '하나 클로벌',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 10),
            end: new Date(2021, 0, 29)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
        holder: 'chaeji'
    },
    {
        name: '신한 B.BIG',
        depositBank: '',
        annualFee: '',
        monthlyUsage: '',
        automaticDebit: [],
        period: {
            start: new Date(2020, 11, 25),
            end: new Date(2021, 0, 29)
        },
        selected: false,
        status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
        holder: 'chaeji'
    }
];
}),
"[project]/src/store/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2d$conan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards-conan.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2d$chaeji$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards-chaeji.ts [app-ssr] (ecmascript)");
;
;
;
const useCardsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        cards: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2d$conan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONAN_CARDS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2d$chaeji$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAEJI_CARDS"]
        ],
        selectedCard: null,
        setCards: (cards)=>set({
                cards
            }),
        selectCard: (card)=>set({
                selectedCard: card
            }),
        resetSelection: ()=>set({
                selectedCard: null
            }),
        addCard: (card)=>set((state)=>({
                    cards: [
                        ...state.cards,
                        card
                    ],
                    selectedCard: card // Select the new card
                })),
        updateCard: (updatedCard)=>set((state)=>({
                    cards: state.cards.map((card)=>card === state.selectedCard || card.id === updatedCard.id ? updatedCard : card),
                    selectedCard: updatedCard
                }))
    }));
const __TURBOPACK__default__export__ = useCardsStore;
}),
"[project]/src/components/Holdings.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addCardButton": "Holdings-module-scss-module__0su9yW__addCardButton",
  "addIcon": "Holdings-module-scss-module__0su9yW__addIcon",
  "addText": "Holdings-module-scss-module__0su9yW__addText",
  "cardInfo": "Holdings-module-scss-module__0su9yW__cardInfo",
  "cardItem": "Holdings-module-scss-module__0su9yW__cardItem",
  "cardName": "Holdings-module-scss-module__0su9yW__cardName",
  "cardNameSmall": "Holdings-module-scss-module__0su9yW__cardNameSmall",
  "cardStatus": "Holdings-module-scss-module__0su9yW__cardStatus",
  "cardsContainer": "Holdings-module-scss-module__0su9yW__cardsContainer",
  "cardsGrid": "Holdings-module-scss-module__0su9yW__cardsGrid",
  "chaeji": "Holdings-module-scss-module__0su9yW__chaeji",
  "chaejiTitle": "Holdings-module-scss-module__0su9yW__chaejiTitle",
  "checkboxInput": "Holdings-module-scss-module__0su9yW__checkboxInput",
  "checkboxLabel": "Holdings-module-scss-module__0su9yW__checkboxLabel",
  "checkboxText": "Holdings-module-scss-module__0su9yW__checkboxText",
  "closeSearchResult": "Holdings-module-scss-module__0su9yW__closeSearchResult",
  "conan": "Holdings-module-scss-module__0su9yW__conan",
  "conanTitle": "Holdings-module-scss-module__0su9yW__conanTitle",
  "endDate": "Holdings-module-scss-module__0su9yW__endDate",
  "filterControls": "Holdings-module-scss-module__0su9yW__filterControls",
  "headerButtons": "Holdings-module-scss-module__0su9yW__headerButtons",
  "headerControls": "Holdings-module-scss-module__0su9yW__headerControls",
  "holdings": "Holdings-module-scss-module__0su9yW__holdings",
  "holdingsHeader": "Holdings-module-scss-module__0su9yW__holdingsHeader",
  "holdingsTitle": "Holdings-module-scss-module__0su9yW__holdingsTitle",
  "keeping": "Holdings-module-scss-module__0su9yW__keeping",
  "searchButton": "Holdings-module-scss-module__0su9yW__searchButton",
  "searchControls": "Holdings-module-scss-module__0su9yW__searchControls",
  "searchInput": "Holdings-module-scss-module__0su9yW__searchInput",
  "searchInputContainer": "Holdings-module-scss-module__0su9yW__searchInputContainer",
  "searchResultItem": "Holdings-module-scss-module__0su9yW__searchResultItem",
  "searchResults": "Holdings-module-scss-module__0su9yW__searchResults",
  "searchResultsContent": "Holdings-module-scss-module__0su9yW__searchResultsContent",
  "searchResultsHeader": "Holdings-module-scss-module__0su9yW__searchResultsHeader",
  "searchResultsTitle": "Holdings-module-scss-module__0su9yW__searchResultsTitle",
  "selected": "Holdings-module-scss-module__0su9yW__selected",
  "statusInfo": "Holdings-module-scss-module__0su9yW__statusInfo",
  "terminated": "Holdings-module-scss-module__0su9yW__terminated",
  "terminatedInfo": "Holdings-module-scss-module__0su9yW__terminatedInfo",
  "terminationDate": "Holdings-module-scss-module__0su9yW__terminationDate",
  "userHeader": "Holdings-module-scss-module__0su9yW__userHeader",
  "userName": "Holdings-module-scss-module__0su9yW__userName",
  "userSearchResult": "Holdings-module-scss-module__0su9yW__userSearchResult",
  "userTitle": "Holdings-module-scss-module__0su9yW__userTitle",
  "using": "Holdings-module-scss-module__0su9yW__using",
  "usingInfo": "Holdings-module-scss-module__0su9yW__usingInfo",
});
}),
"[project]/src/components/Holdings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Holdings.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
;
;
;
const Holdings = ()=>{
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.cards);
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.selectCard);
    const selectedCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.selectedCard);
    const addCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.addCard);
    // State
    const [showTerminated, setShowTerminated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchCompany, setSearchCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    // Filter Logic
    const filterCardsByUser = (holder)=>{
        const userCards = cards.filter((card)=>card.holder === holder);
        if (showTerminated) return userCards;
        return userCards.filter((card)=>card.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED);
    };
    const conanCards = filterCardsByUser('conan');
    const chaejiCards = filterCardsByUser('chaeji');
    // Helper functions
    const getStatusText = (status)=>{
        const statusMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING]: '사용중',
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING]: '보관중',
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED]: '해지됨'
        };
        return statusMap[status] || status;
    };
    const getCardCompany = (cardName)=>cardName.split(' ')[0] || '';
    const formatDate = (dateString)=>{
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const getDaysSinceTermination = (terminationDate)=>{
        if (!terminationDate) return 0;
        const today = new Date();
        const termination = new Date(terminationDate);
        const diffTime = today.getTime() - termination.getTime();
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };
    // Card Classes
    const getCardClassName = (card)=>{
        let className = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardItem}`;
        if (card.holder === 'conan') className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].conan}`;
        else className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chaeji}`;
        if (card.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING) className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].using}`;
        else if (card.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING) className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].keeping}`;
        else if (card.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED) className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].terminated}`;
        if (selectedCard && selectedCard.id === card.id && selectedCard.name === card.name) {
            className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected}`;
        }
        // Since we don't have stable IDs initially, check reference or properties
        if (selectedCard === card) {
            className += ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected}`;
        }
        return className;
    };
    // Actions
    const handleAddNewCard = ()=>{
        const tempCard = {
            id: Date.now().toString(),
            name: '',
            depositBank: '',
            annualFee: '',
            monthlyUsage: '',
            automaticDebit: [],
            period: {
                start: new Date(),
                end: new Date()
            },
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
            holder: 'conan',
            selected: true,
            isNew: true
        };
        addCard(tempCard);
    // Store will select it automatically
    };
    const handleSearch = ()=>{
        if (!searchCompany.trim()) {
            alert('카드사명을 입력해주세요.');
            return;
        }
        const companyName = searchCompany.trim();
        const companyCards = cards.filter((card)=>{
            const cardCompany = getCardCompany(card.name);
            return cardCompany.toLowerCase().includes(companyName.toLowerCase());
        });
        if (companyCards.length === 0) {
            alert(`${companyName} 카드사의 카드를 찾을 수 없습니다.`);
            setSearchResults([]);
            return;
        }
        // Group by user
        const userGroups = new Map();
        companyCards.forEach((card)=>{
            if (!userGroups.has(card.holder)) userGroups.set(card.holder, []);
            userGroups.get(card.holder).push(card);
        });
        // Smart selection logic
        const results = Array.from(userGroups.entries()).map(([user, userCards])=>{
            const terminatedCards = userCards.filter((c)=>c.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED);
            const usingCards = userCards.filter((c)=>c.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING || c.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING);
            let resultCard = null;
            if (usingCards.length > 0) {
                resultCard = usingCards.reduce((latest, current)=>{
                    const latestDate = new Date(latest.period.end);
                    const currentDate = new Date(current.period.end);
                    return currentDate > latestDate ? current : latest;
                });
            } else if (terminatedCards.length > 0) {
                resultCard = terminatedCards.reduce((latest, current)=>{
                    const latestDate = new Date(latest.period.end);
                    const currentDate = new Date(current.period.end);
                    return currentDate > latestDate ? current : latest;
                });
            }
            if (!resultCard) return null;
            return {
                user,
                results: [
                    {
                        company: getCardCompany(resultCard.name),
                        cardName: resultCard.name,
                        user: resultCard.holder,
                        status: resultCard.status,
                        terminationDate: resultCard.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED ? resultCard.period.end.toString() : undefined,
                        endDate: resultCard.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED ? resultCard.period.end.toString() : undefined
                    }
                ]
            };
        }).filter((item)=>item !== null);
        setSearchResults(results);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].holdings,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].holdingsHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].holdingsTitle,
                        children: "카드 보유 현황"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Holdings.tsx",
                        lineNumber: 191,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerControls,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchControls,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInputContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: searchCompany,
                                            onChange: (e)=>setSearchCompany(e.target.value),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput,
                                            placeholder: "카드사명 검색 (예: 삼성, 신한)",
                                            onKeyDown: (e)=>e.key === 'Enter' && handleSearch()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Holdings.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchButton,
                                            onClick: handleSearch,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Holdings.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Holdings.tsx",
                                            lineNumber: 202,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Holdings.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchResults,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchResultsHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchResultsTitle,
                                                    children: [
                                                        searchCompany,
                                                        " 카드사 검색 결과"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Holdings.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeSearchResult,
                                                    onClick: ()=>setSearchResults([]),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Holdings.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Holdings.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Holdings.tsx",
                                            lineNumber: 208,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchResultsContent,
                                            children: searchResults.map((userResult)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userSearchResult,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userHeader,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                                                                children: userResult.user
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Holdings.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Holdings.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        userResult.results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchResultItem,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInfo,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardName,
                                                                            children: result.cardName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Holdings.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Holdings.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusInfo,
                                                                        children: result.status === 'terminated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].terminatedInfo,
                                                                            children: [
                                                                                "가장 최근 탈퇴일:",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].terminationDate,
                                                                                    children: [
                                                                                        " ",
                                                                                        formatDate(result.terminationDate),
                                                                                        " (",
                                                                                        getDaysSinceTermination(result.terminationDate),
                                                                                        "일 경과)"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/Holdings.tsx",
                                                                                    lineNumber: 229,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Holdings.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].usingInfo,
                                                                            children: [
                                                                                "탈퇴예정일:",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].endDate,
                                                                                    children: [
                                                                                        " ",
                                                                                        formatDate(result.endDate)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/Holdings.tsx",
                                                                                    lineNumber: 234,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Holdings.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Holdings.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, result.cardName, true, {
                                                                fileName: "[project]/src/components/Holdings.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, userResult.user, true, {
                                                    fileName: "[project]/src/components/Holdings.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Holdings.tsx",
                                            lineNumber: 214,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Holdings.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Holdings.tsx",
                            lineNumber: 193,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Holdings.tsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerButtons,
                        style: {
                            marginTop: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterControls,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: showTerminated,
                                            onChange: (e)=>setShowTerminated(e.target.checked),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxInput
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Holdings.tsx",
                                            lineNumber: 250,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].checkboxText,
                                            children: "해지된 카드 표시"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Holdings.tsx",
                                            lineNumber: 256,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Holdings.tsx",
                                    lineNumber: 249,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Holdings.tsx",
                                lineNumber: 248,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addCardButton,
                                onClick: handleAddNewCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 20,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Holdings.tsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addText,
                                        children: "새 카드 추가"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Holdings.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Holdings.tsx",
                                lineNumber: 260,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Holdings.tsx",
                        lineNumber: 247,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Holdings.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userCards,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userTitle} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].conanTitle}`,
                                children: "Conan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Holdings.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
                                children: conanCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: getCardClassName(card),
                                        onClick: ()=>selectCard(card),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardNameSmall,
                                                children: card.name || '새 카드'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Holdings.tsx",
                                                lineNumber: 278,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardStatus,
                                                children: getStatusText(card.status)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Holdings.tsx",
                                                lineNumber: 279,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, `conan-${index}`, true, {
                                        fileName: "[project]/src/components/Holdings.tsx",
                                        lineNumber: 273,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Holdings.tsx",
                                lineNumber: 271,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Holdings.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userCards,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userTitle} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chaejiTitle}`,
                                children: "Chaeji"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Holdings.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
                                children: chaejiCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: getCardClassName(card),
                                        onClick: ()=>selectCard(card),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardNameSmall,
                                                children: card.name || '새 카드'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Holdings.tsx",
                                                lineNumber: 294,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardStatus,
                                                children: getStatusText(card.status)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Holdings.tsx",
                                                lineNumber: 295,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, `chaeji-${index}`, true, {
                                        fileName: "[project]/src/components/Holdings.tsx",
                                        lineNumber: 289,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Holdings.tsx",
                                lineNumber: 287,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Holdings.tsx",
                        lineNumber: 285,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Holdings.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Holdings.tsx",
        lineNumber: 189,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Holdings;
}),
"[project]/src/components/Information.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "calendarContainer": "Information-module-scss-module__UyFpcG__calendarContainer",
  "calendarSection": "Information-module-scss-module__UyFpcG__calendarSection",
  "cardsTimeline": "Information-module-scss-module__UyFpcG__cardsTimeline",
  "currentYear": "Information-module-scss-module__UyFpcG__currentYear",
  "dividerChaeji": "Information-module-scss-module__UyFpcG__dividerChaeji",
  "dividerConan": "Information-module-scss-module__UyFpcG__dividerConan",
  "dividerLabel": "Information-module-scss-module__UyFpcG__dividerLabel",
  "information": "Information-module-scss-module__UyFpcG__information",
  "informationContent": "Information-module-scss-module__UyFpcG__informationContent",
  "modalBody": "Information-module-scss-module__UyFpcG__modalBody",
  "modalCloseButton": "Information-module-scss-module__UyFpcG__modalCloseButton",
  "modalContent": "Information-module-scss-module__UyFpcG__modalContent",
  "modalHeader": "Information-module-scss-module__UyFpcG__modalHeader",
  "modalOverlay": "Information-module-scss-module__UyFpcG__modalOverlay",
  "modalSlideIn": "Information-module-scss-module__UyFpcG__modalSlideIn",
  "modalStatusBadge": "Information-module-scss-module__UyFpcG__modalStatusBadge",
  "modalTitle": "Information-module-scss-module__UyFpcG__modalTitle",
  "modalTitleSection": "Information-module-scss-module__UyFpcG__modalTitleSection",
  "monthColumn": "Information-module-scss-module__UyFpcG__monthColumn",
  "monthDivider": "Information-module-scss-module__UyFpcG__monthDivider",
  "monthHeader": "Information-module-scss-module__UyFpcG__monthHeader",
  "monthHeaders": "Information-module-scss-module__UyFpcG__monthHeaders",
  "navButton": "Information-module-scss-module__UyFpcG__navButton",
  "sectionHeader": "Information-module-scss-module__UyFpcG__sectionHeader",
  "sectionTitle": "Information-module-scss-module__UyFpcG__sectionTitle",
  "statusKeeping": "Information-module-scss-module__UyFpcG__statusKeeping",
  "statusTerminated": "Information-module-scss-module__UyFpcG__statusTerminated",
  "statusUsing": "Information-module-scss-module__UyFpcG__statusUsing",
  "timelineContainer": "Information-module-scss-module__UyFpcG__timelineContainer",
  "timelineGrid": "Information-module-scss-module__UyFpcG__timelineGrid",
  "userDivider": "Information-module-scss-module__UyFpcG__userDivider",
  "yearNavigation": "Information-module-scss-module__UyFpcG__yearNavigation",
});
}),
"[project]/src/components/CalendarRow.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "calendarRow": "CalendarRow-module-scss-module__Z7_GUq__calendarRow",
  "cardInfo": "CalendarRow-module-scss-module__Z7_GUq__cardInfo",
  "cardName": "CalendarRow-module-scss-module__Z7_GUq__cardName",
  "dateIndicators": "CalendarRow-module-scss-module__Z7_GUq__dateIndicators",
  "endDate": "CalendarRow-module-scss-module__Z7_GUq__endDate",
  "holderChaeji": "CalendarRow-module-scss-module__Z7_GUq__holderChaeji",
  "holderConan": "CalendarRow-module-scss-module__Z7_GUq__holderConan",
  "startDate": "CalendarRow-module-scss-module__Z7_GUq__startDate",
  "statusKeeping": "CalendarRow-module-scss-module__Z7_GUq__statusKeeping",
  "statusTerminated": "CalendarRow-module-scss-module__Z7_GUq__statusTerminated",
  "statusUsing": "CalendarRow-module-scss-module__Z7_GUq__statusUsing",
  "timelineBar": "CalendarRow-module-scss-module__Z7_GUq__timelineBar",
});
}),
"[project]/src/components/CalendarRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CalendarRow.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constant.ts [app-ssr] (ecmascript)");
;
;
;
;
const CalendarRow = ({ card, year, rowIndex, style })=>{
    const selectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.selectCard);
    const startDate = new Date(card.period.start);
    const endDate = new Date(card.period.end);
    const isVisible = (()=>{
        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();
        return year >= startYear && year <= endYear;
    })();
    if (!isVisible) return null;
    const showStartDate = startDate.getFullYear() === year;
    const showEndDate = endDate.getFullYear() === year;
    const startDateString = showStartDate ? startDate.getDate().toString() : '...';
    const endDateString = showEndDate ? endDate.getDate().toString() : '...';
    const isLeapYear = (y)=>y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
    const getStartPoint = ()=>{
        const startOfYear = new Date(year, 0, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysInYear = isLeapYear(year) ? 366 : 365;
        if (startDate.getFullYear() < year) {
            return 0;
        }
        const daysDiff = Math.floor((startDate.getTime() - startOfYear.getTime()) / oneDay);
        return Math.max(daysDiff / daysInYear * 100, 0);
    };
    const getEndPoint = ()=>{
        const startOfYear = new Date(year, 0, 1);
        const oneDay = 1000 * 60 * 60 * 24;
        const daysInYear = isLeapYear(year) ? 366 : 365;
        if (endDate.getFullYear() > year) {
            return 100;
        }
        const daysDiff = Math.floor((endDate.getTime() - startOfYear.getTime()) / oneDay);
        return Math.min(daysDiff / daysInYear * 100, 100);
    };
    const startPoint = getStartPoint();
    const endPoint = getEndPoint();
    const rowHeight = 24;
    const rowSpacing = 2;
    const topPosition = rowIndex * (rowHeight + rowSpacing);
    const timelineStyle = {
        left: `${startPoint}%`,
        width: `${endPoint - startPoint}%`,
        top: `${topPosition}px`,
        ...style
    };
    const holderClass = card.holder === 'conan' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].holderConan : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].holderChaeji;
    let statusClass = '';
    if (card.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING) statusClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusUsing;
    else if (card.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING) statusClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusKeeping;
    else if (card.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED) statusClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusTerminated;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].calendarRow} ${holderClass} ${statusClass}`,
        style: timelineStyle,
        onClick: ()=>selectCard(card),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineBar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateIndicators,
                    children: [
                        showStartDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].startDate,
                            children: startDateString
                        }, void 0, false, {
                            fileName: "[project]/src/components/CalendarRow.tsx",
                            lineNumber: 91,
                            columnNumber: 39
                        }, ("TURBOPACK compile-time value", void 0)),
                        showEndDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].endDate,
                            children: endDateString
                        }, void 0, false, {
                            fileName: "[project]/src/components/CalendarRow.tsx",
                            lineNumber: 92,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CalendarRow.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CalendarRow.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardInfo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardName,
                    children: card.name || '새 카드'
                }, void 0, false, {
                    fileName: "[project]/src/components/CalendarRow.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CalendarRow.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CalendarRow.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CalendarRow;
}),
"[project]/src/components/CardDetail.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButtons": "CardDetail-module-scss-module__mqI1bW__actionButtons",
  "addButton": "CardDetail-module-scss-module__mqI1bW__addButton",
  "addIcon": "CardDetail-module-scss-module__mqI1bW__addIcon",
  "autoPaymentsList": "CardDetail-module-scss-module__mqI1bW__autoPaymentsList",
  "cardDetail": "CardDetail-module-scss-module__mqI1bW__cardDetail",
  "deleteButton": "CardDetail-module-scss-module__mqI1bW__deleteButton",
  "deleteIcon": "CardDetail-module-scss-module__mqI1bW__deleteIcon",
  "detailForm": "CardDetail-module-scss-module__mqI1bW__detailForm",
  "emptyState": "CardDetail-module-scss-module__mqI1bW__emptyState",
  "fieldInput": "CardDetail-module-scss-module__mqI1bW__fieldInput",
  "fieldLabel": "CardDetail-module-scss-module__mqI1bW__fieldLabel",
  "fieldSelect": "CardDetail-module-scss-module__mqI1bW__fieldSelect",
  "formField": "CardDetail-module-scss-module__mqI1bW__formField",
  "formGrid": "CardDetail-module-scss-module__mqI1bW__formGrid",
  "formSection": "CardDetail-module-scss-module__mqI1bW__formSection",
  "paymentFields": "CardDetail-module-scss-module__mqI1bW__paymentFields",
  "paymentItem": "CardDetail-module-scss-module__mqI1bW__paymentItem",
  "removeButton": "CardDetail-module-scss-module__mqI1bW__removeButton",
  "removeIcon": "CardDetail-module-scss-module__mqI1bW__removeIcon",
  "saveButton": "CardDetail-module-scss-module__mqI1bW__saveButton",
  "saveIcon": "CardDetail-module-scss-module__mqI1bW__saveIcon",
  "sectionHeader": "CardDetail-module-scss-module__mqI1bW__sectionHeader",
  "sectionTitle": "CardDetail-module-scss-module__mqI1bW__sectionTitle",
});
}),
"[project]/src/components/CardDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CardDetail.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
;
;
;
const CardDetail = ()=>{
    const selectedCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.selectedCard);
    const updateCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.updateCard);
    // Local state for editing form
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedCard) {
            // Deep copy to avoid direct mutation of store state until save
            setFormData(JSON.parse(JSON.stringify(selectedCard)));
        } else {
            setFormData(null);
        }
    }, [
        selectedCard
    ]);
    if (!formData) return null;
    const isFormValid = !!(formData.name?.trim() && formData.holder && formData.period?.start && formData.period?.end);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>prev ? {
                ...prev,
                [name]: value
            } : null);
    };
    const handlePeriodChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>prev ? {
                ...prev,
                period: {
                    ...prev.period,
                    [name]: value // string format "YYYY-MM-DD" is fine for input type=date
                }
            } : null);
    };
    // Need to handle Date object vs string for input type="date"
    const formatDateForInput = (date)=>{
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };
    const addMonthlyPayment = ()=>{
        setFormData((prev)=>{
            if (!prev) return null;
            return {
                ...prev,
                automaticDebit: [
                    ...prev.automaticDebit || [],
                    {
                        name: '',
                        cost: ''
                    }
                ]
            };
        });
    };
    const deleteMonthlyPayment = (index)=>{
        setFormData((prev)=>{
            if (!prev) return null;
            const newDebits = [
                ...prev.automaticDebit || []
            ];
            newDebits.splice(index, 1);
            return {
                ...prev,
                automaticDebit: newDebits
            };
        });
    };
    const handlePaymentChange = (index, field, value)=>{
        setFormData((prev)=>{
            if (!prev) return null;
            const newDebits = [
                ...prev.automaticDebit || []
            ];
            newDebits[index] = {
                ...newDebits[index],
                [field]: value
            };
            return {
                ...prev,
                automaticDebit: newDebits
            };
        });
    };
    const saveCard = ()=>{
        if (!formData || !isFormValid) return;
        const cardName = formData.name || '새 카드';
        if (window.confirm(`${cardName}을(를) 저장하시겠습니까?`)) {
            // Convert string dates back to Date objects if needed, 
            // but our type says Date. JSON.stringify might have made them strings.
            // Let's ensure consistency.
            const savingData = {
                ...formData,
                period: {
                    start: new Date(formData.period.start),
                    end: new Date(formData.period.end)
                }
            };
            updateCard(savingData);
            alert(`${cardName}이(가) 성공적으로 저장되었습니다.`);
        }
    };
    const deleteCard = ()=>{
        // Implement delete logic if passed from store, for now just log or alert
        // The original used an action. We need a delete action in store.
        const cardName = formData.name || '카드';
        if (window.confirm(`${cardName}을(를) 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.`)) {
            // In a real app calls store.deleteCard(id)
            alert('삭제 기능은 아직 구현되지 않았습니다. (Store action 필요)');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDetail,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].detailForm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "기본 정보"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "카드 이름"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 121,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleInputChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput,
                                                placeholder: "카드 이름을 입력하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "사용자"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 131,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "holder",
                                                value: formData.holder,
                                                onChange: handleInputChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldSelect,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "conan",
                                                        children: "Conan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "chaeji",
                                                        children: "Chaeji"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 132,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "결제 은행"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 143,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "depositBank",
                                                value: formData.depositBank,
                                                onChange: handleInputChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput,
                                                placeholder: "결제 은행을 입력하세요"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 144,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "연회비"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "annualFee",
                                                value: formData.annualFee,
                                                onChange: handleInputChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput,
                                                placeholder: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 154,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "월 사용금액"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 163,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "monthlyUsage",
                                                value: formData.monthlyUsage,
                                                onChange: handleInputChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput,
                                                placeholder: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "카드 상태"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "status",
                                                value: formData.status,
                                                onChange: handleInputChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldSelect,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING,
                                                        children: "사용중"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING,
                                                        children: "보관중"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED,
                                                        children: "해지됨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardDetail.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "사용 기간"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 189,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "시작일"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 192,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "start",
                                                value: formatDateForInput(formData.period.start),
                                                onChange: handlePeriodChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 193,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 191,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                children: "종료일"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 202,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "end",
                                                value: formatDateForInput(formData.period.end),
                                                onChange: handlePeriodChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 203,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 201,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardDetail.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                        children: "자동 결제"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 216,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addButton,
                                        onClick: addMonthlyPayment,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 218,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "추가"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 217,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            formData.automaticDebit && formData.automaticDebit.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].autoPaymentsList,
                                children: formData.automaticDebit.map((payment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paymentItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paymentFields,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                                children: "내용"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: payment.name,
                                                                onChange: (e)=>handlePaymentChange(index, 'name', e.target.value),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput,
                                                                placeholder: "결제 내용"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formField,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel,
                                                                children: "금액"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: payment.cost,
                                                                onChange: (e)=>handlePaymentChange(index, 'cost', e.target.value),
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput,
                                                                placeholder: "0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CardDetail.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 226,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeButton,
                                                onClick: ()=>deleteMonthlyPayment(index),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 16,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CardDetail.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CardDetail.tsx",
                                                lineNumber: 246,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/CardDetail.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 223,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "등록된 자동 결제가 없습니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CardDetail.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 257,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardDetail.tsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardDetail.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButtons,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveButton,
                        onClick: saveCard,
                        disabled: !isFormValid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                size: 18,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 271,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "저장"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardDetail.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                        onClick: deleteCard,
                        disabled: !formData.id,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 18,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardDetail.tsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "삭제"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CardDetail.tsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardDetail.tsx",
                lineNumber: 264,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CardDetail.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CardDetail;
}),
"[project]/src/components/Information.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/constant.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Information.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CalendarRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardDetail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
;
;
;
;
;
;
;
;
const Information = ()=>{
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.cards);
    const selectedCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.selectedCard);
    const resetSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.resetSelection);
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Config
    const minYear = 2020;
    const maxYear = new Date().getFullYear() + 5;
    const monthNames = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    // Filter and Sort Logic from analyzed features
    const visibleCards = (()=>{
        const filtered = cards.filter((card)=>{
            const startYear = new Date(card.period.start).getFullYear();
            const endYear = new Date(card.period.end).getFullYear();
            return currentYear >= startYear && currentYear <= endYear;
        });
        // Smart Sort: Status > Holder > StartDate
        return filtered.sort((a, b)=>{
            // 1. Status: Terminated last
            if (a.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED && b.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED) return 1;
            if (a.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED && b.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED) return -1;
            // 2. Holder
            if (a.holder !== b.holder) return a.holder === 'conan' ? -1 : 1;
            // 3. StartDate
            return new Date(a.period.start).getTime() - new Date(b.period.start).getTime();
        });
    })();
    const timelineHeight = (()=>{
        const rowHeight = 24;
        const rowSpacing = 2;
        const dividerHeight = 30;
        // Calculate exact height needed
        let totalHeight = 0;
        visibleCards.forEach((card, index)=>{
            if (index === 0 || visibleCards[index - 1].holder !== card.holder) {
                totalHeight += dividerHeight;
            }
            totalHeight += rowHeight + rowSpacing;
        });
        return `${Math.max(totalHeight + 100, 400)}px`;
    })();
    const previousYear = ()=>{
        if (currentYear > minYear) setCurrentYear((prev)=>prev - 1);
    };
    const nextYear = ()=>{
        if (currentYear < maxYear) setCurrentYear((prev)=>prev + 1);
    };
    const getStatusText = (status)=>{
        const statusMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].USING]: '사용중',
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].KEEPING]: '보관중',
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$constant$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CARD_STATUS"].TERMINATED]: '해지됨'
        };
        return statusMap[status] || status;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].information,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].informationContent,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].calendarSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                    children: "카드 보유 기간"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Information.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].yearNavigation,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton,
                                            onClick: previousYear,
                                            disabled: currentYear <= minYear,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Information.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 97,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].currentYear,
                                            children: currentYear
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navButton,
                                            onClick: nextYear,
                                            disabled: currentYear >= maxYear,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Information.tsx",
                                                lineNumber: 110,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Information.tsx",
                                    lineNumber: 96,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Information.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].calendarContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monthHeaders,
                                    children: monthNames.map((month, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monthHeader,
                                            children: month
                                        }, index, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Information.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineContainer,
                                    style: {
                                        height: timelineHeight
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineGrid,
                                            children: Array.from({
                                                length: 12
                                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monthColumn,
                                                    children: index !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monthDivider
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Information.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 57
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, index, false, {
                                                    fileName: "[project]/src/components/Information.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 127,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsTimeline,
                                            children: (()=>{
                                                let currentTop = 0;
                                                const rowHeight = 24;
                                                const rowSpacing = 2;
                                                const dividerHeight = 30;
                                                return visibleCards.map((card, index)=>{
                                                    const isFirstOrDifferent = index === 0 || visibleCards[index - 1].holder !== card.holder;
                                                    let dividerElement = null;
                                                    if (isFirstOrDifferent) {
                                                        dividerElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userDivider} ${card.holder === 'conan' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dividerConan : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dividerChaeji}`,
                                                            style: {
                                                                top: `${currentTop}px`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dividerLabel,
                                                                children: card.holder === 'conan' ? 'Conan' : 'Chaeji'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Information.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, `divider-${card.holder}-${index}`, false, {
                                                            fileName: "[project]/src/components/Information.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                        currentTop += dividerHeight;
                                                    }
                                                    const cardRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CalendarRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        card: card,
                                                        year: currentYear,
                                                        rowIndex: index,
                                                        style: {
                                                            top: `${currentTop}px`
                                                        }
                                                    }, `${card.id || index}-${currentYear}`, false, {
                                                        fileName: "[project]/src/components/Information.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                    currentTop += rowHeight + rowSpacing;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                        children: [
                                                            dividerElement,
                                                            cardRow
                                                        ]
                                                    }, `wrapper-${card.id || index}`, true, {
                                                        fileName: "[project]/src/components/Information.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                });
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Information.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Information.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Information.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Information.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            selectedCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                onClick: resetSelection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalContent,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitleSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalTitle,
                                            children: selectedCard.name || '새 카드'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalStatusBadge} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][`status${selectedCard.status.charAt(0).toUpperCase() + selectedCard.status.slice(1)}`]}`,
                                            children: getStatusText(selectedCard.status)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Information.tsx",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Information.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCloseButton,
                                    onClick: resetSelection,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Information.tsx",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Information.tsx",
                                    lineNumber: 198,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Information.tsx",
                            lineNumber: 191,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalBody,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Information.tsx",
                                lineNumber: 203,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Information.tsx",
                            lineNumber: 202,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Information.tsx",
                    lineNumber: 190,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Information.tsx",
                lineNumber: 189,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Information.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Information;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/home.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Holdings.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Information.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
'use client';
;
;
;
;
;
;
function Home() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('calendar');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appTitle,
                        children: "Card Organizer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appSubtitle,
                        children: "신용카드 혜택 극대화를 위한 관리 도구"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].appMain,
                children: [
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileTabs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabButton} ${activeTab === 'holdings' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setActiveTab('holdings'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        size: 20,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this),
                                    "카드 현황"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabButton} ${activeTab === 'calendar' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setActiveTab('calendar'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 20,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabIcon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this),
                                    "캘린더"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainSections} ${isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileLayout : ''}`,
                        children: [
                            (!isMobile || activeTab === 'holdings') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].holdingsSection} ${isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFull : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Holdings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this),
                            (!isMobile || activeTab === 'calendar') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].informationSection} ${isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFull : ''}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Information$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bcfa924b._.js.map