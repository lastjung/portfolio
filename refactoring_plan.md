# Portfolio Optimization Plan: "Index.html Diet"

`index.html` 파일이 약 2,000줄에 육박하며 비대해졌습니다. 유지보수 효율성과 가독성을 높이기 위한 **3단계 리팩토링 계획**을 제안합니다.

## 🚨 문제점 진단

1.  **반복되는 코드 (Code Repetition):** 프로젝트 카드(Project Card) UI 코드가 10번 이상 중복됩니다. 디자인 수정 시 모든 카드를 일일이 고쳐야 합니다.
2.  **파일 크기:** 단일 파일에 HTML, CSS, JS가 섞여 있어 스크롤 압박이 심하고 구조 파악이 어렵습니다.
3.  **유지보수:** 새 프로젝트 추가 시 HTML을 복사/붙여넣기 해야 하므로 실수가 발생하기 쉽습니다.

---

## 🛠️ 개선 방안 (Refactoring Strategy)

### 1단계: 파일 분리 (Separation of Concerns)

가장 빠르고 안전한 첫 번째 단계입니다.

- **CSS 분리:** `<style>` 태그 내용을 `css/styles.css`로 이동
- **JS 분리:** `<script>` 태그 내용을 `js/main.js`로 이동
- **효과:** `index.html`의 라인 수를 즉시 20~30% 줄일 수 있습니다.

### 2단계: 데이터 기반 렌더링 (Data-Driven UI) ✅ **강력 추천**

반복되는 HTML 구조를 자바스크립트 객체(JSON)와 렌더링 함수로 대체합니다.

**변경 전 (Hardcoded HTML):**

```html
<!-- 200줄 이상의 반복되는 카드 코드 -->
<div class="card">Project A...</div>
<div class="card">Project B...</div>
<div class="card">Project C...</div>
```

**변경 후 (JavaScript Rendering):**

```javascript
// data.js
const projects = [
  { title: "Magic Square", type: "Sudoku", theme: "blue", ... },
  { title: "Langton's Ant", type: "Ant", theme: "red", ... }
];

// renderer.js
projects.forEach(project => createCard(project));
```

- **효과:** `index.html`의 프로젝트 섹션이 텅 빈 컨테이너(`div`) 하나로 바뀌며, 파일 크기가 **획기적으로 줄어듭니다(예: 2000줄 -> 500줄).**
- **장점:** 프로젝트 추가 시 JSON 데이터에 한 줄만 추가하면 됩니다.

### 3단계: 컴포넌트화 (선택 사항)

추후 더 복잡한 기능이 필요할 경우 `Vite`나 `React` 같은 번들러/프레임워크 도입을 고려할 수 있습니다. (현재 단계에서는 2단계까지만 해도 충분합니다.)

---

## 📅 실행 계획 (Action Plan)

1.  **데이터 구조 설계:** 현재 있는 모든 프로젝트(AI, Math, Game 등)의 정보를 분석해 공통 필드(제목, 설명, 링크, 테마색, 아이콘 타입 등)를 정의합니다.
2.  **스크립트 작성:**
    - `js/projects-data.js`: 프로젝트 리스트 저장
    - `js/card-renderer.js`: HTML을 생성하는 템플릿 함수 작성
3.  **HTML 교체:** `index.html`의 하드코딩된 카드들을 삭제하고 `<div id="project-list"></div>`와 같은 타겟 컨테이너로 교체합니다.

---

**승인 요청:**
이 방안으로 진행하시겠습니까? 승인해 주시면 **"2단계: 데이터 기반 렌더링"** 방식으로 즉시 리팩토링을 시작하여 `index.html`을 다이어트하겠습니다.
