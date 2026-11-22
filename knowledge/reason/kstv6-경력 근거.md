# KSTV6와 성능시험 경력 근거

[상세 근거](#evidence) · [지원서 제작 원고](#materials) · [Git 기록](#git) · [성능시험 및 테스터](#pipeline)

## 역할과 범위

WebMgr·REST API·Report Manager, CC 요구사항 코드 반영, 감사·OpenSearch·SQL·화면, 병렬 부하 도구와 시험·설계 문서. CC 문서는 참고.

## 재조사에서 확인한 근거

2026-11-22 로컬 전체 Ref와 개인 author 재집계. 23개 저장소 5,963건 중 개인 262건(비병합 243건). web-manager-v2 143/134, rest-api-server-v3 56/48, report-manager 58/57, 기타 5/4(전체/비병합). 별도 `97. tester`는 전체 17건 중 개인 16/16. 과거 통합 저장소 372건은 별도 조사 시점의 기록이다.

WebMgr 업무는 32~122번 사이의 해당 티켓, 파이프라인은 6~8·11번, AI 파싱은 48·65·70·76·89·123번 기록과 연결된다. 1581은 현재 티켓 TXT의 WebMgr QA 항목 ID이며 합격·완료 건수는 아니다. [업무 티켓 소스](../ticket/업무%20티켓%20소스.md)

### 에이전트 계열 개인 변경의 실제 범위

| 저장소와 근거 | 확인된 변경 | 표현 범위 |
|---|---|---|
| agentmgr `8c3a4a9` | `WmiService`의 빈 ID 목록 처리와 boxed ID 값 비교, 미사용 `ProcInfo` 생성자 제거. 현재 소스에도 값 비교 경로가 있다. | 장비 목록 동기화와 상태 정리 조건 보완 |
| windows-vulnerability-manager `2de1814` | 감사 요청 DTO의 snake_case 필드 매핑, PostgreSQL 작업 생성 시각의 timestamp 형변환 보완 | 감사 연동 데이터 계약과 저장 오류 보완 |
| windows-agent-vs `d99fad9`, `55ffc99` | Agent 헤더 버전 한 줄 변경과 병합 | 버전 반영 |
| wmi-agent `ee6d042` | Python 3.14 V6 이력에 에이전트 코드와 라이브러리를 함께 반영 | V6 이관 기록. 파일·줄 수로 직접 구현량을 계산하지 않는다. |

`97. tester`의 현재 `runner/process/process.py`와 `runner/thread/thread.py`에는 작업자별 생성 수·Sink 집계·오류 및 종료 상태가 남는다. 이 값의 의미는 Sink 구현에 따라 달라진다. OpenSearch 최종 색인 처리량은 성능 시험의 별도 관측을 사용한다.

<a id="evidence"></a>

## 상세 근거

### KSTV6 WebMgr·Report Manager·보안 점검·AI SYSLOG 업무·성과·기여도 상세 근거

> 문서 성격: KST 업무의 **상세 근거 문서**(축약 전). Source: `rest-api-server`·`report-manager` 커밋, KSTV5 취약점 점검 Script, KSTV6 AI SYSLOG 검증 산출물. 데이터 파이프라인 부하 시험은 [별도 근거 문서](#pipeline)를 참조한다.

#### 1. 분석 범위

##### 1.1 저장소

| 구분 | `03. kst/kstv6/rest-api-server` | `03. kst/kstv6/report-manager` |
|---|---|---|
| 본인 식별 | Git author email `jspark@4net.co.kr` | Git author `jspark <jspark@4net.co.kr>` |
| 활동 기간 | 2026-01-30 ~ 2026-07-30 | 2026-05-22 ~ 2026-07-24 |
| 본인 커밋 | 372건 | 24건 / 전체 27건 (Git author 기준 약 88.9%) |
| 월별 커밋 | 01 2, 02 28, 03 40, 04 80, 05 54, 06 68, 07 100 | 05 12, 06 7, 07 5 |
| 변경량(참고) | +163,011 / -116,780줄, 파일 2,696개 | +19,987 / -6,382줄, 파일 109개 |
| 주요 역할 | Engine REST API, WebMgr UI·Service, OpenSearch 조회, 취약점·프로세스·로그·보고서·Dashboard, QA·공통화 | 독립 Report Manager 초기 구축, Jasper 한·영 Template, 종합·취약점 Report, OpenSearch 병렬 조회, 동적 Scheduler, 이력·감사·알림·보존기간, DB 암호화 |

- `report-manager`: `5eb82e7`에서 55개 파일·10,885줄 초기 프로젝트 생성 → 단순 연동이 아닌 **초기 구축·핵심 기능 주도 별도 개발 영역** (상세 §8)

##### 1.2 Meta 산출물

- KSTV5 Windows·PC 취약점 점검 Script 수정
- AI 관제 시스템 데이터 파이프라인 성능 시험 문서
- AI 파싱 규칙 생성 방법 / 생성 검증 Test Report / 통합 Test Sheet
- 장비별 SYSLOG Parsing Rule·Sample
- 성능 시험 보고서·AI Parsing 문서에 `포네트㈜ - 박종성 주임 연구원` 작성자 명시 → 문서 작성·검증 책임의 직접 근거

##### 1.3 커밋 감사 결과

| 저장소 | 감사 범위 | 확인 결과 |
|---|---|---|
| `rest-api-server` | 372건 전체 제목·경로 분류 + 핵심 Patch(기능 도입·구조 변경·성능·동시성 Fix)를 현재 Code와 대조 | 신규 기능 48, 수정·QA 135, 공통화·리팩터링 57, 성능 22, 국제화 14건 |
| `report-manager` | 본인 24건 전체 Diff 통계 + 핵심 Patch | 초기 55개 파일·10,885줄 생성, 한·영 Jasper, DB 암호화, 감사, 동적 Scheduler, Runtime Fix |
| KST Meta | 취약점 Script·AI Parsing·성능 Report | 작성자·Test 절차·Result와 Code 역할 교차검증 |

- `rest-api-server` 경로 다중 분류: Device·Resource 116, Security Log·OpenSearch 121, 취약점·무결성 93, Alarm·Audit 68, AI 66, User·Access 56, Process 50, Report·Download 50, Engine API 45, Dashboard 42건
- 공통 UI 경로 178건 반복 변경 → 개별 화면뿐 아니라 관리 Console 공통 동작 지속 정리

대표 변경:

| Hash | 확인한 변화 |
|---|---|
| `7f7f11a6` | 40개 파일 정렬·Pagination·Select·Validation Convention 통합 |
| `45eb61f4` | 원시 Log·OpenSearch 조회와 UI 38개 파일 연결 |
| `6b4799bb` | 정규화 Log Domain 41개 파일 확장 |
| `84766bee` | SSE·AI·알림 흐름 21개 파일 통합 |
| `bc930878` | Background Excel 생성 구조 보강 |
| `624c5b21` | 알림 상태 경쟁 조건 Fix |
| `5d3e1a2d` | OpenSearch Composite Aggregation 적용 |
| `e3bf2fcc` | Report 비동기 생성·운영 흐름 보강 |
| `b95632d5` | Dashboard WebSocket·Session·조회·Chart 전면 재구성 |
| `3eb53cf1` | Dashboard 조회 병렬 처리 |

- 감사 시점 `DashboardWebSocketHandler.java` 미커밋 변경은 사용자 작업으로 보존, 수치에서 제외
- Line 수·대량 File 이동은 생산성 수치로 미사용, **도메인 범위·설계 진화·장애 해결** 근거로만 사용

#### 2. 시스템 맥락·기술 스택

KSTV6 WebMgr = 보안관제 Platform 관리 Console. KSTV5 기능을 KSTV6로 이관하며 REST API, HTML/JavaScript, Service·Mapper, Engine 연동, OpenSearch, Kafka, WebSocket/SSE를 함께 다룬 Full-stack 작업.

- 연결 영역: 사용자·권한·접속 IP / 기관·Network·설비군·설비 / Engine·설비 Process / SYSLOG 수집·Parsing Rule / 원시·정규화 Log·분석탐지 결과 / Whitelist·Blacklist·분석탐지 Rule / 취약점·무결성 점검 / 감사 Event·Alarm·장애 / CPU·Memory·Disk·Kafka·OpenSearch System Status / 종합·취약점 보고서 생성·자동 스케줄링·Download / AI 이상탐지·AI SYSLOG Parsing Rule / Dashboard
- 기술: Java 17, Spring Boot 3.2.8, Spring MVC·Thymeleaf·Thymeleaf Layout, Spring Security, Spring WebSocket, Spring Cache·JDBC·AOP, MyBatis 3.0.3, PostgreSQL, OpenSearch Java Client 2.11.0, Kafka/Spring Kafka, Apache POI, Commons CSV, JasperReports 6.21.5(JRXML/Jasper Template), `CompletableFuture` 기반 OpenSearch 병렬 조회, Spring `TaskScheduler`·`CronTrigger`, Springdoc OpenAPI, Jasypt·Bouncy Castle·JWT, JavaScript·HTML·CSS·ECharts

#### 3. 월별 개발 타임라인

기능별 상세는 → 각 §. 날짜별 대표 커밋은 → §14.

| 기간 | 주요 작업 | 상세 |
|---|---|---|
| 2026-01~02 | Engine REST API 우선 개발(diagnosis·CPD·Disk·Memory·T/T, Audit, Device, 상위 시스템), Update·Delete Mapping을 제품 Convention에 맞춰 Post로 변경, 응답 이름·공통 응답 규격, Swagger 한글 설명. 근거 `ba2e81fa` `dd583ec1`(Audit) `a4fe4986`(Device) `4ce78e20`(상위 시스템) `23a99d20` `09badb55` | §4 |
| 2026-02~03 | UI Server·REST API Server 병합, 생성·수정·삭제 공통 Response(`5d371b5c`), 사용자 관리, 설비군, 설정, 무결성 대상·점검(`87a8a32e`), 상위 시스템 연동, 공통 Side Menu·Header·Search Form·Date/Time Picker, Alarm·감사 Event(`16a67b2f`), 접속 IP·Port·외부 수집 설정, 시스템 현황(`ae91be28`), 원시 Log(`45eb61f4`)·정규화 Log(`6b4799bb`)·Log 현황, 분석탐지 통계(`21c73bbe`), 제어 명령 결과, SYSLOG Parsing Rule Tree(`69699cae`), AI SYSLOG Parsing Rule, 공통화(`7f7f11a6`) | §5~6 |
| 2026-04 (80건) | 신규 화면·공통 기능·QA 집중: 점검 요청 확인, 분석탐지 결과·Whitelist·Blacklist, 다국어 Breadcrumb·Button·Alarm, System Status·Table null 처리, 공통 Scroll, Excel·CSV 공통 Download·`/downloads` 화면, 취약점 결과 상세·Whitelist·설비 자원 Publishing, SSE 실시간 처리, 취약점·종합 보고서, 취약점 QA·Download, AI SYSLOG 재시작·Log 개선 | §5~11 |
| 2026-05 | Header Alarm Badge·점멸·소리, 상태 변경·모두 읽음, Background Excel, AI Parsing 생성 Log 조회 속도, AI 이상탐지 화면, Common·Audit / Kafka·OpenSearch 설정 Package 정리, 보고서 Service 분리·비동기·Scheduler, 취약점 실행 상태·Audit·Validation, Composite Aggregation, Pagination→Scroll | §6~10 |
| 2026-06 | Resource System·Device→Resource Domain 통합, Log·Analysis Detection→Security Event Domain, Audit·Alarm·Process 공통 기능 Engine Service 이동, Process Management 리팩터링, 설비 Process 현황 재개발, Blacklist·Whitelist 중복 검사, OpenSearch Like Search, Composite Aggregation·Scroll, AI Parsing Insert 시점·Rule 수정, 분석탐지·정규화 Log 리팩터링 | §6, §9~11 |
| 2026-07 | 설비 관리·Protocol Search, Download 권한·전체 Download·다국어, 취약점 Template PC/SERVER/LINUX·설비별 항목 재등록·상세 Log, Process 제어 예외·상태 초기화, Dashboard 재설계·병렬 처리·권한·Style(`e395223c`), Reports·Alarm·Resource Scheduler 안정화 | §7~9 |
| 2026-05~07 | 독립 `report-manager` 구축·고도화 (별도 Spring Boot Application) | §8 |

#### 4. Engine API와 공통 Backend

- Engine API 전달 Data: Audit Event, Device·Device Group, Diagnosis·Result, CPU·Memory·Disk, Alarm, User, Mail Server, Integrity, SNMP, Ticket, Version, Process, SYSLOG, Threshold, Statistics
- 티켓 근거: Alarm, Audit, CASL, CPU, Device, Diagnosis, Disk, Memory, Process, Proxy, Result, Server, SNMP, Statistics, SYSLOG, Threshold, Users, Version 등 20여 Domain, 40개 이상 API 항목
- 수행: Controller·Service·Mapper·DTO, 오류 Code·Response Naming, Update/Delete Method Convention, null 방어, Swagger 설명, UI Server 병합 후 Mapping 보정, Audit·Alarm·Process Engine 연동 공통화
- 공통 Response: `ResponseResource.java` 72회 변경 — 생성·수정·삭제 결과 공통화, Error Code·사용자 Message, Map 대신 DTO, camelCase, null·Empty Table 처리, API Parameter 공통 함수, Page State·URL Parameter 유지

#### 5. 관리 Console 공통 UI

- 범위: Navigation·Header·Side Menu·Breadcrumb, Login, Layout·Fragment, 검색 Form, Date/Time Picker, Select Box API Rendering, Table Sort, Infinite Scroll, Pagination·Key Pagination, Modal, Loading Indicator, Validation, Page State·Back Navigation, 다국어, Excel·CSV Download
- 근거: `7f7f11a6` 공통 Select Box·검색 Validation / `dd7722e8` Total Count·Table Convention / `43b5e0b2`, `bdd62ce1` `pageInfo.js`→`pageState.js` / `cb6f22db`, `19e6238e` Excel·CSV 공통 / `51d4964f` Excel Download·Key Pagination / `bc930878` Background Excel / `2d343b5b` Download Column Class / `a4a8264d` Download Utility 공통화

#### 6. OpenSearch 기반 Log·통계 조회

- 수행: 원시·정규화 Log 검색, Log 현황·분석탐지 통계, RDBMS 통계 Table 조회→OpenSearch 전환, Like Search, Composite Aggregation, Page 조회→Scroll, 정렬, 조회 결과에 맞춘 Excel·Report Data 수정, 설비·Agent·Device Group 조건 혼용 오류 수정
- 근거: `d9a44384` Log 현황·분석탐지 통계 OpenSearch 전환 / `5d3e1a2d` Composite Aggregation / `cd7e93bd` Pagination 제거·Scroll / `edce45c1` Like Search / `3512652b` Cursor→Scroll / `e266f59d` 분석탐지·정규화 Log 리팩터링
- 성과: 대량 Log 검색을 일관된 방식으로 제공, 통계 조회와 Excel·Report Data Source 일치, Composite Aggregation·Scroll로 대량 결과 탐색 구조 개선, Download 시 설비 Filter 무시 오류 수정으로 화면·산출물 정합성 확보
- 한계: WebMgr 자료에 응답 시간 개선 수치 없음 → 배수 표현 금지

#### 7. Dashboard 재설계

- 2026-07-25 대형 Commit(`b95632d5`): Socket Interceptor User ID 적용, 사용자별 Session Cache·부가 정보, Polling·STOMP 제거, WebSocket 연결 상태 기억, Socket 흐름 제어, Donut Click Event·Link 이동 수정, 전체 Query·Service Logic 수정, Response Convention 공통화, 공통 `socket.js`, ECharts 공통 `dashboard-chart.js`, Garbage JavaScript·Import 제거
- 이후 권한·Style·Modal(`e395223c`)·병렬 처리(`3eb53cf1`) 보완
- 의미: 사용자별 실시간 연결 상태 구분, Polling·STOMP·WebSocket 혼재 구조 단순화, Chart·Query 공통화로 유지보수 범위 축소, 독립 조회 병렬 처리 구조

#### 8. Report Manager와 Download

##### 8.1 WebMgr 보고서 운영 화면 (`rest-api-server`)

- 요청·생성 상태·이력 확인·Download 흐름: 취약점·종합 Report, 일간·월간·기간별 Report, Report Cover 관리, Jasper Path·Web Download Path를 `/downloads` 기준 통일, 생성 이력 Scroll, 비동기 생성 요청, 첫 설치 Data 0건 예외, Excel·CSV 공통 생성·Background Download, Locale 전달·다국어 Column, 대상 설비 Filter 유지, ZIP Download 권한
- 근거: `6919f036` 종합 Report·Cover / `a900f877` 취약점 Report Download Path / `5e8cc82c` 기간별 Report 누락 / `bc930878` Background Excel / `e3bf2fcc` 비동기 / `ac844509` Excel Field 다국어 / `cebce9f1` 대상 설비 Download Filter 오류

##### 8.2 `report-manager` 커밋 이력

| 날짜 | Hash | 수행 내용 |
|---|---|---|
| 2026-05-22 | `5eb82e7` | 초기 프로젝트: 골격, Controller·Service·Mapper·Model, OpenSearch 조회, Jasper Template, Font |
| 2026-05-22 | `1ae85cc` | Windows Log 통계 4종·Top-N Report Data |
| 2026-05-25 | `8fd2a42` | 한글 종합 보고서 |
| 2026-05-26 | `c686936` | 영문 Template·다국어 보고서, 자동 Scheduler, 보존기간 정리 Service |
| 2026-05-26 | `7cf2435` | DB 접속정보 암호화·외부 Key Process 연계 (766줄 추가) |
| 2026-05-27 | `2b0c2fc` | 보고서 생성·삭제 감사 연동 |
| 2026-05-27 | `742f963` | 고정 `@Scheduled` → DB Cache·Reload API 기반 동적 Scheduling |
| 2026-06-16 | — | 점검 일시·설비명·상태 Table 등 운영 Data 정합성 보완 |
| 2026-06-25 | `f2a9599` | 보고서 성공·실패 알림·다국어 Message |
| 2026-07-23 | `3caab93` | 취약점 점검 보고서 수정 |
| 2026-07-24 | `138c8bc` | Report Cover 경로 환경 Property 분리 |

- `5eb82e7` 구성: Java 17·Spring Boot 3.2.8 Application, Report REST Controller, `KstReportService`·`WeakReportService`, PostgreSQL MyBatis Mapper·Report 이력 Model, 정규화 Log·분석탐지 결과용 OpenSearch Search Client, JasperReports Template·Compile 결과·한글 Font, Report 공통 Utility·Request·Response, 설정·배포 파일
- 이후 한글·영문 종합, 취약점 개별·종합, Scheduler, 감사, 알림, 암호화, 운영 오류 수정까지 연속 Commit → “Report Manager 개발”/“Report 자동화 Backend 개발”로 분리 기술 근거 충분 (“보고서 양식 수정” 아님)

##### 8.3 종합 보고서 생성 Pipeline (`KstReportService`)

1. Report Cover 등록 확인
2. `tbl_report_history`에 `NEW` Insert
3. 생성 시작 시 `START`
4. 일간·월간·기간별 조회 범위·부제목 구성
5. 설비 ID 조건을 PostgreSQL·OpenSearch에 동일 적용
6. Windows 전체·Application·System·Security Log와 각 Top 10 조회
7. 분석탐지 Rule·공격지·피해지 Top 10·전체 결과 조회
8. Jasper Parameter·Data Source 변환, 한글/영문 Template 채움
9. `fileType`에 따라 PDF·XLSX·DOCX 생성
10. UUID 파일명·사용자·일자별 Directory로 Download URL 구성
11. `SUCCESS`/`FAIL` 상태 변경
12. 감사 이력·수동 기간 보고서 완료·실패 알림

- PostgreSQL 침해사고·취약점 Data + OpenSearch 정규화 Log·분석탐지 Data 결합, 화면·파일의 설비·기간 조건 일치로 정합성 유지

##### 8.4 OpenSearch 조회 병렬화

- 독립 OpenSearch 조회 12개를 `CompletableFuture.supplyAsync`로 동시 실행, `CompletableFuture.allOf(...).join()`으로 수집

| 조회군 | 내용 |
|---|---|
| Windows 정규화 Log | 전체 1,000건, 전체 Top 10 |
| Application / System / Security | 각 1,000건, Top 10 |
| 분석탐지 | Rule·공격지·피해지 Top 10, 전체 결과 |

- 순차 호출 대신 병렬 실행으로 Report Data 준비 대기시간 감소 목적. 전후 시간은 미측정, **병렬 I/O 설계** 자체는 코드로 확인

##### 8.5 DB 설정 기반 동적 Scheduling (`742f963`)

초기: Property Cron 식 + `@Scheduled` → Runtime 등록 구조로 전환.

1. `SettingMapper`가 `tbl_system`의 `(main_id, sub_id)` 7~11 설정 조회
2. `CronSource`가 `ConcurrentHashMap<Integer, String>` Cache에 적재
3. `ReportScheduler`가 기동 시 Cache Cron 식으로 5개 작업 등록
4. WebMgr 등에서 설정 변경 후 `POST /api/v1/report/reload/scheduler` 호출
5. API가 Cache 재조회 후 `reloadAll()` 실행
6. `DynamicScheduler`가 기존 `ScheduledFuture`를 Key별 취소 후 재등록

→ Process 재시작·설정 파일 재배포 없이 운영 중 주기 변경 가능

| Key | 작업 | 대상 기간·행위 |
|---:|---|---|
| 7 | 신규 취약점 점검 결과 보고서 | 새 점검 결과로 개별 보고서 자동 생성 |
| 8 | 취약점 점검 종합 보고서 | 전체 취약점 결과 보고서 자동 생성 |
| 9 | 월간 종합 보고서 | 전월 1일 00:00:00~말일 23:59:59 |
| 10 | 일간 종합 보고서 | 전일 00:00:00~23:59:59 |
| 11 | 보고서 보존기간 확인 | 보존기간 지난 Report Directory 정리 |

- 안정성: 등록 Map·Cron Cache에 `ConcurrentHashMap`, Cache 전체 Reload에 `synchronized`, 같은 Key 재등록 전 기존 작업 취소(중복 예약 방지), `cancel(false)`로 실행 중 작업 Interrupt 안 함, `ThreadPoolTaskScheduler` Pool Size 10, `@DependsOn("cronSource")`로 Cache 초기화 후 등록 순서 보장, Reload API “Cache 재조회 → Task 취소·재등록” 순서 명시
- 의미: 단순 Cron 작성이 아니라 **설정 Source, Thread-safe Cache, Task Registry, Reload API, 5개 업무 Job 연결** (이력서 “DB 기반 동적 스케줄러 개발”)

자동 보고서 업무 규칙:

- 일간=전일 전체, 월간=전월 1일~말일 자동 계산
- 자동 보고서 사용자 `SYSTEM`, 대상 설비 `All`로 이력
- 시스템 언어 설정으로 한·영 Template 선택
- PDF·XLSX·DOCX 전체 형식 생성 요청
- 수동 기간 보고서는 요청 사용자·기간·설비 조건·알림 유지

##### 8.6 취약점 보고서 (`WeakReportService`)

- 신규 점검 결과 보고서와 전체 종합 보고서 분리
- 신규 점검 결과 Group Key별 개별 Report 생성
- 종합 Report용 UUID 기반 임시 Table 생성 → Group Key별 결과 적재 → Jasper 전달 → `finally`에서 임시 Table 제거
- 한·영 Jasper Template, PDF·XLSX·DOCX, 성공·실패 이력·감사·알림
- Data·Template 없음 시 실패 상태·Message 기록

##### 8.7 이력·감사·알림·보존기간

- 상태: 요청 Insert `NEW` → 시작 `START` → 파일·Download URL 확인 `SUCCESS` / DB·Jasper·기타 예외 `FAIL`+원인 Message
- 성공·실패 Audit를 WebMgr `/api/v1/audit`에 전송, 기간·취약점 보고서 완료·실패 Notification, PDF·Excel·Word 생성 여부 별도 저장
- `DeleteReportService`: Property 보존기간 기준, `report_{사용자}_{yyyyMMdd}`·`vnbts_{사용자}_{yyyyMMdd}` Pattern만 대상, Directory명에서 일자 Parsing, 오래된 Directory·파일 삭제, 성공·실패 Audit, Scheduler Key 11 연결

##### 8.8 환경·보안·배포

- Jasypt·Bouncy Castle 암호화, DB 접속정보 복호화용 `AesEncryptor`·`CryptoKeyFactory`·`KeyProcClient`, 외부 Key Process 연계 (`7cf2435`)
- Template·Cover·Download Path 환경 Property 분리 (`138c8bc` Cover) → 비밀정보·경로 Code 고정 제거
- Jasper Studio 6.21.5 기준 JRXML 수정·Compile 절차 문서화, 한글 Font Report Resource 포함, CORS·실행 Script·Log 설정 보완

#### 9. 취약점 점검

##### 9.1 KSTV6 Web 기능

- 요청·결과·상세, 취소 상태 조건, START·WAIT 상태 실패 처리 운영 보정, 행별 상태 변경 Button·상태별 비활성화, 실시간 입력 Validation, Audit Log, Excel·Jasper Report Download, 종합 Report, 첫 설치·Data 0건 오류 처리, 상세 Log, PC/SERVER/LINUX Template 유형, Template 등록·수정 시 대상 유형별 설비 항목 재등록
- 근거: `1ffc5734` Excel·Scroll·검색 상태 / `33d34c52` 실행 상태 / `74af7a0c` Audit·Validation·Report 요청 / `6c651189` 취소 상태 / `7efa0d81` 첫 설치 Data 0건 Report 오류 / `5aac110b` Template 유형·항목 재등록 / `52f13aaa` 상세 Log

##### 9.2 KSTV5 Windows·PC 보안 Script 수정

- Meta: BAT 19개 + Python 18개, 약 3,553줄. Python은 수정 BAT를 DB `tbl_weak_default`에 반영

| 영역 | ID·점검 내용 |
|---|---|
| 서비스 관리 | PC-04·W-09 불필요한 Service 제거, W-18 IIS DB 연결 취약점, W-21 IIS 미사용 Script Mapping 제거, W-24 NetBIOS Binding Service, W-26 FTP Directory 접근 권한, W-27 Anonymous FTP 금지, W-29 DNS Zone Transfer, W-62 SNMP Access Control, W-63 DNS Service 구동, W-64 HTTP/FTP/SMTP Banner 차단 |
| 계정 관리 | W-49 Password 최소 길이 |
| Log 관리 | W-70 Event Log 관리 설정 |
| 보안·DB | W-72 DoS 방어 Registry, W-74 Session 유휴 시간, W-76 사용자별 Home Directory 권한, W-78 보안 Channel Digital 암호화·서명, W-79 File·Directory 보호, W-82 Windows 인증 Mode |

- 검증 절차(업무 메모): ① 2024년 Server·DBMS 보안 상세 Guide·Todo 확인 ② DB 점검 항목·Script Column 탐색 ③ Agent 환경 BAT 단독 실행 ④ 정상·취약 설정별 판정·결과 JSON 확인 ⑤ Server 제품 기능으로 통합 실행 ⑥ Agent 단독·Server 통합 Test 모두 통과 ⑦ 검토 후 DB 상태 복원
- 해결 문제: Windows Client·Server Service 존재 차이, IIS 설치 여부·`appcmd` 경로·Section 차이, DNS Server Service 부재 판단, DNS Zone Transfer Registry 값별 안전·취약 조건, FTP/IIS/SMTP 사용 여부 예외, SQL Server Default·Named Instance·인증 Mode, Mixed Mode 시 `sa` 비활성화·암호 정책, Registry Query·`net start`·`sc`·`dnscmd`·`sqlcmd` 결과 Parsing, 한글 Code Page·출력 Encoding, BAT 특수문자·따옴표의 SQL 문자열 Escape, 단독 BAT와 제품 통합 결과 불일치, `mysqldump`·정규식 변환 기반 DB Script 추출·반영
- 성과: 19개 항목 보안 기준→실행 가능한 판정 Logic, 정상·취약 환경 직접 구성 교차 검증, PC·Windows Server·IIS·DNS·FTP·SNMP·MSSQL 환경 차이 반영, 2023년→2024년 기준 설명·Script·SQL 갱신, Script↔Product 통합 간 결과 전달 문제 분리 분석

#### 10. Process 관리·설비 Process 현황

- 수행: CRUD·실행·중지, 자동·수동·미관리 상태 정의, Process Blacklist·Whitelist 중복 검사, 설비 Process 현황 재개발, Monitoring형 상세 화면, Engine `procMgr` 명령 요청 공통화, 종료 Script 오류 분석, `alwaysMgr`·`procMgr` 실행 중 상태가 2로 초기화되는 문제 수정, AGLESS 설비(제어 불가) 종료 Button 비활성화, Linux OS Type·Query 조건 정리, 무결성 점검 대상↔Process 현황 장비 종속 관계 정리
- 근거: `7e01a5a2` 리팩터링 / `e3df58e4` 설비 Process 현황 재개발 / `dbc0f6ca` Blacklist·Whitelist 중복 / `a76d84e0` 관리 상태 0/1/2 / `944d7fbb` 상태 초기화 / `8a8a6337` AGLESS 제어 제한
- 성과: Engine·WebMgr·설비 유형·초기화 주체로 나눠 원인 추적, 삭제 Table 종속·기능 혼재 영역 재개발로 구조적 결함 감소

#### 11. 감사 Event·Alarm·실시간 통신

- 수행: 감사 Event 목록·Domain별 생성, Kafka 설정·감사 전송, Header Badge, Button 점멸·Sound, 상태 변경·모두 읽음, Alarm Detail, 중복 호출 방지, Download 시 상태 처리, SSE 기반 Task 진행, Mail Service 책임 T/T Manager로 이관, 공통 Audit·Alarm·Process Engine Service 이동
- 근거: `043c16a6` 초기 기능 / `c2f3351a` 점멸·Badge / `139d73ac` Sound / `915c5095` Audit Event Alarm Detail / `3e69a36b` 역직렬화 Type 오류 / `e7c67a6e` Engine Service 이동 / `dac2b079` Scroll·모두 읽음 중복 호출

#### 12. AI SYSLOG Parsing Rule

- 문제: `syslogRecv`는 등록 Device·Parsing Rule로 UDP 514 Log 처리, 미등록 Device·Rule 불일치 시 누락 Folder 저장. AI Rule Generator가 기존 Rule·Sample Log로 신규 Rule 생성 보조
- 본인 작성 검증 Report Error Case: Device 미등록, Rule 미등록, Delimiter Rule 미등록, Prefix Regex 불일치, Parsing Rule 불일치, 기타 통신·Ticket·Data String 오류
- E2E 검증: ① 누락 Folder Sample Data 생성 확인 ② AI 대상 Device Group 등록 ③ Device 등록 ④ AI Rule Generator 실행 ⑤ Delimiter·Prefix Regex·Key·Field Mapping 검토·수정 ⑥ WebMgr SYSLOG Parsing Rule 등록 ⑦ `syslogRecv` 재시작 ⑧ 정규화 Log 적재 확인 → 통합 Test Sheet 핵심 단계 PASS
- 개발·연동: AI Device Group·Log·Rule 관리, 생성 Log 보기, 상세 검색, 장비 추가, SSE Task 제거 후 DB Polling, AI Package DB 저장 실패 분석(성공 Log에도 Rule 미저장 → Package·설정·Schema·WebMgr 단계 분리), 누락 `ai_*` Table Schema 적용, 외부 Package 공급사와 증상·진행 이력 공유, Rule Insert 시점 수정, AI Package 재배치
- 근거: `396d2ae6` AI SYSLOG Rule / `84766bee` SSE / `664d2add` 생성 Log 보기 속도 / `010e4e60` 마지막 SSE Send 제거 / `0b181559` Insert 시점 / `98e880e4` Package 이동
- **기여도 경계**: AI Model 직접 개발·학습 근거 없음. 정확한 표현은 “AI Parsing Rule 생성 Package의 설치·연동·관리 UI·DB 저장 문제 해결과 E2E 검증”

#### 13. Resource·System Status, QA·레거시 이관

- Resource: CPU·Memory·Disk, Kafka Topic, OpenSearch Index·Data Stream, 감사 임계치, Port, Resource History, 대량 History Infinite Scroll, 파티션 보존 기간·삭제 Scheduler, 설비별 Resource
  - 티켓: 1만 건 이상 History 일괄 Rendering 화면→Infinite Scroll 개선. Commit: Resource Domain 통합, Scroll 제거·재구성, Data Stream 정렬, 설비별 Resource 수정
- QA: KSTV5·KSTV6 기능 비교, 삭제된 `tbl_result` 종속 제거, 분석탐지·이상탐지 Data 혼합, 전체·Agent 설비 조건 혼용, null 처리 누락, 공통 API 미사용, Event 중복 Binding·Chart 재생성, 사용자별 검색 Column 유지, Back 시 Page·Search State 유지, White/Blacklist 제약 조건 비교, Process 상태 불일치, Download Filter 누락, Report Data 0건 예외, 다국어 Key·Locale
  - 티켓: 356개 항목 규모 통합시험계획 작성·전체 QA. 표현: “여러 오류 수정”보다 “V5/V6 비교로 오류 유형 분류, 공통화·재개발 우선순위 결정”

#### 14. 업무 성과·기여도

##### 14.1 성과 요약

- **수직 범위**: REST API·Swagger·Service·Mapper·Thymeleaf·JavaScript·OpenSearch·Kafka·실시간 통신·보고서 → 관리 Console 공통 기반과 여러 보안 Domain 연결 (§4~5)
- **조회·산출물 정합성**: 화면 Data와 Download Data 일치 (§6)
- **반복 오류의 공통 구조화**: Page State·Select Box·Validation·Download·Response·Chart·Socket·Audit·Alarm·Process 연동 공통화. 6~7월 Commit은 기능 추가보다 Domain 재배치·공통 Module 정리 비중 높음
- **보안 기준→제품 기능**: Windows Guide→BAT·DB Script, KSTV6 Template·실행 상태·Report·상세 Log (§9)
- **외부 AI Package 통합 문제 해결**: Model 개발 과장 없이 Integration·Troubleshooting 근거 (§12)
- **Report 독립 구축·운영 자동화**: 한·영 PDF·XLSX·DOCX, 12개 조회 병렬화, 5개 Job 무중단 Reload, 이력·감사·알림·보존기간 Lifecycle (§8)

##### 14.2 기여도 판단

- 높은 영역: Engine REST API 초기 개발·Swagger, WebMgr 공통 UI·Response·Validation, Log·분석탐지·OpenSearch 조회, 취약점 Web 기능·Windows Script, Process 관리·설비 Process 현황, Alarm·Audit·Download·Report, Report Manager 초기 구축·DB 기반 동적 Scheduler, Jasper 한·영 종합·취약점 보고서·OpenSearch 병렬 조회, AI SYSLOG 관리·검증, 2026-07 Dashboard 재설계
- 근거: `rest-api-server` 372건이 6개월간 전체 Domain에 분포, `report-manager` 27건 중 24건(초기 생성~운영 고도화), 작성자 명시 Report 존재 → 구현·검증·문서화 기여도 높음
- **협업 영역으로 표현할 부분**(본인 단독 아님): KST 전체 Platform Architecture, AI Model 자체, OpenSearch·Kafka Cluster 전체 운영 설계, 모든 Engine Process 구현, 고객 보안 정책 결정
- 안전한 표현: “KSTV6 WebMgr와 Engine API를 중심으로 보안관제 운영 기능을 개발하고, OpenSearch·Kafka·AI Package와 연동”

##### 14.3 대표 커밋 (`rest-api-server`)

`report-manager` 커밋은 → §8.2. 서로 다른 저장소의 Hash이므로 이력서 증빙 시 저장소명 병기.

| 날짜 | Hash | 내용 |
|---|---|---|
| 2026-01-30 | `ba2e81fa` | Engine 주요 Resource API (diagnosis·CPD·Disk·Memory·T/T) |
| 2026-02-06 | `23a99d20` | Engine API 완료 |
| 2026-02-19 | `09badb55` | Swagger Engine 문서 |
| 2026-03-06 | `7f7f11a6` | 공통 Select Box·Validation |
| 2026-03-25 | `69699cae` | SYSLOG Rule Tree |
| 2026-04-08 | `19e6238e` | Excel·CSV 공통 |
| 2026-04-28 | `1ffc5734` | 취약점 Excel·Scroll·QA |
| 2026-05-07 | `bc930878` | Background Excel |
| 2026-05-11 | `d9a44384` | Log 통계 OpenSearch |
| 2026-05-28 | `5d3e1a2d` | Composite Aggregation |
| 2026-06-18 | `e3df58e4` | 설비 Process 현황 재개발 |
| 2026-06-22 | `e7c67a6e` | Audit·Alarm·Process Engine 이동 |
| 2026-07-23 | `5aac110b` | 취약점 Template 유형·재등록 |
| 2026-07-25 | `b95632d5` | Dashboard Socket·Service·Chart 재설계 |
| 2026-07-30 | `3eb53cf1` | Dashboard 병렬 처리 |

##### 14.4 변경 집중 파일

| 저장소 | 변경 횟수·파일·의미 |
|---|---|
| `rest-api-server` | 78 `style.css` 업무 화면·상태 UI / 72 `ResponseResource.java` 공통 응답 / 61 `application.properties` Engine·Kafka·OpenSearch·환경 / 44 `global.js` 공통 UI·Menu·Parameter / 39 `thymeleaf-mapping.json` 화면·Route / 31 `caslResult.js` 분석탐지 결과 / 31 `resourceSystem.html` System Status / 30 `common.js` Table·Search·API 공통 / 29 `normalizeLog.js` 정규화 Log / 28 `logStat.js` Log 통계 / 28 `rawLog.js` 원시 Log / 24 `auditLog.js` 감사 Event / 20 `processDevice.js` 설비 Process |
| `report-manager` (본인 Commit 내) | 12 `KstReportService.java` 종합 보고서 핵심 / 12 `application.properties` Template·Download·OpenSearch·운영 / 11 `WeakReportService.java` 취약점 개별·종합 / 9 `ReportController.java` 생성·Scheduler Reload API / 7 `kst_report_new.jrxml` 한글 종합 Template / 7 `kst_report_new_ENG.jrxml` 영문 종합 Template / 6 `pom.xml` Report·DB·암호화·OpenSearch 의존성 / 6 `ReportManagerProperties.java` 환경 설정 / 5 `ReportUtil.java` 공통 변환·상수 / 5 `vulnerability_report_new*.jrxml` 취약점 개별 Template / 4 `vulnerability_report_all*.jrxml` 취약점 종합 Template / 4 `ReportScheduler.java` 5개 자동 Job |

#### 15. 이력서·자기소개서로 압축 가능한 사실

- Java 17·Spring Boot 기반 보안관제 WebMgr의 Engine REST API와 관리 UI 개발
- `rest-api-server` 2026-01~07 본인 Commit 372건
- `report-manager` 2026-05~07 전체 27건 중 본인 Commit 24건, 초기 프로젝트부터 핵심 기능 구축
- OpenSearch Composite Aggregation·Scroll 기반 Log·통계 조회와 Excel·Report 연계
- PostgreSQL·OpenSearch Data를 결합한 한·영 종합·취약점 Report 생성 Backend 개발
- 12개 OpenSearch 조회를 `CompletableFuture`로 병렬화해 Report Data 준비 Path 개선
- DB 설정·Thread-safe Cache·Task Registry·Reload API 기반 동적 Scheduler 개발
- 일간·월간·취약점 개별·종합·보존기간 등 5개 자동 Job 운영
- PDF·XLSX·DOCX 생성, `NEW→START→SUCCESS/FAIL` 이력, 감사·알림·파일 보존기간 Lifecycle 구현
- WebSocket Dashboard의 사용자 Session·상태 흐름·공통 Chart 재설계
- Windows·PC 보안 점검 19개 항목의 BAT·DB 반영 Script 수정과 정상/취약 교차 검증
- PC/SERVER/LINUX 취약점 Template과 설비별 항목 재등록
- 설비 Process 현황 재개발과 제어 예외 처리
- AI SYSLOG Rule 생성 Package의 DB 저장 장애 분석과 E2E 검증
- 356개 항목 규모 통합 Test Plan과 레거시 QA

#### 16. 추가 확보 필요 정량 정보

- API: 본인 구현 API 정확한 개수
- QA: 통합 Test 356항목 PASS·결함·조치 수
- 성능: OpenSearch 전환 전후 응답 시간, Infinite Scroll 전후 Initial Rendering 시간, Dashboard 병렬 처리 전후 Loading 시간, Report OpenSearch 12개 조회 순차·병렬 전후 생성 시간
- 취약점: Script 19개 중 최종 납품·승인 수, 대상 OS Version·실제 장비 수
- AI: Rule 생성 Test 장비 수·최종 성공률
- Report 운영: 자동 Report 월평균 생성 건수·성공률, Scheduler 재기동 제거로 절감한 운영 시간, 생성 실패율·오류 유형별 개선 전후 수치, 보존기간 Scheduler 관리 파일 수·용량
- 운영 반영 Release·고객 검수 결과

#### 17. 2026-11-21 재조사 연결 및 기여 경계 정정

- 이 문서의 `rest-api-server` 372건은 당시 통합 저장소(2026-01~07)의 역사적 조사 수치다. 현재 `04. kstv6`에는 그 저장소가 없고 `web-manager-v2`·`rest-api-server-v3`가 있다. 8~11월 분리 저장소는 [추가 전수조사](#follow-up)에서 별도 집계했으며 중복 제거 없이 합산하지 않는다.
- CC 인증 문서는 본인 작성물이 **아니다**. 요구사항을 참고하고 실제 인증·인가·감사 구조를 코드에 반영·구현했다. 구현 근거는 B `310c3ec9`, `2dbd0ac3`와 A `14f7f58`, `f8df79c` 등의 개인 diff다.
- 사용자 확인에 따라 KSTV6 Meta `02` 데이터 파이프라인 성능 시험, `03` AI 파싱규칙 생성 검증, `04` 85장 화면설계, `05` 기성검수 자료는 본인 수행·작성 범위다. `07` 보고서 개선안·`08` 출장과 기타 문서는 본인 작성으로 귀속하지 않는다.
- `97. tester`의 추가 10개 개인 커밋과 멀티스레드·멀티프로세스 구조는 [데이터 파이프라인 문서 §15](#pipeline)에 추가했다. 사람인·Figma에 사용할 문장·구성 데이터는 [제작 원고](#materials)에 있다.
- 이 문서 §9.2의 KSTV5 스크립트는 [KSTV5 별도 근거](kstv5-%EA%B2%BD%EB%A0%A5%20%EA%B7%BC%EA%B1%B0.md)로 읽고, V6 성과 수치에 중복 합산하지 않는다.

#### 18. 2026-11-21 기성검수 원본의 판정 범위 보강

- 사용자 직접 작성 범위인 `04. kstv6/00. meta/05. kstv6 - 기성 검수 보고서 작성/기성검수보고서_AI보안관제.hwp`를 표·본문까지 다시 확인했다. 표제는 2026-06 준공검수보고서이며 기능·하드웨어·성능·보안 검수 방법을 기술하고, 본문에는 `DEVICE`, `PARSING`, `REPORT`, `MONITOR`, `WEAK` 등을 포함한 **서로 다른 시나리오 ID 42개**와 화면·로그 확인용 이미지가 들어 있다. 이 숫자는 보고서의 시나리오 범위이지 본인 구현 기능 수나 PASS 건수가 아니다.
- 개요의 `검수결과`에는 **합격**이 표시되어 있으나, 같은 개요의 사업명·검수일자·검수자·검수장소가 공란이며 일부 시나리오의 `시험 결과`에도 결과 설명이 없다. 원본 폴더에는 서명·날짜가 완성된 별도 승인본이 확인되지 않았다. 따라서 **검수 문서 작성과 증빙 취합**은 직접 성과로 쓰되, **고객 최종 검수 승인/356건 PASS**는 확정하지 않는다.
- 같은 폴더의 `FP-시험시나리오 매핑.xlsx`는 시트가 `표지`, `종합예산내역`, `SW개발비산출-간이법`, `FP산정`, `(참조)보정계수`인 **기능점수·예산 산정표**다. 이름만 보고 시험 실행·통과 결과 원자료로 취급하지 않는다. 예산 금액도 개인 성과 수치로 전환하지 않는다.

<a id="follow-up"></a>

### KSTV6 추가 전수조사: 인증·감사·공통 설계·메뉴·데이터 연계

> 기준일 2026-11-21. 이 문서는 [기존 상세 근거](#evidence)의 1~7월 기록에 8~11월 분리 저장소와 직접 작성 산출물을 **추가**한다. 포트폴리오 제작 원고는 [별도 문서](#materials), Git 증거 탐색은 [개인 커밋 전수 목록](#git). `FACT`는 파일·Git·사용자 확인으로 검증, `INFERENCE`는 그 근거를 연결한 해석, `CLAIM`은 제출 문장 후보를 뜻한다.

#### 1. 개인 기여 경계와 조사 방법

- **FACT/사용자 확인:** `00. meta/02. kstv6 - AI 데이터 파이프라인 성능 테스트`, `03. kstv6 - AI 파싱 규칙 생성 검증 테스트`, `04. kstv6 - 화면 설계서 작성`, `05. kstv6 - 기성 검수 보고서 작성`은 본인 수행·작성 범위다. `97. tester` 부하 측정 도구도 본인 개발이다.
- **FACT/사용자 확인:** `00. meta/06. kstv6 - CC 인증` 문서는 **본인 작성물이 아니다**. 요구사항 검토에 참고했으며 인증·인가 구조를 실제 제품 코드에 반영·구현한 것은 본인이다. CC 문서 작성·인증 취득 자체를 개인 성과로 쓰지 않는다.
- `07. 보고서 개선안`, `08. 출장`은 개인 작성·수행 확인이 없으므로 개인 기여로 귀속하지 않는다. `00. kstv6 - development`, `01. 회사 문서`도 대량 자료 전체를 개인 산출물로 주장하지 않는다.
- Git author `jspark@4net.co.kr`로 개인 커밋을 식별했다. Git author는 코드 변경의 강한 근거이나, 설계 주도·배포·운영 성과 전체를 자동으로 증명하지 않는다. 현재 코드에는 10~11월 다른 작성자의 후속 수정이 있어 **현재 구조 전체를 본인 단독 구현으로 귀속하지 않는다**.
- `04. kstv6`의 Git 저장소 23개 이상을 목록화하고, 개인 커밋이 있는 저장소와 없는 저장소를 분리했다. 주요 개인 변경 저장소는 `web-manager-v2`, `rest-api-server-v3`, `report-manager`; 소수 변경 저장소는 `agentmgr`, `windows-agent-vs`, `windows-vulnerability-manager`, `wmi-agent`. 나머지 저장소의 존재만으로 개인 구현이라고 주장하지 않는다.
- 현재 세 저장소의 `--all --no-merges --author=jspark@4net.co.kr` 기준: `web-manager-v2` **134건**(2026-08-06~11-02), `rest-api-server-v3` **48건**(2026-08-06~10-08), `report-manager` **57건**(2026-05-22~11-04). Merge 포함 수는 각각 143·56·58건. 통합 저장소 시절 기존 문서의 372건과 중복·이관 여부가 검증되지 않아 합산 금지. 커밋 수는 업무량·성과율 수치가 아니다.

##### 1.1 현재 KSTV6 Git 저장소 23개 author 전수 확인

| 개인 비병합 커밋 | 저장소 |
|---:|---|
| 134 | `web-manager-v2` |
| 57 | `report-manager` |
| 48 | `rest-api-server-v3` |
| 각 1 | `agentmgr`, `windows-agent-vs`, `windows-vulnerability-manager`, `wmi-agent` |
| 0 | `analyze`, `device-status-mgr`, `epower-ai`, `event-alerting-mgr`, `event-indexer-mgr`, `event-inserter-mgr`, `event-statistics-mgr`, `kst-to-tms`, `kst-v6-package`, `maxq-server`, `mlMgr`, `netflowFileMgr`, `netflow-receive-mgr`, `riskScoreMgr`, `tmsapi`, `tmsweb` |

0은 **해당 이메일 author의 비병합 커밋이 이 로컬 저장소의 전체 참조에서 발견되지 않았다**는 뜻이다. 협업·리뷰·검증을 하지 않았다는 뜻으로 확대하지 않는다. 반대로 저장소 안에 기능이 존재한다는 이유만으로 개인 구현이라 하지 않는다.

#### 2. 분리 후 공통 아키텍처와 API 클라이언트

##### 2.1 시스템 경계

- [B 아키텍처 문서](../../../04.%20kstv6/web-manager-v2/docs/architecture.md), [A 소스](../../../04.%20kstv6/rest-api-server-v3/src/main/java/kr/co/fornet/kst), 두 저장소의 변경 이력을 기준으로 **WebManager B(브라우저 화면·사용자 세션·화면용 DB/검색)**와 **RestApiServer A(Engine·외부 Process용 API·공유 Domain)**의 책임을 구분했다.
- B→A 서버 간 요청은 `RestApiClient`의 JWT Bearer(`ui-server`, 내부 권한 claim)를 사용하고, A의 `JwtFilter`가 claim을 인증 주체/권한으로 변환한다. 이는 브라우저의 세션 쿠키를 A에 그대로 전달하는 구조와 다르다. B의 화면 세션과 A의 내부 호출 인증은 별도 경계다.
- B `b38ccbcf`(2026-08-10): `RestTemplate` 사용을 없애고 `ClientService`, `RestApiClient`, `ReportMgrClient`, `RestApiClientConfig`로 서버 간 HTTP 호출을 공통화했다. `ClientService`에 GET/POST, 응답 예외 처리와 요청별 읽기 제한 시간, 설정 주입된 TLS 클라이언트의 공유 경로가 생겼다. 보고서 생성 연결과 SQL Mapper도 같은 커밋에 포함된다. 이는 **개인 코드 변경 확인**이다.
- A `cd5219b`(2026-08-10): `restapi.engine` 계층을 Domain 중심 구조로 평면화하고 `Eg`·`Ui` Controller를 구분해 Service·Model·Mapper를 공유하도록 대량 이동·정리했다. 파일 이동 수를 개발량으로 환산하지 않는다. 다만 이관 후 공통 Domain 경계 설정은 diff로 확인된다.
- A `cb13bd5`, B `988e9858`, report-manager `bb5537c`·`f59c84c`·`a1b17e4`에 TLS/SSL 버전 및 cipher/운영 Property 변경이 있다. TLS 보안 수준의 제3자 검증이나 인증서 운영 전체를 개인 성과로 확대하지 않는다.
- B `29806397`, `292f0297`은 분리 후 UI 네이밍·DTO/속성 정리. B `7303c2fc`와 A `5b1fcee`는 AI 파싱규칙 재시작 복구 책임을 B에서 A로 옮겼다. **화면 서버에 남아 있던 Engine성 복구 동작을 A로 이관**한 구체 사례다.

##### 2.2 설계·구현 표현 경계

- **FACT:** 공통 클라이언트·SSL 설정을 직접 변경하고 A의 Domain 구조를 재정리한 커밋이 있다. B·A 분리의 모든 요구사항·초기 결정은 개인 단독 설계로 단정할 수 없다.
- **INFERENCE:** 변경들의 연쇄는 화면·Engine API·보고서 서비스의 통신 경계를 명료하게 하고, 후속 기능에서 공통 클라이언트·Domain을 재사용할 기반을 만든다.
- **CLAIM 후보:** “관리 UI와 Engine API의 책임을 분리한 구조에서 서버 간 API 클라이언트와 공통 Domain을 정리하고 TLS 설정·오류 처리 경로를 일관되게 구축했다.”

#### 3. CC 대비 인증·인가 구현: 문서 참고와 코드 기여 분리

##### 3.1 직접 변경 근거

| 일자·커밋 | diff로 확인한 직접 변경 | 의미 |
|---|---|---|
| B `d0ca7d81` 09-03 | 멀티로그인 제한 Property 조정 | 로그인 정책 설정 |
| B `3f681820` 09-09, `0d0cf6d5` 09-10 | CC 모드 자동 로그아웃·비노출 메뉴/URI 설정 정리 | 인증 환경별 동작 분기 |
| B `4aafdede` 09-18 | 로그인 서비스·Mapper, 감사, 인증 설정 수정 | 로그인 판정과 감사 연결 |
| B `e26467fd` 09-18 | 비활성 사용자 반복 로그인 시도·메일 알림 변경 | 계정 방어·운영 알림 |
| B `310c3ec9` 09-28 | `AuthInterceptor`, 로그인 서비스, 세션 레지스트리, 컨트롤러와 인증 테스트 변경(22개 파일) | 세션/인가 보강과 회귀 시험 |
| B `2dbd0ac3` 10-01 | 인증·인가 코드 구조 정리, prepare registry, ViewSource, `LoginServiceImpl`, 관련 테스트·설명(62개 파일) | CC 대비 인증 흐름 대규모 정리 |
| B `c0a88a64` 10-08 | 인증 정보 하드코딩 제거 | 설정 분리 |
| A `14f7f58` 09-28, `f8df79c` 10-01 | `audit-log-patterns.json` CC 인증·인가 감사 패턴 추가/보정 | 거부·로그인·권한 판단의 감사 추적 |

- **검증 가능한 범위:** `310c3ec9`의 개인 diff에는 `AuthInterceptorSessionSecurityTest`, `LoginSessionRegistryTest`, `LoginControllerTest`, `LoginServiceImplTest` 등 신규·수정 시험이 있다. `2dbd0ac3`에는 `PrepareSessionRegistryTest`, 인증 인터셉터의 접근 IP·비활성 기능·대시보드 모드·세션 시험 등이 있다. 테스트 **코드 존재**는 확인했으며 이 조사 중 전체 테스트의 성공 결과를 새로 실행해 주장하지 않는다.
- **현재 코드와 변경 시점 구분:** 아래 설명은 현재 소스의 작동 경로를 본인 커밋과 대조한 것이다. 10~11월 타인 후속 수정(예: 세션 탈취 시도자 식별·강제 종료)은 본인 구현이라고 쓰지 않는다.

##### 3.2 인증 흐름의 구체 요소

1. **로그인 준비:** `LoginServiceImpl`이 prepare 세션을 발급하고 `PrepareSessionRegistry`가 발급 시각을 기록한다. 등록되지 않았거나 유효기간이 지난 prepare 세션을 로그인 전에 걸러낸다. 현재 레지스트리는 메모리 기반으로 재시작 시 초기화되는 점까지 코드에 명시되어 있다.
2. **계정·IP·비밀번호 판정:** 비활성·잠금·허용 IP·비밀번호 오류·비밀번호 변경 기한·중복 로그인 정책을 순서대로 확인하고, 결과별 감사 이벤트를 남긴다. 허용되지 않은 IP의 시도는 비밀번호 실패 카운트를 올리지 않아 계정 잠금 악용을 줄이도록 구성되어 있다.
3. **세션 고정 방지:** 모든 검사를 통과한 뒤 `changeSessionId()`를 호출해 prepare 단계에서 보인 세션 ID를 교체한다. 이후 prepare 레지스트리 항목을 제거하고 로그인 세션을 등록한다.
4. **동시 로그인 경쟁 조건:** `LoginSessionRegistry.register`는 `ConcurrentHashMap.compute` 안에서 기존 세션 생존 확인과 등록을 원자적으로 처리한다. 사전 `isRegisteredUser` 확인과 실제 등록 사이의 TOCTOU 경쟁으로 중복 로그인 제한이 뚫리는 문제를 막는 설계다. 세션 해제 시 사용자 ID만으로 삭제하지 않고 해당 세션 ID를 대조한다.
5. **세션 스냅샷과 인터셉터:** 로그인 시 사용자 ID, 읽기·쓰기 권한, 로그인 IP·User-Agent, 최근 활동 시각을 세션에 저장한다. `AuthInterceptor`는 접근 IP, 비활성 기능, 미인증/만료 세션, UA 불일치, 대체된 세션, IP 변화, 유휴시간, API 토큰, 슈퍼유저 권한을 단계별 검사한다. 브라우저에서 메뉴를 숨기는 데 그치지 않고 서버가 전용 URI를 거부하는 구조가 확인된다.
6. **API 요청 서명:** 현재 코드는 세션 토큰과 timestamp를 해시한 `Auth-Token`을 API 요청마다 검사하고, 갱신 직후 충돌 창은 별도 상태로 처리한다. 현재 구현의 모든 예외·세부 타이밍을 9~10월 본인 개인 커밋에 귀속하지 않는다. 제출 문장에서는 “세션 연계 API 요청 검증” 수준으로 표현하고 구체 보안 보장 범위는 과장하지 않는다.
7. **내부 API JWT:** B의 `RestApiClient`가 내부 권한 claim을 담은 JWT를 발급해 A에 보내고 A `JwtFilter`가 파싱한다. 이는 **브라우저 로그인 세션과 내부 서비스 호출 인증을 분리**한 구현 맥락이다.

##### 3.3 제한과 안전한 성과 표현

- `User-Agent`는 클라이언트가 위조할 수 있으며 단독 탈취 방지 보증이 아니다. IP 검사도 프록시/허용 대역 설정에 의존한다. 세션 도용을 “완전 차단”했다고 주장하지 않는다.
- 서버 메모리 세션 레지스트리는 다중 인스턴스 간 공유 저장소가 아니다. 특정 배포 구성에서만 효력 범위를 판단한다.
- CC 관련 **개발 반영**과 **CC 인증서 획득/심사 통과**는 다른 사실이다. 후자 증거는 현재 조사 범위에서 확인하지 않았다.
- **CLAIM 후보:** “CC 인증 요구사항을 참고해 로그인 준비·세션 고정 방지·중복 로그인 경쟁 조건·요청 권한 검사·감사 이벤트를 WebManager/REST API 코드에 반영하고 인증 회귀 테스트를 보강했다.”

#### 4. 감사와 입력값 검증: 8~10월 집중 변경

- B 9월 개인 커밋은 `DEVICE`, `ALARM`, `AUDIT`, `EVENT`, `RESOURCE`, `WEAK`, `TMS`, `PORT`, `REF`, `SETTING`, `NOTIFY`, `SYSLOG`, `CASL`, `EXTERNAL`, `INTEGRITY`, `REPORT`, `ANOMALY`, `CTRL`, `PROCESS` 등 다수 도메인의 `VALIDATION`·`AUDIT`를 순차 수정했다. **커밋 제목만이 아니라** `Controller`, `Mapper.xml`, 공통 Audit Service, 요청 DTO와 검색 조건 문서가 함께 바뀐 것을 확인했다.
- 구체 변경: B `de7b6801` 설비 관리 API 스펙·검증·감사, `21b9978f` 설비군, `b66389eb`·`e07a1cd0` 취약점 템플릿/관리, `861fef13` SYSLOG, `0d87f392` CASL, `4701514b` 외부수집, `d74e6f10` 무결성, `c73ecc61` 보고서, `d0705b00` 이상탐지, `1ea1f826` 자원, `31ca0837` 프로세스 화이트/블랙리스트 검색·감사, `c7bf3936` AI SYSLOG와 감사로그 복합키 정렬.
- A의 같은 기간 `b3eeec5` 취약점 중지 감사, `ec50dba` 점검 요청 감사 누락 보완, `791b7a5` 감사 저장 용량 임계치 알림/기록, `be47c50` 인증 감사, `4b0de1b` 시작 시 무결성 검사, `0d5f7b5` Kafka·OpenSearch 시스템 자원 감사, `14f7f58`·`f8df79c` CC 감사 패턴을 확인했다.
- 공통 감사 흐름은 기능 동작→감사 패턴/Logger→저장/조회까지 연결된다. **“모든 이벤트를 빠짐없이 감사한다”**는 운영 검증이 없으므로 주장하지 않는다. 구체 사례의 누락·형식·정렬·권한 거부를 수정한 것으로 기록한다.
- `d9037729`, `db807ea9`, `4dce19db`, `880c5dc8`는 설정·MAP·설비 감사의 후속 QA를 보여 준다. 초기 구현 후 운영 시나리오에서 일관성을 다듬은 연속 작업이라는 해석은 가능하다.

#### 5. 메뉴·화면·화면설계서

- 본인 작성한 `00. meta/04.../AI 관제 시스템 화면설계서.pptx`는 **85장**이다. 표지 날짜는 2025-10-22로 기재되어 있다. 공통 Header/SNB/Breadcrumb/Download/확인 Modal에 이어 로그인, 메인, 분석탐지, 통계, 방화벽, 보고서, 원시·정규화 로그, 장애/감사, 설비군/설비, SYSLOG 파싱, 외부 수집, 취약점, 사용자/IP, 시스템 설정, 프로세스/무결성, 자원·포트·MAP, 대시보드, 상위시스템, 인증키, AI 분석을 화면 ID·설명·사용 권한·동작으로 정리했다.
- **문서 작성 범위와 코드 구현 범위를 구분한다.** 85장 모두를 본인이 구현했다고 주장하지 않는다. 기존 1~7월 통합 저장소 개인 커밋과 8~10월 B 개인 diff가 겹치는 화면의 구현만 개인 개발로 표현한다.
- B `2683bc92`(09-02)에서 이벤트 검색 초기 구현: `CaslQueryImpl`, `NormalizeQueryImpl`, `RawQueryImpl`, 공통 `OpenSearchUtil`, 이벤트 화면·JS/Controller/Service/DTO를 함께 추가·수정했다. 큰 임시 UI 파일도 포함돼 있으므로 변경 줄 수를 성과 수치로 쓰지 않는다.
- B `98770e8a`(09-02)는 OpenSearch 버전 변경으로 NXDASH Top10 Modal 조회가 어긋난 문제를 `RawQueryImpl`과 화면·테스트에서 보정했다. **문제 원인→쿼리/화면 정합성 수정→관련 테스트 조정**의 구체 사례다.
- B `f096592a`(09-28)는 이벤트 통계 스크롤·권한·보관일 설정 메뉴, `9ba0a18e`(09-18)는 AI 파싱규칙 화면·버그, `02d68613`(09-11)는 무결성 검색 조건, `50577e8b`(09-10)는 CC 모드의 취약점 대시보드 비노출, `f2af87c0`(11-02)은 사용자 이메일 수신 여부 입력 UI 수정이다.
- 기존 상세 문서의 1~7월 개별 화면·공통 UI·대시보드·다운로드 근거는 그대로 유효한 역사적 기록으로 유지한다. 후속 다른 작성자의 SirenX 화면·연계 코드는 개인 작업으로 귀속하지 않는다(`web-manager-v2`의 `domain/sirenx` 개인 경로 변경은 네이밍 정리 1건만 확인).

#### 6. OpenSearch와 SQL: 개인 변경이 확인되는 경로

##### 6.1 OpenSearch

- 기존 1~7월 통합 저장소 근거: 원시/정규화 로그 조회, RDB 통계에서 검색엔진 조회로 전환, Scroll/Composite Aggregation, 대량 다운로드의 필터 정합성, 대시보드 병렬 조회. 원본 372개 커밋 당시의 해시와 설명은 [기존 문서 §6~7](#evidence)에 남겼다.
- 8~10월 B의 직접 변경: `2683bc92` 이벤트·정규화·원시 로그 조회 계층 및 `OpenSearchUtil` 확장, `98770e8a` 버전업 후 Top10 조회 수정, `8f2ae903` 이벤트 검색 검증, `70d1e7f2` 자원 조회 검증, `c7bf3936` AI SYSLOG 검증·정렬. REST A에서는 `0d5f7b5`로 OpenSearch 자원 감사 연계를 다뤘다.
- 현재 B `OpenSearchUtil`은 Bool Query의 terms/range/date 필터, aggregation bucket 추출, 필드 변환을 공통 제공한다. 현재 코드 전체의 신규 작성자를 개인으로 단정하지 않고 위 커밋의 변경분을 개인 기여로 연결한다.
- **CLAIM 후보:** “OpenSearch 기반 대량 보안 로그 검색·집계와 화면/다운로드 연계를 구현하고, 버전 변경에 따른 Top10 조회 오류를 쿼리·UI·테스트까지 수정했다.” 성능 개선 배수는 측정 근거가 없으므로 넣지 않는다.

##### 6.2 PostgreSQL/MyBatis와 외부 API

- B 개인 SQL diff는 8~10월 `LoginMapper.xml`, `AuditMapper.xml`, `SyslogUiMapper.xml`, `ReportItemUiMapper.xml` 및 설비·설비군·취약점·설정·프로세스·사용자 IP 등의 Mapper에 걸쳐 있다. 예: `2dbd0ac3` 로그인/prepare SQL, `b38ccbcf` 보고서 항목·SYSLOG Mapper, `31ca0837` 프로세스 검색 검증, `c7bf3936` AI SYSLOG·감사 복합키 정렬.
- A 개인 diff에는 `cd5219b`의 Domain/Mapper 공유 이관, `5b1fcee` AI 파싱 복구 API 책임 이동, `0d5f7b5` 자원 감사 SQL, `e24384e` 시스템 언어 기준 데이터 조회가 있다. SQL의 정확한 건수나 성능 향상은 계획·테스트 자료 없이 단정하지 않는다.
- 외부 연계는 범위를 나눈다. **확인된 본인 변경:** B→A 내부 REST 호출 공통화 및 TLS(`b38ccbcf`), B→Report Manager 클라이언트, AI 파싱 복구 호출 위치 변경(`7303c2fc`/A `5b1fcee`), 상위 시스템·외부수집 등 기존 문서의 1~7월 개인 커밋. **귀속 미확인:** 현재 SirenX 외부 데이터 소스·MariaDB 연계 구현은 다른 author 커밋이 주로 확인되어 개인 개발 성과로 쓰지 않는다.
- **CLAIM 후보:** “Spring/MyBatis 기반 관리 메뉴의 조회·검증·감사 SQL과 Engine/보고서 서버 간 호출을 구현·정비해 화면과 API의 데이터 계약을 맞췄다.”

#### 7. 보고서 서비스의 8~11월 추가 작업

- `report-manager` 개인 비병합 커밋은 현재 57건으로, 기존 문서의 2026-07까지 24건에서 후속 작업이 이어졌다. `110e6bf`·`1f31587`·`0f92985`(08-08~11) 요약보고서, `300ef56`(08-11) 설비별 취약점 보고서 생성 알림, `231a616`(08-20) 보고서 보존 연한, `8dff07c`(09-15) 실행시간 측정, `de35408`(09-16) 오케스트레이션 계층, `3d47073`(09-17) 1차 개발 완료 전 단위시험, `d961903`·`0ffb6b6`(09-29) 락·이력 정리, `a502cf7`(10-08) 메일 서버 설정 누락 시 무결성 점검 오류 전파 수정, `ea87861`(11-04) 템플릿 관리 커밋을 확인했다.
- `3d47073`의 “단위테스트 전”이라는 커밋 제목은 완료·검증 판정으로 쓰지 않는다. 특정 KRS 항목 제외 진행(`5b30c32`, `a17b1b6`)도 범위 제한을 보여 준다. **“모든 보고서 완성”**으로 일반화하지 않는다.
- report-manager의 병렬 OpenSearch 조회·동적 스케줄링·감사·다국어 템플릿은 기존 문서 §8과 연결된다. 후속 변경은 성능 측정, 실행 통제, 이력/보존, 무결성 오류 격리 등 운영 단계 과제를 추가한 것으로 정리한다.

#### 8. 직접 작성·수행한 Meta 02~05 산출물

| 위치 | 원본에서 확인한 내용 | 개인 기여의 안전한 기술 |
|---|---|---|
| `02` 데이터 파이프라인 성능 시험 | 본인 이름이 기재된 설치 지침·성능 보고서, 실험 그래프, 세 가지 CSV. Kafka–Fluent Bit–OpenSearch 시험 환경·변수·결과·장애 분석 | 시험 환경 구축·부하 설계·측정·보고서 작성. 상세 수치·제한은 [파이프라인 문서](#pipeline) |
| `03` AI 파싱규칙 검증 | 본인 이름이 기재된 규칙 생성 방법·검증 테스트 보고서, 통합 테스트 Sheet, 장비별 샘플·규칙. `prefix_rex`, delimiter, key field, 정규화 필드 매핑과 복수 시나리오 | 파싱규칙 생성·검증 절차 설계와 재현 자료 작성. AI 모델 자체 개발·정확도 수치는 별도 증거 없으면 주장하지 않음 |
| `04` 화면설계 | 85장 PPTX: 공통 UI·화면 ID·권한·화면별 동작 | 대규모 관리 Console 화면 설계 문서 작성. 화면 전체 구현과 별개 |
| `05` 기성 검수 | `FP-시험시나리오 매핑.xlsx`, `기성검수보고서_AI보안관제.hwp` | 기능점수/시험시나리오 매핑과 기성 검수 보고서 작성. HWP 텍스트 추출로 표지와 `기능 검수` 절은 확인했으나 표/그림의 결과 수치는 텍스트로 추출되지 않아 미기재 |

- `03`의 생성 방법 DOCX는 원본 예시를 통해 `prefix_rex`로 SYSLOG prefix 제거, delimiter 분할, `key_field`로 다중 포맷 판별, 규칙의 `REGEX`·`FORMAT`·`END`를 통해 정규 필드를 채우는 절차를 설명한다. 이 문서는 **사용자가 작성한 검증/운영 방법론** 근거다.
- `03`의 테스트 보고서는 2025-11-12 최초 작성, 2026-01-07 2차 시나리오 추가 이력을 표시한다. 파일명만 보고 단일 시점 작업으로 축소하지 않는다.
- `03`의 통합 테스트 XLSX는 `AI 파싱규칙` Sheet(사용 범위 A1:G18)로 확인된다. 이 범위를 전체 장비·전 케이스 수로 간주하지 않는다. 장비별 개별 샘플·규칙 파일은 같은 Meta 폴더에 별도로 다수 있다.
- `02` 보고서·지침은 2025-09-18 작성자 항목에 본인 이름이 있다. 실험 결과는 특정 장비/조건의 측정이다. “제품 일반 성능 보장”이라고 변환하지 않는다.
- `05`의 FP 매핑 XLSX에는 표지, 종합예산내역, SW 개발비 산출, FP 산정, 참조 보정계수의 5개 Sheet가 있고 `FP산정` 사용 범위는 B1:R396이다. **396행 전부가 기능 항목이라는 뜻은 아니며**, 기능점수 산정과 시험시나리오 연결을 추적할 수 있는 원본으로 기록한다.

#### 9. 미확인 사항과 공개 표현 제한

- 1~7월 통합 `rest-api-server` Git 객체가 현재 폴더에 없어 372개 해시와 현재 B/A 이관 관계를 이 조사에서 모두 재검증할 수 없다. 과거 문서의 상세 근거는 보존하되 새 커밋 통계와 합산하지 않는다.
- `97. tester`의 현재 작업 트리에는 사용자 미커밋 수정이 있다. 코드 구조를 읽되 개인 커밋 변경량으로 포함하지 않고 원본을 수정하지 않는다.
- 전사 코드, 내부 주소·토큰·계정, 고객 설비 정보와 상세 설정값을 공개 이력서·Figma 제작 원고에 옮기지 않는다. 성능 수치는 시험 조건과 함께만 인용한다.
- “CC 인증 취득”, “전 메뉴 단독 개발”, “현재 SirenX 구현”, “모든 파이프라인 운영 배포”, “AI 모델 자체 개발”, “로그 무손실”, “성능 N배 개선”은 현재 증거로는 제출할 수 없다.

<a id="pipeline"></a>

### AI 관제 데이터 파이프라인·부하 생성기 업무·성과·기여도 상세 근거

> 문서 성격: `97. tester` 프로그램과 KST Meta의 성능 시험 보고서·설치 지침·Graph를 대조한 정보 수집 문서. 입력 처리량, 중간 병목, 48시간 장기 Test, 수십억 건 누적 조회, 장애 분석을 구분 기록.

#### 1. 분석 범위와 근거

##### 1.1 저장소·산출물

| 구분 | 내용 |
|---|---|
| 저장소 | `97. tester` (본인 식별: Git author `jspark@4net.co.kr`) |
| Git 활동 기간 | 2026-01-14 ~ 2026-03-27, 본인 커밋 6건 |
| 변경량 | +19,437 / -14,155줄, 변경 파일 97개 |
| SYSLOG Generator | 최신 커밋: 장비별 Module 39개 + Dispatcher 1개 / 미커밋 작업 Tree: 40개 → 공개 표현 **"약 40종"** |
| 실행 Mode·Sink·Source | Process·Thread / Kafka·UDP·Null·SFTP 등 / 추가 Source OPC DA·OPC UA·PCAP |
| 본인 작성 산출물 | `AI 관제 시스템 데이터 파이프라인 성능 테스트 보고서.docx`, `... 설치 지침서.docx`, `... 성능 테스트 그래프.xlsx` (작성자 `포네트㈜ - 박종성 주임 연구원` 표시) |

- 커밋 수는 적으나 최초 이동 Commit에 이전 대형 시험 Code·환경 구성 포함 → Commit 수만으로 기여 축소 판단 금지, Report·설치 지침과 함께 판단.
- 감사 시점 `opc`, `pcap`, `syslog` 재구성 등 대량 미커밋 변경 존재: 손대지 않았고 커밋 수·변경량에 미포함.
- `KstDev` Enum 활성 장비 Type 21개 → "40개 모두 동일 수준 운영 활성화"로 해석 금지.

##### 1.2 교차 감사

| 근거 | 확인 내용 |
|---|---|
| Git | 6개 커밋 전체 Diff 통계·변경 경로 |
| 최신 커밋 Code | Process·Thread·Batch·Quota Mode, Kafka 설정, Worker별 통계, PID·Signal 관리 |
| 성능 Report DOCX | 조합별 처리량, 48시간 Test, 수십억 건 Query, 병목·장애 분석 Table |
| Graph XLSX | `Sheet1!A1:AE24` 전체 셀, 3개 장기 Test 결과, 시각 Rendering 검수 |
| CSV | 단일 Index Refresh 1초·5초, 일별 Index 원자료 존재 |

"목표 입력 TPS"와 "중간·최종 구간 실측 TPS"를 분리해 기록.

##### 1.3 커밋 이력

| 날짜 | Hash | 변경 규모 | 내용 |
|---|---|---:|---|
| 2026-01-14 | `10d646d` | 93개 파일, +12,137/-92 | 기존 시험 Code를 SYSLOG Generator 저장소로 이관·재구성 |
| 2026-01-28 | `f558865` | +357/-641 | Parsing Rule·Generator 정리 |
| 2026-01-28 | `18ca2c8` | +6,360 | 장비별 Test Data Set 확장 |
| 2026-01-29 | `ae3bbf2` | +20/-48 | Parsing 보정 |
| 2026-01-30 | `25920bc` | +256/-54 | 반복 실행·종료용 Shell Script 보강 |
| 2026-03-27 | `471099d` | +392/-13,405 | Mapping 장비 20개 추가·대규모 정리 |

#### 2. 배경과 시험 목적

- 기존 K-SecureTrap 통계: RDBMS에 5분 단위 통계 Table 생성 → 운영 Transaction 영향, 실시간성 제한, Table·Batch 복잡화, 수십억 건 검색·집계 확장성 미검증.
- 목적: Kafka→OpenSearch 색인 처리량, OpenSearch 검색·Aggregation 응답, Kafka·Fluent Bit·OpenSearch CPU·Memory·I/O 관측, Partition·Process·Worker·Shard·Refresh Interval·Merge 설정 비교, 장기 부하 Segment·Merge·Queue·Disk 병목, Index 관리·Rollover 전략 검토.

#### 3. 시험 Architecture

```text
약 40종 보안장비 형식 SYSLOG Generator
  ├─ EventData: 원본 SYSLOG String
  └─ NormalizedData: 41개 Field JSON
             ↓
        Kafka Producer
             ↓
     Kafka KRaft Broker
             ↓
 Fluent Bit Consumer/Router
             ↓
         OpenSearch

관측: JMX Exporter + Node/Process Exporter + Prometheus + Grafana
```

- 계획·초기 환경: Kafka 3 Node KRaft, OpenSearch Master/Coordinator·Data Node, Fluentd, Docker Compose 기반 Cluster형 구성·검토.
- 최종 상세 성능 수치: 단일 Server Kafka·Fluent Bit·OpenSearch에서 Component Parameter 반복 변경 결과.

#### 4. `97. tester` 프로그램

- **Source**: SYSLOG, OPC DA Random Data, OPC UA Random Data, PCAP Capture (README 기준 Source×Sink 조합 실행).
- **장비 Generator(약 40종)**: AhnLab TrusGuard, AXGATE, Brainz IRIS, Check Point, Cisco ASA·FTD·Meraki·Switch, Dell PowerSwitch, Forescout, FortiGate·Fortinet UTM, Future System VPN, Genians NAC, HPE·Aruba, Huawei, Juniper, Palo Alto, Piolink, SECUI, Trend Micro TDA·TMTM, TrinitySoft Webs-Ray, WatchGuard, Winstech. 실제 Parsing Rule·Sample 형식 기반 EventData 생성.
- **원본·정규화 동시 생성**: `EventData`(원본) / `NormalizedData`(41개 Field JSON). 두 Topic에 부하 절반씩(예: 총 10만/초 = Event 5만 + Normalized 5만).
- **`SyslogRunner` 병렬 실행**: `multiprocessing` `spawn` Context, Process/Thread Mode 선택, Worker별 초당 목표 Rate, 1초 Deadline 내 목표 건수 생성, Worker별 `target`·`sent`·`actual_tps`·`elapsed` 기록, 공유 종료 Event, Child Process Signal 처리 분리 → 목표 TPS 대비 실제 TPS 비교 가능.
- **Kafka Producer 설정(최신 커밋)**: LZ4 Compression, `acks=0`, Connection당 In-flight 최대 10, Batch Size 52,488, Linger 10ms, Queue 최대 Message 200,000, 대용량 Queue Buffer. **성능 시험 우선 설정**(`acks=0`은 전달 보장 낮음) → "성능 시험용 Tuning"으로만 표현, 운영 신뢰성 설정으로 일반화 금지.
- **운영 편의**: CLI Entry Point, SIGINT·SIGTERM 처리, Task 정상 Stop, Shell Script 기반 Named Instance, PID File, `status`·특정 Instance `stop`·전체 `stop`, Background 실행·Log.

#### 5. 측정 방법

| 구분 | 항목 |
|---|---|
| 입력 | 목표 Log/s, Event/Normalized 분할, Kafka 입력량, Fluent Bit 처리량, OpenSearch Indexing 수, 구간별 처리율·Backlog |
| 조회(누적 건수별 반복) | 공격 IP Top 10, Windows Security Top 10, 전체 Firewall 허용 정보, 정규화 Log 검색, 원시 Log 검색 |
| Resource | Fluent Bit Instance별 CPU Core·Memory, Kafka·OpenSearch CPU·Memory, Server CPU·Memory·I/O, Kafka·OpenSearch 내부 Metric, Segment·Merge·Indexing Queue |
| 변수 | Kafka Partition 수, Fluent Bit Process 수·Process당 Worker 수·Flush 주기, OpenSearch Shard 수, Refresh Interval, Translog Durability·Flush Threshold, Merge Thread·Segment 크기, 단일·일별 Index·용량 기반 Rollover |

#### 6. 병목 발견과 Tuning

##### 6.1 최초 병목 (2만 건/초 이상, Kafka→Fluent Bit)

- Worker 증가보다 Process 증가가 효과적, Worker 증가만으로 처리량 비례하지 않음.
- Kafka Plugin Thread 제약 → Multi-process 방식 사용, Partition:Process ≈ 1:1이 유리.
- Buffer는 필요하나 처리량 영향 상대적으로 낮음, Flush 0.5~1초 범위 검토.
- Report 별도 기록: 운영용 중간 계층을 직접 개발한다면 Multi-thread가 관리성·성능상 더 적합할 수 있음(Fluent Bit 제약에 따른 시험 구성과 일반 결론 구분).

##### 6.2 10만 건/초 반복 실험

| Kafka Partition | Fluent Bit | Kafka | Fluent Bit | OpenSearch |
|---:|---|---:|---:|---:|
| 12 | Process 4 × Worker 6 | 약 10만/s | 약 8만/s | 약 8만/s |
| 24 | Process 5 × Worker 6 | 약 10만/s | 약 9만/s | 약 8.5만/s |
| 20 | Process 6 × Worker 4 | 약 10만/s | 약 9.5만/s | 약 9.1만/s |
| 24 | Process 6 × Worker 4 | 약 10만/s | 약 9.7만/s | 약 9.2만/s |
| 6 | Process 6 × Worker 1 | 약 10만/s | 약 9.7만/s | 약 9.7만/s |
| 7 | Process 7 × Worker 1 | 약 10만/s | 약 10만/s | 약 9.5만/s |
| 8 | Process 8 × Worker 1 | 약 10만/s | 약 10만/s | 약 10만/s |

결과: Kafka 8 Partition + Fluent Bit 8 Process × Worker 1 + OpenSearch Shard 1에서 전 구간 약 10만 건/초 도달.

##### 6.3 목표 초과 부하

| 입력 | Kafka | Fluent Bit | OpenSearch |
|---|---:|---:|---:|
| 20만/s, Partition 6, Process 6 | 약 20만/s | 약 14.7만/s | 약 14.7만/s |
| 20만/s, Partition 12, Process 6 | 약 20만/s | 약 14.8만/s | 약 14.8만/s |
| 약 12만/s, Partition 7, Process 7 | 약 12만/s | 약 11.5만/s | 약 10.9만/s |

20만/s 입력 시 중간·색인 구간 상한 14만 건대 병목 확인.

##### 6.4 Shard 수 (10만 건/초 동일 조건)

| Shard | Kafka | Fluent Bit | OpenSearch |
|---:|---:|---:|---:|
| 1 | 약 10만/s | 약 10만/s | 약 10만/s |
| 5 | 약 10만/s | 약 10만/s | 약 9.5만/s |
| 3 | 약 10만/s | 약 10만/s | 약 10만/s |

단일 Node에서 Shard 증가 시 Indexing Overhead 증가 가능. 저장 문서 수·분산 가능성과 Indexing 성능의 Trade-off → Node·Disk·보존량·조회 Pattern과 함께 결정.

#### 7. 40억 건 부근 장애 분석

- 현상: 장기 Test 중 약 40억 건 부근 OpenSearch Indexing 중지. Indexing Queue 포화, HTTP 429, Fluent Bit Data 유실, Hardware Resource는 여유, Lucene Segment 수 급증, Merge Backlog, Write Thread Block.
- 분석 Chain: 초당 10만 건 지속 입력 → 작은 Segment 계속 생성 → Merge가 Flush를 못 따라감 → Segment 증가로 검색·File Handle·Memory 부담 → Merge Thread Disk I/O 대기 → Write Queue 포화 → 429·Indexing 중단.
- HDD Random I/O 제약으로 Merge Thread 병렬화 한계. Report: SSD라면 Merge Thread 3~4개로 최적화 구간 단축 가능.
- 가치: 정상 Resource 지표에서 멈추지 않고 Lucene 내부 Segment·Merge까지 추적.

#### 8. 48시간·수십억 건 장기 조회

- 조건: OpenSearch 단일 Node, Shard 3, Kafka Partition 8, Fluent Bit Instance 8, 10만 Log/s, 누적 1억~60억 구간별 Query.
- Graph Workbook 3개 Table: 단일 Index Refresh 1초 / 단일 Index Refresh 5초 / 일별 Index Refresh 1초.

| Query | 결과 (Workbook·Report) |
|---|---|
| 정규화 Log 검색 | 다수 누적 구간 약 0.01~0.05초 |
| Windows Security Top 10 | 1억 건 약 0.79~0.93초, 60억 건 약 15.58~30.21초 |
| 원시 Log 검색 | 1억 건 약 0.93~1.25초, 60억 건 약 17.2~28.31초 |
| 공격 IP Top 10 | 대규모 구간에서 60초 Timeout 반복 도달 |

- 원시 Log 검색·Aggregation은 누적량·Merge 상태에 따라 수초~수십 초. 대형 Merge 완료 후 Query 시간 급격 회복, 같은 누적 건수라도 Segment 상태에 따라 비선형 변동.
- 한계: Report에 Header 중복·미완료 Case 일부 존재 → 최종 Benchmark로 일반화 금지. 특정 Hardware·단일 Node·당시 Segment 상태 결과이며 OpenSearch 성능 보장 수치 아님. 단, "Query 지연은 건수와 비선형이며 Segment Merge 상태에 크게 좌우"라는 결론은 명확.

#### 9. Refresh Interval과 Index 전략

- Refresh 1초 vs 5초: 늘리면 작은 Segment 생성·자원 사용 감소, 검색 실시간성 저하. CPU·Memory·I/O·Query 비교.
- Index 구성: 단일 대형 Index / 날짜별 Index / 일별 + 100GB Size Rollover.
- 검토 관리 항목: Index Template, Write Alias, 일별 자동 Rollover, ISM Policy, 100GB 기준 Rollover, 5년 보존 후 삭제, `event_data`·`normalized_data` Alias 전환.
- 성과: 단일 Index 수십억 건 누적 시 Segment·Shard 한계 확인, 보존 정책·운영 단위 고려 분할 전략 제시, 입력 성능 vs 조회·운영 편의 Trade-off 수치 비교.
- 경계: 일별·단일 Index 48시간 결과는 완료 Table 있음. `일별 + 100GB` Rollover·Transform API 시나리오는 기간·결과 공란 일부 → **정책 설계·시험 준비** 근거로만, 완료 성과로 쓰지 않음.

#### 10. 관측 환경

- Kafka JMX Exporter, Node Exporter, Process Exporter, Prometheus, Grafana, OpenSearch Metric, Fluent Bit HTTP Metric, Systemd Service.
- 설치 지침: Component 설치, Service 등록, Metric 수집, Dashboard, Index Template·Rollover Script, Test 초기화 명령. 내부 IP·계정 정보는 본 문서에서 제외.

#### 11. 업무 성과 요약

| 성과 | 근거 |
|---|---|
| 10만 건/초 End-to-End 구성 도출(Generator만이 아닌 전 구간) | → §6.2 |
| 병목을 Parameter가 아닌 구조 단위(Process·Partition 대응, Plugin 제약)로 해석 | → §6.1 |
| 40억 건 부근 429·Indexing 중단을 CPU 부족으로 단정하지 않고 Segment Explosion·Merge Backlog·Write Thread Block으로 분석 | → §7 |
| 재현 가능한 시험 자산: 약 40종 장비 Data, Process·Thread Mode, 목표·실제 TPS, Named Instance·Signal·PID 관리, 설치 지침, Test Scenario·Result Table·Graph | → §4, §10 |
| 성능·신뢰성 Trade-off 명시: Producer `acks=0`, 비동기 Translog 등 Throughput 우선 설정. Report에 시험 목적 한정, 운영은 직접 개발 수집기·별도 신뢰성 검토 필요 기록 | → §4 |

#### 12. 본인 기여도 판단

- **직접 근거 강함**: 성능 시험 Report·설치 지침 작성, 시험 Scenario·Result 정리, `97. tester`의 SYSLOG Data Set·Parsing Rule·장비 Generator, 10만 건/초 Tuning 반복, Fluent Bit·Kafka·OpenSearch Parameter 비교, 40억 건 부근 장애 분석.
- **협업·경계 필요(본인 단독 성과로 쓰지 않음)**: Kafka·OpenSearch 제품 자체 개발, 운영 Cluster 전체 Architecture 확정, 운영 수집기 `eventInsertMgr` 전체 구현, 모든 Generator의 모든 장비 Sample 단독 작성.
- 안전한 표현: "대량 SYSLOG Generator와 관측 환경을 구축하고 Kafka–Fluent Bit–OpenSearch Pipeline의 10만 건/초 처리와 장기 안정성을 시험·Tuning".

#### 13. 이력서·자기소개서 압축 문장

- Python 기반 약 40종 보안장비 SYSLOG 부하 Generator 자산 구축·확장
- Process·Thread 병렬 실행과 Worker별 목표·실제 TPS 측정
- Kafka Producer Batch·Compression·Queue Tuning
- Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초 처리 구성 도출
- 20만 건/초 입력에서 중간·색인 처리 한계 약 14.7~14.8만 건/초 확인
- 48시간, 최대 수십억 건 누적 Query Test
- 40억 건 부근 429·Merge Backlog·Write Block 분석
- Shard, Refresh, Merge, Rollover, Index Template 비교
- Prometheus·Grafana·JMX·Process Exporter 관측 환경
- 성능 시험 Report·설치 지침 작성

#### 14. 추가 확보 필요 정량 정보

CPU·RAM·Disk 사양 / 10만 건/초 유지 시간·총 입력 건수 / Data 유실 측정 방식·최종 유실률 / Producer 단독 최대 TPS / SSD 재시험 결과 / 운영 수집기 적용 후 Fluent Bit 대비 결과 / 100GB Rollover Test 완료 여부 / 미완료 Transform API Scenario 후속 결과

#### 15. 2026-11-21 재조사: 테스터의 후속 개발 이력과 개인 기여

> §1의 `97. tester` “본인 커밋 6건·2026-03까지”는 **당시 조사 시점의 기록**이다. 현재 `git log --all --no-merges --author=jspark@4net.co.kr`에는 **16건**이 2026-01-14~10-14에 걸쳐 있다. 기존 6건에 10건이 추가되었다. 최초 커밋 1건은 별도 작성자이며 개인 커밋에 포함하지 않는다. 커밋 수·줄 수는 개발 생산성 지표로 쓰지 않는다.

##### 15.1 8~10월 개인 변경의 단계

| 커밋 | 직접 확인한 변경 | 의미 |
|---|---|---|
| `3c8f317` 08-03 | 기존 `kst/*` 생성기·실행기를 재구성하고 OPC/PCAP 실행·생성 경로, SYSLOG 장비별 모듈, CLI·Shell·설정을 대폭 정리 | 다중 입력원과 실행 방식 확장 |
| `3486ccb`, `f2bd4ac` 08-27 | SYSLOG TLS 수신 시험과 TLS 경로 분리 | 전송 시험 시나리오 구분 |
| `504fb77` 09-13 | `source`, `plugin`, `sink`, `runner` 계층과 `core` 공통 모델로 재구성. `process`·`thread`·`single`, `pcapcapture` Flow, DB/API/SFTP/UDP/Kafka/Null Sink, 규칙·장비 참조 데이터, 시험 스크립트 변경 | 단일 스크립트에서 재사용 가능한 부하 도구로 구조화 |
| `f684382` 09-14 | `l2dummy` 대량 적재 Flow, DB 배치 처리, 파일 Sink, 속도/작업자 설정, 장비별 Generator 수정 | DB 입력/재현 시나리오 확장 |
| `e2f3ba6`, `f0745bc`, `ee035ce` 09-14 | DB·규칙·문서·시험 코드 정리와 오류 보완 | 후속 QA |
| `823198d` 10-07 | 대규모 테스트용 참조 데이터, Docker/Kafka/OpenSearch/Prometheus 구성, OPC 태그·장비 샘플 추가 | 시험 데이터·환경 자산 확장. 바이너리·참조 파일 크기를 코딩 성과로 환산하지 않음 |
| `a55cd32` 10-14 | SYSLOG TLS 관련 시험 코드 | 프로토콜 시험 범위 확장 |

##### 15.2 현재 도구의 실행 구조

```text
CLI tester.py
    ↓
Runner.run ── single / thread / process / flow
    ↓
Source.generate ── syslog(장비별 40개 파일) / window / opc-da / opc-ua / pcap
    ↓
Plugin.apply ── normalize / format
    ↓
Sink.write ── kafka / udp / db / sftp / file / null / api*
```

`api` Sink는 README와 현재 코드상 `write` 미구현이며 첫 레코드에서 실패한다. **지원 목록에 보인다는 이유로 API 전송 완료 기능으로 주장하지 않는다.** `flow`는 PCAP capture, L2 dummy 적재, L2 테이블 복제처럼 순서가 고정된 시나리오다. 현재 작업 트리는 `README.md`, `settings.py`, 규칙·SQL 파일에 사용자 미커밋 변경이 있어 이 문단의 “현재 코드”와 Git 커밋 결과를 명확히 구분한다.

- `core.model.Record`가 raw payload와 장비/IP/시각 등 전달 정보를 보유한다. Source는 입력 생성, Plugin은 규칙 기반 파싱·정규화/포맷, Sink는 대상별 기록·전송, Runner는 조합·동시성·종료를 담당한다. 이 구분은 한 장비·한 대상의 독립 스크립트보다 새 Source/Sink/시나리오를 추가하기 쉽게 한다는 **설계 해석**이다.
- SYSLOG 장비별 Generator 파일 40개가 현재 `source/syslog`에 있다. 실제 활성화된 장비·모든 규칙의 품질·고객 운영 적용 수는 별도 사실이며 파일 수와 같지 않다.
- `--runner`에 단일·스레드·프로세스를 선택하고 `--source`/`--sink`/`--plugin`을 조합한다. 설정은 runner별 count/rate/workers와 Sink별 batch/접속 정보로 분리되어 있다. 실제 호환 여부는 조합 실행 과정의 구현이 판정한다.

##### 15.3 멀티스레드·멀티프로세스의 구체 구현

| 항목 | 스레드 Runner | 프로세스 Runner |
|---|---|---|
| 동시성 | `threading.Thread`, `threading.Event`, `queue.Queue` | `multiprocessing.get_context('spawn')`, `Process`, `Event`, `Queue` |
| 작업 분배 | worker 번호를 시작 ordinal로 하고 worker 수만큼 건너뛰며 ID 충돌 없이 레코드 분담 | 같은 ordinal 분배; 프로세스마다 Source/Plugin/Sink 객체 생성 |
| 속도 제어 | `time.monotonic()`과 생성 누적/worker rate의 목표 시간으로 대기 | 같은 방식의 단조 시계 기준 대기 |
| 종료 | 부모가 SIGINT/SIGTERM을 stop event로 전달, worker join | 부모가 stop event를 공유하고 자식 SIGINT 무시, 종료코드·결과 Queue 수거 후 join |
| 결과 | worker별 generated/confirmed/error 보고, 부모가 합산 | 동일 + 비정상 자식 종료 시 `WorkerExitedWithoutResult` 보강 |

- **개인 구현 근거:** `504fb77`에서 `runner/thread/thread.py`, `runner/process/process.py`, `runner/single/single.py`를 별도 계층으로 만들고, `f684382`에서 rate·count·오류 흐름을 후속 수정했다. 최신 소스의 일부 세부 동작은 사용자 미커밋 변경 영향이 있을 수 있어, Git diff와 최신 코드를 구분한다.
- **정확한 TPS 표현:** Runner의 `rate`는 worker별 목표 발행률로 해석되는 분기가 있다. 현재 SYSLOG 설정에서 `total` 이름의 값을 `worker_rates=[total] * workers`로 배분하는 경로가 있어, **설정값이 항상 전체 합산 목표 TPS라고 일반화하면 안 된다**. OPC 경로는 `divmod(total, workers)`로 합산 목표를 나눈다. 실행 모드·Source별 실제 합산율은 결과/계측으로 확인해야 한다.
- **작업자 결과의 의미:** `generated`는 생성 횟수, `confirmed`는 각 Sink의 `inserted` 집계다. `null`은 write 호출 수, `file`은 파일 기록 수, `db`는 배치 실행 후 집계 수, `kafka`는 현재 `produce()` 호출 후 증가하는 수다. `confirmed`라는 키만 보고 Kafka 브로커 수신, Fluent Bit 처리, OpenSearch 색인까지 확인된 건수로 주장하면 안 된다. 전 구간 TPS는 외부 관측 지표와 성능 보고서의 별도 측정이다.
- 실패 처리: worker 하나가 예외를 만나면 stop event를 설정하고 `close(flush=False)`로 재전송을 피한다. DB 배치 `executemany` 실패는 일부 행이 이미 저장됐을 수 있어 자동 재시도하지 않고 대상 확인을 안내한다. `count` 지정 때 합산 `confirmed`가 목표와 다르면 성공 종료로 보지 않는 경로가 있다. 이 점은 부하 시험 데이터를 신뢰 가능하게 다루려는 설계 근거이나, 모든 Sink의 exactly-once 보장은 아니다.

##### 15.4 이직 서술에서 강조할 기술 판단

1. **부하 생성기 자체를 개발했다:** 장비 형식별 샘플 생성에서 끝나지 않고 Source/Plugin/Sink와 Runner를 분리하고, 스레드·프로세스의 종료·율 제어·작업자 결과를 명시했다.
2. **생성기 수치와 파이프라인 처리량을 구분했다:** 도구 내부 generated/confirmed와 Kafka·Fluent Bit·OpenSearch 각 구간의 지표를 따로 보아 목표 부하와 실제 지속 처리량을 비교했다.
3. **부하 조건을 재현 가능한 자산으로 남겼다:** 장비별 규칙·샘플, 환경 설정, Docker/관측 구성, 설치 지침, 시험 보고서, 그래프·CSV가 연결된다.
4. **장기 안정성을 조사했다:** 10만/s 단기 달성만 보고 끝내지 않고, 48시간·수십억 건 누적과 segment/merge/write queue·429 문제를 분석했다.
5. **성능과 전달 보장의 차이를 드러냈다:** 시험용 producer `acks=0` 등은 throughput 우선 조건이다. 운영 신뢰성 기준과 동일시하지 않는다.

**사람인 문장 후보:** “Python으로 장비별 SYSLOG를 생성하는 Source–Plugin–Sink형 부하 도구를 개발하고 멀티스레드·멀티프로세스 Runner의 작업 분배, 목표 발행률, 종료·오류 집계를 구현했습니다. 이를 활용해 Kafka–Fluent Bit–OpenSearch 처리량을 구간별로 검증하고 48시간 장기 부하의 병목을 분석했습니다.”

**Figma 핵심 프레임:** “도구 구조(모듈 경계) → 동시성 제어(작업자·단조시계·결과 Queue) → 시험 설계(입력/중간/최종 지표 분리) → 결과(특정 조건의 10만/s, 20만/s의 14만대 병목) → 원인 분석(segment/merge/429)”.

<a id="materials"></a>

## 지원서 제작 원고

인증·감사, 보고서 병렬 조회·동적 Scheduler, 시험 파이프라인과 부하 도구를 각각 사례로 구성한다. 42개는 검수 문서의 시나리오 ID 수다. 운영 승인 및 시간 개선율은 별도 확인 항목이다.

### KSTV6 사람인·Figma 제작 원고

> 이 문서는 다른 세션이 이력서·포트폴리오를 **제작할 때 쓸 문장과 화면 구성 데이터**다. 사실의 세부 근거와 예외는 [추가 전수조사](#follow-up), [기존 1~7월 근거](#evidence), [파이프라인·테스터 근거](#pipeline)에 둔다. 고객·회사 비공개 화면/코드/주소는 공개용 결과물에 직접 넣지 않는다.

#### 1. 프로젝트 기본 정보 카드

- **프로젝트명:** KSTV6 / AI 보안관제 플랫폼(공개용 표현은 회사 승인 명칭에 맞춰 조정)
- **기간:** 본인 관련 저장소·산출물 기준 2025-09~2026-11에 근거가 분산된다. “6개월”은 사용자의 실제 핵심 투입 기간 설명이며, 이력서의 정확한 시작·종료 월은 사용자 확인 후 기입한다. `rest-api-server` 개인 커밋은 2026-01~07, 분리 저장소는 2026-08~11, report-manager는 2026-05~11, 파이프라인 보고서 작성은 2025-09.
- **역할:** 관리 Console·Engine API 연계·인증/인가·감사·OpenSearch 로그 조회·보고서 개발, 대량 로그 파이프라인 부하 시험 및 Python 부하 도구 개발, 화면/검증 산출물 작성.
- **사용 기술:** Java, Spring Boot, MyBatis, PostgreSQL, OpenSearch, Kafka, WebSocket, JWT, Thymeleaf/JavaScript, Python multiprocessing/threading, Fluent Bit, Prometheus/Grafana, JasperReports. 버전은 시기별로 다르므로 한 줄에 고정 버전을 붙이지 않는다.
- **기여 경계:** CC 인증 문서는 참고만 했고 **작성하지 않았다**. 인증 구조의 실제 코드 반영은 본인 작업이다. 85장 화면설계서는 본인 작성이지만 85개 화면 모두를 구현했다고 주장하지 않는다. 현재 SirenX의 외부 데이터 연계 코드는 개인 개발 근거가 약하므로 제외한다.
- **기성검수 표현:** 2026-06 준공검수보고서의 42개 서로 다른 시나리오 ID와 증빙 화면을 정리한 문서는 본인 작성이다. 문서 개요에 합격 표시가 있으나 검수일자·검수자 등이 공란이고 일부 결과란도 비어 있으므로 고객 최종 승인이나 42건/356건 전부 PASS로 쓰지 않는다. `FP-시험시나리오 매핑.xlsx`는 기능점수·예산표이며 시험 결과표가 아니다.

#### 2. 사람인 프로젝트 소개: 길이별 초안

##### 2.1 한 줄

AI 보안관제 플랫폼 KSTV6에서 인증·인가와 감사 구조, 관리 화면·Engine API 연계, OpenSearch 로그 조회·보고서 기능을 개발하고 대량 로그 파이프라인 성능 검증 도구와 시험 체계를 구축했습니다.

##### 2.2 3문장

보안관제 플랫폼의 관리 Console과 REST API에서 사용자 세션, 권한 검사, 감사 이벤트, 설비·로그·보고서 메뉴를 개발했습니다. Kafka–Fluent Bit–OpenSearch 파이프라인의 병목을 검증하기 위해 Python 기반 병렬 부하 생성기를 개발하고 장기 시험·관측·튜닝을 수행했습니다. CC 인증 문서를 참고해 요구사항을 실제 인증 코드에 반영했고, 85장 화면설계서와 파싱규칙 검증·성능시험·기성검수 문서를 직접 작성했습니다.

##### 2.3 핵심 기여 8개 항목

1. CC 대비 로그인 준비 세션, 세션 ID 교체, 동시 로그인 제한의 원자적 등록, API 요청 검증, URI·권한 검사와 감사 이벤트를 코드·테스트에 반영.
2. 관리 UI와 Engine API의 책임 분리 구조에서 서버 간 REST 클라이언트를 공통화하고 TLS 설정·JWT 내부 호출 경계를 정리.
3. 설비·사용자·취약점·무결성·SYSLOG·이벤트·보고서·설정·프로세스 메뉴의 검증·감사·SQL 및 화면/API 동작을 구현·보완.
4. OpenSearch 기반 원시/정규화 로그 검색·집계, 이벤트 검색 화면, 대시보드 Top10 조회 오류와 조회/화면 정합성 개선.
5. 독립 보고서 서비스 초기 구축 및 한·영 템플릿, 취약점·종합·요약 보고서, 동적 스케줄링·이력/보존·알림 흐름 개발.
6. Python Source–Plugin–Sink형 부하 생성기와 단일/멀티스레드/멀티프로세스 실행기, 작업자별 생성/확인 건수 및 종료·오류 처리 구현.
7. Kafka–Fluent Bit–OpenSearch의 약 10만 건/초 전 구간 처리 조건을 도출하고, 20만 건/초 입력 시 중간 계층 병목과 장기 누적 시 segment/merge/429 문제를 분석.
8. 파이프라인 설치·성능 보고서, AI 파싱규칙 생성 방법/검증, 85장 화면설계, 기성검수 시나리오 증빙 자료 작성.

##### 2.4 사용자가 선택해 제출할 문장 묶음

**인증·보안**

- CC 인증 요구사항을 참고해 로그인 준비부터 세션 발급·회전·권한 검사까지 서버 측 인증 흐름을 구현하고, 보안 이벤트의 감사 패턴 및 회귀 테스트를 정비했습니다.
- 동시 로그인 제한에서 사전 조회와 등록 사이의 경쟁 조건을 고려해 세션 등록을 원자화하고, 세션 고정 방지를 위해 로그인 성공 시 세션 ID를 교체했습니다.
- 접근 IP·세션 상태·비활성 기능·권한을 서버에서 검사하여 UI 비노출만으로 끝나지 않는 접근 제어를 구현했습니다.

**공통 설계·API·SQL**

- 관리 UI–Engine API 간 HTTP 호출을 공통 클라이언트로 정리하고 내부 서비스 JWT와 TLS 설정을 적용했습니다.
- 분리 저장소에서 화면용 컨트롤러와 Engine용 컨트롤러의 책임을 구분하고 공통 Domain/Mapper를 재정리했습니다.
- 설비·사용자·취약점·무결성·보고서 등 관리 메뉴의 MyBatis SQL과 입력 검증·감사 처리를 단계적으로 보강했습니다.

**검색·보고서**

- OpenSearch 기반 원시·정규화 로그 및 이벤트 검색과 집계 화면을 구현하고, 버전 변경 후 대시보드 Top10 조회 오류를 쿼리와 UI에서 수정했습니다.
- Jasper 기반 종합·취약점·요약 보고서 생성, 동적 스케줄링, 생성 이력·알림·보존기간을 다루는 독립 보고서 서비스를 구축·고도화했습니다.

**성능 시험·도구**

- 약 40종 보안장비 형식 로그를 생성하는 Python 부하 도구에 프로세스·스레드 실행 모드와 작업자별 목표율·결과 집계를 구현했습니다.
- Kafka–Fluent Bit–OpenSearch의 조건별 처리량을 측정해 약 10만 건/초 전 구간 처리 구성을 도출하고, 20만 건/초 입력 시 약 14만 건대 중간·색인 처리 한계를 확인했습니다.
- 48시간 장기 시험과 수십억 건 누적 조회를 수행하며 OpenSearch segment 증가, merge backlog, HTTP 429의 연쇄를 분석했습니다.

**설계·검증 산출물**

- 85장 화면설계서에 공통 컴포넌트와 업무별 화면 ID·권한·동작을 정리하여 개발·검수 기준을 마련했습니다.
- SYSLOG 파싱규칙 생성 방법과 통합 검증 시나리오와 파이프라인 설치·성능 시험 보고서를 작성했습니다.

#### 3. Figma 포트폴리오 구성 데이터

##### 3.1 표지

- **제목:** “KSTV6: 보안관제 플랫폼의 인증·운영 기능과 대량 로그 검증”
- **한 줄 메시지:** “관리 Console과 Engine API의 신뢰 경계를 다듬고, 실측 가능한 부하 도구로 데이터 파이프라인의 병목을 찾다.”
- **역할 배지:** Backend / Full-stack / Security / Performance Test / Documentation.
- **시기 배지:** 확정된 실제 투입기간을 사용자에게 확인해 넣기. Git/문서 활동 범위를 프로젝트 투입기간과 동일시하지 않기.

##### 3.2 문제 배경 프레임

- **사용자 문제:** 보안관제 기능이 설비·로그·취약점·보고서·설정 등 여러 메뉴에 퍼져 있어, 화면·Engine API·감사와 권한이 일치해야 한다.
- **데이터 문제:** 대량 SYSLOG를 Kafka–중간 수집기–OpenSearch로 전달하며 목표 입력 TPS뿐 아니라 중간·최종 처리량, 장기 누적 시 검색 지연·색인 실패를 확인해야 한다.
- **인증 문제:** 로그인과 서버 간 API 호출의 경계, 세션 고정·중복 로그인 경쟁·미허용 IP·권한 없는 URI 접근을 각각 다뤄야 한다.

##### 3.3 시스템 그림 원고

```text
사용자 브라우저
  └─ WebManager: 화면 / 세션 / 권한 / 관리자 메뉴 / 감사
       ├─ 내부 JWT + TLS → RestApiServer: Engine용 API / 공통 Domain / 감사
       ├─ 보고서 요청 → Report Manager: 생성 / 스케줄 / 이력
       ├─ PostgreSQL: 설정·사용자·업무 데이터
       └─ OpenSearch: 보안 로그 검색·집계

시험 입력: Python 부하 도구 → Kafka → Fluent Bit → OpenSearch
관측: JMX·Process/Node Exporter → Prometheus → Grafana
```

- 그림은 **이해를 돕는 구조도**다. 실제 네트워크 영역·포트·서버 주소·고객명은 넣지 않는다. SirenX는 개인 기여 사례로 배치하지 않는다.

##### 3.4 사례 1: CC 대비 인증 구조

- **프레임 제목:** “세션과 권한 검사를 서버의 단계별 관문으로 정리”
- **입력/문제:** 로그인 준비 세션 재사용, 세션 ID 노출·고정, 동시 로그인 경합, 화면 숨김과 직접 URI 접근 간 불일치.
- **내가 한 일:** prepare registry와 로그인 검사, 성공 후 세션 ID 교체, 원자적 등록, 권한/비활성 URI 거부, 결과별 감사 패턴, 인터셉터·로그인 테스트 보강.
- **그림:** `prepare → 계정/IP/비밀번호 판정 → 세션 ID 교체 → 원자 등록 → SessionVO → API/화면 요청별 검사 → 감사`.
- **증거 태그:** B `310c3ec9`, `2dbd0ac3`; A `14f7f58`, `f8df79c`; B의 인증 시험 파일.
- **주의 문구:** “CC 인증 문서 작성/인증 취득”이라는 표현은 넣지 않는다. 문서는 참고, 구현은 본인.

##### 3.5 사례 2: 로그 조회·메뉴 일관성

- **프레임 제목:** “관리 화면에서 검색·집계·검증·감사를 같은 데이터 흐름으로 연결”
- **문제:** 원시/정규화/이벤트 로그와 대시보드 조회가 조건·정렬·버전 변경에 민감하고, 메뉴별 검증·감사 규칙이 달라질 수 있다.
- **내가 한 일:** 이벤트 검색 Controller–Service–Query–화면 연계, 공통 OpenSearch 필터, Top10 조회 호환성 수정, 여러 메뉴의 DTO/SQL 검증과 감사 보완.
- **보여줄 비교:** “조회 요청 → 입력 검증 → Query/Mapper → 목록·통계·다운로드 → 감사” 단계와 각 단계의 대표 문제/수정. 실제 UI 캡처는 공개 허가가 있을 때만.
- **증거 태그:** B `2683bc92`, `98770e8a`, `de7b6801`, `861fef13`, `31ca0837`; 기존 문서의 1~7월 OpenSearch 해시.

##### 3.6 사례 3: 부하 도구와 병목 분석

- **프레임 제목:** “목표 TPS와 실제 구간별 처리량을 분리해 검증”
- **도구 구조:** Source(장비별 SYSLOG/OPC/PCAP) → Plugin(정규화·포맷) → Sink(Kafka/UDP/API/DB/SFTP/Null) + Runner(single/thread/process/flow).
- **동시성 그림:** Process 모드 `spawn`으로 N개 프로세스/독립 Sink, Thread 모드 N개 스레드/공유 프로세스, 작업자별 rate 할당, `monotonic` 기준 발행 간격, stop event, 결과 Queue, 부모의 집계·exit code. “멀티스레드·멀티프로세스 개념을 적용한 정식 부하 도구”라는 메시지.
- **시험 결과 표:** 10만 입력/초에서 8 Partition·8 Fluent Bit Process×1 Worker·1 Shard 구성으로 중간·색인 구간도 약 10만/초. 20만 입력/초에서는 중간·색인 약 14.7~14.8만/초. 48시간/수십억 건 조회는 조건·결과 변동이 크므로 별도 패널.
- **병목 분석 그림:** segment 증가 → merge backlog → write queue 포화 → 429 → 입력과 색인 처리량 괴리. CPU 여유만으로 안정성을 결론 내지 않은 점 강조.
- **주의:** `acks=0` 등 처리량 우선 설정은 전달 보장 시험 결과와 분리. 10만/초는 특정 시험 조건, 운영 시스템 상시 보장 수치가 아니다.

##### 3.7 산출물·협업 프레임

- 화면설계서 85장: 메뉴 분류, 화면 ID, 사용 권한, 주요 동작.
- AI 파싱규칙 검증: prefix 제거→구분자 분해→format key 선택→정규화 필드 매핑→장비별 샘플 시험.
- 기성검수: 기능점수–시험시나리오 연결과 검수 보고서.
- 성능: 설치 지침, 시험 보고서, 그래프/CSV. 원본 내부 화면·고객 데이터를 그대로 공개하지 않고 **재구성 도식**으로 제시.

#### 4. 면접용 질문과 대답의 재료

1. **중복 로그인을 어떻게 막았나?** 사전 확인만 하면 동시에 통과하는 TOCTOU가 생긴다. `ConcurrentHashMap.compute`로 살아 있는 세션 확인과 등록을 원자화했다. 오래된 세션이 뒤늦게 정리되며 새 세션까지 지우지 않도록 세션 ID를 대조한다.
2. **세션 고정은 어떻게 다뤘나?** prepare 세션 검증 후 로그인 성공 시 `changeSessionId()`로 노출된 ID를 교체하고 옛 prepare 등록을 지운다.
3. **CC 문서는 누가 썼나?** 다른 작성자의 CC 자료를 검토해 요구사항을 참고했다. 본인은 로그인·인가·감사 코드와 관련 테스트에 반영했다.
4. **멀티프로세스와 멀티스레드를 왜 둘 다 뒀나?** 부하 생성기의 동시성 방식과 대상 Sink·프로토콜 특성이 다르므로 선택 가능하게 설계했다. 프로세스는 독립 실행/격리, 스레드는 같은 프로세스의 공유 메모리/가벼운 실행이 장점이다. 실제 우월성은 시험 조건과 병목에 따라 판단한다.
5. **입력 10만/초면 전 구간 10만/초인가?** 아니다. Kafka 입력, Fluent Bit 처리, OpenSearch 색인을 별도로 측정했다. Partition/Process/Worker 조합에 따라 차이가 컸고, 특정 조합에서만 전 구간 약 10만/초를 관측했다.
6. **40억 건 부근 문제를 어떻게 봤나?** 단순 CPU 부족이 아니라 segment 증가·merge 지연·write queue/429를 연결해 분석했다. 디스크 유형과 refresh/shard 설정이 조회·색인에 주는 영향도 구분했다.
7. **외부 API와 SQL은 어느 범위인가?** 개인 커밋으로 확인되는 내부 서버 간 REST 공통화·TLS, AI 파싱 복구 API 이관, 관리 메뉴의 MyBatis Mapper와 검증/감사 SQL이다. 현재 SirenX 외부 데이터 소스 구현은 다른 author의 변경이므로 내 성과로 포함하지 않는다.

#### 5. 제작 세션에 전달할 검증 규칙

- 이 문장의 동사는 “구현·정비·보강·시험·작성” 중 각 근거와 맞는 것을 쓴다. 코드 존재만으로 운영 배포·인증 취득·성능 보장을 주장하지 않는다.
- CC 문서 **작성**은 본인이 하지 않았다. 요구사항 참고와 실제 코딩을 분리해 표시한다.
- 파이프라인과 테스터기는 핵심 기여로 반드시 한 프레임 이상 사용한다. 입력 TPS와 최종 색인 TPS를 같은 숫자로 취급하지 않는다.
- 1~7월 통합 저장소와 8~11월 분리 저장소 커밋 수를 합치지 않는다. 현재 서비스의 타인 후속 코드까지 본인 단독 개발로 표시하지 않는다.
- 이력서의 정확한 투입기간·팀 규모·출시·고객 적용/인증 상태는 사용자 최종 확인 후 채운다.

<a id="git"></a>

## Git 기록

### KSTV6 관련 개인 Git 커밋 전수 목록

> 2026-11-21 조사. Git author email `jspark@4net.co.kr`, `--all --no-merges` 기준. 분리 저장소와 과거 통합 저장소의 커밋을 합산하지 않는다. 제목은 증거 탐색용이며 개인 성과 판정은 해당 diff·현재 코드·사용자 확인과 대조한다. `97. tester`는 KSTV6 데이터 파이프라인 시험 도구로 함께 수록했다.

#### web-manager-v2 (134 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-11-02 | `f2af87c0` | USER 클라이언트 이메일 수신여부 html에서 disabled 속성 제거 |
| 2026-10-23 | `4d9b55d3` | USER 서버 입력값 검증 수정 |
| 2026-10-08 | `6dd8a6a1` | AI 파싱규칙 환경변수 하드코딩 제거 |
| 2026-10-08 | `c0a88a64` | 인증 정보 하드코딩 삭제 |
| 2026-10-02 | `988e9858` | TLS 설정 정보 추가, 운영 프로퍼티스 최신화 |
| 2026-10-02 | `5c79957d` | 유저 이메일 수신 여부 - 활성화 고정 설비 입력 폼 퍼블리싱 수정 |
| 2026-10-01 | `5384332b` | 문서 |
| 2026-10-01 | `2471cc76` | 로그아웃, 자동로그아웃 분리 |
| 2026-10-01 | `2dbd0ac3` | 인증, 인가 CC용 수정 소스정리, 주석정리 |
| 2026-09-30 | `f6cef985` | QA |
| 2026-09-28 | `87a7b300` | 메일 설정 |
| 2026-09-28 | `f096592a` | 이벤트 통계 스크롤, 퍼블리싱, 권한처리, 컨벤션 이벤트 분석 통계 보관 일수 (일) 설정 메뉴에 추가 |
| 2026-09-28 | `7a87add7` | QA 1 |
| 2026-09-28 | `310c3ec9` | CC 인증 |
| 2026-09-22 | `eebc6877` | smtp validation |
| 2026-09-22 | `388b781e` | 버전 정보 |
| 2026-09-22 | `d9037729` | 설정 감사 |
| 2026-09-22 | `db807ea9` | 설정 감사 |
| 2026-09-22 | `4dce19db` | MAP 감사 |
| 2026-09-22 | `b7d33d63` | 맵 설정 수정 |
| 2026-09-22 | `880c5dc8` | 설비 감사 수정 |
| 2026-09-22 | `31ca0837` | 감사 + QA |
| 2026-09-22 | `6c4f3b0a` | QA + 유저 IP, 유저 감사 수정 |
| 2026-09-22 | `2a10cf5b` | QA + 유저 IP, 유저 감사 수정 |
| 2026-09-18 | `9ba0a18e` | AI 파싱규칙 퍼블리싱, 버그 수정 |
| 2026-09-18 | `0520cac7` | SSL 버전, 지원 추가 |
| 2026-09-18 | `9d767b44` | QA |
| 2026-09-18 | `e26467fd` | 비활성화된 유저의 로그인시도(5회이상) + 이메일 전송 포함 |
| 2026-09-18 | `05f72a2f` | 감사 용량 임계치 |
| 2026-09-18 | `4adea112` | 가비지 제거 |
| 2026-09-18 | `4aafdede` | 인증부분 수정 및 감사 추가 |
| 2026-09-14 | `94a59b3c` | 알람버그 |
| 2026-09-14 | `bbd8bd25` | QA 무결성 관련 검색조건 수정 |
| 2026-09-14 | `65d6d4fc` | QA |
| 2026-09-14 | `128b5b54` | 설비 관리자 -> 이메일 필수로 수정 |
| 2026-09-11 | `ceda3880` | 수정 |
| 2026-09-11 | `02d68613` | 무결성 메뉴 쪽 검색조건 추가 |
| 2026-09-10 | `50577e8b` | 대시보드 취약점 숨김처리 |
| 2026-09-10 | `0d0cf6d5` | 운영환경에서 꼭필요하지만 CC 인증을 위해 숨김처리를 해야하는 경우 CCMODE로 통일 |
| 2026-09-10 | `42ce78bc` | 환경설정 null 처리 |
| 2026-09-10 | `64519471` | 로그인 핫키 이벤트 중복 등록 제거 properties 값 타임리프에서 쓸때 오류, rename: session.js -> autoLogout.js common.resetSessionStorage -> pageState.js로 이동 |
| 2026-09-10 | `c60e5fc9` | 버전정보 |
| 2026-09-10 | `02cfa084` | QA |
| 2026-09-10 | `c7bf3936` | AI SYSLOG VALIDATION + 감사로그 복합키 정렬 |
| 2026-09-09 | `17e671b3` | USER MAP API SPEC 변경 + VALIDATION |
| 2026-09-09 | `3f681820` | QA 자동로그아웃 CC-MODE 에서 설정 분리 |
| 2026-09-09 | `b31ea2e5` | QA + AUDIT |
| 2026-09-08 | `45baf273` | 데이터 없을 때 처리 |
| 2026-09-08 | `1ea1f826` | RESOURCE VALIDATION + AUDIT |
| 2026-09-08 | `31aa6c4e` | SETTING VALIDATION + 고정형대시보드 숨김 |
| 2026-09-08 | `d0705b00` | ANOMALY VALIDATION + AUDIT |
| 2026-09-08 | `c73ecc61` | REPORT VALIDATION + AUDIT |
| 2026-09-07 | `d74e6f10` | INTEGRITY VALIDATION + AUDIT |
| 2026-09-07 | `4701514b` | EXTERNAL VALIDATION + AUDIT |
| 2026-09-07 | `0d87f392` | CASL VALIDATION + AUDIT |
| 2026-09-06 | `861fef13` | SYSLOG VALIDATION + AUDIT + FIX + REFACTORING |
| 2026-09-06 | `f5b7caa6` | NOTIFY VALIDATION |
| 2026-09-06 | `9cd32c33` | PORT VALIDATION |
| 2026-09-06 | `e682cae2` | DASHBOARD VALIDATION |
| 2026-09-06 | `0e87c57b` |  MAIN VALIDATION |
| 2026-09-06 | `7b18468c` | CTRL VALIDATION + 버그 수정 |
| 2026-09-06 | `1531298b` | CTRL VALIDATION |
| 2026-09-06 | `722e0b96` | AUDIT VALIDATION |
| 2026-09-05 | `c7cec3e7` | ALARM VALIDATION |
| 2026-09-05 | `4c14684a` | DEVICE VALIDATION |
| 2026-09-05 | `46585b61` | TMS VALIDATION |
| 2026-09-05 | `75a5fd71` | WEAK VALIDATION |
| 2026-09-05 | `70d1e7f2` | RESOURCE VALIDATION |
| 2026-09-05 | `ec74ba25` | REF VALIDATION |
| 2026-09-05 | `a6f96379` | PORT VALIDATION |
| 2026-09-05 | `827a9bc7` | TMS |
| 2026-09-05 | `91e1fe53` | WEAK + TMS 패키지 재진행 |
| 2026-09-05 | `7ad8c5c2` | SETTING VALIDATION |
| 2026-09-05 | `8f2ae903` | EVENT VALIDATION + QA |
| 2026-09-04 | `905efd7d` | NOTIFY VALIDATION |
| 2026-09-04 | `d7d934a8` | AUDIT VALIDATION |
| 2026-09-04 | `5d4dbc54` | 설비 VALIDATION 수정 |
| 2026-09-04 | `de7b6801` | 설비 관리, API 스펙 변경 및 VALIDATION + AUDIT 수정 |
| 2026-09-03 | `21b9978f` | 설비군 관리 VALIDATION + AUDIT 수정 |
| 2026-09-03 | `d0ca7d81` | 멀티 로그인 프로퍼티 수정 |
| 2026-09-03 | `b63aa54c` | 상위시스템 (대메뉴) VALIDATION 수정 |
| 2026-09-03 | `fc145164` | 취약점 관리(대메뉴) VALIDATION + AUDIT 수정 |
| 2026-09-03 | `e07a1cd0` | 취약점 관리(대메뉴) VALIDATION + AUDIT 수정 |
| 2026-09-03 | `0b11f966` | 취약점 템플릿 VALIDATION + AUDIT |
| 2026-09-03 | `b66389eb` | 취약점 템플릿 VALIDATION + AUDIT |
| 2026-09-02 | `7f7720cc` | 취약점 템플릿 감사 수정 |
| 2026-09-02 | `ef6e4f14` | 취약점 템플릿 추가, 수정 검증 |
| 2026-09-02 | `cd0c33dc` | MD 정리 |
| 2026-09-02 | `d64e33bb` | new-ui 작업은 재게 |
| 2026-09-02 | `504f11f9` | CC 인증 용 으로 new-ui 가비지를 삭제 하고 feature/new-ui에서 작업을 이어서한다. MIGRATION 때문에 병합함 |
| 2026-09-02 | `b416fd67` | CC 인증 용 으로 new-ui 가비지를 삭제 하고 feature/new-ui에서 작업을 이어서한다. MIGRATION 때문에 병합함 |
| 2026-09-02 | `98770e8a` | 테스트를 고친다. NXDASH의 TOP10 모달 오류를 고친다. -> 버전업으로 인한 오픈서치 조회 오류 |
| 2026-09-02 | `2683bc92` | 이벤트 검색 초기 |
| 2026-09-01 | `29806397` | ui 단어 제거 MIGRATION.md 참조 |
| 2026-08-31 | `292f0297` | ui 단어 제거 + attribute -> ref |
| 2026-08-31 | `7303c2fc` | AI 파싱규칙 재시작 복구 WEBMANAGER->RESTAPISERVER |
| 2026-08-31 | `275754be` | 카프카 설정 수정 |
| 2026-08-31 | `002929c6` | 모니터링 수정 |
| 2026-08-31 | `8d6a9f9a` | AI 이상탐지 플래그에 MAIN 이랑 고정형 대시보드 로직도 추가 |
| 2026-08-31 | `4589146a` | 다운로드 컬럼 수정 |
| 2026-08-28 | `8236c0ac` | QA 방화벽 다운로드 |
| 2026-08-28 | `0fa4cfdf` | QA 사용자 정보(이름) 수정 후 우측 상단 사용자 정보 반영 안 됨 UserIp 생성자 |
| 2026-08-28 | `ca5c9dec` | QA NXDASH 저장안됨 JACKSON 2 -> JACKSON 3 |
| 2026-08-28 | `039cfdbc` | QA 49 사용자 관리 페이지에서 우측 상단 사용자 정보 클릭하면 사용자 관리 페이지가 깨집니다. |
| 2026-08-27 | `3171e156` | 취약점 점검 설비 쿼리 수정 |
| 2026-08-27 | `e44f56df` | QA |
| 2026-08-21 | `a786194e` | 이상탐지 필터 수정 |
| 2026-08-21 | `5a8670d8` | 허용안한 IP로 사이트 접근시 404로 |
| 2026-08-20 | `39838413` | 알람, 보고서 설정, 잡 수정 |
| 2026-08-20 | `a315dbcd` | 알람, 취약점 점검 대상 설비 조회 쿼리 수정 |
| 2026-08-20 | `e60c713a` | 알람, 다운로드 수정 |
| 2026-08-19 | `596b53da` | 대시보드 권한, 맵 수정 및 정리 cc-mode가 false 이면 자동로그아웃기능자체를 끈다. |
| 2026-08-18 | `036d7bdc` | 대시보드 라이트모드 수정 |
| 2026-08-18 | `1c09d51b` | CCMODE가 FALSE 이면 자동 로그아웃에서 대시보드 제외함 + cc-mode 프로퍼티 추가 |
| 2026-08-13 | `157e9c88` | css + 다국어 |
| 2026-08-13 | `e5569aa7` | 리포트 css 분리 |
| 2026-08-13 | `0dea624e` | 블랙리스트 validation |
| 2026-08-13 | `63d36cb4` | 모니터링 빼고 스타일 수정 + 프로세스 관련 로직 수정 |
| 2026-08-12 | `130be981` | 콤보박스와 잡수정 |
| 2026-08-11 | `5467bc0c` | 알람 버튼 순서 |
| 2026-08-11 | `5ca4a6f7` | 알람에 성공 실패 추가 |
| 2026-08-11 | `1e7b162a` | rm garbage |
| 2026-08-11 | `8ae0f49a` | 감사 이벤트 필터 설정 |
| 2026-08-11 | `ba1312f0` | 감사 이벤트 필터 설정 |
| 2026-08-11 | `2e662a61` | 언어 테스트 |
| 2026-08-11 | `27a25538` | 언어는 시스템이 기준 |
| 2026-08-11 | `35754565` | 다국어 + 알람 |
| 2026-08-11 | `b431b98d` | 환경 설정 퍼블리싱 |
| 2026-08-10 | `7d2a1352` | 경로 수정 가비지 제거 |
| 2026-08-10 | `8e00280b` | 로그인 실패 조건에 따른 알람 전송 url 변경 |
| 2026-08-10 | `b38ccbcf` | 1) RestTemplate 제거 -> 외부 서버간 통신 Client 공통화 + SSL 설정 주입 2) 보고서 생성 |
| 2026-08-06 | `6099031f` | 보고서 통합 |
| 2026-08-06 | `d8e8186f` | 프로세스 종료, 시작 감사 작성 |
| 2026-08-06 | `d8156eda` | 동기화 |

#### rest-api-server-v3 (48 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-10-08 | `a502cf7` | 메일 서버 설정이 없을 때 무결성 점검에서 오류 전파로인한 실패 |
| 2026-10-08 | `15bc045` | AI 파싱규칙 환경변수 하드코딩 제거 |
| 2026-10-01 | `f8df79c` | 인증/인가 감사 추가 및 수정 |
| 2026-10-01 | `8df24a4` | 감사 추가 |
| 2026-09-30 | `d0fbb48` | 감사 추가 |
| 2026-09-28 | `0d5f7b5` | 시스템 자원(카프카, 오픈서치) 감사 |
| 2026-09-28 | `8937baf` | IDE 오류 |
| 2026-09-28 | `42ea952` | 감사 수정 |
| 2026-09-28 | `14f7f58` | CC 인증 |
| 2026-09-22 | `4b0de1b` | 시작시 무결성 검사 |
| 2026-09-22 | `77f3b6e` | 설정 감사 |
| 2026-09-22 | `52ef522` | MAP 감사 |
| 2026-09-22 | `02f7710` | 프로세스 감사 수정 |
| 2026-09-22 | `ceff8e7` | 유저 IP, 유저 감사 수정 |
| 2026-09-18 | `3597af5` | SSL 버전, 지원 추가 |
| 2026-09-18 | `381dda3` | SSL 버전, 지원 추가 |
| 2026-09-18 | `4324b3d` | QA |
| 2026-09-18 | `791b7a5` | 감사 용량 90퍼센트 도달 알림 -> 알림 + 감사 |
| 2026-09-18 | `92bf31e` | 감사 용량 90퍼센트 도달 알림 -> 알림 + 감사 |
| 2026-09-18 | `be47c50` | 인증부분 수정 및 감사 추가 |
| 2026-09-14 | `2d913f1` | 허용하지않은 IP의 접근 |
| 2026-09-10 | `4a3eb24` | ProcMgr이 init 될때 호출하는 무결성 점검 실행 API |
| 2026-09-09 | `af05ef2` | 감사 수정 |
| 2026-09-08 | `af7e384` | 감사 수정 |
| 2026-09-08 | `1c2e55a` | 감사 수정 |
| 2026-09-07 | `8f30b88` | 감사 수정 |
| 2026-09-07 | `f842d6a` | 감사 수정 |
| 2026-09-07 | `324f4f1` | 감사 수정 |
| 2026-09-06 | `ec50dba` | 점검요청확인 요청 감사 누락 |
| 2026-09-05 | `eb14843` | 감사 수정 |
| 2026-09-04 | `260d10b` | 감사 수정 |
| 2026-09-03 | `b3eeec5` | 감사 수정 + 취약점 점검 중지 감사 추가 |
| 2026-09-03 | `e57799c` | 감사 수정 + 취약점 점검 중지 감사 추가 |
| 2026-09-01 | `689db09` | 리팩토링 |
| 2026-08-31 | `5b1fcee` | AI 파싱규칙 재시작 복구 WEBMANAGER->RESTAPISERVER |
| 2026-08-27 | `269ebc1` | QA |
| 2026-08-20 | `e3020ef` | 알림 |
| 2026-08-20 | `beb8b05` | 알림 개선 |
| 2026-08-13 | `0819306` | rm garbage |
| 2026-08-11 | `22b7e01` | 알람에 성공 실패 추가 |
| 2026-08-11 | `c424c24` | 감사 필터 |
| 2026-08-11 | `f037a95` | AI 관련 로그 수정 |
| 2026-08-11 | `51231a3` | 다국어 + 알람 |
| 2026-08-11 | `e24384e` | 언어는 tbl_system이 기준 |
| 2026-08-10 | `cd5219b` | 평면화 restapi.engine -> domain Engine -> ControllerNameEg UI -> ControllerNameUi Eg, Ui는 서비스, 모델, mapper 레이어를 공유함 |
| 2026-08-10 | `cb13bd5` | SSL 추가 |
| 2026-08-06 | `5901c38` | 프로세스 시작, 종료 감사 추가 |
| 2026-08-06 | `edb7a95` | 동기화 |

#### report-manager (57 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-11-04 | `ea87861` | 미커밋 보고서 템플릿 커밋하는건 관리이고 패키지에는 최신본이 포함되어있음 |
| 2026-10-02 | `a1b17e4` | TLS CIPHERS 추가 |
| 2026-10-02 | `f59c84c` | TLS CIPHERS 추가 |
| 2026-10-02 | `bb5537c` | TLS 1.2,1.3 프로퍼티 추가, 운영 정보 추가 |
| 2026-09-29 | `21fbdc1` | 산출물 커밋 |
| 2026-09-29 | `4180b4b` | 취약 여부 수정 |
| 2026-09-29 | `d961903` | 락, 이력 정리 추가 |
| 2026-09-29 | `0ffb6b6` | 락, 이력 정리 추가 |
| 2026-09-21 | `5a61984` | 수정 |
| 2026-09-21 | `f2e26ad` | 수정 |
| 2026-09-21 | `9a79122` | 수정 |
| 2026-09-21 | `b9aa553` | 수정 |
| 2026-09-21 | `2fb2b60` | 수정 |
| 2026-09-20 | `1b7c776` | 수정 |
| 2026-09-20 | `a17b1b6` | KRS 제외 진행 |
| 2026-09-17 | `e9a8cb7` | 수정 |
| 2026-09-17 | `3d47073` | 1차 개발 완료 단위테스트 전 |
| 2026-09-17 | `030ceaf` | 가비지 제거 |
| 2026-09-16 | `5b30c32` | 문제 대상 KRS17~23 제외 진행 |
| 2026-09-16 | `de35408` | 오케스트레이션 레이어 추가 (보고서 3/4진행) |
| 2026-09-15 | `74e0237` | 플래그 삭제 |
| 2026-09-15 | `8dff07c` | 실행시간 측정, 수정 |
| 2026-09-10 | `0df4be2` | 별칭화 |
| 2026-08-31 | `ab67ca9` | 수정 |
| 2026-08-31 | `15232c1` | 수정 |
| 2026-08-20 | `231a616` | 보고서 보존 연한 |
| 2026-08-20 | `4a134d7` | 수정 |
| 2026-08-12 | `b1a15e0` | 수정 |
| 2026-08-11 | `300ef56` | 취약점 점검 설비별 보고서 생성시 알림 |
| 2026-08-11 | `be5ff58` | 알람에 성공 실패 추가 |
| 2026-08-11 | `0f92985` | 요약 보고서 |
| 2026-08-11 | `0285f55` | 언어는 tbl_system 테이블이 기준 |
| 2026-08-09 | `1f31587` | 요약보고서 2 |
| 2026-08-08 | `110e6bf` | 요약보고서 1 |
| 2026-07-24 | `138c8bc` | 리포트 커버 경로 프로퍼티로 받음 |
| 2026-07-23 | `3caab93` | 취약점 점검 보고서 수정 |
| 2026-07-07 | `f1ec01b` | 플래그 |
| 2026-07-02 | `adfd04e` | 가비지 |
| 2026-06-25 | `d11b7b2` | 알람 언어 수정 |
| 2026-06-25 | `f2a9599` | 보고서 수정 알림 추가 |
| 2026-06-16 | `2ee9c7d` | 점검시간 타입 변경 |
| 2026-06-16 | `9f155a3` | 점검시간 |
| 2026-06-16 | `fdd1d5c` | 점검 날짜 + 설비 이름 버그 |
| 2026-06-16 | `87287f0` | 점검 날짜 짤리는거 |
| 2026-06-16 | `129d54e` | tbl_ctrl_status |
| 2026-05-29 | `d6813d7` | 오타 |
| 2026-05-28 | `934a287` | CORS |
| 2026-05-27 | `742f963` | 동적 스케줄링 API 호출해서 캐시, TASK 클리어 |
| 2026-05-27 | `084f31f` | 보고서 소스 정리 |
| 2026-05-27 | `2b0c2fc` | 보고서 감사 |
| 2026-05-26 | `7cf2435` | DB 암호화 |
| 2026-05-26 | `11c34e0` | README 업데이트 |
| 2026-05-26 | `e448a85` | 보고서 영문 |
| 2026-05-26 | `c686936` | 보고서 영문 및 스케줄러 |
| 2026-05-25 | `8fd2a42` | 종합보고서 한글판 |
| 2026-05-22 | `1ae85cc` | 윈도우 통계 4개 |
| 2026-05-22 | `5eb82e7` | 보고서 프로젝트 커밋 |

#### 97. tester (16 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-10-14 | `a55cd32` | syslog tls |
| 2026-10-07 | `823198d` | new |
| 2026-09-14 | `ee035ce` | fix |
| 2026-09-14 | `f684382` | l2 |
| 2026-09-14 | `f0745bc` | rm test |
| 2026-09-14 | `e2f3ba6` | fix |
| 2026-09-13 | `504fb77` | refactor |
| 2026-08-27 | `f2bd4ac` | 원복 tls는 분리 |
| 2026-08-27 | `3486ccb` | syslogTlsRecv 테스트 |
| 2026-08-03 | `3c8f317` | pcap |
| 2026-03-27 | `471099d` | 매핑장비 20개 |
| 2026-01-30 | `25920bc` | 스크립트 수정 |
| 2026-01-29 | `ae3bbf2` | 파싱 |
| 2026-01-28 | `18ca2c8` | 테스트 데이터 셋 |
| 2026-01-28 | `f558865` | 파싱 규칙 |
| 2026-01-14 | `10d646d` | [move] tester to syslog-generator |

#### agentmgr (1 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-08-25 | `8c3a4a9` | ProcInfo 생성자 제거 null 처리 + 객체참조 ==  => 값비교 |

#### windows-agent-vs (1 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-08-28 | `d99fad9` | 버전V6 6.0.0.26082401 |

#### windows-vulnerability-manager (1 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-08-27 | `2de1814` | 감사, cast 에러 수정 |

#### wmi-agent (1 건)

| 날짜 | 해시 | 제목 |
|---|---|---|
| 2026-08-28 | `ee6d042` | V6 - python3.14 |
