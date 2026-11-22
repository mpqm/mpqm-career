# MPQM 포트폴리오와 경력 자료

프로젝트에서 맡은 일과 검증 결과는 `knowledge/`에 기록한다. 이 자료를 바탕으로 이력서, 자기소개서, 포트폴리오, 면접 답변을 작성하고 `carrer/`에서 웹과 PDF로 제공한다.

## 웹과 PDF

| 자료 | 열기 |
|---|---|
| 웹 홈페이지 | [홈](./carrer/index.html) |
| 이력서 | [웹 이력서](./carrer/index.html?view=resume) · [PDF 2쪽](./carrer/download/이력서.pdf) |
| 상세 포트폴리오 | [프로젝트 7개](./carrer/index.html?view=portfolio) |
| 포트폴리오 슬라이드 | [웹 슬라이드](./carrer/index.html?view=slides) · [16:9 PDF 23쪽](./carrer/download/포트폴리오.pdf) |
| 이전 웹 페이지 | [아카이브](./carrer/index.html?view=archive) |

웹은 `carrer/index.html`에서 시작한다. 화면 HTML은 `carrer/templates/`, 화면 공통 문구는 [content.js](./carrer/static/js/content.js), 웹 자산과 도구는 `carrer/static/`에 있다. 화면별 JavaScript는 로컬 jQuery로 템플릿에 데이터를 채운다.

## 경력 자료 찾기

| 경로 | 하는 일 |
|---|---|
| `knowledge/fornet/` | 포네트 업무 프로젝트 7개의 상세 조사, Git 근거, 시험 기록, 지원서 제작 원고와 업무 티켓 |
| `knowledge/result/` | 프로젝트 근거를 연결한 대시보드, 경력기술서, 이력서, 자기소개서, 포트폴리오 구성, 면접 자료 |
| `knowledge/private/` | Board·ZIPPOP·SSI 관련 별도 자료 |

- [통합 지원 자료](./knowledge/result/knowledge.md) · [경력 대시보드](./knowledge/result/knowledge.md#dashboard) · [근거 지도](./knowledge/result/knowledge.md#evidence-map)
- [경력기술서](./knowledge/result/knowledge.md#career) · [이력서 원고](./knowledge/result/knowledge.md#resume) · [자기소개서와 STAR 사례](./knowledge/result/knowledge.md#star) · [포트폴리오 구성](./knowledge/result/knowledge.md#portfolio) · [면접](./knowledge/result/knowledge.md#interview)
- [지원 직무와 공고 대응](./knowledge/result/knowledge.md#strategy) · [근거 깊이 점검](./knowledge/result/knowledge.md#depth-review) · [배포·검수·저작 근거](./knowledge/result/knowledge.md#evidence-review)
- [업무 티켓 분석](./knowledge/fornet/process-ticket.md) · [업무 티켓 링크 목록](./knowledge/fornet/process-ticket.md#ticket-links)

| 프로젝트 | 상세 근거 | 지원서 제작 원고 |
|---|---|---|
| CXL ENABLER | [근거](./knowledge/fornet/project-cxl.md#evidence) | [원고](./knowledge/fornet/project-cxl.md#materials) |
| SVT Manager | [근거](./knowledge/fornet/project-svt.md#evidence) | [원고](./knowledge/fornet/project-svt.md#materials) |
| KSTV5 | [근거](./knowledge/fornet/project-kstv5.md#evidence) | [원고](./knowledge/fornet/project-kstv5.md#materials) |
| KSTV6와 성능시험 | [근거](./knowledge/fornet/project-kstv6.md#evidence) · [파이프라인·테스터](./knowledge/fornet/project-kstv6.md#pipeline) | [원고](./knowledge/fornet/project-kstv6.md#materials) |
| ONEWAY | [근거](./knowledge/fornet/project-oneway.md#evidence) | [원고](./knowledge/fornet/project-oneway.md#materials) |
| IDPP k3s | [근거](./knowledge/fornet/project-idpp.md#evidence) | [원고](./knowledge/fornet/project-idpp.md#materials) |
| SCG MDMS·GASDOT | [근거](./knowledge/fornet/project-scg.md#evidence) | [원고](./knowledge/fornet/project-scg.md#materials) |

업무 티켓 문서는 이전 티켓 해석과 Notion 링크를 함께 보관한다. 티켓은 업무 범위를 찾는 출발점으로 쓰고 개인 기여와 결과를 프로젝트 근거에서 대조한다. 회사 프로젝트 원본 경로는 상위 OneDrive 작업공간 기준이다. 자료 관리 방법은 [AGENTS.MD](./AGENTS.MD), 변경 기록은 [HISTORY.md](./HISTORY.md)에 있다.

### 근거를 읽는 기준

세부 구현·사용자가 확인한 담당 범위·시험 조건은 `fornet/project-*.md`를 기준으로 삼는다. `result/knowledge.md`의 문장은 목적에 따라 골라 쓸 수 있는 작업본이다. 이전 Git 합계 947건은 당시 집계이며, KSTV6의 통합 저장소와 분리 저장소 수치를 합산하지 않는다. 운영 반영이나 고객 승인 여부는 개별 증빙이 있는 경우에만 표시한다.

<a id="mpqm"></a>
<a id="materials"></a>

## 포트폴리오 구성과 제작 참고

- 검토본은 경력 2년 차 풀스택 개발자로 구성했다. 상세 사례 순서는 KSTV6 → AI Data Pipeline → CXL → SCG → SVT → IDPP → KSTV5다. 각 사례에서 문제, 접근, 개인 기여, 검증 결과를 보여 준다. IRS·ZIPPOP·SSI는 이전 작업으로 소개한다.
- 기존 Figma의 넓은 여백과 녹색 강조, 16:9 슬라이드 흐름을 참고했다. 웹과 PDF는 같은 문구 데이터를 사용한다. 산출물별 문장 길이와 프로젝트 배치는 웹 검토본을 참고하고, 지원용 표현의 사실과 조건은 통합 지원 자료와 프로젝트 근거에서 확인한다.
- 2026-11-02의 `29ce509`는 MPQM의 초기 정적 이력서, 이미지 자산, GitHub Actions 추가 이력이다. 이전 조사 당시 확인한 `mpqm` 작성자 커밋 2건은 당시 로컬 전체 Ref의 기록이다. 작성 범위와 실배포 상태는 필요할 때 별도로 확인한다.
- Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초는 특정 시험 구성의 측정치다. 60억 건은 누적 조회 측정 구간이며, IDPP의 초당 10만 Tag는 설계 목표다.

제출 전에는 입사일·재직 및 프로젝트 기간, 연락처·학력·자격증, 회사·고객명 공개 범위, 성능시험 장비와 측정 조건을 확인한다.

## GitHub Pages 배포

[`main` 배포 워크플로](./.github/workflows/main.yml)는 `carrer/`를 정적 파일로 업로드한다. 브라우저가 `index.html`에서 HTML 템플릿을 불러오고, `download/`의 PDF를 다운로드할 수 있다. GitHub Pages 배포에 Node 서버나 빌드 단계가 필요하지 않다.

Git 원격의 공개 범위와 Pages 배포 범위는 각각 확인한다. `knowledge/`에는 회사 업무 티켓과 상세 근거가 있으므로 공개 Git 원격에는 공개 범위를 확인한 자료만 올린다.

## 로컬 미리보기와 PDF 재생성

MPQM 루트에서 미리보기 명령을 실행하고 `http://127.0.0.1:8000/`을 연다. 8000번이 사용 중이면 명령 뒤에 다른 포트를 붙인다.

```powershell
node carrer/static/lib/serve.mjs
```

PDF는 아래 명령으로 `carrer/download/`에 갱신한다. Node.js 22와 Chrome 또는 Edge가 필요하다. 브라우저 설치 위치가 다르면 `PORTFOLIO_BROWSER`에 실행 파일 경로를 지정한다. 웹 문구를 변경한 뒤에는 PDF도 다시 생성한다.

```powershell
node carrer/static/lib/export-pdfs.mjs
```
