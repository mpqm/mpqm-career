# 경력과 지원 자료

프로젝트별 상세 근거를 바탕으로 실제 지원 문서를 구성하는 작업본이다. 이전 대시보드·근거 지도·경력기술서·지원 전략·이력서·자기소개서·면접 자료와 검수 기록의 상세 본문을 아래에 모았다.

## 바로가기

- [경력 대시보드](#dashboard) · [경력 근거 지도](#evidence-map) · [경력기술서](#career) · [이력서](#resume)
- [자기소개서와 STAR 사례](#star) · [포트폴리오 구성](#portfolio) · [면접 질문과 답변](#interview) · [지원 직무와 공고 대응](#strategy)
- [근거 깊이 점검](#depth-review) · [배포·검수·저작 근거](#evidence-review)

## 현행 수치와 역할 기준

| 항목 | 현재 기준 |
|---|---|
| KSTV6 | 분리 저장소 23개 기준 개인 262건(비병합 243건). 웹 143/134, API 56/48, 보고서 58/57, 그 외 5/4. 과거 통합 WebMgr 372건과 합산하지 않는다. |
| 성능시험·테스터 | `97. tester` 개인 16건. 약 10만 건/초는 Kafka–Fluent Bit–OpenSearch 시험의 전 구간 값이다. 20만 건/초 입력에서 중간·색인 약 14.7~14.8만 건/초를 관찰했다. |
| KSTV5 | 보고서 서비스 및 관제 개선, 사용자 확인을 받은 점검 스크립트·시험·패치 문서. 제품 전체 개발 또는 운영 승인으로 확대하지 않는다. |
| SCG | 10개 저장소 개인 76건(비병합 71건). 사업 기간은 문서상 2025-10-02~12-31이고 2026-11 알람 기준 표시는 후속 작업이다. |
| ONEWAY | 레거시 분석과 64장 기술 세미나 제작·발표. Git 개인 변경 0건. FTP 확인과 OPC UA 오류 기록을 분리한다. |
| IDPP | 초기 설계 문서 작성과 k3s 인프라 구현. 시험 VM에서 설치·장애를 검증했다. 10만 Tag/초와 20대는 설계 목표·계획이다. |

947건은 이전 조사 당시의 기록이다. 커밋 수는 변경을 찾아가기 위한 정보다. 공개용 문장은 개인 역할·시험 조건·검수 상태를 확인한 뒤 선택한다.

<a id="portfolio"></a>

## 포트폴리오 구성

공고에 맞는 프로젝트를 고르고 각 프로젝트의 제작 원고에서 문제, 선택 근거, 직접 구현·수행, 검증과 남은 조건을 고른다. 첫 페이지에는 역할과 기간을, 후속 페이지에는 구성도와 결정 근거를 배치할 수 있다.

| 넣을 사례 | 보여 줄 장면 |
|---|---|
| [CXL](../fornet/project-cxl.md#materials) | 운영 콘솔 → API/메시징 → Host 제어 → Transaction 추적 |
| [SVT](../fornet/project-svt.md#materials) | PMU·시나리오 설정 → 바이너리 Frame 해석 → 검사 이력·보고서 |
| [KSTV5](../fornet/project-kstv5.md#materials) | 보고서 성능 측정 오류 교정 → 변경·재검증 → 폐쇄망 설치 절차 |
| [KSTV6](../fornet/project-kstv6.md#materials) | 인증·감사, 검색·보고서의 연결. 부하 도구와 처리량 실험은 별도 사례로 구성 |
| [ONEWAY](../fornet/project-oneway.md#materials) | 레거시 모듈·TX/RX 흐름 분석을 세미나와 시험 절차로 전달 |
| [IDPP](../fornet/project-idpp.md#materials) | 폐쇄망 부트스트랩·GitOps → 저장소 선택 → VM 장애 사슬과 재검증 |
| [SCG](../fornet/project-scg.md#materials) | NiFi 통합, 통계 키 정합성과 재수집 오류 원인 분리 |

웹·슬라이드 제작 참고 자료는 [MPQM](../../README.md#mpqm)에 있다.

<a id="dashboard"></a>

## 경력 대시보드

### 경력 대시보드

> 평소에는 이 문서에서 전체 업무를 확인하고, 면접 준비나 사실 검증이 필요할 때 연결된 상세 근거를 연다. 수치는 성과 자랑보다 업무 범위의 추적 근거로 사용한다.

#### 1. 한눈에 보는 경력

| 구분 | 현재 확인된 내용 |
|---|---|
| 활동 확인 기간 | 2025-04 ~ 2026-11 (Git 변경 확인 기간; 프로젝트별 공백·활동 시기 별도 확인) |
| 주력 방향 | Backend·Platform, Data·Search·Performance, 산업 Protocol·보안 제품 |
| 주요 프로젝트 | CXL, SVT, KSTV5, KSTV6, Data Pipeline, SCG MDMS·GASDOT, ONEWAY, IDPP k3s |
| 확인 가능한 개인 Code Commit | 과거 조사 스냅샷 947건. KSTV6 통합/분리 저장소 중복 가능성 때문에 2026-11-21 후속 커밋을 단순 가산하지 않음 — 기능·변경 이력의 추적 범위 |
| 강한 경험 | Full-stack 관리 시스템, 산업 Protocol, OpenSearch·Kafka 성능, k3s·GitOps 운영 자동화, Legacy 분석 |
| 근거 원칙 | Code·Commit·시험 결과 우선, 개인 기여와 프로젝트 기능 구분, 미확인 수치는 제외 |

#### 2. 프로젝트 타임라인

| 기간 | 프로젝트 | 핵심 역할·경험 | 상세 근거 |
|---|---|---|---|
| 2025-04~07 | CXL ENABLER Orchestrator V2 | Login부터 Host·Memory·Script·Transaction·Dashboard까지 Full-stack 기능 개발 | [CXL](../fornet/project-cxl.md#evidence) |
| 2025-06~07 | SVT Manager | IEEE C37.118 Packet 처리, 시나리오·PMU·진단·Report를 포함한 검증 도구 개발 | [SVT](../fornet/project-svt.md#evidence) |
| 2025-11~2026-01 주요 변경·2026-11 후속 UI | SCG MDMS·GASDOT | NiFi 통합, Event 통계 정합성, 예방 Event 조건, Collector 재수집, 대시보드 알람 기준 표시 | [기존 근거](../fornet/project-scg.md#evidence) · [추가 조사](../fornet/project-scg.md#follow-up) |
| 2026-01~11(커밋 관측 기간) | KSTV6 | WebMgr·Engine API, CC 대비 인증·감사, OpenSearch, Report Manager, 운영 메뉴·SQL | [과거 통합 근거](../fornet/project-kstv6.md#evidence) · [분리 저장소 추가 조사](../fornet/project-kstv6.md#follow-up) |
| 2026-09~10 | KSTV5 | 보고서 서비스 이식·생성/이력 통합, SQL·실행 안정성, 취약점 스크립트 수정, 성능 측정·패치/설치 문서 | [KSTV5](../fornet/project-kstv5.md#evidence) |
| 2025-09 문서 작성·2026-01~10 테스터 커밋(실투입 기간 확인 필요) | Data Pipeline | 멀티스레드·멀티프로세스 부하 도구 개발, Kafka–Fluent Bit–OpenSearch 성능·장기 시험과 병목 분석 | [Data Pipeline·Tester](../fornet/project-kstv6.md#pipeline) |
| 자료 2025-08, 발표일 확인 필요 | ONEWAY | 레거시 모듈·TX/RX 흐름 분석, 설치/시험 절차 정리, 64장 기술 세미나 제작·발표 | [ONEWAY](../fornet/project-oneway.md#evidence) |
| 2025-09 초기 설계·2026-10~11 k3s Git | IDPP | UI·ERD·시험 계획 문서 작성; 폐쇄망 k3s 설치·GitOps·스토리지·시험 VM 검증. 응용 기능 개발 제외 | [상세 근거](../fornet/project-idpp.md#evidence) · [제작 원고](../fornet/project-idpp.md#materials) |

#### 3. 내가 한 주요 작업

| 프로젝트 | 작업 | 해결하거나 확인한 문제 | 결과·근거 | 기술·영역 |
|---|---|---|---|---|
| CXL | Host·Group·Memory 관리 기능 | 여러 관리 대상과 CXL Memory 제어 흐름 구성 | 본인 Commit 211건에서 기능 변경 추적 | Java, Spring, React, CXL |
| CXL | Script·Application 생명주기와 Transaction 추적 | 실행 상태와 원격 작업 흐름 관리 | 기능별 Commit·현재 Code 근거 확보 | Backend, Messaging, Audit |
| SVT | IEEE C37.118-2005/2011 Packet 처리 | 산업 Protocol Frame 생성·분석·진단 | PMU·Scenario·History·Report 근거 등급 A | C#, WinForms, Protocol |
| SVT | UI 기술 전환과 분석 화면 구성 | Prototype을 실제 배포 환경에 맞게 재구성 | 본인 Commit 191건, SQLite·RDLC 포함 | WinForms, SQLite, RDLC |
| KSTV6 | 관리 기능·Engine API·공통 UI | 레거시 관리 기능을 Web 기반으로 재구성 | 과거 통합 372건. 현재 웹 134·API 48건 비병합 | Java, Spring, Web |
| KSTV6 | OpenSearch Log·통계·Dashboard | 검색·통계와 실시간 운영 화면 구성 | Query·Dashboard 관련 Code·Commit 확보 | OpenSearch, Dashboard |
| KSTV6 | 독립 Report Manager | 다수 조회와 보고서 생성을 별도 서비스로 분리 | 독립 조회 12개 병렬화; 2026-11 재조사 개인 비병합 57건(기존 24건은 7월 당시 기록) | Java, OpenSearch, Report |
| KSTV6 | 동적 Scheduler | 고정 스케줄 대신 설정 기반 작업 실행 | 동적 Scheduler Job 5개 | Scheduling, DB Config |
| KSTV5 | 취약점 점검·DB 반영 | Windows·PC 보안 점검 항목의 BAT·Python 수정 | 사용자 직접 작업 확인 BAT 19개, DB 반영 Python 18개·약 3,553줄(자산 규모) | Security, Batch, Python |
| KSTV5 | 성능 측정·패치 절차 | 측정 오류 교정, 폐쇄망 보고서 서비스 적용·복구 절차 작성 | 검증 환경 KRS API 3회 타임아웃→3회 완주(평균 6.6분), 패치 재검증 22/22 OK | Java, MariaDB, Operations |
| Data Pipeline | 장비별 부하 Generator | 다양한 장비 Data를 반복 생성할 시험 도구 필요 | 공개 표현 기준 약 40종 Generator | Kafka Producer, Test Tool |
| Data Pipeline | 전 구간 처리량 시험 | Kafka–Fluent Bit–OpenSearch 구간별 병목 불명확 | 전 구간 약 10만 건/초 측정 | Kafka, Fluent Bit, OpenSearch |
| Data Pipeline | 장기·초과 부하 시험 | 대량 누적 환경의 조회·색인 한계 확인 | 48시간·1억~60억 누적 구간 Query 측정 | Performance, Benchmark |
| SCG | NiFi Source Table 통합 | 다수 원천 Table의 수집 Flow 통합 | GMTR 9·EMTR 7·EVENT 2개 공식 담당 | NiFi, ETL, SQL |
| SCG | Event 통계 Join Key 개선 | 통계 누락·불일치 가능성 | Join 기준 변경과 정합성 보완 | Java, SQL, Data Quality |
| SCG | 예방 Event·재수집 개선 | 현업 조건 반영과 미수신 Data 복구 | CO 예방 조건 및 CNU 재수집 공식 담당 | Java, API, Operations |
| ONEWAY | 레거시 제품 분석·세미나 | 다중 모듈의 설정·전송·감시 흐름을 팀에 설명 | 직접 만든 64장 PPTX, 15개 저장소/938개 전체 이력 조사·본인 개발 0건; OPC UA 전송 오류 명시 | C#/.NET 코드 분석, FTP, OPC, 기술 공유 |
| IDPP | 폐쇄망 k3s 배포 인프라 | 다중 노드 설치·배포 순서와 상태 저장 서비스 장애 연쇄 | 개인 Git 397건; 시험 VM 설치/재설치·Kafka 디스크 고갈 분석. 초당 10만 Tag는 목표 | k3s, Bash, Ansible, GitOps, Cilium, Local PV, Longhorn |

#### 4. 가장 강한 성과·정량 근거

| 우선순위 | 근거 | 안전한 표현 |
|---:|---|---|
| 1 | Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초 | 시험 조건과 측정 구간을 함께 설명 |
| 2 | 20만 건/초 입력 시 중간·색인 약 14.7~14.8만 건/초 | 입력량과 실제 처리량을 구분 |
| 3 | 48시간·1억~60억 누적 구간 Query 측정 | 정상 처리 완료가 아니라 측정 범위로 표현 |
| 4 | KST Report Manager 독립 조회 12개 병렬화·동적 Job 5개 | 구현 구조와 운영 목적 중심으로 설명 |
| 5 | SCG NiFi Source Table 18개 통합 범위 | GMTR 9·EMTR 7·EVENT 2개로 구체화 |
| 6 | KSTV5 취약점 BAT 19개·Python 18개 | 점검·DB 반영 자동화 범위로 표현 |

#### 5. 기술별 경험 지도

| 기술 축 | 대표 경험 | 우선 프로젝트 |
|---|---|---|
| Java·Spring Backend | 관리 API, Report Manager, Scheduler, Event 처리 | KSTV6, CXL, SCG |
| Search·Data | 대량 Log 조회, 통계, 병렬 조회, Index 시험 | KSTV6, Data Pipeline |
| Messaging·Streaming | Kafka Pipeline, ActiveMQ·ZeroMQ 기반 원격 흐름 | Data Pipeline, CXL, KSTV6 |
| 산업 Protocol | IEEE C37.118, OPC, 장비별 Data Generator | SVT, ONEWAY, Data Pipeline |
| Data Integration | NiFi Flow, SQL Join 정합성, 재수집 | SCG |
| Full-stack | 관리 Console, Dashboard, 실시간 상태 | CXL, KSTV6 |
| Kubernetes·GitOps | 폐쇄망 k3s 설치, Argo CD App of Apps, Cilium, Local PV·Longhorn, 시험 VM 장애 분석 | IDPP |
| 보안·운영 | 취약점 점검, Process·Alarm·Report 운영 | KSTV5/6 |
| 분석·문서화 | Source 구조 분석, 시험 설계, 기술 공유 | ONEWAY, 전 프로젝트 |

#### 6. 근거 등급과 표현 경계

| 등급 | 기준 | 사용 가능한 표현 |
|---|---|---|
| A | 본인 Commit + Patch·현재 Code + Test 또는 작성자 명시 산출물 | 개발·구현·시험·분석 |
| B | 본인 Commit + Patch 또는 공식 역할 문서 | 수정·보완·담당 |
| C | Ticket·Team 문서·설치 자산, 개인 Code 근거 없음 | 분석·구축·검증·문서화 |
| 보류 | 계획·빈 결과표·미커밋 Code만 존재 | 정량 성과와 확정 표현에서 제외 |

- CXL 핵심 Domain, SVT 주요 기능, KSTV6 주요 기능, Data Pipeline 시험·Generator, SCG 공식 담당 4영역은 A 근거가 있다.
- SCG Dashboard 전체 주도, ONEWAY Core 개발, 미완료 Rollover·Transform Scenario는 주장하지 않는다.
- 상세 판정과 대표 근거는 [경력 마스터 근거 지도](#evidence-map)에서 확인한다.

#### 7. 아직 채워야 할 정보

- [ ] 정확한 입사일·부서·직급
- [ ] 프로젝트별 수행 기간과 팀 규모
- [ ] 운영 반영·납품·검수 여부
- [ ] 성능시험 Hardware 사양과 10만 건/초 유지 시간
- [ ] 프로젝트별 사용자·고객 피드백
- [ ] 학력·자격증·교육 이력
- [ ] 외부 공개 가능한 Portfolio 범위

#### 8. 목적별 바로가기

| 목적 | 문서 |
|---|---|
| 전체 근거와 표현 경계 확인 | [경력 마스터 근거 지도](#evidence-map) |
| 프로젝트 상세 검증 | [CXL](../fornet/project-cxl.md#evidence) · [SVT](../fornet/project-svt.md#evidence) · [KST](../fornet/project-kstv6.md#evidence) · [Data Pipeline](../fornet/project-kstv6.md#pipeline) · [ONEWAY](../fornet/project-oneway.md#evidence) · [SCG](../fornet/project-scg.md#evidence) |
| 경력기술서 작성 | [경력기술서 마스터본](#career) |
| 지원 직무 선택 | [주력 포지션·지원 전략](#strategy) |
| 이력서 제출본 작성 | [채용용 이력서 원본](#resume) |
| 자기소개서 사례 선택 | [STAR 사례집](#star) |
| 면접 준비 | [면접 Q&A](#interview) |

#### 9. 갱신 방법

새 업무가 생기면 먼저 프로젝트 상세 근거에 Source와 함께 추가하고, 이 대시보드의 `프로젝트 타임라인` 또는 `내가 한 주요 작업`에 한 줄만 추가한다. 같은 설명을 여러 제출 문서에 직접 복제하지 않고 상세 근거를 연결한다.


<a id="career"></a>

## 경력기술서

### 07. 경력기술서 마스터본

> 용도: 지원 회사별 4~8페이지로 줄이기 전의 제출용 경력기술서 원본. 미확인 개인정보·조직 정보·운영 효과는 `[확인 필요]`로 표시. 상세 근거는 각 프로젝트의 01~06 파일.

#### 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 이름·회사·직급 | 박종성 · 포네트㈜ · 주임 연구원 |
| 재직 기간 | `[입사일 확인 필요]` ~ 현재 (확인 가능한 프로젝트 활동 2025-04 ~ 2026-07) |
| 희망 직무 | Java·Spring 기반 Backend/Platform 개발 |
| 보조 전문성 | OpenSearch·Kafka Data Pipeline, 보안·산업 Domain, Full-stack 관리 Console |
| 연락처·이메일·GitHub | `[전화번호]` · `[개인 이메일]` · `[공개 주소]` |

#### 2. 경력 요약

산업·보안 제품의 관리 Platform을 Java·Spring 기반 REST API, DB Query, Message Queue, WebSocket·SSE, Web UI까지 수직으로 개발했다. CXL Memory 관리 Console, IEEE C37.118 검증 도구, 보안관제 WebMgr·Report Manager, 도시가스 MDMS·GASDOT 유지보수 등 서로 다른 Domain에서 신규 기능과 Legacy 전환을 수행했다.

Python 기반 SYSLOG 부하 Generator와 Kafka–Fluent Bit–OpenSearch 시험 환경을 구축해 전 구간 약 10만 건/초 처리 구성을 도출했다. 48시간·최대 60억 건 누적 Query를 측정하고, 약 40억 건 부근의 HTTP 429·Segment 증가·Merge Backlog·Write Block을 분석했다.

이전 조사 당시 CXL 211건·SVT 191건·KSTV5 68건·통합 KSTV6 WebMgr 372건·당시 보고서 24건·당시 Tester 6건·당시 SCG 75건의 합계는 947건이었다. 지원서에는 위 현행 수치와 각 프로젝트의 최신 역할을 사용한다. 커밋 수 자체를 성과로 사용하기보다 기능 소유 범위와 문제 해결 과정을 추적하는 근거로 활용한다.

#### 3. 핵심 역량·기술 Stack

| 구분 | 기술·역량 |
|---|---|
| Language | Java 17·21, Python, C#, JavaScript, SQL |
| Backend·Platform | Spring Boot 3, Spring MVC·Security·AOP·Cache, MyBatis SQL·Mapper, REST API와 Engine·외부 Package 연동, Scheduler·Batch·비동기 작업, `CompletableFuture` 병렬 조회, WebSocket·SSE 실시간 상태 전파, 감사·알림·이력·파일 보존 Lifecycle |
| Data·Search | PostgreSQL, MariaDB, Oracle, SQLite, OpenSearch 원시·정규화 Log·통계·Aggregation, Composite Aggregation·Scroll·검색 조건 |
| Messaging·Streaming | Kafka Producer·Partition·Batch·Compression, Fluent Bit Kafka Consumer·OpenSearch Output, ActiveMQ 원격 제어 Message, ZeroMQ, Apache NiFi Source–Target Flow·Processor State |
| 성능·관측 | Python Multi-process·Multi-thread 부하 생성, Worker별 목표·실제 TPS, Kafka–Fluent Bit–OpenSearch 구간별 처리량, Shard·Refresh·Merge·Translog·Rollover 비교, Prometheus·Grafana·JMX·Process Exporter, Wireshark, 장기 누적 부하·Query 지연 측정 |
| 산업·보안 Domain | 보안관제 Log·SYSLOG Parsing·취약점 점검, CXL Host·Memory·Demotion·Script 제어, IEEE C37.118-2005/2011 Binary Frame, PMU·PDC·Wireshark Packet 검증, 단방향 전송 제품의 FTP·DBMS·OPC 구조 분석·시험 절차 정리, 도시가스 계량기·검침·Event·통계 Data |
| Frontend·Desktop | JavaScript, HTML, CSS, Thymeleaf, Chart, Table·검색·정렬·Pagination·Excel Download, WebSocket Dashboard, C# WinForms·WPF Prototype, ReportViewer·RDLC |
| Infra·Integration·Report | NiFi, Systemd, Shell Script, REST, OPC UA·DA, FTP, JasperReports, PDF, XLSX, DOCX |

#### 4. 프로젝트 경력

##### 4.1 KSTV6 보안관제 WebMgr

| 기간 | 저장소 | 본인 Commit | 역할 |
|---|---|---|---|
| 2026-01 ~ 2026-07 | `rest-api-server` | 372건 | Engine REST API·WebMgr Full-stack 개발, OpenSearch 조회, 취약점·Process·Report·Dashboard |

- **기술**: Java 17, Spring Boot, Spring Security, MyBatis, PostgreSQL, OpenSearch, Kafka, WebSocket, SSE, JavaScript, Thymeleaf
- **배경**: KSTV5 관리 기능을 KSTV6 구조로 이관하며 사용자·권한, 설비, Process, SYSLOG, 원시·정규화 Log, 취약점, 감사·알림, Report, Resource, Dashboard를 REST API와 Web UI로 재구성
- **수행 내용**
  - Engine 진단·CPU·Disk·Memory·Threat·Process API를 WebMgr Resource로 연결
  - 사용자·접속 IP·기관·Network·설비·설비군 관리 API·화면, 공통 Response·검색·정렬·Pagination·Select·Validation Convention 정리
  - OpenSearch 원시·정규화 Log·분석탐지 결과 조회, Log·CASL 통계에 Composite Aggregation, LIKE 검색과 검색 조건·Paging 정합성 보완
  - Excel·CSV Download 공통 기능과 Background Excel 생성 흐름
  - WebSocket·SSE 기반 알림·AI·Dashboard 상태 전파, 알림 처리 경쟁 조건 수정·Thread-safe 상태 관리
  - Resource History 보존기간 Scheduler, 설비 Process 현황을 Engine Service 중심으로 재구성, Audit·Alarm·Process를 Engine 연동 구조로 이동
  - Dashboard Session·Query·Chart 구조 재설계와 병렬 조회 적용
  - PC·SERVER·LINUX 취약점 Template과 설비별 점검 항목 재등록, 356개 항목 규모 통합 Test Plan·Legacy QA
- **대표 성과**: Engine API~Web UI 수직 연결 / OpenSearch 조회 결과를 화면·Excel·Report가 동일 조건으로 재사용하는 구조 / 공통 UI 경로가 178개 Commit에서 반복 수정될 정도로 관리 Console 동작 표준화 / 알림 경쟁 조건·Dashboard Session·비동기 조회 문제를 운영 관점에서 수정, 조회 병렬화로 성능 개선 기반 마련
- **기여도 경계**
  - KST 제품 전체와 Engine Process 전체를 단독 개발한 것은 아니다.
  - AI Model 자체가 아니라 AI Package·SYSLOG Rule·WebMgr 연동을 담당했다.
  - Dashboard 병렬화 전후 시간은 측정 자료가 없어 개선율로 쓰지 않는다.
- **이력서용 문장**
  - Java 17·Spring Boot 기반 보안관제 WebMgr에서 Engine REST API, OpenSearch Log·통계, 취약점·Process·Report·Dashboard 기능 개발
  - OpenSearch Composite Aggregation과 Background Excel·Report를 적용하고 WebSocket Dashboard의 Session·Query·Chart 구조 재설계
  - 2026년 1~7월 `rest-api-server`에 본인 Commit 372건으로 신규 기능·Legacy 이관·QA 수행

##### 4.2 KSTV6 Report Manager

| 기간 | 저장소 | 본인 Commit | 역할 |
|---|---|---|---|
| 2026-05 ~ 2026-11 | `report-manager` | 전체 63건 중 개인 58건, 비병합 57건 | 독립 Report Backend 초기 구축·핵심 기능 개발 |

- **기술**: Java 17, Spring Boot, JasperReports, PostgreSQL, OpenSearch, `CompletableFuture`, Dynamic Scheduling
- **배경**: WebMgr 종합·취약점 Report를 수동 요청과 일간·월간 등 설정 주기로 자동 생성하고, 생성 이력·감사·알림·파일 보존까지 관리할 독립 Service 필요
- **수행 내용**
  - 초기 Commit에서 55개 파일·10,885줄 규모의 독립 Project 구성
  - PostgreSQL·OpenSearch Data 결합 종합 Report, 한글·영문 Jasper Template, 취약점 개별·종합 Report
  - 서로 독립적인 OpenSearch 조회 12개를 `CompletableFuture`로 병렬화
  - DB 설정 기반 Scheduler Job 5종 동적 등록, 설정 변경 시 기존 Task와 비교해 추가·변경·삭제, Thread-safe Cache·Task Registry·Reload API
  - Report 상태 `NEW→START→SUCCESS/FAIL`, 생성 이력·감사 Event·알림 연동, 보존기간별 Report File 삭제
  - DB 접속 정보 암호화와 개발·운영 환경 분리
- **대표 성과**: 저장소 초기 구축부터 생성·Scheduling·운영 Lifecycle까지 높은 소유 범위 / 설정 변경 시 Service 재기동에 의존하지 않는 동적 Scheduler / 단순 PDF 생성을 이력·감사·알림·보존기간이 있는 운영 기능으로 확장
- **기여도 경계**
  - JasperReports·OpenSearch 제품 자체를 개발한 것은 아니다.
  - 병렬화 전후 Report 생성 시간은 확보되지 않아 개선율로 쓰지 않는다.
- **이력서용 문장**
  - KSTV6 독립 Report Manager를 초기 구축하고 한·영 종합·취약점 Report, 이력·감사·알림·보존 Lifecycle 개발
  - 12개 OpenSearch 조회를 `CompletableFuture`로 병렬화하고 DB 설정 기반 5개 Scheduler Job의 동적 등록·Reload 구현

##### 4.3 AI 관제 Data Pipeline·부하 Generator

| 기간 | 저장소·산출물 | 본인 Commit | 역할 |
|---|---|---|---|
| 2025-09 시험 문서, 2026-01~10 테스터 Git | `97. tester`, 성능 Test Report·설치 지침·Graph | 개인 16건(비병합 16건) | 부하 Generator 개발, Pipeline 성능시험·Tuning, 장애 분석, 문서 작성 |

- **기술**: Python, Kafka, Fluent Bit, OpenSearch, Prometheus, Grafana, JMX Exporter
- **배경**: RDBMS에 5분 단위 통계 Table을 생성하던 구조 대신 Kafka–Fluent Bit–OpenSearch Pipeline이 대량 SYSLOG와 실시간 집계를 처리할 수 있는지 검증
- **부하 도구**
  - 장비별 SYSLOG Generator Module: 최신 커밋 기준 39개+Dispatcher, 현재 작업 Tree 기준 40개 → 외부 표현은 “약 40종”
  - EventData 원문과 41개 Field NormalizedData를 1:1 비율로 생성, Process·Thread·Batch·Quota 실행 Mode
  - Worker별 목표·전송·실제 TPS·경과 시간 집계, Kafka Producer LZ4·Batch·Linger·Queue 설정
  - Named Instance·PID·SIGINT·SIGTERM·Process Tree 종료 Script
- **시험·Tuning**: 초기 10만 건/초 입력에서 Kafka는 목표를 처리했지만 Fluent Bit·OpenSearch는 약 8만 건/초에 머묾

| 단계 | Kafka Partition | Fluent Bit | OpenSearch 처리량 |
|---|---:|---|---:|
| 초기 | 12 | Process 4 × Worker 6 | 약 8만/s |
| 개선 | 20 | Process 6 × Worker 4 | 약 9.1만/s |
| 개선 | 6 | Process 6 × Worker 1 | 약 9.7만/s |
| 개선 | 7 | Process 7 × Worker 1 | 약 9.5만/s |
| 최종 | 8 | Process 8 × Worker 1 | 약 10만/s |

  - Fluent Bit Worker 수보다 Process 수 증가가 유효, Kafka Partition과 Fluent Bit Process를 1:1에 가깝게 조정
  - Shard 1·3에서 약 10만/s, Shard 5에서 약 9.5만/s / 12만/s 입력에서 OpenSearch 약 10.9만/s / 20만/s 입력에서 Fluent Bit·OpenSearch 약 14.7~14.8만/s 상한
- **장기 시험·장애 분석**
  - 48시간 연속 부하, 1억~60억 누적 구간에서 공격 IP·Windows Security·Firewall·원시·정규화 Log Query 측정
  - 약 40억 건 부근 Indexing Queue 포화와 HTTP 429, Hardware 사용률만으로 설명되지 않는 Segment 증가·Merge Backlog·Write Block 분석
  - 단일 Index·일별 Index, Refresh 1초·5초, Shard, Merge, Rollover 비교
- **대표 성과**: Generator 입력값이 아닌 전 구간 기준 처리 구성과 20만 건/초 입력 시 한계를 함께 기록해 성능 상한을 객관적으로 제시 / 장애를 CPU 부족이 아닌 Lucene Segment·Merge 구조까지 추적 / 작성자 명시 성능 Report·설치 지침·Graph로 재현 가능한 시험 자산 구축
- **기여도 경계**
  - `acks=0`, 비동기 Translog는 Throughput 우선 시험 설정이며 운영 권장값으로 일반화하지 않는다.
  - `일별+100GB` Rollover와 Transform API는 결과가 비어 있어 완료 성과에서 제외한다.
  - 단일 Node·HDD 환경의 결과를 OpenSearch 제품 전체 성능으로 표현하지 않는다.
- **이력서용 문장**
  - Python 기반 약 40종 보안장비 SYSLOG 부하 Generator와 Kafka–Fluent Bit–OpenSearch 시험 환경 구축
  - Partition·Process·Worker 구조를 반복 조정해 Pipeline 전 구간 약 10만 건/초 처리 구성 도출
  - 48시간·최대 60억 건 누적 Query를 측정하고 약 40억 건 부근 429·Segment·Merge 병목 분석

##### 4.4 CXL ENABLER Orchestrator

| 기간 | 저장소 | 본인 Commit | 역할 |
|---|---|---|---|
| 2025-04 ~ 2025-07 | `cxl-orchestrator-v2` | 211건 | CXL 관리 Console Full-stack 개발 |

- **기술**: Java 21, Spring Boot 3.4, MyBatis, PostgreSQL, ActiveMQ, WebSocket, Thymeleaf, JavaScript
- **배경**: 분산된 CXL Host·Memory 자원을 중앙에서 등록·조회·제어하고 Script 실행 결과와 Memory 상태를 실시간 확인할 관리 Console 필요
- **수행 내용**
  - Login API·Page·공통 Layout, Group·Host CRUD·검색·Paging·Validation, Host가 남은 Group 삭제 방어
  - Host 정보·System Memory·CXL Memory·DAX 장치 조회, 변경 Field만 저장하는 구조로 개선
  - Demotion Enable·Disable 별도 제어, CMM-D·CMM-B·ALL 제품 유형 분리
  - Group·Host 단위 Application Script 실행·중지, Script 변경·실행 요청을 ActiveMQ Control Queue로 전달
  - Transaction 검색·상세·원본 JSON·상태 UI, ActiveMQ 응답을 WebSocket으로 전달
  - CXL/System Memory·Host·Process·알림 Dashboard, 설정·제품 Type·Message·Logging 환경 정리
- **대표 성과**: Login부터 Host·Memory 제어, Script 실행, Transaction 추적, Dashboard까지 하나의 운영 흐름 구축 / 변경 Host Field만 저장하고 Demotion 동작을 분리해 불필요한 제어 요청 방지
- **기여도 경계**
  - CXL Agent·Control Plane·Resource Manager 전체를 단독 개발한 것은 아니다.
  - ActiveMQ Send의 `@TransactionLog` AOP 적용은 현재 Code에서 보류 상태다.
- **이력서용 문장**
  - Java 21·Spring Boot 기반 CXL 관리 Console에서 Group·Host·Memory·Script·Transaction·Dashboard 기능 개발
  - ActiveMQ 원격 제어와 WebSocket 실시간 상태를 연결하고 CMM-D·CMM-B·ALL 제품 Type을 공통 Codebase로 지원

##### 4.5 SVT Synchrophasor Verification Tool

| 기간 | 저장소 | 본인 Commit | 역할 |
|---|---|---|---|
| 2025-06 ~ 2025-07 | `02. svt/mgr` | 191건 | Windows 검증 Manager·Protocol 분석 UI 개발 |

- **기술**: C#, .NET Framework 4.8, WinForms, SQLite, Dapper, EF6, ReportViewer, RDLC
- **배경**: PMU 수신 Synchrophasor Packet을 IEEE C37.118-2005/2011 규격으로 검증하고 PMU·Scenario·이력·실패 Packet·Report를 관리할 Windows 도구 필요
- **수행 내용**
  - WPF·MVVM Prototype 구현 후 제품 요구에 맞춰 WinForms로 전환(WPF 42개 파일·6,528줄 제거 후 재구축)
  - SQLite·Dapper·EF6 기반 PMU·Scenario·History Data 계층, PMU·Scenario 등록·수정·중복 Validation, 점검 실행·검증 이력 조회
  - IEEE C37.118-2005/2011 Header·Configuration·Data Frame 모델, PMU 수와 Phasor·Analog·Digital 설정에 따른 반복 Field 처리
  - 실패 Packet Byte·Binary·Field·규격 설명 시각화, `verifyDepth` 기반 실패 Field 위치 표시
  - Wireshark Sample과 TCP 4712 교차검증, ReportViewer·RDLC Report
  - Singleton Form·Navigation·Loading·Pagination 개선
- **대표 성과**: 국제 규격을 실행 가능한 Frame Model과 운영자 진단 UI로 변환 / PMU 등록→Scenario→검증→이력→실패 분석→Report의 E2E 흐름 완성 / 초기 Framework 선택을 빠르게 수정하고 WinForms로 재구축
- **기여도 경계**
  - IEEE 표준과 PMU Firmware를 개발한 것이 아니다.
  - 별도 SVT 검증 Engine 전체가 아니라 Manager와 실행 연동이 주 범위다.
- **이력서용 문장**
  - IEEE C37.118-2005/2011 기반 PMU 검증 Manager에서 PMU·Scenario·History·Packet 분석·RDLC Report 기능 개발
  - 실패 Packet을 Byte·Binary·Field 단위로 시각화하고 Wireshark Sample과 교차검증

##### 4.6 SCG MDMS·GASDOT

| 기간 | 범위 | 본인 Commit | 역할 |
|---|---|---|---|
| 2025-11 ~ 2026-01 주요 Git 변경, 2026-11 후속 UI | MDMS·GASDOT 개인 변경 10개 저장소, NiFi·Batch·Collector·API·Web | 76건(비병합 71건) | 공식 유지보수 4영역, Dashboard 후속 보완 |

- **기술**: Java, Spring, MyBatis, MariaDB, Oracle, PL/SQL, NiFi, JavaScript
- **공식 담당**: ① GMTR 9개·EMTR 7개·EVENT 2개 Source Table의 NiFi 통합 Flow ② MDMS Event 통계 Join Key 변경 ③ GasDot CO 예방 Event 조건 변경 ④ PLC Collector의 CNU 미수신 Data 재수집
- **수행 내용**
  - `GenerateTableFetch` Maximum Value State를 고려한 과거 Data 재수집, 운영 Flow와 Test Flow를 분리해 Dummy Data 검증
  - 변경 가능한 `COMM_NUM` 대신 고유 계량기 `MTR_NUM`으로 통계 Join, 수정 전·후와 통신번호 변경 Data로 예상 Count 검증
  - 현재 CO 조건에 정확히 1시간 전 동일 장비 값 검사 추가
  - CNU API 일자 범위를 Unix Time으로 변환해 GMTR·Event 재수집, 수집 DB·전처리 DB의 DataSource·Mapper 구조 정리
  - MDMS Dashboard Details·검색·Pagination·Modal·Excel 보완, Oracle Procedure Interface 변경을 API·Web에 반영
  - Excel을 100행 단위로 조회·누적 작성하고 최종 Code 기준 10만 건 초과 방어
- **대표 성과**: Identifier·NiFi State·Time Window로 발생하는 Data 정합성 문제를 재현·수정 / 공식 영역 외 Dashboard API·Web 후속 QA·기능 직접 보완 / 여러 Legacy 저장소를 가로질러 수집부터 화면까지 영향 범위 추적
- **기여도 경계**
  - 통합 Dashboard 전체 신규 개발자가 아니라 공식 유지보수와 후속 보완을 담당했다.
  - CO 조건은 중간 15분 Data 전체가 아닌 현재값과 정확히 1시간 전 값 비교다.
  - Oracle Procedure 전체를 작성한 것은 아니다.
- **이력서용 문장**
  - 서울도시가스 MDMS·GASDOT에서 NiFi 통합 Flow, 통계 Join Key, CO 예방 Event, CNU 재수집 유지보수
  - `COMM_NUM`을 `MTR_NUM`으로 변경해 통계 정합성을 개선하고 Dashboard Details·Excel·Procedure Mapping 보완

##### 4.7 ONEWAY e-Power Diode

| 기간 | 범위 | 개인 Code Commit | 역할 |
|---|---|---|---|
| `[수행 기간 확인 필요]` | CEM·CEMM·DPE·DTE·GUI·Setup | 0건(15개 저장소 author 조사) | 레거시 구조 분석, 설치·시험 절차 정리, 64장 세미나 제작·발표. 개발 미참여 |

- **분석한 제품 기술**: C#·.NET, REST, ZeroMQ, UDP, AES·ARIA, FTP, DBMS, OPC UA·DA(이 프로젝트에서 직접 구현한 기술 스택은 아님)
- **수행 내용**
  - 구·신 Version TX·RX VM 환경, .NET Framework·.NET 6·ASP.NET Runtime·MariaDB·Installer·License 구성
  - GUI–CEM–CEMM–DPE–DTE Module 책임·Data 흐름, FTP·DBMS·OPC UA·OPC DA·Application Handler 분석
  - FTP TX 파일 배치→RX 파일 확인 절차와 OPC DA/UA·APP 시험 환경·방법 정리. OPC UA는 전송 오류/미완료 기록
  - Source 위치·API·Worker·Queue·Config를 조사해 64장 Seminar 자료 작성·발표. 별도 2,661줄 참고 분석 Markdown의 저작 여부는 미확인
- **대표 성과**: 낯선 Legacy 제품을 Module·Data Flow·운영 기능으로 구조화 / 시험의 확인·미완료 범위를 구분 / 64장 세미나로 기술 공유
- **기여도 경계**
  - CEM·DPE·DTE Core Code, 암호화 Algorithm, 단방향 Hardware 개발 경력으로 쓰지 않는다.
  - 이 프로젝트는 개발 미참여를 명시하고 분석·절차 정리·지식 이전 경험으로 활용한다.

#### 5. 프로젝트 간 공통 문제 해결 역량

| 역량 | 사례 |
|---|---|
| 문제를 재현 가능한 조건으로 변환 | SCG 변경 가능한 통신번호를 Test Data로 재현, KST 알림 경쟁 조건·Dashboard Session 흐름 추적, SVT 실패 Packet Field 단위 분해, Pipeline 병목을 Component별 TPS로 분리 |
| 기능을 운영 Lifecycle로 확장 | Report에 이력·감사·알림·보존기간, Tester에 PID·Signal·Named Instance, CXL 제어 요청을 Transaction·Toast·Dashboard와 연결, NiFi 운영 Flow 보호하며 Test State 분리 |
| 수치를 과장하지 않는 기술 판단 | Commit·Line 수를 생산성으로 환산하지 않음, 입력 TPS와 End-to-End TPS 구분, Before·After 없는 개선율 미사용, 미완료 Test·현재 미커밋 Code를 성과에서 제외 |

#### 6. 최종 제출 전에 채워야 할 정보

정확한 입사일·재직 기간 / 소속 부서·팀 규모 / 프로젝트별 고객 공개 가능 여부 / 단독 소유 API·화면·Batch 개수 / 실제 운영·납품·검수 결과 / 장애·성능 개선 전후 수치 / 수상·자격증·교육·학력 / 개인 GitHub·기술 Blog·공개 가능한 Demo

#### 7. 사용 원칙

1. 지원 공고에 없는 기술을 보여 주기 위해 모든 프로젝트를 넣지 않는다.
2. Backend 지원은 KSTV6·Report Manager·Pipeline·CXL을 우선한다.
3. 산업 Protocol 직무는 SVT·ONEWAY·KST SYSLOG를 앞세운다.
4. 운영·유지보수 직무는 SCG의 재현·정합성·안전한 반영 과정을 사용한다.
5. Commit 수는 본인 기여 범위를 설명할 때만 사용한다.
6. 수치가 없는 효과는 “개선”, “기반 마련”, “위험 축소” 수준으로 표현한다.

### KSTV5 보고서 운영 및 폐쇄망 적용

보고서 생성·이력 흐름을 연결하고, 조회 SQL과 동일 작업의 중복 실행 조건, 재시작 후 이력 정리를 보완했다. Windows 보안 점검 스크립트와 DB 반영 절차를 손봤으며 성능 측정 및 설치·패치 안내를 작성했다. 시험 기록에서 기존 3회 600초 타임아웃과 수정 후 3회 완주(평균 약 6.6분)를 확인했다. [상세 근거](../fornet/project-kstv5.md)

### IDPP 설계 문서 및 k3s

초기 UI·ERD·시험계획을 작성하고 이후 폐쇄망 k3s 환경을 구현했다. Bash·Ansible 설치, GitLab Registry와 Argo CD, Cilium, Kafka·IoTDB 정적 Local PV와 Longhorn을 구성했다. VM 설치·재설치와 디스크 고갈의 연쇄 영향을 검증 기록에 남겼다. [상세 근거](../fornet/project-idpp.md)

<a id="resume"></a>

## 이력서

### 09. 채용용 이력서 원본

> 기본 Target: Java·Spring Backend/Platform 개발자  
> 사용법: 대괄호 항목을 채운 뒤 지원 공고에 맞지 않는 Project를 삭제해 1~2페이지로 조정한다.

### 박종성

**Java·Spring 기반 산업·보안 Platform Backend 개발자**

| 연락처 | 이메일 | GitHub·Portfolio | 거주지 |
|---|---|---|---|
| `[전화번호]` | `[개인 이메일]` | `[주소]` | `[시·구까지만]` |

#### Profile

Java·Spring Boot 기반 산업·보안 관리 Platform에서 REST API, DB Query, OpenSearch, Message Queue, Scheduler, WebSocket·SSE와 Web UI를 개발했습니다. KSTV6 보안관제 WebMgr와 독립 Report Manager를 구축하고, CXL Host·Memory 관리 Console과 IEEE C37.118 검증 도구를 개발했습니다.

Python SYSLOG 부하 Generator와 Kafka–Fluent Bit–OpenSearch 시험 환경을 구성해 Pipeline 전 구간 약 10만 건/초 처리 조건을 도출했습니다. 장기 부하에서 발생한 HTTP 429를 Segment 증가·Merge Backlog·Write Block 관점으로 분석하는 등 기능 개발뿐 아니라 성능·운영 문제를 재현하고 측정하는 데 강점이 있습니다.

#### Core Skills

| 구분 | 기술 |
|---|---|
| Backend | Java 17·21, Spring Boot, Spring MVC, Spring Security, Spring AOP, MyBatis |
| Data·Search | PostgreSQL, MariaDB, Oracle, SQLite, OpenSearch |
| Messaging·Async | Kafka, ActiveMQ, WebSocket, SSE, `CompletableFuture`, Scheduler |
| Performance | Python Multi-process·Thread, Fluent Bit, Prometheus, Grafana, JMX |
| Frontend·Desktop | JavaScript, Thymeleaf, HTML·CSS, C# WinForms, RDLC |
| Domain | 보안관제, SYSLOG, 취약점, CXL, IEEE C37.118, OPC UA·DA |

#### Experience

##### 포네트㈜ · 주임 연구원

`[입사일]` ~ 현재 · `[소속 부서]`

산업·보안 Solution의 Backend·관리 Console·Data Pipeline 개발, Legacy 유지보수, 성능시험과 기술 문서화를 수행했습니다.

#### Selected Projects

##### KSTV6 보안관제 WebMgr·Report Manager

2026.01 ~ 2026.07  
Java 17, Spring Boot, MyBatis, PostgreSQL, OpenSearch, Kafka, JasperReports, WebSocket·SSE

- Engine REST API부터 사용자·설비·Process·Log·취약점·감사·알림·Report·Dashboard 관리 UI까지 Full-stack 개발
- OpenSearch 기반 원시·정규화 Log와 통계 조회에 Composite Aggregation·검색 조건·Paging 적용
- Background Excel·Report 생성, Resource 보존 Scheduler, 알림 경쟁 조건과 Dashboard Session 흐름 개선
- 독립 Report Manager를 초기 구축하고 PostgreSQL·OpenSearch Data를 결합한 한·영 종합·취약점 Report 개발
- 서로 독립적인 OpenSearch 조회 12개를 `CompletableFuture`로 병렬화
- DB 설정 기반 5개 Scheduler Job을 동적으로 등록·변경·삭제하고 Reload API 제공
- Report 상태 `NEW→START→SUCCESS/FAIL`, 생성 이력·감사·알림·파일 보존기간 Lifecycle 구현
- 과거 통합 `rest-api-server` 372건 별도 관측. 현재 분리 웹·API·보고서의 개인 비병합 커밋은 각각 134·48·57건

##### AI 관제 Data Pipeline 성능시험

2025.09 ~ 2026.03 · 시험·저장소 이력 기준  
Python, Kafka, Fluent Bit, OpenSearch, Prometheus, Grafana

- Python 기반 약 40종 보안장비 형식 SYSLOG Generator와 Process·Thread·Batch·Quota 실행 기능 구축
- EventData 원문과 41개 Field NormalizedData를 생성하고 Worker별 목표·실제 TPS 측정
- Kafka Partition과 Fluent Bit Process 구조를 반복 조정해 Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초 처리 구성 도출
- 20만 건/초 입력에서 중간·색인 약 14.7~14.8만 건/초의 처리 상한 확인
- 48시간 동안 최대 60억 건 누적 구간의 검색·Aggregation 응답 측정
- 약 40억 건 부근의 429·Segment 증가·Merge Backlog·Write Block 분석
- 성능 Test Report·설치 지침·Graph 작성

##### CXL ENABLER Orchestrator

2025.04 ~ 2025.07  
Java 21, Spring Boot, MyBatis, PostgreSQL, ActiveMQ, WebSocket, Thymeleaf

- CXL 관리 Console의 Login·Group·Host·Memory·Script·Transaction·Settings·Dashboard 개발
- Host 변경 Field만 저장하고 Demotion Enable·Disable을 별도 제어하는 업무 Logic 구현
- Group·Host 단위 Script 실행·중지 요청을 ActiveMQ로 전달하고 결과를 WebSocket Dashboard에 반영
- CMM-D·CMM-B·ALL 제품 Type을 전역 설정과 공통 UI로 분리
- 2025년 4~7월 본인 Commit 211건

##### SVT Synchrophasor Verification Tool

2025.06 ~ 2025.07  
C#, .NET Framework 4.8, WinForms, SQLite, Dapper, ReportViewer·RDLC

- PMU·Scenario·검증 이력·실패 Packet·Report를 관리하는 Windows Application 개발
- IEEE C37.118-2005/2011 Header·Configuration·Data Frame을 동적 구조로 모델링
- 실패 Packet을 Byte·Binary·Field 단위로 시각화하고 `verifyDepth`에 따라 실패 위치 표시
- Wireshark TCP 4712 Sample과 Packet Result 교차검증
- WPF·MVVM Prototype을 제거하고 WinForms 제품 구조로 전환
- 2025년 6~7월 본인 Commit 191건

##### SCG MDMS·GASDOT 유지보수

2025.11 ~ 2026.01  
Java, Spring, MyBatis, MariaDB, Oracle, Apache NiFi, JavaScript

- GMTR 9개·EMTR 7개·EVENT 2개 Source Table을 통합 Raw Table로 전달하는 NiFi Flow 개발·검증
- 통계 Join Key를 변경 가능한 `COMM_NUM`에서 고유 `MTR_NUM`으로 수정하고 AS-IS/TO-BE Count 검증
- GasDot CO 예방 Event에 현재값과 정확히 1시간 전 동일 장비 값의 비교 조건 추가
- PLC Collector의 이중 DataSource·Mapper 구조를 정리하고 CNU GMTR·Event 미수신 Data 재수집 보완
- MDMS Dashboard Details·검색·Pagination·Excel·Oracle Procedure Mapping 후속 개발
- 10개 저장소에서 본인 Commit 76건(비병합 71건)

##### ONEWAY e-Power Diode 레거시 분석·기술 세미나

`[기간 확인 필요]`  
분석 대상 기술: C#·.NET, REST, ZeroMQ, FTP, DBMS, OPC UA·DA(직접 개발 경력 아님)

- 구·신 Version의 TX·RX VM, Runtime, DB, Installer·License 환경 구축
- GUI–CEM–CEMM–DPE–DTE Architecture와 Queue·API·설정 흐름 분석
- FTP TX 파일 배치→RX 파일 확인 절차와 OPC DA/UA·APP 시험 방법 정리(UA 전송 오류 명시, DBMS E2E 성공 미확인)
- Source 위치·Worker·API·Config를 조사해 64장 기술 세미나 자료 제작·발표(별도 2,661줄 참고 문서 저작 여부 미확인, 개발 미참여)

#### Key Achievements

- 보안관제 WebMgr·독립 Report Manager·CXL 관리 Console 등 산업용 Platform Backend 개발
- OpenSearch 12개 독립 조회 병렬화와 DB 설정 기반 5개 동적 Scheduler Job
- Kafka–Fluent Bit–OpenSearch Pipeline 전 구간 약 10만 건/초 처리 조건 도출
- 48시간·최대 60억 건 누적 Query와 Lucene Segment·Merge 병목 분석
- IEEE C37.118 Binary Packet 분석 UI와 RDLC Report
- `COMM_NUM`→`MTR_NUM` 변경으로 도시가스 Event 통계의 식별자 정합성 개선

#### Education

| 기간 | 학교·기관 | 전공·과정 | 상태 |
|---|---|---|---|
| `[기간]` | `[학교명]` | `[전공]` | `[졸업·수료]` |

#### Certifications

- `[자격증명 / 취득일]`
- `[교육·수료 과정]`

#### Additional Information

- 병역: `[해당 시 작성]`
- 어학: `[해당 시 작성]`
- 수상·논문·특허: `[해당 시 작성]`

---

#### 1페이지 제출용 압축안

### 박종성

**Java·Spring 기반 산업·보안 Platform Backend 개발자**

Java·Spring Boot 기반 관리 Platform에서 REST API, PostgreSQL·OpenSearch, Kafka·ActiveMQ, Scheduler, WebSocket을 활용해 보안관제·CXL 제품을 개발했습니다. Python 부하 도구를 구축하고 Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초 조건을 도출한 성능시험 경험이 있습니다.

##### 기술

Java 17·21 · Spring Boot · MyBatis · PostgreSQL · MariaDB · OpenSearch · Kafka · ActiveMQ · WebSocket · Python

##### 포네트㈜ · 주임 연구원

`[입사일]` ~ 현재

**KSTV6 WebMgr·Report Manager**

- Engine API와 Log·취약점·Process·Report·Dashboard 관리 기능 개발
- OpenSearch Composite Aggregation과 12개 조회 병렬화
- DB 설정 기반 5개 동적 Scheduler Job과 Report 이력·감사·알림·보존 Lifecycle

**AI 관제 Data Pipeline**

- 약 40종 SYSLOG Generator와 Kafka–Fluent Bit–OpenSearch 시험 환경 구축
- 전 구간 약 10만 건/초 구성 도출, 48시간·최대 60억 누적 Query와 Merge 병목 분석

**CXL Orchestrator**

- Group·Host·Memory·Script·Transaction·Dashboard 개발
- ActiveMQ 제어 결과를 WebSocket 운영 화면에 연결

**기타**

- IEEE C37.118 PMU 검증·Packet 분석·RDLC Report
- SCG NiFi 통합 Flow·통계 Join Key·CNU 재수집 유지보수

#### 제출 전 삭제·수정 규칙

1. 개인정보 Placeholder를 모두 채운다.
2. 확인되지 않은 ONEWAY 기간은 채우거나 Project에서 제외한다.
3. 지원 공고가 Java Backend이면 ONEWAY를 제외하고 KST·Pipeline을 확장한다.
4. 산업 Protocol 직무면 SVT를 KST 바로 뒤로 올린다.
5. Commit 수는 최대 2~3개 프로젝트에서만 사용한다.
6. “약 10만 건/초”에는 반드시 Kafka–Fluent Bit–OpenSearch 전 구간이라는 조건을 붙인다.
7. 60억 건은 “누적 Query 측정 구간”이지 정상 처리 보장량으로 쓰지 않는다.
8. PDF 변환 전 1페이지 또는 2페이지에서 문장이 잘리지 않는지 확인한다.

### 이력서 선택 문장 추가

- **KSTV5** 보고서 생성·이력 서비스와 관제 목록을 개선하고 SQL, 중복 실행 방지, 폐쇄망 패치 절차를 보완했습니다. 검증 환경에서 수정 전 타임아웃과 수정 후 완주를 비교했습니다. [제작 원고](../fornet/project-kstv5.md#materials)
- **IDPP** 폐쇄망 k3s 설치 자동화, GitOps, 스토리지를 구현하고 시험 VM에서 설치·장애를 검증했습니다. 초기 UI·ERD·시험계획 문서도 작성했습니다. [제작 원고](../fornet/project-idpp.md#materials)

<a id="star"></a>

## 자기소개서와 STAR 사례

### 10. STAR 자기소개서 사례집

> 용도: 자기소개서 문항·행동 면접용 원본 사례. 확인된 사실만 사용하고, 정량 효과가 없는 부분은 개선율을 만들지 않는다. 제출용 초안·60초 답변은 원문 그대로 사용한다.

#### 1. 사례 선택표

| 문항 유형 | 1순위 사례 | 2순위 사례 |
|---|---|---|
| 가장 어려운 문제 | Data Pipeline 10만 건/초 | OpenSearch 40억 건 병목 |
| 성능 개선 | Data Pipeline 구조 Tuning | KST Report 병렬화 |
| 주도적 개발 | KST Report Manager | CXL Orchestrator |
| 기술 선택 변경 | SVT WPF→WinForms | CXL Host API V2 |
| 장애·결함 해결 | SCG 통계 Join Key | KST 알림 경쟁 조건 |
| 데이터 정합성 | SCG `COMM_NUM`→`MTR_NUM` | NiFi State 재수집 |
| 운영 자동화 | Report 동적 Scheduler | Tester PID·Signal 관리 |
| 새로운 Domain 학습 | SVT IEEE C37.118 | ONEWAY Source 분석 |
| 협업·기여도 | SCG 공식 담당+Dashboard 보완 | KST AI Package 연동 |
| 실패·한계 학습 | 20만/s 처리 상한 | 미완료 Rollover Scenario |

#### 2. STAR 1 — Kafka–Fluent Bit–OpenSearch 전 구간 10만 건/초

- **S**: 기존 보안관제 통계는 RDBMS 5분 단위 통계 Table 구조. 대량 SYSLOG 실시간성·확장성 검증 필요. 초기 Generator·Kafka는 10만/s, Fluent Bit·OpenSearch는 약 8만/s.
- **T**: 실제 장비 형식에 가까운 대량 SYSLOG 생성, 구간별 처리량 분리 측정, 10만/s E2E 구성 탐색, 장기 부하 병목·장애 원인 기록.
- **A**:
  - Python 장비별 SYSLOG Generator + Process·Thread·Batch·Quota Mode; EventData와 41개 Field NormalizedData 절반씩 생성
  - Worker별 목표 TPS와 실제 TPS 별도 집계
  - Kafka Partition, Fluent Bit Process·Worker·Flush, OpenSearch Shard 반복 변경: `Process 4×Worker 6`(약 8만/s) → `6×4`, `6×1`, `7×1`, `8×1` 비교
  - Worker 증가보다 Fluent Bit Process와 Kafka Partition을 1:1에 가깝게 맞추는 것이 유효함을 확인
  - Prometheus·Grafana·JMX·Process Exporter로 Component·System 자원 관측
- **R**: Kafka 8 Partition·Fluent Bit 8 Process×Worker 1에서 전 구간 약 10만 건/초 / 12만 입력에서 OpenSearch 약 10.9만/s / 20만 입력에서 중간·색인 약 14.7~14.8만/s 상한 / Test Report·설치 지침·Graph를 재현 가능한 자산으로 남김
- **배운 점**: Buffer 크기보다 내부 병렬 단위와 외부 Partition 구조 정합이 중요; 입력 TPS와 최종 색인 TPS를 분리해야 목표 달성을 바르게 판단.

##### 600자 자기소개서 초안

대량 SYSLOG Pipeline의 목표는 초당 10만 건 처리였습니다. 초기 시험에서 Python Generator와 Kafka는 목표를 달성했지만 Fluent Bit와 OpenSearch는 약 8만 건에 머물렀습니다. 저는 입력량만으로 성공을 판단하지 않고 각 구간의 처리량을 분리했습니다. Kafka Partition과 Fluent Bit Process·Worker·Flush, OpenSearch Shard를 반복 변경한 결과 Worker 증가보다 Process 증가가 효과적이며 Partition과 Process를 1:1에 가깝게 맞추는 구성이 유리하다는 점을 확인했습니다. 최종적으로 Kafka 8 Partition과 Fluent Bit 8 Process×Worker 1에서 전 구간 약 10만 건/초를 확인했습니다. 20만 건 입력에서는 약 14.8만 건/초의 처리 상한도 함께 기록했습니다. 이 경험을 통해 목표 수치만 만드는 것이 아니라 중간 병목과 한계를 계측해야 재현 가능한 성능 개선이 된다는 것을 배웠습니다.

##### 과장 방지

- “20만 건/초 처리”가 아니라 “20만 입력에서 약 14.8만 처리”
- 특정 단일 Node 시험 결과임을 필요할 때 설명
- `acks=0`은 Throughput 우선 시험 설정

#### 3. STAR 2 — 약 40억 건 부근 OpenSearch 장애 분석

- **S**: 10만/s 장기 부하 중 약 40억 건 부근에서 Indexing Queue 포화, HTTP 429, Fluent Bit 재시도·Data 유실. CPU·Memory는 여유.
- **T**: System 사용률이 아닌 OpenSearch·Lucene 내부 상태로 Indexing 중단 원인 설명, Shard·Refresh·Index 전략 개선 방향 도출.
- **A**:
  - Indexing Queue·429 시점, Segment 수·Merge 상태·Write Thread·Disk I/O 동시 관찰
  - 지속 입력→작은 Segment 증가→Merge가 생성 속도를 못 따라가는 흐름 정리
  - Shard 1·3·5, Refresh 1초·5초 비교; 단일 Index와 일별 Index 48시간 결과 분리
  - Shard당 문서 수 한계·대형 단일 Index 위험 조사, Index Template·일별·용량 기반 Rollover 검토
- **R**: Segment 증가→Merge Backlog→Write Block으로 원인 분석 / Shard 1·3 약 10만/s, Shard 5 약 9.5만/s(단일 Node에서 Shard 증가가 항상 유리하지 않음) / 48시간·최대 60억 누적 Query 응답 기록 / 일별 Index·Rollover 운영 방향 제시
- **배운 점**: 사용률이 낮아도 Storage Engine 내부 Queue·Merge가 병목일 수 있음. Segment·Merge·Thread Pool·Disk까지 함께 봐야 함.

##### 면접용 60초 답변

> 10만 건/초 장기 시험에서 약 40억 건 부근부터 429와 Indexing 중단이 발생했습니다. CPU와 Memory가 남아 있어 OpenSearch 내부 Metric을 확인했고, 작은 Segment가 빠르게 늘어 Merge가 따라가지 못하면서 Write Queue가 막히는 흐름을 찾았습니다. Shard와 Refresh 조건도 비교했는데 단일 Node에서는 Shard 5가 오히려 약 9.5만 건/초로 떨어졌습니다. 이를 통해 Resource 수치만 보지 않고 Lucene Segment·Merge와 Index Lifecycle까지 봐야 한다는 점을 배웠습니다.

#### 4. STAR 3 — KSTV6 독립 Report Manager와 동적 Scheduler

- **S**: 종합·취약점 Report는 여러 PostgreSQL·OpenSearch Data 결합 필요. 고객별 일간·월간·취약점 주기·활성 상태가 달라 설정 변경마다 재기동하는 방식은 부적합.
- **T**: Report 전용 독립 Service, 한·영 종합·취약점 Report, OpenSearch 조회 대기 개선, Runtime 설정 반영 Scheduler, 이력·감사·알림·보존기간 Lifecycle.
- **A**:
  - 초기 Commit 55개 파일·10,885줄 Spring Boot Project 구성; Jasper 한·영 Template과 종합·취약점 Report Service
  - 독립 OpenSearch 조회 12개 `CompletableFuture` 병렬 실행
  - DB 설정으로 5종 Job 동적 등록, 현재 Task Registry와 비교해 추가·변경·삭제; Thread-safe Cache·Reload API
  - 상태 `NEW→START→SUCCESS/FAIL`, 생성 이력·감사 Event·알림·파일 보존기간 연결
  - DB 접속 정보 암호화, 개발·운영 설정 분리
- **R**: 현재 전체 63건 중 개인 58건(비병합 57건)의 이력으로 초기 구축·핵심 기능 주도 / 12개 독립 조회 병렬 구조 / 재기동 없이 설정 반영 / 상태·이력·알림·보존 Lifecycle로 확장
- **배운 점**: 자동화는 Cron 등록이 끝이 아니라 중복 Job·설정 변경·실패·재실행·이력·File 정리까지 설계해야 운영 기능이 됨.

##### 700자 자기소개서 초안

KSTV6에서 종합·취약점 보고서를 자동 생성하는 독립 Report Manager를 초기 구축했습니다. 보고서는 PostgreSQL과 OpenSearch의 여러 데이터를 결합해야 했고, 고객별로 주기와 활성 상태가 달라 설정 변경 시 재기동 없이 반영할 방법이 필요했습니다. 먼저 서로 독립적인 OpenSearch 조회 12개를 `CompletableFuture`로 병렬화했습니다. 이후 DB 설정을 읽어 일간·월간·취약점 등 5개 Job을 동적으로 등록하고, 기존 Task와 신규 설정을 비교해 추가·변경·삭제하도록 구성했습니다. Thread-safe Cache와 Reload API도 함께 적용했습니다. 여기에 보고서 상태를 `NEW→START→SUCCESS/FAIL`로 관리하고 감사·알림·보존기간을 연결했습니다. 그 결과 단순 파일 생성기가 아니라 설정 변경과 실패 이력을 운영자가 관리할 수 있는 서비스가 됐습니다. 이 경험을 통해 자동화 기능은 정상 실행뿐 아니라 변경·중복·실패·정리까지 설계해야 완성된다는 점을 배웠습니다.

##### 과장 방지

- 병렬화 개선율은 전후 측정치가 없어 수치로 쓰지 않음
- OpenSearch·Jasper 제품 자체 개발이라고 표현하지 않음

#### 5. STAR 4 — SCG Event 통계 Join Key 정합성

- **S**: MDMS Event 통계 Query가 Event와 계량기 Master를 변경 가능한 `COMM_NUM`(통신번호)으로 Join → 과거 Event 통계 누락 가능.
- **T**: 식별자의 업무 의미 분석, Join Key 변경 부작용이 없도록 수정 전·후 Data 비교.
- **A**:
  - 고유 계량기 번호 `MTR_NUM`을 대체 Join Key로 선정, Mapper의 Join·Null 조건 함께 변경
  - 운영 Event Data를 개발 환경에 복제해 기준 통계 생성
  - 특정 장비 `COMM_NUM` 변경 + Event Type별 Test Row로 수정 전 누락·수정 후 Count 증가 확인, 다른 Event Type 변경 시 감소하는 역방향 Case 검증
- **R**: 안정적 계량기 번호로 Join 개선 / AS-IS·TO-BE와 증가·감소 Case로 영향 검증 / Business Identifier 안정성 기준의 정합성 해결
- **배운 점**: 정합성 문제는 SQL 문법보다 Key의 업무 의미·Lifecycle·변경 가능성에서 시작될 수 있음.

##### 500자 자기소개서 초안

도시가스 MDMS Event 통계에서 과거 Event가 누락될 수 있는 문제를 해결했습니다. 기존 Query는 Event와 계량기 Master를 `COMM_NUM`으로 Join했지만, 통신번호는 변경될 수 있어 동일 계량기의 과거 Data가 단절될 수 있었습니다. 저는 고유 계량기 번호인 `MTR_NUM`으로 Join Key를 변경하고, 운영 Data를 개발 환경에 복제해 AS-IS 기준값을 만들었습니다. 이후 통신번호를 변경한 Test Row와 Event Type별 증가·감소 Case를 구성해 수정 전 누락과 수정 후 집계 회복을 확인했습니다. 이 경험을 통해 Data 문제를 해결할 때 SQL 자체보다 Identifier의 업무 의미와 Lifecycle을 먼저 확인해야 한다는 원칙을 얻었습니다.

##### 추가 질문 대비

- 왜 복합 Key가 아니라 `MTR_NUM`이었는가?
- 과거 `MTR_NUM`도 변경될 가능성은 없는가?
- LEFT JOIN을 유지한 이유는 무엇인가?
- 운영 반영 전 Rollback은 어떻게 준비했는가?

#### 6. STAR 5 — SVT WPF Prototype을 WinForms로 전환

- **S**: PMU 검증 Manager를 WPF·MVVM으로 시작(PMU·Scenario·History 기본 구조)했으나 제품 요구·기존 Component·ReportViewer·일정에 맞는 Framework 재선택 필요.
- **T**: 작성한 Code에 매몰되지 않고 기술 선택 재평가·전환.
- **A**:
  - WPF Project·MVVM·Repository·기본 화면을 Prototype 수준까지 구현 후 화면 요구·기존 Windows Component·ReportViewer·개발 속도로 적합성 비교
  - WPF 42개 파일·6,528줄 제거, WinForms 공통 Layout·Navigation·Data 계층 재구성
  - PMU·Scenario·History·Packet 분석·RDLC Report 재구축; Singleton Form·Loading·Pagination으로 흐름 개선
- **R**: 짧은 기간 내 전환·핵심 흐름 완성 / PMU 등록→Scenario→검증→이력→실패 Packet→Report E2E Manager / 2025년 6~7월 본인 Commit 191건
- **배운 점**: Prototype의 목적은 선택 정당화가 아니라 위험 조기 발견. 작성량보다 제품 요구·유지보수성 기준으로 전환.

##### 실패 경험 문항용 초안

초기에는 구조화된 UI 개발을 위해 WPF·MVVM을 선택했습니다. 기본 화면과 Data 계층까지 구현했지만 기존 Windows Component와 ReportViewer, 일정과 팀의 유지보수 환경을 고려하면 WinForms가 제품 완성에 더 적합했습니다. 작성한 Code가 아까워 선택을 유지할 수도 있었지만, Prototype 단계에서 전환 비용을 지불하는 편이 이후 위험을 줄인다고 판단했습니다. WPF 42개 파일을 제거하고 WinForms로 재구축한 뒤 PMU·Scenario·History·Packet 분석·RDLC Report 흐름을 완성했습니다. 이 경험 이후 기술 선택을 할 때 선호보다 제품 제약, 팀 역량, 핵심 Library와의 적합성을 먼저 검증합니다.

#### 7. STAR 6 — CXL Host 변경과 Message 흐름 개선

- **S**: Orchestrator가 Host 설정·Memory 정책을 Control Plane에 전달. 전체 저장·동작 미구분 시 미변경 설정까지 제어 요청 전파, Demotion 처리 중복 Message 가능.
- **T**: 실제 변경만 반영, Demotion·Group 변경을 업무 동작으로 분리, 결과를 운영 화면에 실시간 전달.
- **A**:
  - Host API·UI 저장 흐름을 V2로 재정비; 기존 값과 비교해 변경 Field만 저장; Host 이름 중복 Validation
  - Demotion Enable·Disable 별도 동작 분리; Group 변경 중복 전송 방지, 필요한 `REQ_CHANGE`만 Control Queue 전달
  - ActiveMQ 수신 결과를 WebSocket으로 Browser Session Broadcast, `CopyOnWriteArraySet`으로 동시 Session 관리
- **R**: 불필요한 Host Update·중복 Message 감소 구조 / Memory 정책 제어와 일반 정보 변경 분리 / 제어 결과를 실시간 Dashboard·알림과 연결
- **배운 점**: 관리 Console 저장은 외부 System 제어를 유발할 수 있어 변경 감지·Idempotency·사용자 Feedback을 함께 고려.

##### 과장 방지

- 실제 Message 감소율은 측정 자료가 없어 수치화하지 않음
- CXL 전체 Module이 아니라 Orchestrator 중심 경험

#### 8. STAR 7 — KST 알림 경쟁 조건과 Dashboard 실시간 구조

- **S**: Alarm·AI·상태 변화가 비동기로 여러 Session에 전달. 알림 상태 동시 갱신 시 Race Condition 가능, Dashboard Session·조회·Chart Logic 복잡화.
- **T**: 공유 상태·Session 안전 관리, Dashboard Data 준비 시간 단축 구조.
- **A**: 알림 상태 읽기·수정 순서 추적 후 공유 상태 처리 보강으로 경쟁 조건 수정 / Dashboard WebSocket Handler·Session 흐름 재설계 / Service·Query·Chart 공통 Logic 분리 / 독립 조회 병렬 처리 / 연결·종료·예외 시 Session 정리 확인
- **R**: 경쟁 조건 수정 / WebSocket·Session·Query·Chart 책임 재정리 / 병렬 조회로 응답 Path 개선 기반 마련
- **배운 점**: 실시간 UI 문제는 동시성·Session Lifecycle·Backend Query 의존성을 함께 봐야 함.

##### 과장 방지

- 병렬화 전후 시간 미확보
- 감사 당시 미커밋 WebSocket 변경은 성과에서 제외

#### 9. STAR 8 — SCG PLC Collector의 CNU 재수집 정상화

- **S**: GasDot 검침·Event 장기 미수신 시 CNU REST API 재수집 기능이 미동작. 외부 API 문제인지 내부 DB·Mapping 문제인지 구분 필요.
- **T**: 요청→응답 변환→저장 전체 Path 추적, 수집·전처리 DB가 섞인 Legacy 구조 정리.
- **A**: CNU API·요청 Parameter 별도 Test / 시작·종료 일자를 일별 Unix Time 범위로 변환 / GMTR·Event 누락 조회 Endpoint 분리 / 응답 `JsonNode`를 GMTR·Event Model List로 변환 / 장비·날짜 순회하며 결과·오류·저장 건수 Log / 수집·전처리 MariaDB의 DataSource·Mapper Package 분리 / 운영 Mapper·환경 설정 보정
- **R**: 외부 API와 내부 Collector 장애 범위 분리 / 누락 GMTR·Event 재요청·변환·저장 흐름 정리 / 이중 DataSource·Mapper 구조 명확화
- **배운 점**: 외부 연동 장애는 HTTP 성공 여부가 아니라 응답 Schema·DB Session·Mapper·운영 Profile까지 E2E로 확인.

#### 10. STAR 9 — ONEWAY 제품 Source 분석과 지식 이전

- **S**: GUI·관리 API·Monitor·Data Processing Engine·Transfer Engine·Installer로 분리된 단방향 전송 제품을 빠르게 이해하고 구·신 Version 설치·시험. 개인 Code Commit으로 보이기 어려운 분석·검증 업무.
- **T**: Module 책임·통신 구조와 TX·RX 환경·시험 방법을 파악해 세미나로 공유.
- **A**:
  - GUI→REST API·CEM Service 추적; CEMM Watchdog·DB·Audit·Mail; DPE FTP·DBMS·OPC·APP Handler Factory; DTE Queue·암호화·UDP 송수신 정리
  - FileZilla, MariaDB, OPC UA Server, UAExpert, OPC DA Client·Core Component 설치; 구·신 Version Runtime·Installer·설정 차이 비교
  - 64장 세미나 자료 제작·발표, FTP 파일 RX 확인 절차와 OPC DA/UA·APP 방법 및 UA 오류를 구분해 기록
- **R**: Source 위치·API·Worker·Queue·Config 기준 구조화 / 확인된 FTP 절차와 미완료 OPC UA 전송을 분리 / 분석을 팀 공유 자료로 전환
- **배운 점**: 구조·실행 환경 문서화도 유지보수 속도를 높이는 개발 기여.

##### 과장 방지

- Core 개발 사례가 아니라 분석·환경 구축·시험·공유 사례로 사용
- 암호화 Algorithm 구현을 Claim하지 않음

#### 11. 문항별 조합 예시

| 문항 | Main | Supporting | Conclusion |
|---|---|---|---|
| 지원 직무에 필요한 역량 | KST Report Manager | CXL Orchestrator | Backend 기능을 운영 Lifecycle까지 완성 |
| 어려운 목표를 달성한 경험 | Pipeline 10만 건/초 | 20만 입력 상한과 장기 병목 | 성공 수치뿐 아니라 한계까지 기록 |
| 실패 또는 의사결정을 바꾼 경험 | SVT WPF→WinForms | — | Sunk Cost보다 제품 제약 우선 |
| 협업 과정에서 기여한 경험 | SCG 공식 담당 4영역 | Dashboard 후속 QA | 역할 경계를 지키며 연결 구간 문제 해결 |
| 새로운 기술을 학습한 경험 | ONEWAY 또는 IEEE C37.118 | — | 화면→API→Service→Data Flow 학습법 |

#### 12. 작성 규칙

1. 한 자기소개서에 Project를 2개 이상 억지로 섞지 않는다.
2. Situation은 20% 이하, Action을 가장 길게 쓰고 본인의 판단 기준을 포함한다.
3. Result에는 확인된 수치만 넣는다.
4. 마지막 문장은 지원 직무에서 재사용할 역량으로 연결한다.
5. “저희 팀은”보다 “저는 무엇을 확인하고 변경했는지”를 쓴다.
6. 기여도 경계 질문에 대비해 협업 영역을 숨기지 않는다.

### IDPP 디스크 고갈과 스토리지 선택

- **상황** 시험 VM에서 Kafka와 OS·Longhorn이 디스크를 공유했고, 부하와 긴 보존 설정이 겹쳐 디스크가 부족해졌다.
- **과제** Kafka 장애가 MariaDB와 데이터 적재에까지 미친 경로를 찾고 재발 조건을 낮춘다.
- **행동** 디스크 사용량, Pod 축출, Longhorn 볼륨과 DB 상태를 시간대별로 대조했다. 시험 보존 시간을 줄이고 전용 디스크 필요성을 문서화했다. MariaDB를 단일 인스턴스와 복제 볼륨 구조로 바꿨다.
- **결과** VM에서 Longhorn 복제 상태를 확인하고 서버 이동 재시험을 남겼다. [상세 사례](../fornet/project-idpp.md#materials)

### KSTV5 보고서 성능 측정과 패치 검증

- **상황·과제** 특정 테스트의 요청이 600초에 종료돼 수정 전후를 같은 조건에서 비교할 필요가 있었다.
- **행동** 측정 방법과 요청 경로를 점검하고 SQL·패치 변경을 시험 환경에 적용한 뒤 다시 실행했다. 적용과 복구 경로를 설치 담당자가 따라갈 수 있게 문서화했다.
- **결과** 대상 요청의 3회 완주와 평균 약 6.6분, 패치 재검증 22/22 항목을 시험 자료에 남겼다. [상세 사례](../fornet/project-kstv5.md#materials)

<a id="interview"></a>

## 면접 질문과 답변

### 11. 면접 대비 질문·답변

> 용도: 외워서 읽는 대본이 아니라, 실제 경험의 범위와 판단 근거를 일관되게 설명하기 위한 면접 준비 자료다.

#### 1. 자기소개

##### 30초

안녕하세요. Java·Spring 기반 산업·보안 Platform을 개발해 온 박종성입니다. KSTV6 보안관제 WebMgr와 독립 Report Manager에서 REST API, OpenSearch, Scheduler, WebSocket 기능을 개발했고, CXL 관리 Console과 IEEE C37.118 검증 도구도 구현했습니다. 특히 Python 부하 도구를 직접 구성해 Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초 처리 조건을 도출한 경험이 있습니다. 복잡한 Domain을 빠르게 이해하고 Data 흐름과 운영 문제까지 연결해 해결하는 것이 강점입니다.

##### 60초

안녕하세요. Java·Spring Boot를 중심으로 산업·보안 관리 Platform을 개발한 박종성입니다. 최근에는 KSTV6 보안관제 WebMgr에서 Engine API, OpenSearch Log·통계, 취약점, Process, Report, Dashboard를 개발했고, 별도 Report Manager를 초기 구축해 12개 OpenSearch 조회 병렬화와 DB 설정 기반 5개 동적 Scheduler Job을 구현했습니다. 이전에는 CXL Host·Memory·Script를 제어하는 Orchestrator와 IEEE C37.118 기반 PMU 검증 Manager를 개발했습니다. 또 Python SYSLOG Generator와 Kafka–Fluent Bit–OpenSearch 시험 환경을 구성해 전 구간 약 10만 건/초 조건을 찾고 장기 부하의 Segment·Merge 병목을 분석했습니다. 저는 기능을 만드는 데서 끝내지 않고 상태·이력·실패·성능과 운영자가 확인할 방법까지 함께 설계하는 개발자입니다.

##### 90초

안녕하세요. 산업·보안 Domain의 관리 Platform을 Backend 중심으로 개발해 온 박종성입니다. Java 17·21과 Spring Boot, MyBatis, PostgreSQL·MariaDB·OpenSearch를 사용했고 Kafka·ActiveMQ·WebSocket·SSE·Scheduler도 실무에 적용했습니다.

KSTV6에서는 Engine REST API부터 Log·취약점·Process·Report·Dashboard까지 개발했고, 독립 Report Manager를 초기 Project부터 구축했습니다. Report Manager에서는 PostgreSQL과 OpenSearch Data를 결합해 한·영 종합·취약점 Report를 만들고, 독립 조회 12개를 병렬화했으며 DB 설정 기반 5개 Job을 Runtime에 등록·변경·삭제하도록 구성했습니다.

성능 측면에서는 Python 기반 약 40종 보안장비 SYSLOG Generator를 구성하고 Kafka–Fluent Bit–OpenSearch의 처리량을 구간별로 측정했습니다. Process와 Partition 구조를 반복 조정해 전 구간 약 10만 건/초를 확인했고, 48시간·최대 60억 건 누적 Query와 약 40억 건 부근 Merge 병목도 분석했습니다.

제 강점은 낯선 Domain을 빠르게 구조화하고, API·Data·비동기 흐름·운영 화면을 하나의 문제로 연결해 해결하는 것입니다.

#### 2. 경력·기여도 질문

##### Q1. 실무에서 가장 중심이 된 기술은 무엇입니까?

**답변**

Java·Spring Boot 기반 Backend가 중심입니다. REST API, MyBatis Query, PostgreSQL·MariaDB·OpenSearch, Scheduler와 비동기 처리, WebSocket·SSE를 가장 많이 다뤘습니다. JavaScript·Thymeleaf로 관리 화면도 개발했지만, 포지션은 Backend로 정의하고 있습니다.

##### Q2. Git 이력을 개인 기여 근거로 어떻게 활용합니까?

**답변**

Commit 수를 생산성으로 주장하려는 목적은 아닙니다. Merge·Source 이관·Resource 변경이 포함돼 단순 비교가 불가능합니다. 프로젝트별로 어떤 기능을 소유하고 개선했는지 추적하는 범위로 사용했습니다. 면접에서는 Commit 수보다 핵심 Diff와 문제 해결 과정을 설명하겠습니다.

##### Q3. 가장 본인 소유 범위가 큰 프로젝트는 무엇입니까?

**답변**

독립 `report-manager`입니다. 현재 로컬 저장소 전체 63건 중 개인 변경 58건(비병합 57건)이 확인되며, 초기 Project 구성부터 Jasper Template, PostgreSQL·OpenSearch 조회, 병렬 처리, 동적 Scheduler, 이력·감사·알림·보존기간까지 개발했습니다. KSTV6 WebMgr는 더 큰 범위를 다뤘지만 Team Project였고, Report Manager가 개인 소유 범위를 설명하기 가장 명확합니다.

##### Q4. Full-stack입니까, Backend입니까?

**답변**

업무 범위는 Full-stack이었지만 지원 포지션은 Backend입니다. 관리 Console 특성상 API·DB·Message와 연결된 JavaScript·Thymeleaf 화면까지 직접 수정했습니다. 다만 React·Vue 전담 Frontend 경력보다 Backend Domain Logic과 Data·비동기 처리 경험이 더 강합니다.

##### Q5. 본인이 하지 않은 부분은 무엇입니까?

**답변**

KST Engine 전체와 AI Model, CXL Agent·Control Plane 전체, SCG Dashboard 전체 신규 개발, ONEWAY Core Code는 제 단독 개발 범위가 아닙니다. 저는 WebMgr·Orchestrator·Manager와 Integration, 공식 유지보수 영역을 담당했습니다. 프로젝트별 역할 경계를 문서와 Git 근거로 구분해 두었습니다.

#### 3. Java·Spring 질문

##### Q6. Spring AOP는 어디에 사용했습니까?

**답변**

CXL Transaction Log 적용을 검토하면서 Annotation 기반 AOP를 Prototype으로 구현했습니다. 다만 ActiveMQ Send Method의 최종 적용은 현재 Code에서 주석·보류 상태입니다. 따라서 운영 적용 경험이라고 과장하지 않고, 공통 감사 Logging을 횡단 관심사로 분리하려 했던 설계 경험으로 설명합니다.

**추가로 말할 내용**

- Spring Proxy 기반이라 Self-invocation에 주의
- `@Before`, `@AfterReturning`, `@AfterThrowing`의 사용 목적
- Transaction 경계와 Logging 실패가 본 업무에 영향을 주지 않도록 분리할 필요

##### Q7. `CompletableFuture`로 병렬화할 때 주의할 점은 무엇입니까?

**답변**

작업이 서로 독립적인지 먼저 확인해야 합니다. Report Manager에서는 12개 OpenSearch 조회가 서로 결과 의존성이 없어 병렬화했습니다. 다음으로 Executor 크기, Timeout, 예외 수집, 부분 실패 정책, 공유 객체의 Thread safety를 봐야 합니다. Common Pool을 무조건 쓰기보다 외부 I/O용 Executor를 분리하고, 전체 Report가 일부 Query 실패를 허용할지 명확히 정하는 것이 중요합니다.

##### Q8. 동적 Scheduler를 어떻게 구성했습니까?

**답변**

DB의 Report 설정을 읽어 Job별 Key와 Cron·활성 상태를 만들고, 현재 Task Registry와 비교했습니다. 신규는 등록하고 Cron이 바뀐 Job은 취소 후 재등록하며, 비활성·삭제된 설정은 Task를 취소했습니다. 중복 등록을 막기 위해 Registry와 Cache를 Thread-safe하게 관리하고 Reload API를 제공했습니다.

##### Q9. Scheduler가 중복 실행되면 어떻게 합니까?

**답변**

현재 구현 설명과 개선 방향을 구분해 답하겠습니다. Registry로 동일 Key의 중복 등록을 방지하는 것이 1차입니다. 여러 Instance로 확장된다면 Local Registry만으로 부족하므로 DB Lock, ShedLock, 분산 Lock 또는 Job 실행 상태의 원자적 갱신이 필요합니다. Report의 `START` 상태와 실행 ID를 활용해 Idempotency도 보강할 수 있습니다.

##### Q10. Transaction은 어디에 적용해야 합니까?

**답변**

DB에서 함께 성공·실패해야 하는 상태 변경에 적용합니다. 외부 OpenSearch·File 생성·알림 호출까지 하나의 DB Transaction으로 묶을 수는 없으므로 상태를 `NEW→START→SUCCESS/FAIL`로 분리하고 실패 시 보상·재시도 가능한 구조를 택합니다. 외부 Side Effect가 있는 기능은 Transaction보다 Workflow 상태와 Idempotency가 중요할 수 있습니다.

#### 4. OpenSearch 질문

##### Q11. Composite Aggregation을 사용한 이유는 무엇입니까?

**답변**

High-cardinality Bucket을 한 번에 모두 가져오는 Terms Aggregation은 Bucket 수와 Memory 제한에 걸릴 수 있습니다. Composite Aggregation은 `after_key`를 사용해 Bucket을 Page 단위로 순회할 수 있어 대량 통계 조회에 적합합니다. KST Log·CASL 통계에서 이런 구조를 적용했습니다.

##### Q12. Scroll과 Search After의 차이를 설명해 보세요.

**답변**

Scroll은 특정 시점의 검색 Context를 유지하며 대량 Data를 순차 추출할 때 편리하지만 Context Resource를 사용하므로 사용자 Paging에는 적합하지 않습니다. Search After는 Sort Key를 기반으로 다음 Page를 요청해 Stateless에 가깝고 실시간 Paging에 유리합니다. Excel·Batch 추출과 사용자 화면 요구를 구분해 선택해야 합니다.

##### Q13. Shard를 늘렸는데 성능이 떨어진 이유는 무엇입니까?

**답변**

단일 Node 환경에서는 Shard를 늘려도 물리 Node 병렬성이 늘지 않고, Segment·Thread·Metadata·Merge Overhead가 증가할 수 있습니다. 시험에서 Shard 1·3은 약 10만 건/초였지만 Shard 5는 약 9.5만 건/초였습니다. Shard는 많을수록 좋은 값이 아니라 Node 수, 보존량, Query Pattern, Shard당 문서 한계를 함께 봐야 합니다.

##### Q14. Segment와 Merge가 왜 Indexing을 막습니까?

**답변**

Lucene Segment는 불변 구조라 새 문서와 Update가 새로운 Segment를 만듭니다. 작은 Segment가 빠르게 쌓이면 Merge가 Disk I/O와 CPU를 사용해 합쳐야 합니다. 입력 속도가 Merge 속도를 넘으면 Backlog가 생기고 Write Thread·Queue가 포화돼 429로 이어질 수 있습니다. 저희 시험에서는 Hardware 전체 사용률만으로 설명되지 않아 Segment·Merge·Write Queue를 함께 확인했습니다.

##### Q15. Refresh Interval을 늘리면 무엇이 달라집니까?

**답변**

검색 가능해지는 주기가 길어져 실시간성이 낮아지지만 작은 Segment 생성 빈도와 Refresh 비용을 줄일 수 있습니다. 시험에서는 1초와 5초를 비교했습니다. 운영에서는 사용자에게 필요한 검색 지연과 Indexing Throughput의 Trade-off로 결정합니다.

#### 5. Kafka·Pipeline 질문

##### Q16. 왜 Fluent Bit Worker보다 Process 수가 중요했습니까?

**답변**

시험한 Kafka Input Plugin의 병렬 처리 제약 때문에 한 Process 안의 Worker만 늘려서는 처리량이 비례하지 않았습니다. 독립 Consumer Process를 늘리고 Kafka Partition과 대응시키자 처리량이 개선됐습니다. 최종적으로 8 Partition과 8 Process×Worker 1에서 전 구간 약 10만 건/초를 확인했습니다.

##### Q17. `acks=0`을 사용한 이유와 위험은 무엇입니까?

**답변**

최대 Throughput과 Pipeline 상한을 측정하는 시험 목적이어서 Broker 응답을 기다리지 않는 `acks=0`을 사용했습니다. 하지만 전송 실패를 Producer가 확인할 수 없어 Data 유실 위험이 큽니다. 운영 환경이라면 요구되는 전달 보장에 따라 `acks=all`, Retry, Idempotence, Replication을 함께 검토해야 합니다.

##### Q18. Kafka에서 Exactly-once를 어떻게 생각합니까?

**답변**

Kafka의 Idempotent Producer와 Transaction이 지원하는 범위가 있지만 외부 OpenSearch까지 포함한 End-to-End Exactly-once는 별도 설계가 필요합니다. Event Key, 중복 허용 정책, Consumer Offset Commit 시점, 목적지의 Idempotent Write를 함께 봐야 합니다. 제 시험은 Throughput 중심이었기 때문에 Exactly-once를 달성했다고 말하지 않습니다.

##### Q19. 10만 건/초를 어떻게 측정했습니까?

**답변**

Generator의 실제 전송 TPS, Kafka 처리량, Fluent Bit 처리량, OpenSearch Indexing Rate를 분리했습니다. Prometheus·Grafana와 Component Metric을 사용했고, EventData와 NormalizedData를 각각 5만 건으로 구성했습니다. Generator 목표값만으로 성공을 판단하지 않고 최종 색인 구간까지 약 10만 건인지 확인했습니다.

##### Q20. Process와 Thread 중 무엇을 선택합니까?

**답변**

Python CPU 작업은 GIL 때문에 Process가 유리할 수 있고, Network I/O는 Thread도 유효합니다. 부하 도구에서는 실제 Target Rate와 Library 동작을 비교하기 위해 두 Mode를 제공했습니다. Process Mode는 격리와 CPU 활용이 좋지만 Startup·Memory·IPC 비용이 있고, Thread는 공유가 쉽지만 경쟁 조건과 GIL을 고려해야 합니다.

#### 6. DB·SQL·Data 정합성 질문

##### Q21. `COMM_NUM`을 `MTR_NUM`으로 바꾼 이유는 무엇입니까?

**답변**

`COMM_NUM`은 통신번호라 변경 가능하지만 `MTR_NUM`은 계량기를 식별하는 고유 번호였습니다. 과거 Event와 현재 Master를 변경 가능한 값으로 Join하면 통계가 누락될 수 있어 `MTR_NUM`으로 바꿨습니다. 수정 전·후, 통신번호 변경, Event Type 증가·감소 Case를 만들어 Count를 검증했습니다.

##### Q22. Join Key 변경의 위험은 무엇입니까?

**답변**

신규 Key의 Unique 여부, Null, 과거 Data의 채움 상태, 중복 Row, Index 유무를 확인해야 합니다. Query 결과 Count뿐 아니라 실행계획과 운영 Data의 예외 Case도 봐야 합니다. 당시에는 개발 환경에 운영 Data를 복제해 AS-IS/TO-BE Count로 영향 범위를 확인했습니다.

##### Q23. NiFi State가 왜 중요했습니까?

**답변**

`GenerateTableFetch`는 Maximum Value State를 기준으로 다음 Data를 읽습니다. Query 조건만 과거로 돌려도 State보다 작은 Row는 다시 읽히지 않을 수 있습니다. 운영 State를 손상하지 않도록 Test Processor를 분리하고 `initial.maxvalue`를 조정해 Source와 Target을 비교했습니다.

##### Q24. Excel 10만 건은 어떻게 처리했습니까?

**답변**

SCG Dashboard 최종 Code는 전체 결과를 한 번에 받지 않고 100행 단위로 API를 호출해 Excel에 누적 기록합니다. 총 Count가 기본 10만 건을 넘으면 방어합니다. 초기 Patch에는 100만 Row 분할·ZIP Logic이 있었지만 최종 Source에서 바뀌었기 때문에 현재 경력에는 10만 건 제한 구조만 사용합니다.

#### 7. Message Queue·실시간 질문

##### Q25. ActiveMQ와 WebSocket을 어떻게 연결했습니까?

**답변**

CXL Orchestrator에서 Host·Memory·Script 제어 요청을 Control Queue로 전달하고, 응답 Message를 수신 Service에서 처리한 뒤 WebSocket Session에 Broadcast했습니다. Browser가 Queue에 직접 연결하지 않고 Backend가 Message 계약과 사용자 Session을 중계하는 구조였습니다.

##### Q26. WebSocket Session 관리에서 주의할 점은 무엇입니까?

**답변**

동시 연결·종료 중 Collection 수정, 비정상 종료 Session 정리, 느린 Client, Broadcast 예외 격리가 중요합니다. CXL에서는 `CopyOnWriteArraySet`으로 Session Collection의 동시 수정을 처리했습니다. 연결 수가 많다면 Copy 비용과 Backpressure, 사용자별 Topic 분리도 고려해야 합니다.

##### Q27. SSE와 WebSocket은 언제 선택합니까?

**답변**

Server→Client 단방향 Event가 중심이면 HTTP 기반 SSE가 단순하고 재연결·Event ID를 활용하기 좋습니다. 양방향 저지연 통신이 필요하면 WebSocket이 적합합니다. KST에서는 알림·AI Event와 Dashboard 요구에 따라 SSE·WebSocket을 사용했고, CXL은 실시간 제어 결과와 상태에 WebSocket을 사용했습니다.

#### 8. Protocol·Desktop 질문

##### Q28. IEEE C37.118 Packet을 어떻게 모델링했습니까?

**답변**

Header의 SYNC, Frame Type, Version, Frame Size, ID Code, SOC, FRACSEC를 공통으로 해석하고 Configuration에 따라 PMU 수, Phasor·Analog·Digital Field의 반복 길이를 계산했습니다. 2005와 2011 Version 분기를 두고 실패 Packet에서는 Byte·Binary와 규격 설명을 함께 표시했습니다.

##### Q29. Binary Parsing에서 가장 중요한 것은 무엇입니까?

**답변**

Endianness, Field 길이, Signed 여부, Offset 증가, 가변 반복 구간, Frame 전체 길이 검증입니다. 한 Field의 Offset이 틀리면 이후 전체 해석이 어긋나므로 Field별 시작·끝 위치를 추적하고 Wireshark Sample과 교차검증했습니다.

##### Q30. 왜 WPF에서 WinForms로 바꿨습니까?

**답변**

WPF·MVVM 자체가 나빠서가 아니라 제품 일정, 기존 Windows Component, ReportViewer와 팀의 유지보수 환경을 고려했을 때 WinForms가 더 적합했습니다. Prototype 단계에서 전환해 PMU·Scenario·History·Packet·Report 흐름을 완성했습니다. 현재라면 전환 기준과 Spike 결과를 문서화해 Team 의사결정으로 남기겠습니다.

##### Q31. OPC DA와 OPC UA 차이는 무엇입니까?

**답변**

OPC DA는 COM/DCOM 기반이라 Windows 의존성과 Bitness·DCOM 설정 이슈가 큽니다. OPC UA는 Platform 독립적인 TCP·Security Model과 표준화된 Address Space를 제공합니다. ONEWAY 세미나에서는 DA의 Client·Simulator·DCOM 환경과 UA의 Endpoint·Tag 조회 절차를 정리했습니다. UA의 TX→RX 전송은 오류로 미완료였다고 자료에 기록했습니다.

#### 9. 장애·운영 질문

##### Q32. 장애를 분석하는 순서는 무엇입니까?

**답변**

먼저 사용자 증상과 성공 기준을 고정합니다. 다음으로 요청→Service→DB·외부 System→응답 Path를 나누고, 각 경계의 입력·출력과 시간·상태를 확인합니다. 재현 조건을 만든 뒤 가장 작은 변경으로 가설을 검증하고, 수정 후 정상 Case와 반대 Case를 함께 확인합니다.

##### Q33. 가장 기억에 남는 운영 문제는 무엇입니까?

**답변**

OpenSearch 장기 부하의 429입니다. CPU·Memory가 남아 단순 Resource 부족으로 보기 어려웠고 Segment·Merge·Write Queue까지 내려가 원인을 분석했습니다. 정상 System Metric만 보고 문제를 종결하면 안 된다는 점을 배웠습니다.

##### Q34. 실패 상태는 어떻게 설계합니까?

**답변**

작업 ID와 상태 전이를 명확히 하고, 실패 원인·재시도 가능 여부·마지막 성공 시점을 남깁니다. Report Manager에서는 `NEW→START→SUCCESS/FAIL`로 관리했습니다. 외부 File이나 Message가 있으면 중복 실행과 부분 성공을 고려해 Idempotency Key나 보상 Logic을 설계합니다.

##### Q35. Logging에 무엇을 남깁니까?

**답변**

누가·언제·어떤 작업을·어떤 대상에 요청했고 결과와 소요 시간이 무엇인지 남깁니다. 민감정보와 대량 Payload는 그대로 남기지 않습니다. 비동기 작업은 Correlation ID·Job ID가 있어야 요청과 결과를 연결할 수 있습니다.

#### 10. 행동 면접

##### Q36. 본인의 강점은 무엇입니까?

**답변**

낯선 Domain을 기능·Data·상태 흐름으로 빠르게 구조화하는 능력입니다. CXL, IEEE Protocol, 보안관제, 도시가스, OPC처럼 다른 Domain에서도 화면→API→Service→DB·외부 연동 순서로 전체 Path를 이해하고 실제 수정 지점을 찾았습니다.

##### Q37. 약점은 무엇입니까?

**답변 예시**

초기에는 문제 범위를 넓게 파악하려고 많은 자료를 한 번에 정리하는 편이었습니다. 장점도 있지만 작은 수정에서도 시간이 늘어날 수 있었습니다. 최근에는 먼저 성공 기준과 영향 경계를 적고, 반드시 확인할 Path와 후속 조사 항목을 분리해 작업합니다.

피할 답변:

- 완벽주의
- 일을 너무 열심히 함
- 소통이 부족하지만 고치지 못함

##### Q38. 의견 충돌은 어떻게 해결합니까?

**답변**

선호를 주장하기보다 의사결정 기준을 합의하려 합니다. SVT Framework 전환처럼 일정, 기존 Component, 유지보수성, 구현 위험을 기준으로 비교하고 작은 Prototype 결과를 근거로 결정합니다. 결정 후에는 선택하지 않은 대안과 전환 이유를 기록합니다.

##### Q39. 실수한 경험이 있습니까?

**답변**

GasDot CO 예방 Event Query에서 Parameter 이름이 Model의 `targetDate`와 맞지 않는 오류가 있었고 후속 Commit으로 수정했습니다. 이 경험 이후 MyBatis Parameter와 DTO Field는 Compile 단계에서 잡히지 않을 수 있으므로 Mapper Test와 실제 Query Binding을 별도로 확인합니다.

##### Q40. 모르는 기술을 맡으면 어떻게 합니까?

**답변**

먼저 제품의 사용자 흐름과 실행 가능한 환경을 확보합니다. ONEWAY에서는 GUI에서 시작해 CEM API, CEMM, DPE Handler, DTE Queue를 추적하고 Protocol별 Test Tool을 설치했습니다. 이후 Source 위치·설정·Data Flow를 문서로 남겨 다음 수정이 빨라지도록 합니다.

##### Q41. 왜 이직하려고 합니까?

**답변 초안**

현재 회사에서 짧은 기간 동안 여러 산업·보안 제품의 Full-stack 개발과 성능시험을 경험했습니다. 이제는 Java Backend와 Data Platform 역량을 더 깊게 축적하고, Code Review·자동화된 Test·대규모 운영 Feedback이 있는 환경에서 한 제품을 장기적으로 성장시키고 싶어 이직을 준비하고 있습니다.

주의:

- 현 회사 비판 금지
- “연봉만”을 이유로 말하지 않음
- 넓게 경험했지만 이제 깊이를 만들고 싶다는 방향

#### 11. 압박·검증 질문

##### Q42. 정말 10만 건/초를 처리한 것이 맞습니까?

**답변**

네, 특정 단일 Server 시험 환경에서 Generator 목표값뿐 아니라 Kafka, Fluent Bit, OpenSearch Indexing Rate가 모두 약 10만 건/초인 구성을 확인했습니다. 다만 정확한 유실률과 운영 Cluster 결과로 일반화하지 않으며, `acks=0` 등 Throughput 우선 설정이 포함됐습니다.

##### Q43. 60억 건을 정상 처리했다고 써도 됩니까?

**답변**

“60억 건까지 누적 구간 Query를 측정했다”가 정확합니다. 모든 Query가 빠르게 성공한 것은 아니며 공격 IP Top 10처럼 60초 Timeout에 도달한 구간도 있습니다. 그래서 대량 누적에서 Query가 Segment 상태에 따라 비선형적으로 변한다는 분석 사례로 사용합니다.

##### Q44. SCG Dashboard를 본인이 만들었습니까?

**답변**

전체 신규 Dashboard의 주 담당자는 다른 담당자였습니다. 제 공식 담당은 NiFi 통합 Flow, Event 통계 Join, CO 예방 Event, PLC Collector 재수집이었습니다. 다만 Git으로 Dashboard Details·Excel·검색·Procedure Mapping을 직접 보완한 근거가 있어 “후속 개발·QA”라고 표현합니다.

##### Q45. ONEWAY에 Commit이 없는데 경력으로 넣는 이유는 무엇입니까?

**답변**

제품 개발에는 참여하지 않았습니다. 15개 저장소의 레거시 구조와 TX/RX·GUI/CEM/CEMM/DPE/DTE 흐름을 분석해 64장 세미나 자료를 제작·발표했습니다. FTP 확인 절차와 OPC DA/UA·APP 시험 방법을 정리했고 UA 전송 오류도 명시했습니다. 별도 2,661줄 참고 문서는 직접 저작 여부가 확인되지 않아 제 작성량으로 말하지 않습니다.

##### Q46. 약 40종 Generator를 모두 직접 만들었습니까?

**답변**

저장소 최신 Commit 기준 장비별 Module은 39개이고 현재 작업 Tree에는 40개가 있습니다. 모든 장비 Sample을 단독 작성하거나 모두 운영 활성화했다고 주장하지 않습니다. Data Set·Parsing Rule·Generator 자산의 구축과 확장, 부하 실행 구조를 담당했다고 표현합니다.

#### 12. System Design 설명 순서

##### KST Report Manager

```text
WebMgr·Scheduler
      ↓
Report Controller
      ↓
Report Service
  ├─ PostgreSQL 조회
  ├─ OpenSearch 12개 병렬 조회
  └─ Jasper 한·영 Template
      ↓
PDF·XLSX·DOCX File
      ↓
History·Audit·Notification·Retention
```

설명 Point:

- 요청 생성과 자동 Scheduler의 공통 Service
- 병렬 조회의 독립성
- 상태 전이와 실패 처리
- 설정 Reload와 중복 Job 방지
- File·DB 정합성

##### Data Pipeline

```text
Python SYSLOG Generator
  ├─ EventData
  └─ NormalizedData
        ↓
Kafka Partition
        ↓
Fluent Bit Process
        ↓
OpenSearch Shard
        ↓
Query·Aggregation

관측: Prometheus·Grafana·JMX·Process Exporter
```

설명 Point:

- 목표 TPS와 실제 TPS 분리
- Partition↔Process 병렬성
- Indexing과 Query Trade-off
- 장기 Segment·Merge
- 시험 설정과 운영 설정의 차이

##### CXL Orchestrator

```text
Browser
  ↕ REST·WebSocket
Orchestrator
  ├─ Controller·Service·Mapper
  ├─ PostgreSQL
  └─ ActiveMQ
        ↓
Control Plane·Agent·Resource Manager
```

설명 Point:

- CRUD와 원격 제어의 차이
- 변경 Field 감지
- Message 요청·응답과 Transaction
- WebSocket Session
- 제품 Type CMM-D·B·ALL

#### 13. 회사에 물어볼 질문

##### Backend 조직

- Backend Service의 배포 단위와 주요 Traffic 규모는 어느 정도인가요?
- 장애 분석과 Postmortem은 어떤 방식으로 진행하나요?
- Code Review와 Test 기준은 어떻게 운영하나요?
- 동기·비동기 통신을 선택하는 기준이 있나요?

##### Data·Search

- OpenSearch·Kafka의 운영 규모와 가장 큰 병목은 무엇인가요?
- Index Lifecycle·Schema·Data 품질은 어느 Team이 소유하나요?
- 성능시험 환경과 Production 관측 지표는 얼마나 유사한가요?

##### 성장

- 입사 후 3개월 동안 기대하는 역할은 무엇인가요?
- 이 포지션에서 뛰어난 성과를 내는 개발자의 공통점은 무엇인가요?
- 설계 Review와 기술 공유 문화가 있나요?

피할 질문:

- 검색하면 바로 나오는 회사 정보
- 초반부터 휴가·야근만 묻기
- 전 직장과 비교하는 질문

#### 14. 면접 전 최종 Checklist

##### 사실

- [ ] 입사일·재직 기간 확인
- [ ] ONEWAY 수행 기간 확인
- [ ] 공개 가능한 고객명 확인
- [ ] 성능시험 Hardware 사양 확인
- [ ] 운영·납품·검수 여부 확인

##### 기술

- [ ] Spring Proxy·Transaction·AOP
- [ ] `CompletableFuture` Executor·Timeout·Exception
- [ ] Kafka Ack·Offset·Consumer Group
- [ ] OpenSearch Shard·Segment·Merge·Composite
- [ ] DB Index·실행계획·Isolation
- [ ] WebSocket·SSE Lifecycle
- [ ] IEEE Frame 하나를 종이에 설명

##### 답변

- [ ] 30초·60초 자기소개
- [ ] Pipeline STAR 2분
- [ ] Report Manager STAR 2분
- [ ] 실패 경험 WPF→WinForms
- [ ] 기여도 경계 SCG·ONEWAY
- [ ] 이직 사유
- [ ] 지원 회사 질문 3개

#### 15. 면접 답변 원칙

1. 결론부터 1문장으로 답한다.
2. 상황 설명은 짧게 하고 본인의 판단과 Action을 길게 말한다.
3. 수치는 시험 조건과 함께 말한다.
4. 모르는 부분은 추측하지 않고 당시 범위와 개선 방향을 구분한다.
5. Team 성과를 개인 성과로 바꾸지 않는다.
6. “왜 그렇게 했는가”와 “다시 한다면 무엇을 바꿀 것인가”를 준비한다.
7. Commit 수보다 Code·Data·운영 결과를 설명한다.

### k3s에서 Local PV와 Longhorn을 나눈 이유는 무엇인가요?

Kafka·IoTDB는 서버와 디스크를 고정해 정적 Local PV를 사용했습니다. Redis·MariaDB와 관측 서비스는 Longhorn 볼륨으로 구성했습니다. VM 디스크 고갈에서 Kafka, Longhorn, DB의 영향이 이어지는 것을 확인했고 운영 전용 디스크와 재시험 조건까지 기록했습니다. [IDPP 근거](../fornet/project-idpp.md)

<a id="strategy"></a>

## 지원 직무와 공고 대응

### 08. 주력 포지션 및 지원 전략

> 목적: 지금까지의 경험을 어떤 개발자 포지션으로 설명할지 결정하고, 채용공고마다 프로젝트 우선순위와 Keyword를 바꾸기 위한 기준 문서다.

#### 1. 결론

##### 1순위 포지션

**Java·Spring 기반 산업·보안 Platform Backend 개발자**

권장 Headline:

> 산업·보안 Domain의 관리 Platform을 REST API, DB, OpenSearch, Message Queue, 실시간 Dashboard까지 개발한 Backend Engineer

이 포지션이 가장 적합한 이유:

- KSTV6 WebMgr·API와 Report Manager의 기능별 변경 이력으로 Java·Spring 실무 근거가 가장 풍부함
- CXL Orchestrator 211건에서 API–DB–MQ–WebSocket–UI의 수직 개발 경험이 있음
- PostgreSQL·MariaDB·Oracle·SQLite와 MyBatis 기반 Data 처리 경험
- OpenSearch, Kafka, ActiveMQ, Scheduler, 비동기 조회 등 Backend 채용에서 설명 가능한 기술 축
- 신규 구축과 Legacy 유지보수를 모두 경험

##### 2순위 포지션

**Data Platform·Search·성능 Engineering 성격의 Backend 개발자**

권장 Headline:

> OpenSearch·Kafka 기반 대량 Data 처리와 장기 성능시험 경험을 갖춘 Backend Engineer

근거:

- Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초
- 48시간·최대 60억 건 누적 Query
- 약 40억 건 부근 Segment·Merge·Write Block 분석
- KST OpenSearch Composite Aggregation·Scroll·통계·Excel·Report
- Python Multi-process·Quota 부하 도구

주의점:

- 운영 Data Platform을 장기간 직접 운영한 SRE 경력으로 확대하지 않음
- Kafka Broker·OpenSearch Cluster 자체를 개발한 것으로 쓰지 않음
- 성능시험 환경의 `acks=0` 등을 운영 권장 설정처럼 설명하지 않음

##### 3순위 포지션

**보안·산업 Protocol 제품 개발자**

권장 Headline:

> 보안관제·CXL·IEEE C37.118·OPC 등 산업 Domain을 빠르게 해석하고 제품 기능으로 구현한 Software Engineer

근거:

- KST 보안관제·취약점·SYSLOG
- SVT IEEE C37.118 Packet Parsing
- ONEWAY OPC UA·DA·FTP·DBMS 단방향 전송
- CXL Host·Memory 원격 제어

주의점:

- 보안 연구원·침해대응 Analyst 경력과는 다름
- Embedded Firmware·Driver 개발 경력으로 보이게 쓰지 않음

#### 2. 피하는 것이 좋은 1차 포지셔닝

##### Frontend 전담 개발자

JavaScript·Thymeleaf·Dashboard 경험은 충분하지만 경력의 중심은 Backend와 Domain Logic이다. Frontend 전담으로 지원하면 React·Vue·TypeScript Production 경험이 약점이 된다.

##### 순수 Data Scientist·AI Engineer

AI SYSLOG Package 연동과 Data Pipeline 경험은 있으나 Model 학습·평가·Feature Engineering이 주 경력이 아니다.

##### DevOps·SRE 전담

설치, Systemd, Monitoring, 성능시험 경험은 있지만 Kubernetes·Cloud IaC·대규모 운영 On-call이 핵심 근거는 아니다.

##### C# Desktop 전담

SVT·ONEWAY 경험이 있으나 최근 가장 큰 범위는 Java·Spring이다. 산업용 Windows Application 채용에 선별적으로 활용한다.

#### 3. 경력 Branding

##### 추천 핵심 문장

> 복잡한 산업·보안 Domain을 빠르게 이해하고, Backend API와 Data 처리부터 운영 화면·자동화까지 연결해 실제 사용 가능한 기능으로 완성하는 개발자입니다.

##### 기술 중심 문장

> Java·Spring Boot를 중심으로 PostgreSQL·OpenSearch·Kafka·WebSocket을 활용한 관리 Platform과 대량 Data 처리 기능을 개발했습니다.

##### 문제 해결 중심 문장

> Identifier, State, 동시성, Message 흐름, Segment·Merge 같은 운영 문제를 재현 가능한 조건으로 분해하고 Code와 Data 양쪽에서 해결해 왔습니다.

##### 성능 중심 문장

> Python 부하 도구를 직접 구성하고 Kafka–Fluent Bit–OpenSearch의 구간별 병목을 측정해 전 구간 약 10만 건/초 처리 구성을 도출했습니다.

#### 4. 경력에서 반복되는 강점

##### 4.1 낯선 Domain을 빠르게 제품 구조로 변환

- CXL Memory와 Host 제어
- IEEE C37.118 Binary Frame
- 보안관제 Log·취약점·AI Parsing
- 도시가스 검침·Event·통계
- 단방향 전송·OPC

면접 표현:

> Domain 문서를 먼저 기능·Data·상태 흐름으로 분해하고, 화면에서 시작해 API·Service·Mapper·외부 연동 순서로 추적합니다.

##### 4.2 수직 범위

- Controller–Service–Mapper–DB
- Message Queue–WebSocket–Dashboard
- Scheduler–Report–이력–알림
- Generator–Kafka–Consumer–OpenSearch–Query

면접 표현:

> 특정 계층만 수정하기보다 요청이 들어와 Data가 저장·전달되고 사용자에게 보이는 전체 Path를 확인하는 편입니다.

##### 4.3 운영 관점

- 변경된 Field만 저장
- Group 삭제 업무 제약
- Thread-safe Session·Cache
- PID·Signal·Process Tree 종료
- Report 상태·감사·보존기간
- NiFi State 보호

면접 표현:

> 기능 성공 여부뿐 아니라 재실행, 중복, 실패 상태, 종료, 보존기간과 운영자가 확인할 방법까지 함께 봅니다.

##### 4.4 실험과 계측

- Component별 TPS
- Query 종류별 응답 시간
- Shard·Refresh·Process·Worker 비교
- 수정 전·후 Count 검증
- 정상·취약 Script 교차시험

면접 표현:

> 개선을 주장하기 전에 입력과 출력, 중간 상태를 나누고 동일한 조건의 비교 결과를 남기려 합니다.

#### 5. 채용공고 유형별 프로젝트 우선순위

##### 5.1 Java Backend·Platform

1. KSTV6 WebMgr
2. KSTV6 Report Manager
3. CXL Orchestrator
4. Data Pipeline
5. SCG

이력서 Keyword:

- Java 17·21
- Spring Boot
- REST API
- MyBatis
- PostgreSQL·MariaDB
- OpenSearch
- Kafka·ActiveMQ
- Scheduler
- 비동기·동시성
- WebSocket·SSE

줄일 항목:

- ONEWAY 상세
- SVT UI 세부 사항
- SCG Dashboard 화면 세부

##### 5.2 Search·Data Platform

1. Data Pipeline
2. KST OpenSearch
3. Report Manager
4. SCG NiFi
5. CXL Messaging

이력서 Keyword:

- Kafka Partition
- Fluent Bit
- OpenSearch Shard·Refresh·Merge
- Composite Aggregation
- Scroll
- Multi-process
- TPS·Latency
- Prometheus·Grafana
- 장기 부하

추가 준비:

- Kafka Consumer Group·Offset·Delivery Semantics 복습
- OpenSearch Mapping·Segment·Shard Allocation 정리
- 시험 환경 Hardware 사양 확보

##### 5.3 보안 Solution Backend

1. KSTV6
2. KST Report Manager
3. Data Pipeline·SYSLOG
4. ONEWAY
5. SVT

이력서 Keyword:

- 보안관제
- 원시·정규화 Log
- SYSLOG Parsing
- 취약점 점검
- 감사·알림
- 접근 제어
- Report
- OpenSearch

추가 준비:

- 취약점 점검 기준의 공개 가능한 범위
- SYSLOG Parsing Rule의 입력·출력 예시
- 보안 제품에서 감사 Event가 필요한 이유

##### 5.4 산업용 Software·Protocol

1. SVT
2. CXL
3. ONEWAY
4. SCG
5. KST

이력서 Keyword:

- IEEE C37.118
- Binary Packet
- Wireshark
- OPC UA·DA
- CXL Memory
- Device·Host
- 실시간 상태
- Windows Application

추가 준비:

- Protocol Frame 하나를 Whiteboard로 설명
- Endianness·Length·Version 분기
- OPC DA와 UA 차이

##### 5.5 운영 Platform·Legacy 현대화

1. SCG
2. KSTV6
3. CXL
4. SVT
5. ONEWAY

이력서 Keyword:

- Legacy Migration
- Data 정합성
- Identifier
- Scheduler
- 운영·개발 환경 분리
- Rollback
- Test Flow
- Source 분석

#### 6. 채용공고 적합도 평가표

각 공고를 100점으로 평가한다.

| 항목 | 배점 | 판단 기준 |
|---|---:|---|
| Java·Spring | 20 | 필수·우대 Stack이 현재 주력과 일치 |
| DB·SQL | 10 | PostgreSQL·MariaDB·Oracle·MyBatis 활용 가능 |
| Search·Messaging | 15 | OpenSearch·Kafka·MQ 경험 활용 |
| 제품 Domain | 10 | 보안·산업·관리 Platform과 유사 |
| 경력 연차 | 10 | 요구 연차가 과도하지 않음 |
| 업무 범위 | 10 | 신규 개발·운영 개선을 함께 평가 |
| 성장 가능성 | 10 | Cloud·분산 System 등 다음 단계 경험 가능 |
| 회사·제품 | 10 | 자체 제품·기술 축적 가능 |
| 근무 조건 | 5 | 위치·보상·근무 방식 |

지원 기준:

- 75점 이상: 이력서 맞춤 수정 후 우선 지원
- 60~74점: 요구 기술 Gap이 1~2개면 지원
- 45~59점: 강한 Domain 일치가 있을 때만 검토
- 44점 이하: 시간 대비 효율이 낮음

#### 7. 공고 Keyword 매핑 방법

공고 문구가 다음과 같을 때 사용할 근거:

| 공고 Keyword | 연결할 경력 |
|---|---|
| 대용량 Traffic | Pipeline 10만/s·20만 입력 시험 |
| 검색 Platform | KST OpenSearch·Composite Aggregation |
| Batch·Scheduler | Report Manager 5개 동적 Job |
| 실시간 | CXL ActiveMQ·WebSocket, KST SSE·Dashboard |
| 성능 개선 | Pipeline Process·Partition 구조, Dashboard 병렬화 |
| Legacy 개선 | SVT Framework 전환, KSTV5→V6, SCG Identifier |
| Data 정합성 | SCG `COMM_NUM`→`MTR_NUM`, NiFi State |
| 장애 대응 | OpenSearch 429·Merge, 알림 경쟁 조건 |
| 문서화 | 성능 Report·설치 지침·ONEWAY 64장 직접 제작 세미나 |
| 협업 | 공식 담당과 Dashboard 후속 보완 범위 구분 |

#### 8. 이력서 Project 배치 규칙

##### 1페이지 이력서

- KSTV6·Report Manager: 5~6개 Bullet
- Data Pipeline: 3개 Bullet
- CXL 또는 SVT: 2~3개 Bullet
- SCG·ONEWAY: 한 줄 요약

##### 2페이지 경력기술서

- KSTV6: 25%
- Report Manager: 15%
- Data Pipeline: 20%
- CXL: 15%
- SVT: 10%
- SCG: 10%
- ONEWAY: 5%

##### 산업 Protocol 공고

- SVT와 ONEWAY를 합쳐 30~35%로 확대
- KSTV6의 일반 UI 항목을 줄임

#### 9. 지원 전 보완 우선순위

##### 가장 먼저 확인할 사실

1. 정확한 입사일·재직 기간
2. 부서·팀 인원과 본인 역할
3. 각 프로젝트 운영·납품 여부
4. 공개 가능한 고객명
5. 실제 사용 장비·사용자·Site 수
6. 성능시험 Server 사양과 10만/s 유지 시간
7. Report 병렬화·Dashboard 병렬화 전후 시간

##### 기술 학습 우선순위

1. Spring Transaction·Proxy·AOP
2. Java 동시성·`CompletableFuture`·Executor
3. Kafka Delivery Semantics·Consumer Group·Offset
4. OpenSearch Shard·Segment·Merge·Query DSL
5. DB Index·실행계획·Transaction Isolation
6. Docker·Linux 운영
7. Cloud 또는 Kubernetes 기초

##### Portfolio 보완

회사 Code를 공개하지 않고 다음을 별도 구현할 수 있다.

- 가상 SYSLOG→Kafka→OpenSearch Mini Pipeline
- 동적 Scheduler Demo
- Binary Packet Parser Demo
- WebSocket 상태 Dashboard
- 성능 Test 결과를 익명화한 Architecture Diagram

#### 10. 지원 회사 유형

##### 우선 검토

- 보안관제·SIEM·SOAR·EDR 제품 회사
- 산업용 Data Platform·설비 Monitoring 회사
- Search·Log Analytics Platform
- 대규모 관리 Console·운영 Platform
- 에너지·스마트팩토리·IoT Backend

##### 성장 관점에서 좋은 환경

- Backend와 Data Platform 조직이 분리돼 Peer Review가 가능한 회사
- 성능·Observability를 실제 운영에서 다루는 회사
- 자체 제품과 Roadmap이 있는 회사
- 장애 분석과 Postmortem 문화가 있는 회사
- 테스트·배포 자동화를 개선할 기회가 있는 회사

#### 11. 지원 시 위험한 표현

사용하지 않는 표현:

- “947개 Commit으로 높은 생산성 증명”
- “OpenSearch 60억 건을 완벽하게 처리”
- “Kafka 20만 건/초 처리 달성”
- “SCG Dashboard 전체 개발”
- “CO 60분 연속 조건 구현”
- “ONEWAY Core 개발”
- “AI Model 개발”
- “CXL 전체 Architecture 설계”

대체 표현:

- “Git 작성자와 기능별 변경에서 개인 담당 범위 확인”(생산성 수치가 아닌 추적 범위)
- “특정 시험 환경에서 최대 60억 누적 구간 Query 측정”
- “20만 입력 시 중간·색인 약 14.7~14.8만/s 상한 확인”
- “SCG 공식 유지보수 4영역과 Dashboard 후속 보완”
- “현재값과 정확히 1시간 전 CO 값 비교”
- “ONEWAY 레거시 구조 분석·시험 절차 정리·64장 세미나 제작·발표”
- “AI SYSLOG Package·Rule 연동”
- “CXL Orchestrator 관리 Console 개발”

#### 12. 최종 추천 전략

1. 기본 이력서는 Java·Spring Backend로 고정한다.
2. KSTV6·Report Manager를 가장 최근이자 가장 넓은 경력으로 전면 배치한다.
3. Data Pipeline을 차별화 Project로 두어 성능·검색 역량을 보여 준다.
4. CXL은 MQ·WebSocket·원격 제어 경험으로 사용한다.
5. SVT는 Protocol·Binary Data 역량을 보여 줄 때 선택한다.
6. SCG는 Legacy·Data 정합성·운영 안정성을 증명한다.
7. ONEWAY는 Code 개발이 아니라 분석력·환경 구축·지식 이전 사례로 한정한다.

### Platform과 배포 자동화 직무에 지원할 때

IDPP로 폐쇄망 설치 자산 준비, k3s 부트스트랩, Cilium, GitOps, 상태 저장 서비스 구성과 VM 장애 분석을 설명할 수 있다. 파이프라인 사례에서는 부하 생성과 관측의 책임을, KSTV6 사례에서는 API·인증·보고서 구현 범위를 보강한다. 운영 전면 구축, 온콜 경험, SLA 수치는 확인이 필요하다. [IDPP 원고](../fornet/project-idpp.md#materials)

<a id="evidence-map"></a>

## 경력 근거 지도

### 박종성 경력 마스터 근거 지도

> 문서 성격: 최종 이력서나 자기소개서가 아니라, 2025-04부터 2026-10까지 Git으로 확인되는 업무를 꺼내 쓰기 위한 **증거 중심 정보 수집본**이다. 프로젝트별 상세 문서의 핵심 근거·표현 경계·추가 확보할 수치를 한곳에서 연결한다. KSTV5는 2026-11-17 조사 결과를 별도 상세 문서로 추가했다.

#### 1. 이번 감사에서 실제로 확인한 범위

| 프로젝트 | 본인 Code Commit | 전체 확인 방식 | 심층 확인 |
|---|---:|---|---|
| CXL Orchestrator | 211 | 전체 제목·날짜·변경 경로 분류 | 핵심 기능 14개 Patch·현재 Code |
| SVT Manager | 191 | 전체 제목·날짜·변경 경로 분류 | WPF→WinForms, Protocol, Packet 진단, RDLC |
| KSTV5 report-mgr·ui-svr | 31+37 | 15개 저장소 author 확인, 본인 68건 날짜·경로 분류 | 보고서 이식·SQL/잠금·관제 목록·로그 출력 대표 Patch와 현행 Code; [상세 근거](../fornet/project-kstv5.md#evidence) |
| KSTV6 WebMgr | 372 | 전체 제목·날짜·변경 경로 분류 | Engine API, OpenSearch, 동시성, Dashboard, 비동기 Report |
| KSTV6 Report Manager | 58/전체 63 | 개인 비병합 57건 | 초기 구축, Jasper, DB 암호화, 감사, 동적 Scheduler |
| Data Pipeline Tester | 16 | 개인 전체/비병합 16건, 초기 6건은 이전 기록 | Process·Batch·Quota·Kafka·운영 Script |
| SCG MDMS·GASDOT | 76건(비병합 71건), 개인 변경 10개 저장소 | 전체 27개 저장소의 author 재집계와 대표 Diff | 공식 담당 4영역과 Dashboard 후속 개발 |
| ONEWAY | 0 | 15개 저장소·전체 938개 이력의 Author 재조회 | 현재 Source, 직접 제작한 64장 세미나, 2,661줄 참고 분석 문서(저작 미확인) |

당시 확인한 본인 Code Commit 합계는 947건이었다(기존 조사 879건 + KSTV5 68건). 이 수치에는 Merge·Source 이관·대량 Resource 변경이 섞여 있어 생산성 지표로 사용하지 않는다. 의미는 업무를 어느 저장소와 Commit Chain에서 다시 설명할 수 있는지 보여 주는 **추적 가능성**에 있다.

#### 2. 근거 등급

| 등급 | 기준 | 사용할 수 있는 표현 |
|---|---|---|
| A | 본인 Author Commit + 실제 Patch·현재 Code + Test·작성자 명시 산출물 | “개발했다”, “구현했다”, “시험·분석했다” |
| B | 본인 Author Commit + Patch 또는 공식 역할 문서 중 하나 | “수정했다”, “보완했다”, “담당했다” |
| C | Ticket·Team 문서·설치 자산만 있고 개인 Code 근거 없음 | “분석했다”, “구축·검증했다”, “문서화·공유했다” |
| 보류 | 계획·빈 결과표·현재 미커밋 Code만 존재 | 이력서 정량 성과에서 제외 |

프로젝트별 적용:

- CXL: 핵심 Domain은 A, Transaction AOP 최종 적용은 보류
- SVT: PMU·Scenario·History·Protocol·Packet 진단·Report는 A
- KSTV6: 주요 WebMgr·Report Manager·취약점·AI Parsing은 A
- Data Pipeline: 시험·Report·Generator는 A, 미완료 Rollover·Transform Scenario는 보류
- SCG: 공식 담당 4영역은 A, Dashboard 전체 주도 Claim은 제외하고 후속 보완은 B
- ONEWAY: 레거시 구조 분석·64장 Seminar는 사용자 확인+산출물로 직접 기여, 설치·시험은 티켓/슬라이드 범위만 사용, Core 개발은 제외

#### 3. 경력 전체에서 드러나는 기술 축

##### 3.1 산업·보안 제품의 Full-stack 개발

- CXL Orchestrator에서 로그인, Group, Host, Memory, Script, Transaction, Dashboard를 Controller–Service–Mapper–UI–Message Queue로 연결
- KSTV6에서 Engine REST API, 관리 Console, OpenSearch, WebSocket·SSE, Report, 취약점, Process, Resource, Dashboard를 수직 개발
- SCG에서 NiFi–Raw Table–Batch–Oracle/MariaDB–API Procedure–Web Dashboard의 연결 구조를 유지보수

안전한 강점 표현:

> 산업·보안 Domain의 관리 Console을 Backend API, DB Query, 비동기 메시징, 실시간 화면까지 수직으로 구현하고 운영 Data 정합성 문제를 해결했다.

##### 3.2 Protocol·Binary Data 해석

- IEEE C37.118-2005/2011 Frame 모델과 Version 분기
- 실패 Packet Byte Parsing과 Field별 실패 위치 표시
- Wireshark Sample 기반 교차검증
- ONEWAY의 FTP·DBMS·OPC UA·OPC DA·Application Handler와 단방향 흐름 분석
- KST AI SYSLOG Parsing Rule과 장비별 Sample 검증

안전한 강점 표현:

> 표준·산업 Protocol을 문서 수준에서 끝내지 않고 실행 가능한 Frame·Parsing 모델과 운영자 진단 화면으로 변환했다.

##### 3.3 대량 Data·검색·성능 Engineering

- Python SYSLOG Generator의 Process·Thread·Batch·Quota 실행
- Kafka Producer LZ4·Batch·Queue·`acks=0` 시험용 Tuning
- Kafka–Fluent Bit–OpenSearch 전 구간 약 10만 건/초 구성 도출
- 12만 입력 시 OpenSearch 약 10.9만 건/초
- 20만 입력 시 Fluent Bit·OpenSearch 약 14.7~14.8만 건/초 상한 확인
- 48시간, 1억~60억 누적 구간 Query 측정
- 약 40억 건 부근 429·Segment Explosion·Merge Backlog·Write Block 분석
- KSTV6 OpenSearch Composite Aggregation·LIKE 검색·통계 조회·Excel·Dashboard 병렬화

안전한 강점 표현:

> 목표 TPS를 만드는 부하 도구부터 Pipeline 구간별 처리량, 장기 누적 조회, Lucene Segment·Merge 병목까지 계측해 구조 단위의 성능 개선안을 도출했다.

##### 3.4 운영 자동화와 신뢰성

- CXL Host·Group 변경 MQ, Script 실행·중지, WebSocket 상태 전파
- KST Report Manager의 DB 기반 동적 Scheduler, 보고서 이력·감사·알림·보존기간
- KST 알림 경쟁 조건, Dashboard Session·WebSocket, 비동기 Excel·Report
- SCG NiFi State를 고려한 과거 Data 재수집
- SCG PLC Collector의 이중 DataSource·Mapper·CNU 재수집 구조 정리
- Tester의 Named Instance·PID·Signal·Process Tree 종료

안전한 강점 표현:

> 반복 작업을 Scheduler·Batch·실행 Script로 자동화하고, 상태·이력·감사·알림·종료 처리를 함께 설계해 운영 가능한 기능으로 완성했다.

##### 3.5 Legacy 현대화·유지보수

- SVT의 WPF Prototype을 제거하고 WinForms로 재구축
- CXL Host API V2와 Dashboard 재구성
- KSTV5 기능을 KSTV6 REST·OpenSearch 기반으로 이관
- SCG의 변경 가능한 `COMM_NUM` Join을 안정적인 `MTR_NUM`으로 교체
- ONEWAY 구·신 Version의 Runtime·Module·Installer 비교

안전한 강점 표현:

> 기존 동작을 보존하면서 Framework·API·Data Model을 단계적으로 전환하고, 변경 가능한 식별자·State·Time Window에서 발생하는 정합성 문제를 재현해 수정했다.

#### 4. 프로젝트별 가장 강한 사실과 경계

##### 4.1 CXL ENABLER Orchestrator

강한 사실:

- 2025-04-08~07-04 본인 Commit 211건
- 신규 기능 53, 수정 82, 리팩터링 29, 운영·설정 19건으로 분류
- Host·Memory 관련 경로 105, Dashboard 80, Script·Application 51건
- Login→Group→Host→Memory→Script→Transaction→Dashboard의 제품 운영 흐름
- Group 삭제 시 소속 Host 존재 여부 방어
- Host 변경 필드만 저장하고 Demotion Enable·Disable을 별도 제어
- ActiveMQ 수신 결과를 WebSocket으로 전달하고 동시 Session Set 사용

경계:

- `@TransactionLog`의 ActiveMQ Send 적용은 현재 Code에서 주석·보류 상태
- 모든 CXL Module 전체를 개발한 것이 아니라 Orchestrator V2가 주 범위
- 미커밋 Transaction 화면 변경은 제외

##### 4.2 SVT Synchrophasor Verification Tool

강한 사실:

- 2025-06-17~07-29 본인 Commit 191건
- WPF·MVVM Prototype 후 WPF 42개 파일·6,528줄 제거, WinForms로 재구축
- PMU·Scenario·History·SQLite·Dapper·ReportViewer·RDLC
- IEEE C37.118-2005/2011 Configuration·Data Frame
- 실패 Packet Binary Field Parsing과 `verifyDepth` 기반 실패 위치 표시
- Wireshark TCP 4712 교차검증 절차

경계:

- WPF와 WinForms를 장기간 함께 운영한 것이 아니라 기술 선택을 전환한 이력
- `PacketSample`의 Sample 시각화와 실제 Packet Parser를 구분
- IEEE 표준 자체를 설계한 것이 아니라 제품 검증 Logic으로 구현

##### 4.3 KSTV6 WebMgr

강한 사실:

- 2026-01-30~07-30 본인 Commit 372건
- 수정·QA 135, 공통화·리팩터링 57, 성능 22건
- Device·Resource 116, Security Log·OpenSearch 121, 취약점·무결성 93, AI 66건
- Engine API, 사용자·권한, 설비, Process, Log, 취약점, 감사·알림, Report, Dashboard
- OpenSearch 원시·정규화 Log, Composite Aggregation, LIKE, 통계
- 알림 경쟁 조건 Fix, Resource 보존 Scheduler, 비동기 Excel·Report
- Dashboard WebSocket·Session·Query 재구성과 병렬 처리

경계:

- 전체 KST 제품·Engine·AI Model을 단독 개발한 것으로 확대하지 않음
- Frontend 공통 경로 178건은 다중 집계이며 전체 Commit 합과 비교하지 않음
- 감사 시점 Dashboard WebSocket 미커밋 변경 제외

##### 4.4 KSTV6 Report Manager

강한 사실:

- 2026-11 조사 기준 저장소 전체 63건 중 개인 58건(비병합 57건)
- 초기 Commit에서 55개 파일·10,885줄 Project 생성
- Jasper 한·영 Template
- 종합·취약점 Report 생성
- OpenSearch 독립 조회 12개 병렬 실행
- DB 설정 기반 Scheduler Job 5개 동적 등록·갱신
- 이력·감사·알림·보존기간·File Lifecycle
- DB 접속 설정 암호화와 운영 환경 분리

경계:

- Jasper·OpenSearch 제품 자체 개발 Claim 제외
- 생성 시간 단축률은 전후 실측치가 없어 수치화하지 않음

##### 4.5 AI 관제 Data Pipeline·Tester

강한 사실:

- 본인 6개 커밋의 전체 Diff 통계 확인
- 최신 커밋 기준 장비별 Generator Module 39개, 현재 작업 Tree 40개
- EventData 원문과 41개 Field NormalizedData를 1:1 부하로 생성
- Kafka 8 Partition–Fluent Bit 8 Process×Worker 1–OpenSearch 구성에서 약 10만 건/초
- 20만 입력에서 약 14.7~14.8만 건/초 처리 상한
- Shard 1·3은 약 10만, Shard 5는 약 9.5만 건/초
- 48시간 장기 Test와 최대 60억 누적 구간 Query
- 작성자 명시 성능 Report·설치 지침

경계:

- `acks=0`, 비동기 Translog는 Throughput 우선 시험 설정
- 모든 Generator가 운영 활성화된 것은 아님
- `일별+100GB` Rollover와 Transform API의 비어 있는 결과는 완료 성과에서 제외
- 특정 단일 Node·HDD 환경의 수치를 일반적 제품 성능으로 확대하지 않음

##### 4.6 SCG MDMS·GASDOT

강한 사실:

- 10개 저장소 본인 Commit 76건(비병합 71건)
- 공식 담당: NiFi 통합 Table, Event 통계 Join Key, CO 예방 Event, PLC Collector 재수집
- `COMM_NUM`→`MTR_NUM` 변경으로 통계 Join의 식별자 안정성 개선
- 현재 CO 조건에 정확히 1시간 전 동일 장비 레코드 검사를 추가
- CNU API의 날짜 범위를 Unix Time으로 변환하고 GMTR·Event 재수집
- MDMS Web 23건·API 20건으로 Details·Procedure·Search·Excel·UI 보완
- Excel은 100행 단위 조회·누적 작성, 최종 Code 기준 10만 건 초과 방어

경계:

- CO 15분 간격 중간값 전체를 검사하지 않으므로 “60분 내내 지속”이라고 쓰지 않음
- 통합 Dashboard 전체 주 개발자가 아니라 공식 유지보수 + 후속 보완
- 초기 Patch의 100만 Row 분할·ZIP은 최종 Code에 남지 않아 Claim 제외

##### 4.7 ONEWAY e-Power Diode

강한 사실:

- 15개 저장소·전체 938개 Commit 이력에서 개인 Code Commit 없음
- GUI–CEM–CEMM–DPE–DTE–Setup Architecture 분석
- 직접 제작·발표한 64장 세미나 자료. 2,661줄·165개 Heading의 참고 분석 Markdown은 개인 작성 여부 미확인
- 구·신 Version, .NET Runtime, DB, Installer, License 환경 구축
- FTP의 TX 파일 배치→RX 파일 확인 자료, OPC DA·APP 시험 방법, OPC UA 전송 오류 기록. DBMS E2E 성공 미확인
- Seminar 자료와 발표

경계:

- Core Code, 암호화 Algorithm, 단방향 Hardware 개발 Claim 제외
- Source 분석·설치·시험·기술 공유 경험으로 사용

#### 5. 이력서에 우선 사용할 정량 근거

| 우선순위 | 근거 | 안전한 사용 방식 |
|---:|---|---|
| 1 | KSTV6 현재 분리 Web 134·API 48·Report 57건(개인 비병합) | 넓은 제품 개발 범위와 독립 Report 자동화 |
| 2 | Pipeline E2E 약 10만 건/초 | Generator 목표가 아닌 Kafka–Fluent Bit–OpenSearch 전 구간 결과로 명시 |
| 3 | 48시간·1억~60억 누적 Query | 특정 환경의 장기 Test로 한정 |
| 4 | SVT 191건·WPF→WinForms 전환 | 기술 선택 수정과 제품 완성 과정 |
| 5 | CXL 211건 | 관리 Console의 Full-stack·Messaging·실시간 기능 |
| 6 | SCG 10개 저장소·76건(비병합 71건) | 다중 Legacy System 유지보수·Data 정합성 |
| 7 | Report Manager 12개 병렬 조회·5개 동적 Job | 비동기 처리·운영 자동화 |
| 8 | ONEWAY 64장 직접 제작 세미나 | 레거시 구조 분석과 기술 공유. 2,661줄 참고 문서는 저작자 미확인 |

피해야 할 수치:

- 커밋 추가·삭제 Line을 생산성으로 환산한 수치
- 40개 Generator가 모두 운영 적용됐다는 수치
- 성능 개선율처럼 Before·After 측정이 없는 비율
- SCG Event 감소율·통계 복구 Row처럼 결과 자료가 없는 수치
- ONEWAY Code 기여율

#### 6. 지원 직무별 꺼내 쓸 프로젝트 조합

##### Backend·Platform

1. KSTV6 WebMgr·Report Manager
2. CXL Orchestrator
3. Data Pipeline 성능 시험
4. SCG Data 정합성 유지보수

강조 Keyword:

- Spring Boot, REST API, MyBatis, PostgreSQL·MariaDB·Oracle
- OpenSearch, Kafka, WebSocket·SSE, Scheduler
- 비동기 처리, 동시성, 통계·보고서, 운영 자동화

##### Data·Search·Performance

1. Data Pipeline·Tester
2. KST OpenSearch
3. KST Report Manager
4. SCG NiFi

강조 Keyword:

- 부하 생성, 구간별 TPS, Partition·Process·Shard
- Segment·Merge·429 분석
- Composite Aggregation, 병렬 조회
- 장기 Test·관측·재현 문서

##### 산업 Protocol·Security Product

1. SVT
2. ONEWAY
3. KST 취약점·SYSLOG
4. CXL Orchestrator

강조 Keyword:

- IEEE C37.118, Binary Packet, Wireshark
- OPC UA·DA, FTP·DBMS, 단방향 전송
- 보안 점검 Script, SYSLOG Parsing
- Host·Memory 원격 제어와 실시간 상태

##### 운영·유지보수

1. SCG
2. KSTV6
3. CXL
4. ONEWAY

강조 Keyword:

- AS-IS/TO-BE 재현
- Identifier·State·Time Window 정합성
- 개발·운영 환경 분리
- 감사·알림·보존·Rollback·설치 문서

#### 7. 면접에서 설명하기 좋은 문제 해결 Chain

##### Chain A — Data Pipeline 10만 건/초

1. 2만 건/초 이상에서 Kafka→Fluent Bit 병목 관찰
2. Worker 증가보다 Process 증가가 유효함을 실험
3. Partition과 Fluent Bit Process를 1:1에 가깝게 조정
4. 4×6 → 5×6 → 6×4 → 6×1 → 7×1 → 8×1로 반복
5. Kafka·Fluent Bit·OpenSearch 전 구간 약 10만 건/초 확인
6. 20만 입력에서 약 14.8만 건/초 상한도 기록
7. 장기 부하의 429를 Segment·Merge·Write Queue까지 추적

##### Chain B — SCG Event 통계 누락

1. 통계 Join이 `COMM_NUM`을 사용
2. 통신번호는 변경될 수 있어 과거 Event가 Master와 단절
3. 안정적인 `MTR_NUM`으로 Join Key 변경
4. 수정 전·후, 통신번호 변경, Event Type 변경 Data를 구성
5. 예상 Count 증가·감소로 정합성 검증

##### Chain C — KST 동적 Report Scheduler

1. 고정 Schedule로는 고객별 주기·활성 상태 변경 대응이 어려움
2. DB의 Report 설정을 읽어 Job 5종을 동적으로 등록
3. 기존 Job과 신규 설정을 비교해 추가·변경·삭제
4. 종합·취약점 Report 생성과 이력·감사·알림·보존기간 연결
5. Runtime Fix를 반복해 운영 안정화

##### Chain D — SVT UI 기술 전환

1. WPF·MVVM으로 Prototype 구현
2. 제품 요구·개발 속도·기존 Component 적합성 재평가
3. WPF 42개 파일을 제거하고 WinForms로 재구축
4. PMU·Scenario·History·Protocol·Report 흐름을 다시 완성
5. 실패 Packet를 Binary Field 단위로 진단하는 UI까지 확장

##### Chain E — CXL Host 설정 변경

1. Host 설정 전체 저장 시 불필요한 제어와 상태 불일치 위험
2. 실제 변경된 Field만 반영하는 구조로 개선
3. Demotion Enable·Disable을 별도 업무 동작으로 분리
4. Group 변경과 중복 메시지를 줄이고 Control Queue로 전달
5. MQ 응답을 WebSocket으로 운영 화면에 반영

#### 8. 아직 추가 확보하면 경력 품질이 크게 좋아지는 정보

##### 모든 프로젝트 공통

- 실제 고객·사용자 수 또는 설치 Site 수
- 배포·운영 반영 날짜와 본인 역할
- 장애·문의·결함의 Before/After
- Code Review·설계 Review·협업 인원
- Test 자동화·Coverage·PASS Case 수

##### CXL

- 관리 Host·CXL Memory·동시 WebSocket Session 수
- Script 실행 성공률과 평균 응답 시간
- 운영 배포 Version

##### SVT

- 지원 PMU·PDC 수
- 검증 Packet 수·Frame Type 수
- 보고서 생성 건수와 사용자 Feedback

##### KSTV6

- OpenSearch Index·일 처리량
- Dashboard 병렬화 전후 응답 시간
- Report 생성 시간과 파일 크기
- 알림 경쟁 조건의 재현 빈도·해결 후 결과
- 취약점 Script의 실제 적용 장비 수

##### Data Pipeline

- 시험 Server CPU·RAM·Disk 상세 사양
- 10만 건/초 유지 시간과 정확한 누적 입력
- Kafka Input 대비 OpenSearch 최종 Count의 유실률
- SSD 재시험 결과

##### SCG

- NiFi 운영 반영 후 누락·중복 건수
- `MTR_NUM` 변경으로 복구된 통계 Row
- CNU 재수집 성공 건수
- 예방 Event 변경 전후 건수
- Excel 10만 건 실제 생성 시간

##### ONEWAY

- Protocol별 Test Case·PASS/FAIL
- File 크기·DB Row·OPC Tag 수
- Seminar 일자·참석자·후속 활용

#### 9. 원문 상세 문서 연결

- [CXL ENABLER Orchestrator](../fornet/project-cxl.md#evidence)
- [SVT Synchrophasor Verification Tool](../fornet/project-svt.md#evidence)
- [KSTV6 WebMgr·Report Manager·취약점·AI SYSLOG](../fornet/project-kstv6.md#evidence)
- [AI 관제 Data Pipeline·부하 Generator](../fornet/project-kstv6.md#pipeline)
- [ONEWAY e-Power Diode](../fornet/project-oneway.md#evidence)
- [ONEWAY 사람인·Figma 제작 소재](../fornet/project-oneway.md#materials)
- [SCG MDMS·GASDOT](../fornet/project-scg.md#evidence)

#### 2026-11-21 KSTV6 근거 갱신

- 위의 `KSTV6 372·24건`, `Tester 6건`, 프로젝트 합계 `947건`은 **이전 조사 시점의 역사적 스냅샷**이다. 현재 분리 저장소 23개를 다시 조사해 개인 비병합 커밋을 `web-manager-v2` 134건, `rest-api-server-v3` 48건, `report-manager` 57건, 테스터 16건으로 확인했다. 통합·분리 저장소 중복을 제거하지 못해 총합에 가산하지 않는다. [변경별 상세 근거](../fornet/project-kstv6.md#follow-up) · [전수 목록](../fornet/project-kstv6.md#git).
- CC 인증 문서는 본인이 작성하지 않았고 참고했다. 요구사항을 인증·인가·감사 코드에 반영한 개발은 개인 변경으로 확인된다. Meta 02~05(파이프라인 성능, AI 파싱규칙 검증, 85장 화면설계, 기성검수)는 사용자 확인을 받은 직접 수행/작성 영역이다. 다른 세션의 사람인·Figma 제작은 [별도 원고](../fornet/project-kstv6.md#materials)를 사용한다.

#### 2026-11-21 SCG 근거 갱신

- 과거 SCG 75건은 2026-01까지의 조사 스냅샷이다. `07. scg` 27개 Git 저장소 재조사 결과 10개 저장소 개인 76건(비병합 71건)이며 2026-11-09 대시보드 알람 기준 표시 UI 1건이 추가됐다. 핵심 개발은 2025-11~2026-01이고 11월 후속 커밋을 연속 투입 기간으로 합치지 않는다. [추가 전수조사](../fornet/project-scg.md#follow-up) · [커밋 목록](../fornet/project-scg.md#git) · [사람인·Figma 원고](../fornet/project-scg.md#materials).
- CNU 재수집은 Collector 내부 DB 설정·Mapper 재구성과 시험 성공의 근거가 있으나 외부 API의 간헐적 timeout도 기록돼 있다. CO 이벤트는 현재·정확히 1시간 전 두 시점 비교이며 연속 1시간 유지 판정이 아니다. `03. scg - 개발 및 유지보수`는 사용자 확인을 받은 직접 작업 범위이고 외부 요청서·참고 퍼블리싱 전체를 개인 저작물로 계산하지 않는다.

#### 2026-11-21 IDPP k3s 근거 추가

- [상세 근거 DB](../fornet/project-idpp.md#evidence) · [사람인·Figma 제작 원고](../fornet/project-idpp.md#materials) · [397건 Git 목록](../fornet/project-idpp.md#git). 사용자가 직접 작성했다고 확인한 2025년 초기 UI·ERD·총괄시험계획 HWP, 기능개선 PPTX와 2026년 k3s 문서를 별도 시기로 조사했다. k3s 저장소는 개인 Git 397건(2026-10-13~11-10)이고 IDPP 앱 기능 개발은 본인 기여에서 제외한다.
- 폐쇄망 설치·GitOps·Local PV/Longhorn·VM 설치/장애 분석이 주력 근거다. 발표자료의 10만 Tag/초 및 운영 20대는 목표/계획이며, 시험 VM의 1만 건/초는 Kafka 디스크 장애 조건이다. 운영 전면 성능 달성으로 전환하지 않는다. 기존 947건은 IDPP 조사 전의 역사적 스냅샷으로 유지하고 단순 가산한 총합을 만들지 않는다.


<a id="depth-review"></a>

## 프로젝트별 근거 깊이 점검

### 프로젝트별 이직 근거 DB 깊이 점검

> 2026-11-21 문서 점검. 이 표는 이력서의 한 줄 요약을 뜻하지 않는다. 상세 문서에 역할·문제·구현/수행·검증·결과/한계가 있는지 확인하고, 부족한 증거를 표시한다. 상세 문서의 길이만으로 품질을 판정하지 않는다.

배포 패키지·기성검수 원본·저작 메타데이터의 재대조 결과는 [근거 보강 기록](#evidence-review)에 추가했다.

| 프로젝트 | 상세 근거의 현재 상태 | 남겨 둔 증거 경계·보완점 |
|---|---|---|
| [CXL](../fornet/project-cxl.md#evidence) | 제품 맥락, 기능별 구현, 3회 교차 조사, 코드/커밋, 본인 기여·추가 정량 정보가 상세히 분리돼 있음 | 운영·납품 수치와 사용자 효과는 근거가 없는 만큼 추후 확인. [이직 소재](../fornet/project-cxl.md#materials)와 상세 근거를 함께 사용 |
| [SVT](../fornet/project-svt.md#evidence) | 프로토콜/패킷·PMU·Scenario·진단·Report의 코드 체인과 전수 커밋, 작성자 경계 기록 | 현장 적용 규모·정량 효과는 추가 확인. [이직 소재](../fornet/project-svt.md#materials)만 읽으면 기술적 깊이가 빠짐 |
| [KSTV5](../fornet/project-kstv5.md#evidence) | 보고서 이식·성능·안정성 체인과 사용자 확인을 받은 취약점 BAT·Python, 패치/설치 문서가 추가돼 있음 | 공개 원고의 정량 표현은 시험 환경으로 한정. v6 근거와 섞지 않음. [이직 소재](../fornet/project-kstv5.md#materials) 참고 |
| [KSTV6](../fornet/project-kstv6.md#evidence) | 인증·감사·SQL·OpenSearch·공통 설계·보고서·테스터의 기존 근거와 [추가 전수조사](../fornet/project-kstv6.md#follow-up), [제작 원고](../fornet/project-kstv6.md#materials) 분리 | 통합/분리 저장소 커밋 중복 합산 금지. CC 문서 작성과 코드 반영 구분. 운영 성과 수치 별도 확보 |
| [SCG](../fornet/project-scg.md#evidence) | NiFi·통계·예방 이벤트·Collector와 [11월 추가 조사](../fornet/project-scg.md#follow-up), 개인 커밋 목록·[제작 원고](../fornet/project-scg.md#materials) 있음 | 재수집 외부 API timeout, CO 두 시점 판정, 외부 요청서의 저작 경계 명시. 운영 전후 효과 수치 추가 확보 |
| [ONEWAY](../fornet/project-oneway.md#evidence) | 직접 개발 0건을 밝히고 64장 세미나·레거시 분석·시험 메모를 상세히 기록 | 개발 성과 대신 분석·설명 능력으로 활용. 발표일·청중·후속 적용 확인 |
| [IDPP](../fornet/project-idpp.md#evidence) | 초기 UI/ERD/시험 설계 문서와 2026년 k3s 설치·GitOps·스토리지·VM 장애를 별도 시기로 깊게 기록; [397건 Git 목록](../fornet/project-idpp.md#git) 및 [제작 원고](../fornet/project-idpp.md#materials) | 응용 앱 개발은 개인 기여에서 제외. 10만 Tag/초·20대는 목표/계획, 시험 VM 관찰과 분리 |

#### 공통 사용법

1. 자기소개서·포트폴리오에는 각 상세 근거에서 **하나의 문제→판단→내 행동→검증→남은 한계**를 골라 쓴다.
2. 사람인 문장에 수치가 있으면 시험 조건과 의미를 상세 근거에서 다시 확인한다. 커밋 수는 추적 범위이며 성과 수치가 아니다.
3. [경력 대시보드](#dashboard)는 입구로, 프로젝트별 상세 문서는 근거 DB로 쓴다. 압축 원고가 상세 근거를 대체하지 않는다.
4. Board·ZIPPOP·SSI의 보조 폴더는 위 주요 프로젝트와 조사 목적·근거 밀도가 다르므로 같은 수준의 전수조사 완료로 표시하지 않는다.

#### 공통 추가 확보 자료

- 실제 운영/납품·검수 시점과 개인 책임 범위가 적힌 문서
- 변경 전후 측정값의 환경·기간·반복 횟수·원자료
- 장애 발생·복구 타임라인, 고객 영향과 재발 여부
- 공개 가능한 화면·구조 도식과 회사 정보 비식별화 범위


<a id="evidence-review"></a>

## 배포·검수·저작 근거 보강

### 이직 근거 DB 보강: 배포·검수·저작 자료 재대조

> 2026-11-21. 기존 근거 문서에서 ‘운영/납품 여부’, ‘직접 작성 여부’, ‘시험 합격 여부’로 남았던 항목을 로컬 원본과 다시 대조했다. **확인된 사실을 각 프로젝트 상세 문서에 추가**했고, 여전히 증거가 없는 성과 수치는 만들지 않았다. 이 기록은 재검수 색인이다.

| 프로젝트 | 이번에 추가 확인한 근거 | 현재 쓸 수 있는 표현 | 아직 확정할 수 없는 것 |
|---|---|---|---|
| [CXL](../fornet/project-cxl.md#evidence) | 2025-07-07 판 `20250707-1` 운영·설치 DOCX와 25항목 설치 묶음이 같은 package 폴더에 있음. DOCX 마지막 수정자도 박종성, 직접 작성은 사용자 확인 | 버전이 붙은 설치 패키지·운영/설치 설명 자료 준비 | 실제 고객 설치, 배포 대수, 인수·검수 결과, 운영 효과 |
| [SVT](../fornet/project-svt.md#evidence) | 2025-10 `Release_1027.zip`에 setup.exe·SVTSetup.msi, V1.0 사용자/설치 DOCX가 함께 있음. 두 DOCX 마지막 수정자는 다른 사람 | 설치 파일 묶음과 사용 절차 자료 존재. 본인 개발은 2025-06~07 `mgr` Git 근거로 한정 | 매뉴얼 직접 작성, 고객 납품·실설치, 검증 PASS 수, 동시 처리 성능 |
| [KSTV5](../fornet/project-kstv5.md#evidence) | 직접 작업 확인을 받은 취약점 스크립트와 `development/docs`의 시험/패치 자료가 기존 상세 근거에 이미 반영됨. 이번 재대조에서 개인 범위의 새 검수 수치는 확보하지 못함 | 보고서·취약점 스크립트 수정과 특정 검증 환경의 시험 결과 | 전면 납품 승인·오탐률·운영 장비 수 |
| [KSTV6](../fornet/project-kstv6.md#evidence) | 직접 작성한 2026-06 준공검수 HWP에 42개 고유 시나리오 ID와 다수 화면/로그 증빙, 개요의 합격 체크가 있음. 검수일자·검수자 등과 일부 결과란은 공란. 옆 XLSX는 시험 결과가 아닌 기능점수·예산표 | 검수용 보고서 작성, 시나리오 증빙 취합·정리 | 고객 최종 승인, 모든 케이스 PASS, 예산 규모를 개인 성과로 환산 |
| [Data Pipeline·Tester](../fornet/project-kstv6.md#pipeline) | 직접 작성한 성능시험 원본과 부하 도구 Git의 정량 기록이 기존 상세 근거에 있음. 이번 배포/검수 자료 조사에서 시험 조건을 넘어서는 운영 처리량 증거는 추가되지 않음 | 시험 환경에서 측정한 처리량·누적량과 병렬 부하 도구 | 운영 상시 처리량, 10만 건/초 유지 기간을 무조건 확대 |
| [SCG](../fornet/project-scg.md#evidence) | 본인 이름 개발 결과서의 **공식 사업 기간 2025-10-02~12-31**과 작성자 표기 확인. 개인 Git의 2026-01·11 후속 변경은 별도 | 공식 문서상 사업 기간과 개인 변경 시기 구분, 담당 표+코드에 맞는 업무 범위 | 2026-11까지 연속 투입, 고객 최종 검수·운영 개선률 |
| [ONEWAY](../fornet/project-oneway.md#evidence) | 64장 세미나 PPTX Office `author=박종성`, 생성 2025-08-19·수정 2025-08-29 | 직접 만든 분석/발표 자료의 저작 및 작업 시점 | 발표 날짜, 청중·후속 활용, 레거시 코드 개발 |
| [IDPP](../fornet/project-idpp.md#evidence) | k3s 문서·Git은 2026-11-10까지의 VM 설치/장애 시험을 뒷받침. 10만 Tag/초는 착수 발표의 목표이며 k3s 개선 문서에도 부하 재시험이 남아 있음 | 폐쇄망 k3s 설계·구현, 시험 VM 검증·장애 분석 | 운영 20대 전면 구축, 10만 Tag/초 실측 달성, 고객 인수 |

#### 수치를 사용할 때의 기준

- 설치 파일이나 보고서 **존재**는 배포·검수 준비의 근거다. 실제 고객 서명·설치 로그·운영 측정값이 없으면 최종 완료를 뜻하지 않는다.
- 한 문서의 ‘합격’ 체크가 비어 있는 날짜·서명·개별 결과를 대신하지 않는다. 특히 KSTV6 HWP의 42개는 서로 다른 **시나리오 ID** 수이며 PASS 수가 아니다.
- 저작자 표기는 사용자 확인과 원본 문서의 작성자/마지막 수정자, Git author를 나눠 본다. SVT 매뉴얼처럼 다른 사람의 수정 이력이 확인되면 본인 작성물로 추가하지 않는다.
- 사업 계약 기간, 개인 Git 변경 기간, 발표자료 파일 생성·수정 시각은 서로 다른 사실이다. 이 셋으로 연속 투입 기간이나 고객 발표일을 추정하지 않는다.

#### 다음에 필요한 외부 증빙

1. 고객/사내의 날짜·검수자·서명이 완성된 인수·검수본 또는 배포 완료 기록
2. 운영 환경의 처리량·지연·유실·가동/복구 시간 원자료와 측정 조건
3. 사용자 본인이 맡은 범위가 명시된 업무 배정·검수 의견, 공개 가능한 수치와 범위

이 자료가 제공되면 프로젝트별 상세 문서에 추가하고, 사람인·Figma 원고의 표현 범위도 함께 갱신한다.
