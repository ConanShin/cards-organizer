# Cards Organizer

신용카드 혜택을 극대화하기 위한 신용카드 생성, 해지 관련 정보를 관리하는 웹 애플리케이션입니다.

## 🎯 주요 기능

### Holdings (카드 보유 현황)
- **현재 소유 중인 카드 관리**: 사용자별로 카드를 분류하여 표시
- **카드 상태 관리**: 
  - `using`: 사용 중인 카드 (녹색 테두리)
  - `keeping`: 보관 중인 카드 (노란색 테두리)  
  - `terminated`: 해지된 카드 (빨간색 테두리)
- **해지 카드 표시 옵션**: 체크박스로 해지된 카드 표시/숨김 토글
- **카드 추가**: 새로운 카드 등록 기능
- **카드 선택**: 클릭하여 카드 상세 정보 확인

### Information (카드 정보 및 캘린더)
- **카드 상세 정보 편집**:
  - 카드 이름, 사용자, 결제 은행
  - 연회비, 월 사용금액
  - 자동 결제 항목 관리 (추가/삭제)
  - 카드 사용 기간 (시작일/종료일)
  - 카드 상태 변경
- **캘린더 뷰**: 
  - 연도별 카드 보유 기간 시각화
  - 월별 구분선으로 시간 흐름 표시
  - 카드별 보유 기간을 타임라인으로 표시
  - 연도 네비게이션 (이전/다음 연도)

## 🛠 기술 스택

- **Frontend**: Vue.js 2.6.11
- **Language**: TypeScript 3.9.3
- **State Management**: Vuex 3.4.0
- **Routing**: Vue Router 3.2.0
- **Styling**: SCSS
- **Build Tool**: Vue CLI 4.5.0
- **PWA**: Service Worker 지원

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── CalendarRow.vue      # 캘린더 행 컴포넌트
│   └── CardDetail.vue       # 카드 상세 정보 컴포넌트
├── views/
│   ├── Holdings.vue         # 카드 보유 현황 페이지
│   └── Information.vue      # 카드 정보 및 캘린더 페이지
├── store/
│   ├── index.ts            # Vuex 스토어 설정
│   ├── cards-conan.ts      # Conan 사용자 카드 데이터
│   └── cards-chaeji.ts     # Chaeji 사용자 카드 데이터
├── assets/
│   └── constant.ts         # 카드 상태 상수 정의
└── router/
    └── index.ts            # 라우터 설정
```

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js (v12 이상)
- npm 또는 yarn

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run serve
```

### 프로덕션 빌드
```bash
npm run build
```

## 📊 데이터 구조

### 카드 객체
```typescript
interface Card {
  id?: string;
  name: string;                    // 카드 이름
  holder: 'conan' | 'chaeji';     // 카드 소유자
  depositBank: string;             // 결제 은행
  annualFee: string;               // 연회비
  monthlyUsage: string;            // 월 사용금액
  debits: Array<{                  // 자동 결제 항목
    name: string;
    cost: string;
  }>;
  period: {                        // 사용 기간
    start: string;                 // 시작일 (YYYY-MM-DD)
    end: string;                   // 종료일 (YYYY-MM-DD)
  };
  status: 'using' | 'keeping' | 'terminated';  // 카드 상태
  selected: boolean;               // 선택 상태
}
```

## 🎨 UI/UX 특징

- **사용자별 색상 구분**: 
  - Conan: 파란색 계열
  - Chaeji: 빨간색 계열
- **직관적인 카드 상태 표시**: 테두리 색상으로 상태 구분
- **반응형 캘린더**: 연도별 카드 보유 기간을 시각적으로 표현
- **PWA 지원**: 오프라인에서도 사용 가능

## 🔧 주요 기능 상세

### 카드 관리
- 카드 추가, 수정, 삭제
- 카드 상태 변경 (사용중/보관/해지)
- 자동 결제 항목 관리
- 카드별 사용 기간 설정

### 캘린더 기능
- 연도별 카드 보유 기간 시각화
- 월별 구분선으로 시간 흐름 표시
- 카드별 타임라인 표시
- 연도 네비게이션

## 📱 PWA 기능

- Service Worker를 통한 오프라인 지원
- 앱 설치 가능
- 모바일 친화적 UI

## 🌐 배포

빌드된 파일은 `docs/` 폴더에 생성되며, GitHub Pages 등 정적 호스팅 서비스에 배포할 수 있습니다.

## 📝 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.