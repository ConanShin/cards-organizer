# Cards Organizer

신용카드 혜택을 극대화하고 보유 현황을 효율적으로 관리하기 위한 웹 애플리케이션입니다.  
가족 구성원(Conan, Chaeji)별 카드 보유 이력을 시각화하고, 체계적인 검색 및 필터링 기능을 제공합니다.

<br/>

## 🎯 Key Features (주요 기능)

### 1. 📊 Holdings (카드 보유 대시보드)
현재 보유 중이거나 해지한 카드를 직관적인 카드 UI로 관리합니다.

- **사용자별 그룹화**: Conan과 Chaeji의 카드를 구분하여 표시하며, 고유 색상 테마를 적용했습니다.
- **상태 기반 시각화**: 테두리 색상으로 카드의 현재 상태를 즉시 파악할 수 있습니다.
  - 🟢 `Using`: 사용 중인 카드 (실적 충족 필요)
  - 🟡 `Keeping`: 보관 중인 카드 (실적 불필요, 혜택 유지)
  - 🔴 `Terminated`: 해지된 카드
- **스마트 검색 기능**:
  - 카드사명(예: '삼성', '신한')으로 검색 시, 해당 카드사의 보유 이력을 찾아줍니다.
  - **최적 카드 추천 로직**: 검색 결과 중 '사용 중'인 카드를 우선 표시하며, 모두 해지된 경우 가장 최근에 해지된 카드를 보여줍니다.
  - 탈퇴일 및 재가입 가능일(탈퇴 후 경과일) 정보를 자동으로 계산하여 표시합니다.
- **필터링**: '해지된 카드 표시' 체크박스를 통해 현재 유효한 카드만 보거나 전체 이력을 조회할 수 있습니다.

### 2. 📅 Information & Timeline (타임라인)
카드 보유 기간과 이력을 연도별 타임라인(Gantt Chart) 형태로 시각화합니다.

- **연도별 타임라인**: 
  - 과거부터 현재까지의 카드 보유 기간을 가로 막대 그래프로 표현합니다.
  - 연도 네비게이션(<, >)을 통해 과거/미래 이력을 조회할 수 있습니다.
- **지능형 정렬 (Smart Sorting)**:
  - 타임라인의 가독성을 위해 **상태(사용중 > 보관중 > 해지됨)** 순서로 우선 정렬합니다.
  - 그 다음 **사용자(Conan > Chaeji)**별, **가입일** 순으로 자동 정렬되어 중요한 카드가 상단에 배치됩니다.
- **사용자 구분선**: 타임라인 내에서도 사용자 간의 경계를 구분선(Divider)으로 명확히 표시합니다.
- **상세 정보 모달**: 타임라인의 카드를 클릭하면 모달 팝업이 열려 상세 정보를 확인하고 편집할 수 있습니다.

### 3. 📝 Card Management (카드 관리)
- **상세 정보 편집**: 카드명, 결제 은행, 연회비, 월 목표 실적 등을 기록합니다.
- **자동 이체 관리**: 해당 카드로 연결된 자동 이체 항목(항목명, 금액)을 리스트로 관리합니다.
- **기간 설정**: 개설일(Start Date)과 해지일(End Date)을 설정하여 타임라인에 반영합니다.

<br/>

## 🛠 Tech Stack

- **Framework**: Vue.js 2.6 (Class-based Component)
- **Language**: TypeScript 3.9
- **Style**: SCSS (Scoped CSS)
- **State Management**: Vuex 3.4
- **Routing**: Vue Router 3.2
- **Build**: Vue CLI 4.5
- **Deploy**: GitHub Pages (docs 폴더 배포)

<br/>

## 📁 Project Structure

```bash
src/
├── assets/         # 상수(ENUM) 및 정적 자원
├── components/     # 재사용 가능한 컴포넌트
│   ├── CalendarRow.vue  # 타임라인 차트의 개별 행 (막대바)
│   └── CardDetail.vue   # 카드 상세 정보 수정 폼
├── views/          # 메인 페이지
│   ├── Holdings.vue     # 대시보드 및 검색 페이지
│   └── Information.vue  # 타임라인 및 캘린더 페이지
├── store/          # Vuex 상태 관리
│   ├── cards-conan.ts   # 사용자 A 데이터
│   └── cards-chaeji.ts  # 사용자 B 데이터
└── App.vue         # 메인 레이아웃
```

<br/>

## 🚀 Installation & Setup

이 프로젝트는 `Node.js` 환경에서 실행됩니다.

**1. 패키지 설치**
```bash
npm install
```

**2. 개발 서버 실행**
```bash
npm run serve
```
브라우저에서 `http://localhost:8080`으로 접속하여 확인합니다.

**3. 프로덕션 빌드**
```bash
npm run build
```
빌드된 정적 파일은 `docs/` 디렉토리에 생성되며, GitHub Pages 설정을 통해 즉시 배포 가능합니다.

<br/>

## 🎨 Design System

- **Color Palette**:
  - **Background**: Dark Mode (`#2d2d2d`, `#3a3a3a`)
  - **Accent**: Blue (`#007bff`)
  - **Status**:
    - Using: Green (`#28a745`)
    - Keeping: Yellow (`#ffc107`)
    - Terminated: Red (`#dc3545`)
- **Responsive**: Mobile First 대응 (768px 브레이크포인트)

<br/>

## 📝 License
Personal Project for Study & Management.